'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    servicio: '',
    mensaje: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Contacta</span> con Nosotros
            </h1>
            <p className="text-xl text-gray-300">
              ¿Tienes alguna pregunta? Nuestro equipo está listo para ayudarte
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-cyan-500/5 to-purple-600/5 border border-cyan-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Solicita una Consulta</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 font-semibold">¡Mensaje enviado con éxito! Te contactaremos pronto.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-gray-300 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold text-gray-300 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                    placeholder="+34 600 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-semibold text-gray-300 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label htmlFor="servicio" className="block text-sm font-semibold text-gray-300 mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="pentesting">Pentesting</option>
                    <option value="soc">SOC 24/7</option>
                    <option value="auditoria">Auditoría de Seguridad</option>
                    <option value="vulnerabilidades">Gestión de Vulnerabilidades</option>
                    <option value="formacion">Formación</option>
                    <option value="consultoria">Consultoría</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 text-white resize-none"
                    placeholder="Cuéntanos sobre tu proyecto o necesidades de seguridad..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-cyan-500/5 to-purple-600/5 border border-cyan-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">Información de Contacto</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-400">info@nexsentinel.com</p>
                      <p className="text-gray-400">soporte@nexsentinel.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Teléfono</h3>
                      <p className="text-gray-400">+34 900 123 456</p>
                      <p className="text-gray-400 text-sm">Lun - Vie: 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Oficinas</h3>
                      <p className="text-gray-400">Paseo de la Castellana, 123</p>
                      <p className="text-gray-400">28046 Madrid, España</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Emergencias 24/7</h3>
                      <p className="text-gray-400">+34 900 EMERGENCY</p>
                      <p className="text-gray-400 text-sm">Para incidentes críticos</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-cyan-500/5 to-purple-600/5 border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Enlaces Rápidos</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Descargar Brochure
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Agendar una Reunión
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Centro de Recursos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      Soporte Técnico
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-cyan-500/5 to-purple-600/5 border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-pink-400">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-pink-600 to-cyan-500 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-pink-500/50 transition-all">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
