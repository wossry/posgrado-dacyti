import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle.jsx'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/inicio')
  }

  return (
    <div className="bg-[#e0e5ec] dark:bg-background min-h-screen flex items-center justify-center font-body-md text-on-background transition-colors duration-300">
      {/* Theme Toggle */}
      <div className="absolute top-container-margin right-container-margin z-50">
        <ThemeToggle />
      </div>
      {/* Login Card */}
      <div className="w-full max-w-md mx-container-margin p-card-padding rounded-[20px] bg-[#e0e5ec] dark:bg-background neumorphic-elevated flex flex-col gap-element-gap">
        {/* Logo Area */}
        <div className="flex flex-col items-center justify-center py-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-[#e0e5ec] dark:bg-background neumorphic-elevated flex items-center justify-center mb-4">
            <span
              className="material-symbols-outlined text-headline-lg text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              school
            </span>
          </div>
          <h1 className="font-headline-md text-headline-md font-bold text-on-background">GradAdmin</h1>
          <p className="font-label-md text-label-md font-medium text-on-surface-variant mt-1">Acceso a Postgrado</p>
        </div>
        {/* Form */}
        <form className="flex flex-col gap-element-gap" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-base">
            <label className="font-label-md text-label-md font-medium text-on-background pl-2" htmlFor="username">
              Usuario
            </label>
            <input
              className="w-full h-12 px-4 rounded-xl bg-[#e0e5ec] dark:bg-background text-on-background font-body-md placeholder:text-outline-variant/70 neumorphic-sunken border-none focus:ring-1 focus:ring-primary focus:outline-none transition-shadow"
              id="username"
              placeholder="Ingrese su usuario"
              required
              type="text"
            />
          </div>
          <div className="flex flex-col gap-base">
            <label className="font-label-md text-label-md font-medium text-on-background pl-2" htmlFor="password">
              Contraseña
            </label>
            <div className="relative">
              <input
                className="w-full h-12 px-4 pr-12 rounded-xl bg-[#e0e5ec] dark:bg-background text-on-background font-body-md placeholder:text-outline-variant/70 neumorphic-sunken border-none focus:ring-1 focus:ring-primary focus:outline-none transition-shadow"
                id="password"
                placeholder="••••••••"
                required
                type={showPassword ? 'text' : 'password'}
              />
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                type="button"
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center px-2 mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input className="sr-only peer" type="checkbox" />
              <div className="w-5 h-5 rounded bg-[#e0e5ec] dark:bg-background neumorphic-sunken peer-checked:bg-primary-container flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-[14px] text-on-primary opacity-0 peer-checked:opacity-100 transition-opacity">
                  check
                </span>
              </div>
              <span className="font-label-sm text-label-sm font-semibold text-on-surface-variant">Recordarme</span>
            </label>
            <a className="font-label-sm text-label-sm font-semibold text-primary hover:underline" href="#">
              ¿Olvidó su contraseña?
            </a>
          </div>
          {/* Error Message (sin backend aun, se navega directo a /programas) */}
          <button
            className="mt-4 w-full h-12 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md font-bold primary-glow btn-active transition-all duration-200"
            type="submit"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  )
}