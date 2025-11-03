import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "NEX-SENTINEL - Cybersecurity Response Platform",
  description: "Plataforma profesional de ciberseguridad especializada en respuesta ante incidentes de ransomware y seguridad proactiva para empresas.",
  keywords: ["cybersecurity", "ransomware", "pentesting", "incident response", "security"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
