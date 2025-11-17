import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NexSentinel - Ciberseguridad Avanzada',
  description: 'Protegemos tu infraestructura digital con soluciones de ciberseguridad de última generación',
  keywords: 'ciberseguridad, seguridad informática, pentesting, protección de datos, hacking ético',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
