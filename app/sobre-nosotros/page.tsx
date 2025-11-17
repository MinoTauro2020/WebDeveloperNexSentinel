import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function SobreNosotros() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sobre <span className="text-gradient">NexSentinel</span>
            </h1>
            <p className="text-xl text-gray-300">
              Líderes en ciberseguridad con más de 15 años de experiencia protegiendo organizaciones en todo el mundo
            </p>
          </div>

          {/* Mission */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Nuestra <span className="text-gradient">Misión</span></h2>
                <p className="text-gray-400 mb-4 text-lg">
                  En NexSentinel, nos dedicamos a proteger la infraestructura digital de nuestros clientes mediante
                  soluciones de ciberseguridad innovadoras y personalizadas.
                </p>
                <p className="text-gray-400 text-lg">
                  Creemos que la seguridad no es solo tecnología, sino un proceso continuo que requiere expertise,
                  dedicación y las herramientas más avanzadas del sector.
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400 mb-2">Excelencia</h3>
                      <p className="text-gray-400">Comprometidos con los más altos estándares de calidad</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-400 mb-2">Innovación</h3>
                      <p className="text-gray-400">Siempre a la vanguardia tecnológica</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-pink-400 mb-2">Confianza</h3>
                      <p className="text-gray-400">Relaciones basadas en transparencia y resultados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="mb-20 py-16 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-gradient mb-2">500+</div>
                <div className="text-gray-400">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gradient mb-2">15+</div>
                <div className="text-gray-400">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gradient mb-2">50+</div>
                <div className="text-gray-400">Expertos Certificados</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-gray-400">Soporte Continuo</div>
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Nuestro <span className="text-gradient">Equipo</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Profesionales certificados y apasionados por la ciberseguridad
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-gradient-to-br from-cyan-500/5 to-purple-600/5 border border-cyan-500/20 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-5xl">👨‍💻</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Dr. Carlos Martínez</h3>
                <p className="text-gray-400 mb-4">CEO & Fundador</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• CISSP, CEH, OSCP</p>
                  <p>• 20+ años de experiencia</p>
                  <p>• Ex-NSA</p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-gradient-to-br from-cyan-500/5 to-purple-600/5 border border-cyan-500/20 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-5xl">👩‍💻</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-2">Dra. Ana García</h3>
                <p className="text-gray-400 mb-4">CTO</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• CISM, CISA, CRISC</p>
                  <p>• 15+ años de experiencia</p>
                  <p>• Experta en SOC</p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-gradient-to-br from-cyan-500/5 to-purple-600/5 border border-cyan-500/20 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all">
                <div className="w-32 h-32 bg-gradient-to-br from-pink-600 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-5xl">👨‍🔬</span>
                </div>
                <h3 className="text-2xl font-bold text-pink-400 mb-2">Miguel Rodríguez</h3>
                <p className="text-gray-400 mb-4">Director de Pentesting</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• OSCP, OSCE, GPEN</p>
                  <p>• 12+ años de experiencia</p>
                  <p>• Bug Bounty Hunter</p>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-gradient">Certificaciones</span> y Reconocimientos
              </h2>
              <p className="text-gray-400 text-lg">
                Avalados por las principales organizaciones del sector
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-cyan-400">ISO 27001</span>
              </div>
              <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-purple-400">SOC 2</span>
              </div>
              <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-pink-400">PCI-DSS</span>
              </div>
              <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-cyan-400">GDPR</span>
              </div>
              <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-purple-400">ENS</span>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-6">¿Quieres formar parte del equipo?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Buscamos constantemente talento apasionado por la ciberseguridad
            </p>
            <Link
              href="/contacto"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Únete a NexSentinel
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
