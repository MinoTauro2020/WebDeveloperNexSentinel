"use client";

import { useState } from "react";
import { Shield, Zap, Search, Lock, AlertTriangle, CheckCircle2 } from "lucide-react";

interface ScanResult {
  status: string;
  target?: string;
  timestamp?: string;
  summary?: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
  vulnerabilities?: string[];
  recommendations?: string[];
}

export default function Home() {
  const [scanUrl, setScanUrl] = useState("");
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsScanning(true);
    
    try {
      const response = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: scanUrl }),
      });
      
      const data = await response.json();
      setScanResult(data);
    } catch (error) {
      console.error("Scan error:", error);
    } finally {
      setIsScanning(false);
    }
  };

  const handleIncidentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: formData.get("company"),
          email: formData.get("email"),
          incidentType: formData.get("incidentType"),
          description: formData.get("description"),
          urgency: "high",
        }),
      });
      
      const data = await response.json();
      if (data.success) {
        alert(`Incidente reportado exitosamente. ID: ${data.incident.id}\nTiempo estimado de respuesta: ${data.incident.estimatedResponseTime}`);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error("Contact error:", error);
      alert("Error al enviar el reporte. Por favor intenta nuevamente.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-green-500/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold glow-green">NEX-SENTINEL</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-green-500 transition-colors">Servicios</a>
            <a href="#scan" className="hover:text-green-500 transition-colors">Análisis</a>
            <a href="#contact" className="hover:text-green-500 transition-colors">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative cyberpunk-grid py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-green">
              RESPUESTA ANTE RANSOMWARE 24/7
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Equipo especializado en contención, recuperación y protección contra amenazas avanzadas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
              >
                EMERGENCIA: +1-800-RANSOM
              </a>
              <a
                href="#scan"
                className="border-2 border-green-500 hover:bg-green-500/10 text-white font-bold py-3 px-8 rounded-lg transition-all"
              >
                Análisis Gratuito
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 glow-green">SERVICIOS DE CIBERSEGURIDAD</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-green-500/20 rounded-lg p-6 hover:border-green-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-green-500 mr-3" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scan Section */}
      <section id="scan" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 glow-green">ANÁLISIS DE SEGURIDAD</h2>
            <p className="text-center text-gray-400 mb-8">
              Escanea tu infraestructura en busca de vulnerabilidades y amenazas
            </p>
            
            <form onSubmit={handleScan} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={scanUrl}
                  onChange={(e) => setScanUrl(e.target.value)}
                  placeholder="Ingresa URL o dirección IP..."
                  className="w-full bg-gray-900 border border-green-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isScanning}
                className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isScanning ? "ESCANEANDO..." : "INICIAR ANÁLISIS"}
              </button>
            </form>

            {scanResult && (
              <div className="mt-8 bg-gray-900 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-green-500">Resultados del Análisis</h3>
                <div className="space-y-2 text-sm font-mono">
                  <p><span className="text-gray-400">Estado:</span> {scanResult.status}</p>
                  <p><span className="text-gray-400">Objetivo:</span> {scanResult.target || scanUrl}</p>
                  {scanResult.vulnerabilities && (
                    <div className="mt-4">
                      <p className="text-gray-400 mb-2">Vulnerabilidades detectadas:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {scanResult.vulnerabilities.map((vuln: string, idx: number) => (
                          <li key={idx} className="text-red-400">{vuln}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 glow-red">REPORTAR INCIDENTE</h2>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                <span className="font-bold text-red-500">RESPUESTA CRÍTICA 24/7</span>
              </div>
              <p className="text-gray-300">
                Si estás experimentando un incidente de ransomware o ataque activo, contacta inmediatamente a nuestro equipo de respuesta.
              </p>
            </div>

            <form onSubmit={handleIncidentSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="company"
                  placeholder="Nombre de la empresa"
                  className="bg-gray-900 border border-green-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email de contacto"
                  className="bg-gray-900 border border-green-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
                  required
                />
              </div>
              <select
                name="incidentType"
                className="w-full bg-gray-900 border border-green-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
                required
              >
                <option value="">Tipo de incidente</option>
                <option value="ransomware">Ransomware Activo</option>
                <option value="breach">Brecha de Datos</option>
                <option value="malware">Infección de Malware</option>
                <option value="ddos">Ataque DDoS</option>
                <option value="other">Otro</option>
              </select>
              <textarea
                name="description"
                placeholder="Describe el incidente..."
                rows={4}
                className="w-full bg-gray-900 border border-green-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-all"
              >
                ENVIAR ALERTA
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-black border-t border-green-500/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">CUMPLIMIENTO NORMATIVO</h2>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {["ISO 27001", "GDPR", "NIST CSF", "PCI DSS", "SOC 2"].map((standard) => (
              <div key={standard} className="flex items-center space-x-2">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span className="text-lg font-semibold text-gray-300">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-500/20 py-8 bg-black">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-2">NEX-SENTINEL © 2024 - Todos los derechos reservados</p>
          <p className="text-sm">
            Respuesta de Emergencia: <a href="tel:+18006726766" className="text-green-500 hover:underline">+1-800-RANSOM</a>
            {" | "}
            Email: <a href="mailto:security@nex-sentinel.com" className="text-green-500 hover:underline">security@nex-sentinel.com</a>
          </p>
        </div>
      </footer>
    </main>
  );
}

const services = [
  {
    icon: Shield,
    title: "Respuesta ante Ransomware",
    description: "Equipo especializado 24/7 para contención inmediata y recuperación de datos cifrados.",
  },
  {
    icon: Zap,
    title: "Pentesting & Red Team",
    description: "Simulaciones de ataques avanzadas para identificar vulnerabilidades antes que los atacantes.",
  },
  {
    icon: Lock,
    title: "Blue Team Operations",
    description: "Defensa activa y monitorización continua de tu infraestructura.",
  },
  {
    icon: Search,
    title: "Threat Hunting",
    description: "Búsqueda proactiva de amenazas ocultas en tu red antes de que causen daño.",
  },
  {
    icon: Shield,
    title: "SIEM & XDR Solutions",
    description: "Implementación y gestión de plataformas de seguridad avanzadas.",
  },
  {
    icon: Lock,
    title: "EDR & Endpoint Security",
    description: "Protección avanzada de endpoints con detección y respuesta automatizada.",
  },
];
