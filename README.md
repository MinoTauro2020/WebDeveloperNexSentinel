# NEX-SENTINEL - Cybersecurity Response Platform

Plataforma profesional de ciberseguridad especializada en respuesta ante incidentes de ransomware y seguridad proactiva para empresas.

## 🛡️ Características Principales

### Servicios de Ciberseguridad
- **Respuesta ante Ransomware**: Equipo especializado 24/7 para contención y recuperación
- **Pentesting & Red Team**: Simulaciones de ataques avanzadas
- **Blue Team Operations**: Defensa activa y monitorización continua
- **Threat Hunting**: Búsqueda proactiva de amenazas ocultas
- **SIEM & XDR Solutions**: Gestión de plataformas de seguridad avanzadas
- **EDR & Endpoint Security**: Protección avanzada de endpoints

### Funcionalidades Técnicas
- Análisis de seguridad automatizado con IA
- Sistema de tickets de incidentes
- Clasificación de urgencia automática
- Notificaciones en tiempo real
- Dashboard de vulnerabilidades
- Cumplimiento normativo (ISO 27001, GDPR, NIST, PCI DSS)

## 🚀 Arquitectura

### Frontend
- **Next.js 15** con App Router
- **TypeScript** para tipado seguro
- **Tailwind CSS** con diseño cyberpunk
- **shadcn/ui** componentes profesionales
- Diseño responsive y accesible

### Backend
- **API Routes** de Next.js
- **ZAI Web Dev SDK** para análisis con IA
- Validación de datos y sanitización
- Manejo de errores robusto
- Logging estructurado

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── api/
│   │   ├── contact/     # API para incidentes y contacto
│   │   └── scan/        # API para análisis de seguridad
│   ├── components/
│   │   └── ui/          # Componentes shadcn/ui
│   ├── page.tsx         # Página principal
│   └── layout.tsx       # Layout global
├── lib/
│   └── db.ts           # Configuración de base de datos
└── globals.css         # Estilos globales
```

## 🔧 Instalación y Desarrollo

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd nex-sentinel
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   # Configurar ZAI_API_KEY y otras variables
   ```

4. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Acceder a la aplicación**
   ```
   http://localhost:3000
   ```

## 📡 API Endpoints

### Contact API
- `POST /api/contact` - Reportar nuevo incidente
- `GET /api/contact` - Estado de la API

### Security Scan API
- `POST /api/scan` - Ejecutar análisis de seguridad
- `GET /api/scan` - Capacidades del scanner

## 🎨 Diseño y UX

### Tema Cyberpunk
- Paleta de colores: Negro, verde matrix, rojo alerta
- Animaciones sutiles y efectos visuales
- Tipografía monoespaciada para datos técnicos
- Iconos de Lucide React

### Componentes Principales
- Hero section con análisis interactivo
- Tarjetas de servicios con detalles
- Formulario de contacto con clasificación de urgencia
- Dashboard de resultados de scan
- Sección de cumplimiento normativo

## 🔒 Seguridad Implementada

### Frontend
- Validación de formularios
- Sanitización de inputs
- Protección XSS
- Headers de seguridad

### Backend
- Validación de datos
- Rate limiting implícito
- Manejo seguro de errores
- Logging de incidentes

## 📊 Monitorización

### Métricas Disponibles
- Tiempo de respuesta: < 1hr para incidentes críticos
- Tasa de recuperación: 99.9%
- Monitorización 24/7
- Análisis con IA en tiempo real

## 🚀 Despliegue

### CyberPanel
1. Configurar dominio: `nex-sentinel.com`
2. Instalar Node.js versión 18+
3. Configurar variables de entorno
4. Ejecutar `npm run build`
5. Configurar PM2 para producción

### Variables de Entorno
```env
ZAI_API_KEY=tu_api_key
NEXTAUTH_SECRET=tu_secret
DATABASE_URL=tu_database_url
```

## 🤝 Contribuir

1. Fork del proyecto
2. Crear feature branch: `git checkout -b feature/nueva-funcionalidad`
3. Commit: `git commit -m 'Añadir nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Pull Request

## 📝 Licencia

Este proyecto es propiedad de NEX-SENTINEL. Todos los derechos reservados.

## 📞 Contacto de Emergencia

- **Teléfono**: +1-800-RANSOM
- **Email**: security@nex-sentinel.com
- **Respuesta**: 24/7 para incidentes críticos

---

⚠️ **Nota**: Esta plataforma está diseñada para profesionales de la ciberseguridad y empresas que requieren protección avanzada contra amenazas digitales.