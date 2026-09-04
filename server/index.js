import express from 'express'
import cors from 'cors'
import crypto from 'node:crypto'
import db from './database.js'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/api/test', (req, res) => {
  const tablas = db
    .prepare("SELECT name FROM sqlite_master WHERE type='table'")
    .all()

  res.json({
    mensaje: 'Backend conectado correctamente',
    tablas,
  })
})
app.get("/api/programas", (req, res) => {
  try {
    const programas = db.prepare(`
      SELECT
        p.id,
        p.clave,
        p.nombre,
        COUNT(a.id) AS total_alumnos
      FROM programas p
      LEFT JOIN alumnos a
        ON a.programa_id = p.id
      GROUP BY p.id, p.clave, p.nombre
      ORDER BY p.id;
    `).all();

    res.json(programas);
  } catch (error) {
    console.error("Error al obtener programas:", error);
    res.status(500).json({
      error: "Error al obtener los programas"
    });
  }
});
app.post('/api/login', (req, res) => {
  const { usuario, password } = req.body

  if (!usuario || !password) {
    return res.status(400).json({
      mensaje: 'Usuario y contraseña son obligatorios',
    })
  }

  const administrador = db
    .prepare('SELECT id, usuario, password_hash FROM administrador WHERE usuario = ?')
    .get(usuario)

  if (!administrador) {
    return res.status(401).json({
      mensaje: 'Usuario o contraseña incorrectos',
    })
  }

  const [salt, hashGuardado] = administrador.password_hash.split(':')

  const hashCalculado = crypto
    .scryptSync(password, salt, 64)
    .toString('hex')

  const contraseñaCorrecta =
    hashCalculado.length === hashGuardado.length &&
    crypto.timingSafeEqual(
      Buffer.from(hashCalculado),
      Buffer.from(hashGuardado)
    )

  if (!contraseñaCorrecta) {
    return res.status(401).json({
      mensaje: 'Usuario o contraseña incorrectos',
    })
  }

  return res.json({
    mensaje: 'Inicio de sesión correcto',
    usuario: administrador.usuario,
  })
})

app.listen(PORT, () => {
  console.log(`Servidor backend ejecutándose en http://localhost:${PORT}`)
})
