import { Shield, EyeOff, Users, ExternalLink, ChevronRight } from "lucide-react";

// Inline SVG del logo de Telegram (lucide-react no incluye logos de marcas)
const TelegramLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo + nombre */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">
              Anoni<span className="text-blue-600">Voz</span>
            </span>
          </div>

          {/* CTA administrativo */}
          <a
            href="https://anonivoz-dashboard-qiso3sbvx-emilyp131204-8852s-projects.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-150"
          >
            Acceso Administrativo
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      <main className="flex-1">

        {/* ── HERO ── */}
        <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 overflow-hidden">
          {/* Círculos decorativos de fondo */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
            <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-white/5" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              Plataforma de reportes seguros
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Alza tu voz de forma{" "}
              <span className="text-blue-200">segura y anónima</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 leading-relaxed">
              Los estudiantes pueden reportar situaciones de acoso escolar{" "}
              <strong className="text-white font-semibold">sin revelar su identidad</strong>{" "}
              a través de un bot de Telegram. Las autoridades de tu institución
              recibirán el reporte de forma directa y confidencial.
            </p>

            <div className="mt-10 flex items-center justify-center gap-2 text-blue-200 text-sm">
              <TelegramLogo className="w-5 h-5" />
              Funciona directamente desde Telegram — sin apps extra
            </div>
          </div>
        </section>

        {/* ── SELECCIÓN DE INSTITUCIÓN ── */}
        <section className="bg-slate-50 py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">
                Selecciona tu institución
              </h2>
              <p className="text-slate-500 text-lg">
                Elige tu colegio para acceder al canal de reporte correspondiente.
              </p>
            </div>

            {/* Tarjetas de institución */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Tarjeta: U.E. José María Velaz */}
              <a
                href="https://t.me/TuVozSegura_bot?start=170802"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                {/* Ícono de Telegram con color de marca */}
                <div className="w-20 h-20 rounded-2xl bg-[#229ED9] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
                  <TelegramLogo className="w-11 h-11 text-white" />
                </div>

                <div className="text-center">
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1">
                    Unidad Educativa
                  </p>
                  <h3 className="text-xl font-bold text-slate-800 leading-snug">
                    José María Velaz
                  </h3>
                </div>

                <span className="flex items-center gap-2 bg-blue-600 group-hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-colors duration-150">
                  Reportar ahora
                  <ChevronRight className="w-4 h-4" />
                </span>
              </a>

              {/* Tarjeta: U.E. La Dolorosa */}
              <a
                href="https://t.me/TuVozSegura_bot?start=170208"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#229ED9] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
                  <TelegramLogo className="w-11 h-11 text-white" />
                </div>

                <div className="text-center">
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1">
                    Unidad Educativa
                  </p>
                  <h3 className="text-xl font-bold text-slate-800 leading-snug">
                    La Dolorosa
                  </h3>
                </div>

                <span className="flex items-center gap-2 bg-blue-600 group-hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-colors duration-150">
                  Reportar ahora
                  <ChevronRight className="w-4 h-4" />
                </span>
              </a>

            </div>
          </div>
        </section>

        {/* ── CARACTERÍSTICAS ── */}
        <section className="py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">
                ¿Por qué AnoniVoz?
              </h2>
              <p className="text-slate-500 text-lg max-w-xl mx-auto">
                Diseñado para que los estudiantes puedan pedir ayuda sin miedo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

              {/* Característica 1: Anonimato Total */}
              <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm flex-shrink-0">
                  <EyeOff className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">Anonimato Total</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Tu identidad nunca es revelada. Los reportes llegan a las autoridades
                    sin exponer quién los envió.
                  </p>
                </div>
              </div>

              {/* Característica 2: Gestión Directa */}
              <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm flex-shrink-0">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">
                    Gestión Directa con Autoridades
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Cada reporte llega al panel de la institución correspondiente
                    para que las autoridades tomen acción de inmediato.
                  </p>
                </div>
              </div>

              {/* Característica 3: Entorno Seguro */}
              <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm flex-shrink-0">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">Entorno Seguro</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    La plataforma está pensada para proteger a los estudiantes y
                    fomentar una convivencia escolar sana y libre de acoso.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-800 text-slate-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Marca */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-500 p-1 rounded-md">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold text-base tracking-tight">
              Anoni<span className="text-blue-400">Voz</span>
            </span>
          </div>

          {/* Mensaje de apoyo */}
          <p className="text-sm text-center sm:text-right">
            Comprometidos con la{" "}
            <span className="text-blue-400 font-medium">convivencia escolar segura</span>.
            Juntos construimos entornos libres de acoso.
          </p>
        </div>

        <div className="border-t border-slate-700">
          <p className="text-center text-xs text-slate-500 py-4">
            &copy; {new Date().getFullYear()} AnoniVoz. Todos los derechos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}
