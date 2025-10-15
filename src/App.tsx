import { useEffect, useState } from 'react';
import { Ticket, Glasses, Sparkles, Camera, ChevronDown, PartyPopper } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [logoWink, setLogoWink] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Logo wink animation
    const winkInterval = setInterval(() => {
      setLogoWink(true);
      setTimeout(() => setLogoWink(false), 200);
    }, 4000);

    return () => clearInterval(winkInterval);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F2E9] relative overflow-hidden cursor-travieso">
      {/* Enhanced paper texture overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.7' /%3E%3C/svg%3E")`,
      }}></div>

      {/* Vignette lighting effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(46, 105, 48, 0.05) 100%)',
      }}></div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 left-[10%] w-5 h-5 text-[#2E6930]/20 animate-pulse-slow" />
        <Sparkles className="absolute top-40 right-[15%] w-4 h-4 text-[#2E6930]/15 animate-pulse-slower" />
        <Sparkles className="absolute bottom-1/3 left-[20%] w-6 h-6 text-[#2E6930]/10 animate-pulse-slow" />
        <Glasses className="absolute top-1/4 right-[8%] w-7 h-7 text-[#2E6930]/10 animate-float" />
        <Glasses className="absolute bottom-1/4 right-[25%] w-6 h-6 text-[#2E6930]/10 animate-float-delayed" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Animated light rays */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[#2E6930] to-transparent animate-light-ray"></div>
          <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-[#2E6930] to-transparent animate-light-ray-delayed"></div>
        </div>

        <div className={`max-w-5xl mx-auto text-center space-y-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          {/* Logo with animation */}
          <div className="flex justify-center mb-12">
            <div className={`relative group transition-all duration-500 hover:scale-105 ${logoWink ? 'wink' : ''}`}>
              <div className="absolute inset-0 bg-[#2E6930]/20 rounded-full blur-3xl group-hover:blur-4xl transition-all duration-500 animate-pulse-gentle"></div>
              <img
                src="/imagen/WhatsApp Image 2025-10-15 at 23.43.40.jpeg"
                alt="Travieso Club Logo"
                className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-500"
              />
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-8 px-4">
            <h1 className="text-vintage text-4xl md:text-6xl lg:text-7xl leading-tight text-[#2E6930] font-bold drop-shadow-lg">
              Travieso no es la típica fiesta que hacen dos pijos,
              <span className="block text-5xl md:text-7xl lg:text-8xl mt-4 bg-gradient-to-r from-[#2E6930] via-[#4a8f4c] to-[#2E6930] bg-clip-text text-transparent animate-gradient">somos tres.</span>
            </h1>

            <p className="text-vintage text-3xl md:text-4xl lg:text-5xl text-[#2E6930] font-bold mt-8">
              Y por eso sale mejor.
            </p>

            {/* Subtitle */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-[#2E6930]"></div>
              <p className="text-xl md:text-2xl text-[#2E6930] font-bold tracking-wide uppercase">
                El caos más elegante de Valencia
              </p>
              <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-[#2E6930]"></div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-12">
            <a
              href="https://www.fourvenues.com/traviesoclub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#2E6930] text-[#F5F2E9] px-12 py-6 rounded-full text-xl md:text-2xl font-bold transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:-translate-y-2 group relative overflow-hidden border-4 border-[#2E6930] hover:border-[#1a3f1c]"
            >
              <Ticket className="w-7 h-7 group-hover:rotate-12 transition-transform relative z-10" />
              <span className="relative z-10">Compra tus entradas</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-[#2E6930]/60 text-sm font-semibold uppercase tracking-widest">Descubre más</span>
          <ChevronDown className="w-8 h-8 text-[#2E6930] animate-pulse" />
        </div>
      </section>

      {/* Manifiesto Section */}
      <section className="relative py-32 md:py-40 px-6">
        {/* Floating decorative icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Glasses className="absolute top-10 left-[5%] w-8 h-8 text-[#2E6930]/5 animate-bubble" />
          <Glasses className="absolute top-1/3 right-[8%] w-10 h-10 text-[#2E6930]/5 animate-bubble-delayed" />
          <Sparkles className="absolute bottom-20 left-[15%] w-6 h-6 text-[#2E6930]/5 animate-bubble-slow" />
          <Sparkles className="absolute bottom-1/4 right-[12%] w-7 h-7 text-[#2E6930]/5 animate-bubble" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="slide-up bg-white/60 backdrop-blur-xl p-8 sm:p-12 md:p-16 lg:p-20 rounded-[2rem] sm:rounded-[3rem] shadow-3xl border-4 border-[#2E6930]/30 relative overflow-hidden group hover:shadow-4xl transition-all duration-500 hover:scale-[1.02]">
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2E6930]/5 via-transparent to-[#2E6930]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <div className="flex justify-center mb-10">
              <div className="flex items-center gap-3">
                <div className="h-1 w-16 bg-gradient-to-r from-transparent to-[#2E6930] rounded-full"></div>
                <Sparkles className="w-8 h-8 text-[#2E6930]/60 animate-pulse" />
                <div className="h-1 w-16 bg-gradient-to-l from-transparent to-[#2E6930] rounded-full"></div>
              </div>
            </div>

            <h2 className="text-vintage text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-[#2E6930] leading-tight font-bold mb-6 uppercase tracking-wider relative z-10">
              Manifiesto Travieso
            </h2>

            <div className="flex justify-center mb-14">
              <div className="w-24 h-1.5 bg-[#2E6930] rounded-full"></div>
            </div>

            <p className="text-vintage text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-[#2E6930] leading-relaxed font-bold relative z-10 mb-8">
              No nos tomamos la noche demasiado en serio, pero sí sabemos cómo pasarlo bien.
            </p>

            <p className="text-vintage text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center text-[#2E6930]/80 leading-relaxed font-semibold relative z-10">
              Aquí se mezcla el champán con las risas, el estilo con un ambiente travieso
              y la buena gente con las malas intenciones.
            </p>

            {/* Decorative element */}
            <div className="flex justify-center mt-14 gap-6 items-center">
              <div className="w-3 h-3 rounded-full bg-[#2E6930]/40 animate-pulse"></div>
              <img
                src="/imagen/WhatsApp Image 2025-10-15 at 23.43.40.jpeg"
                alt="Cocodrilo"
                className="w-10 h-10 rounded-full object-cover opacity-50 animate-wiggle"
              />
              <div className="w-3 h-3 rounded-full bg-[#2E6930]/40 animate-pulse" style={{animationDelay: '1s'}}></div>
              <img
                src="/imagen/WhatsApp Image 2025-10-15 at 23.43.40.jpeg"
                alt="Cocodrilo"
                className="w-10 h-10 rounded-full object-cover opacity-50 animate-wiggle-delayed"
              />
              <div className="w-3 h-3 rounded-full bg-[#2E6930]/40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="relative py-32 md:py-40 px-6 overflow-hidden">
        {/* Confetti background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[10%] w-3 h-3 bg-[#2E6930]/10 rounded-full animate-confetti"></div>
          <div className="absolute top-20 right-[15%] w-2 h-2 bg-[#2E6930]/10 rounded-full animate-confetti-delayed"></div>
          <div className="absolute bottom-1/3 left-[25%] w-2.5 h-2.5 bg-[#2E6930]/10 rounded-full animate-confetti-slow"></div>
          <div className="absolute top-1/3 right-[20%] w-3 h-3 bg-[#2E6930]/10 rounded-full animate-confetti"></div>
          <div className="absolute bottom-20 right-[30%] w-2 h-2 bg-[#2E6930]/10 rounded-full animate-confetti-delayed"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Warning badge */}
          <div className="slide-up flex justify-center mb-6">
            <div className="inline-flex items-center gap-3 bg-[#2E6930] text-[#F5F2E9] px-8 py-4 rounded-full text-lg md:text-xl font-bold shadow-2xl animate-pulse-gentle border-4 border-[#1a3f1c]">
              <span>Si vas a portarte bien… este no es tu sitio</span>
            </div>
          </div>

          <div className="slide-up space-y-10">
            <p className="text-vintage text-3xl md:text-4xl lg:text-5xl text-[#2E6930] leading-tight font-bold px-4 drop-shadow-lg">
              No somos un club exclusivo, pero tampoco entra cualquiera.
            </p>

            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#2E6930] to-transparent rounded-full"></div>
            </div>

            <p className="text-vintage text-2xl md:text-3xl lg:text-4xl text-[#2E6930]/90 leading-relaxed italic font-bold">
              Solo los que saben que portarse bien… aburre.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <a
              href="https://www.fourvenues.com/traviesoclub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#2E6930] text-[#F5F2E9] px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:shadow-3xl hover:scale-110 hover:-translate-y-2 w-full sm:w-auto justify-center group relative overflow-hidden border-4 border-[#2E6930] hover:border-[#1a3f1c]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <Ticket className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">Comprar entradas</span>
            </a>

            <a
              href="https://www.instagram.com/traviesoclub_?igsh=M28wYzBvYTZmb2Rx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white text-[#2E6930] px-10 py-5 rounded-full text-xl font-bold border-4 border-[#2E6930] transition-all duration-300 hover:shadow-3xl hover:scale-110 hover:-translate-y-2 w-full sm:w-auto justify-center group relative overflow-hidden hover:bg-[#2E6930] hover:text-[#F5F2E9]"
            >
              <span className="absolute inset-0 bg-[#2E6930] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Camera className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">Síguenos en Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 bg-[#2E6930]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#F5F2E9]/30 to-transparent w-full max-w-md mx-auto"></div>
          <p className="text-[#F5F2E9] text-base md:text-lg font-bold">
            © 2025 Travieso Club®
          </p>
          <p className="text-[#F5F2E9]/80 text-sm md:text-base font-medium italic">
            Para los que saben que portarse bien... aburre.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
