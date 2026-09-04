import crypto from 'node:crypto'
import readline from 'node:readline'
import db from './database.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function pregunta(texto) {
  return new Promise((resolve) => {
    rl.question(texto, resolve)
  })
}

function generarHash(password) {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.scryptSync(password, salt, 64).toString('hex')

  return `${salt}:${hash}`
}

async function crearAdministrador() {
  console.log('\n=== CREAR ADMINISTRADOR ===\n')

  const usuario = (await pregunta('Usuario: ')).trim()
  const password = await pregunta('Contraseña: ')

  if (!usuario || !password) {
    console.log('\n❌ El usuario y la contraseña son obligatorios.')
    rl.close()
    db.close()
    return
  }

  const existente = db
    .prepare('SELECT id FROM administrador WHERE usuario = ?')
    .get(usuario)

  if (existente) {
    console.log('\n❌ Ese usuario ya existe.')
    rl.close()
    db.close()
    return
  }

  const passwordHash = generarHash(password)

  db.prepare(
    'INSERT INTO administrador (usuario, password_hash) VALUES (?, ?)'
  ).run(usuario, passwordHash)

  console.log('\n✅ Administrador creado correctamente.')
  console.log(`Usuario: ${usuario}`)

  rl.close()
  db.close()
}

crearAdministrador()

