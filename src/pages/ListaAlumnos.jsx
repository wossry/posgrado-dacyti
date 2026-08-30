import { useState } from 'react'
import { useParams } from 'react-router-dom'
import AppLayout from '../components/AppLayout.jsx'

const NOMBRE_PROGRAMA = {
  DCC: 'Doctorado en Ciencias de la Computación',
  DGTI: 'Doctorado en Gestión de Tecnologías de Información',
  MCCR: 'Maestría en Ciencias de la Computación (Redes)',
  MATAC: 'Maestría en Administración de Tecnologías Avanzadas de Computación',
  MATI: 'Maestría en Administración de Tecnologías de Información',
}

const ESTUDIANTES = [
  {
    matricula: 'A01234567',
    nombre: 'María Rodríguez Pérez',
    iniciales: 'MR',
    semestre: '3er Semestre',
    completo: true,
  },
  {
    matricula: 'A09876543',
    nombre: 'Juan Gómez Silva',
    iniciales: 'JG',
    semestre: '1er Semestre',
    completo: false,
  },
]

function TarjetaEstudiante({ estudiante }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="neumorphic-elevated rounded-xl bg-[#e0e5ec] overflow-hidden transition-all duration-300 border border-outline-variant/5">
      {/* Visible Row Info */}
      <div
        className="p-card-padding flex flex-col md:flex-row justify-between items-center gap-4 cursor-pointer hover:bg-surface-container-low transition-colors"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          <div>
            <p className="text-label-sm font-label-sm font-semibold text-on-surface-variant mb-1">Matrícula</p>
            <p className="text-body-md font-body-md font-medium text-on-surface">{estudiante.matricula}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-label-sm font-label-sm font-semibold text-on-surface-variant mb-1">Nombre Completo</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full neumorphic-elevated flex items-center justify-center bg-[#e0e5ec] text-primary font-bold text-sm">
                {estudiante.iniciales}
              </div>
              <p className="text-body-md font-body-md font-medium text-on-surface">{estudiante.nombre}</p>
            </div>
          </div>
          <div>
            <p className="text-label-sm font-label-sm font-semibold text-on-surface-variant mb-1">Semestre</p>
            <p className="text-body-md font-body-md font-medium text-on-surface">{estudiante.semestre}</p>
          </div>
        </div>
        <button
          className="w-10 h-10 rounded-full neumorphic-elevated flex items-center justify-center text-primary bg-[#e0e5ec] shrink-0"
          type="button"
          aria-label="Expandir/contraer detalle"
        >
          <span
            className={`material-symbols-outlined transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          >
            expand_more
          </span>
        </button>
      </div>
      {/* Expandable Area */}
      <div
        className={`expandable-content bg-surface-container-low/30 border-t border-outline-variant/10 ${
          expanded ? 'expanded' : ''
        }`}
      >
        <div className="p-card-padding">
          {estudiante.completo ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column: Tesis & Formatos */}
              <div className="flex flex-col gap-6">
                <div className="neumorphic-sunken p-4 rounded-lg bg-[#e0e5ec]">
                  <h4 className="text-label-md font-label-md text-on-surface-variant font-bold mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">menu_book</span>
                    Tesis/Anteproyecto
                  </h4>
                  <p className="text-body-md font-body-md text-on-surface">
                    Optimización de Algoritmos Cuánticos para Criptografía Post-Cuántica en Entornos Híbridos...{' '}
                    <span className="text-primary cursor-pointer hover:underline text-sm font-medium">leer más</span>
                  </p>
                </div>
                <div>
                  <h4 className="text-label-md font-label-md text-on-surface-variant font-bold mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">description</span>
                    Formatos
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 rounded-full text-label-sm font-label-sm font-semibold pill-green">
                      F1: Aprobado
                    </span>
                    <span className="px-3 py-1 rounded-full text-label-sm font-label-sm font-semibold pill-green">
                      F2: Entregado
                    </span>
                    <span className="px-3 py-1 rounded-full text-label-sm font-label-sm font-semibold pill-amber">
                      F3: Revisión
                    </span>
                    <span className="px-3 py-1 rounded-full text-label-sm font-label-sm font-semibold pill-grey">
                      F4: Pendiente
                    </span>
                    <span className="px-3 py-1 rounded-full text-label-sm font-label-sm font-semibold pill-grey">
                      F5: N/A
                    </span>
                  </div>
                </div>
              </div>
              {/* Right Column: Evaluaciones */}
              <div>
                <h4 className="text-label-md font-label-md text-on-surface-variant font-bold mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">fact_check</span>
                  Evaluaciones
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="neumorphic-elevated p-3 rounded-lg bg-[#e0e5ec] flex flex-col items-center justify-center text-center">
                    <span className="text-label-sm font-label-sm font-semibold text-on-surface-variant mb-1">EV1</span>
                    <span className="px-2 py-0.5 rounded text-xs pill-green w-full">Completada</span>
                  </div>
                  <div className="neumorphic-elevated p-3 rounded-lg bg-[#e0e5ec] flex flex-col items-center justify-center text-center">
                    <span className="text-label-sm font-label-sm font-semibold text-on-surface-variant mb-1">EV2</span>
                    <span className="px-2 py-0.5 rounded text-xs pill-green w-full">Completada</span>
                  </div>
                  <div className="neumorphic-elevated p-3 rounded-lg bg-[#e0e5ec] flex flex-col items-center justify-center text-center">
                    <span className="text-label-sm font-label-sm font-semibold text-on-surface-variant mb-1">EV3</span>
                    <span className="px-2 py-0.5 rounded text-xs pill-amber w-full">En Curso</span>
                  </div>
                  <div className="neumorphic-sunken p-3 rounded-lg bg-[#e0e5ec] flex flex-col items-center justify-center text-center">
                    <span className="text-label-sm font-label-sm font-semibold text-outline mb-1">EV4</span>
                    <span className="px-2 py-0.5 rounded text-xs pill-grey w-full">Bloqueada</span>
                  </div>
                  <div className="neumorphic-sunken p-3 rounded-lg bg-[#e0e5ec] flex flex-col items-center justify-center text-center">
                    <span className="text-label-sm font-label-sm font-semibold text-outline mb-1">EV5</span>
                    <span className="px-2 py-0.5 rounded text-xs pill-grey w-full">Bloqueada</span>
                  </div>
                  <div className="neumorphic-sunken p-3 rounded-lg bg-[#e0e5ec] flex flex-col items-center justify-center text-center">
                    <span className="text-label-sm font-label-sm font-semibold text-outline mb-1">EV6</span>
                    <span className="px-2 py-0.5 rounded text-xs pill-grey w-full">Bloqueada</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Minimal content for inactive state demo
            <p className="text-body-md text-on-surface-variant italic text-center py-4">
              Información en proceso de registro...
            </p>
          )}
          {estudiante.completo && (
            <div className="mt-6 flex justify-end">
              <button
                className="neumorphic-elevated neumorphic-button bg-[#e0e5ec] text-primary px-4 py-2 rounded-lg text-label-md font-label-md font-medium hover:text-primary-fixed-dim transition-colors"
                type="button"
              >
                Ver Expediente Completo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ListaAlumnos() {
  const { clave } = useParams()
  const claveNormalizada = (clave ?? '').toUpperCase()
  const nombrePrograma = NOMBRE_PROGRAMA[claveNormalizada] ?? claveNormalizada

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto flex flex-col gap-element-gap">
        <header className="mb-8">
          <h1 className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed-dim">
            {claveNormalizada} - {nombrePrograma}
          </h1>
          <p className="text-label-sm font-label-sm font-semibold text-on-surface-variant">
            Vista de Alumnos por Programa
          </p>
        </header>
        {/* Actions Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          {/* Neumorphic Search Bar */}
          <div className="relative w-full md:w-96">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
            <input
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-[#e0e5ec] border-none neumorphic-sunken text-body-md font-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary/50 transition-shadow"
              placeholder="Buscar por matrícula o nombre..."
              type="text"
            />
          </div>
          {/* Primary Action Button */}
          <button className="neumorphic-elevated neumorphic-button bg-primary-container text-on-primary h-12 px-6 rounded-xl flex items-center gap-2 text-label-md font-label-md font-bold transition-all relative overflow-hidden group" type="button">
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="material-symbols-outlined">add</span>
            Nuevo Alumno
          </button>
        </div>
        {/* Main List: Expandable Student Cards */}
        <div className="flex flex-col gap-element-gap">
          {ESTUDIANTES.map((estudiante) => (
            <TarjetaEstudiante key={estudiante.matricula} estudiante={estudiante} />
          ))}
        </div>
      </div>
    </AppLayout>
  )
}