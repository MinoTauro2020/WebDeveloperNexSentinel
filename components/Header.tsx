'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">NS</span>
            </div>
            <span className="text-2xl font-bold text-gradient">NexSentinel</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Inicio
            </Link>
            <Link href="/servicios" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Servicios
            </Link>
            <Link href="/sobre-nosotros" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contacto
            </Link>
            <Link
              href="/contacto"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Consulta Gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link href="/" className="block text-gray-300 hover:text-cyan-400 transition-colors">
              Inicio
            </Link>
            <Link href="/servicios" className="block text-gray-300 hover:text-cyan-400 transition-colors">
              Servicios
            </Link>
            <Link href="/sobre-nosotros" className="block text-gray-300 hover:text-cyan-400 transition-colors">
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="block text-gray-300 hover:text-cyan-400 transition-colors">
              Contacto
            </Link>
            <Link
              href="/contacto"
              className="block w-full text-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold"
            >
              Consulta Gratis
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
