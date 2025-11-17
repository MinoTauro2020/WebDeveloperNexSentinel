import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-glow"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
                <span className="text-cyan-400 text-sm font-semibold">🛡️ Seguridad de Última Generación</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Protege tu
                <span className="text-gradient"> Infraestructura Digital</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Soluciones avanzadas de ciberseguridad para empresas que no pueden permitirse vulnerabilidades.
                Prevención, detección y respuesta 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
                >
                  Solicitar Auditoría Gratuita
                </Link>
                <Link
                  href="/servicios"
                  className="px-8 py-4 border-2 border-cyan-500/30 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all"
                >
                  Ver Servicios
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">500+</div>
                  <div className="text-gray-400 text-sm mt-2">Clientes Protegidos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">99.9%</div>
                  <div className="text-gray-400 text-sm mt-2">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">24/7</div>
                  <div className="text-gray-400 text-sm mt-2">Monitoreo</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">15+</div>
                  <div className="text-gray-400 text-sm mt-2">Años de Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 bg-black/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Nuestros <span className="text-gradient">Servicios</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Soluciones integrales de ciberseguridad adaptadas a tus necesidades
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="group p-8 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Pentesting</h3>
                <p className="text-gray-400 mb-4">
                  Simulaciones de ataques controlados para identificar vulnerabilidades antes que los atacantes.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Tests de penetración web
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Análisis de aplicaciones móviles
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Evaluación de infraestructura
                  </li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="group p-8 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">SOC 24/7</h3>
                <p className="text-gray-400 mb-4">
                  Centro de Operaciones de Seguridad monitoreando tu infraestructura las 24 horas.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Monitoreo continuo
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Respuesta a incidentes
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Análisis de amenazas
                  </li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="group p-8 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pink-400">Auditorías</h3>
                <p className="text-gray-400 mb-4">
                  Evaluaciones exhaustivas de seguridad y cumplimiento normativo.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="text-pink-400 mr-2">✓</span>
                    ISO 27001
                  </li>
                  <li className="flex items-center">
                    <span className="text-pink-400 mr-2">✓</span>
                    GDPR / RGPD
                  </li>
                  <li className="flex items-center">
                    <span className="text-pink-400 mr-2">✓</span>
                    PCI-DSS
                  </li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="group p-8 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Gestión de Vulnerabilidades</h3>
                <p className="text-gray-400 mb-4">
                  Identificación y remediación proactiva de vulnerabilidades en tu infraestructura.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Escaneo automatizado
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Priorización de riesgos
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Plan de remediación
                  </li>
                </ul>
              </div>

              {/* Service 5 */}
              <div className="group p-8 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Formación</h3>
                <p className="text-gray-400 mb-4">
                  Capacitación en ciberseguridad para tu equipo y concienciación de empleados.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Security awareness
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Simulaciones de phishing
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Talleres especializados
                  </li>
                </ul>
              </div>

              {/* Service 6 */}
              <div className="group p-8 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pink-400">Consultoría</h3>
                <p className="text-gray-400 mb-4">
                  Asesoramiento estratégico en seguridad y arquitectura de sistemas seguros.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="text-pink-400 mr-2">✓</span>
                    Estrategia de seguridad
                  </li>
                  <li className="flex items-center">
                    <span className="text-pink-400 mr-2">✓</span>
                    Arquitectura segura
                  </li>
                  <li className="flex items-center">
                    <span className="text-pink-400 mr-2">✓</span>
                    Gestión de riesgos
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                ¿Por qué <span className="text-gradient">NexSentinel</span>?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                La confianza de cientos de empresas nos respalda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">Respuesta Rápida</h3>
                  <p className="text-gray-400">Tiempo de respuesta menor a 15 minutos ante incidentes críticos.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Equipo Experto</h3>
                  <p className="text-gray-400">Profesionales certificados con más de 15 años de experiencia.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-pink-400">Tecnología Avanzada</h3>
                  <p className="text-gray-400">Utilizamos las últimas herramientas y metodologías del sector.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">Soluciones Personalizadas</h3>
                  <p className="text-gray-400">Adaptamos nuestros servicios a las necesidades específicas de tu empresa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para proteger tu empresa?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Solicita una auditoría de seguridad gratuita y descubre tus vulnerabilidades antes que los atacantes.
            </p>
            <Link
              href="/contacto"
              className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
            >
              Solicitar Auditoría Gratuita
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
