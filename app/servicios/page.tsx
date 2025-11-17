import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Servicios() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nuestros <span className="text-gradient">Servicios</span>
            </h1>
            <p className="text-xl text-gray-300">
              Soluciones integrales de ciberseguridad diseñadas para proteger tu negocio
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {/* Service 1: Pentesting */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4">
                  <span className="text-cyan-400 text-sm font-semibold">Seguridad Ofensiva</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-cyan-400">Pentesting</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Simulamos ataques reales contra tu infraestructura para identificar vulnerabilidades
                  antes de que lo hagan los atacantes maliciosos.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Tests de penetración en aplicaciones web y móviles</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Evaluación de infraestructura de red</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Ingeniería social y phishing simulado</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Red Team exercises</span>
                  </li>
                </ul>
                <Link
                  href="/contacto"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  Solicitar Pentesting
                </Link>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 rounded-2xl p-8">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Metodología</h3>
                <ol className="space-y-4 text-gray-400">
                  <li className="flex items-start space-x-3">
                    <span className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-cyan-400 font-bold">1</span>
                    <span>Reconocimiento y recopilación de información</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-cyan-400 font-bold">2</span>
                    <span>Análisis de vulnerabilidades</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-cyan-400 font-bold">3</span>
                    <span>Explotación controlada</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-cyan-400 font-bold">4</span>
                    <span>Reporte detallado con recomendaciones</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Service 2: SOC */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-2xl p-8">
                <div className="text-6xl mb-6">🛡️</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Capacidades del SOC</h3>
                <div className="space-y-4 text-gray-400">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>Monitoreo continuo 24/7/365</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>Correlación de eventos SIEM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>Threat Intelligence en tiempo real</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>Respuesta automática a incidentes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>Análisis forense digital</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
                  <span className="text-purple-400 text-sm font-semibold">Seguridad Defensiva</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-purple-400">SOC 24/7</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Nuestro Centro de Operaciones de Seguridad monitorea tu infraestructura las 24 horas del día,
                  detectando y respondiendo a amenazas en tiempo real.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Monitoreo proactivo de amenazas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Análisis de logs y eventos</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Respuesta rápida a incidentes (&lt;15 min)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Informes mensuales ejecutivos</span>
                  </li>
                </ul>
                <Link
                  href="/contacto"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  Activar SOC
                </Link>
              </div>
            </div>

            {/* Service 3: Auditorías */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-4">
                  <span className="text-pink-400 text-sm font-semibold">Cumplimiento Normativo</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-pink-400">Auditorías de Seguridad</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Evaluaciones exhaustivas de tu postura de seguridad y cumplimiento con normativas
                  internacionales y estándares del sector.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2">ISO 27001</h4>
                    <p className="text-sm text-gray-400">Gestión de Seguridad de la Información</p>
                  </div>
                  <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2">GDPR</h4>
                    <p className="text-sm text-gray-400">Protección de Datos Personales</p>
                  </div>
                  <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2">PCI-DSS</h4>
                    <p className="text-sm text-gray-400">Seguridad de Datos de Tarjetas</p>
                  </div>
                  <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2">ENS</h4>
                    <p className="text-sm text-gray-400">Esquema Nacional de Seguridad</p>
                  </div>
                </div>
                <Link
                  href="/contacto"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-pink-600 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all"
                >
                  Solicitar Auditoría
                </Link>
              </div>
              <div className="bg-gradient-to-br from-pink-600/10 to-cyan-500/10 border border-pink-500/20 rounded-2xl p-8">
                <div className="text-6xl mb-6">📋</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Proceso de Auditoría</h3>
                <div className="space-y-6 text-gray-400">
                  <div>
                    <h4 className="text-white font-semibold mb-2">1. Planificación</h4>
                    <p className="text-sm">Definición de alcance y objetivos</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">2. Recopilación</h4>
                    <p className="text-sm">Análisis de documentación y políticas</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">3. Evaluación</h4>
                    <p className="text-sm">Tests técnicos y entrevistas</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">4. Informe</h4>
                    <p className="text-sm">Resultados y plan de acción</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-gradient-to-br from-cyan-500/5 to-purple-600/5 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Gestión de Vulnerabilidades</h3>
                <p className="text-gray-400 mb-6">
                  Identificación y priorización continua de vulnerabilidades con planes de remediación.
                </p>
                <Link href="/contacto" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  Más información →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-purple-600/5 to-pink-600/5 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Formación y Awareness</h3>
                <p className="text-gray-400 mb-6">
                  Capacitación especializada para tu equipo y campañas de concienciación.
                </p>
                <Link href="/contacto" className="text-purple-400 hover:text-purple-300 font-semibold">
                  Más información →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-pink-600/5 to-cyan-500/5 border border-pink-500/20 rounded-2xl p-8 hover:border-pink-500/50 transition-all">
                <div className="text-5xl mb-4">💼</div>
                <h3 className="text-2xl font-bold mb-4 text-pink-400">Consultoría Estratégica</h3>
                <p className="text-gray-400 mb-6">
                  Asesoramiento en estrategia de seguridad y arquitectura de sistemas seguros.
                </p>
                <Link href="/contacto" className="text-pink-400 hover:text-pink-300 font-semibold">
                  Más información →
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <section className="mt-20 text-center bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-6">¿No estás seguro de qué servicio necesitas?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Nuestros expertos pueden ayudarte a evaluar tus necesidades y diseñar una solución personalizada
            </p>
            <Link
              href="/contacto"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
            >
              Hablar con un Experto
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
