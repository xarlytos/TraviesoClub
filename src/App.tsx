import { useEffect, useState } from 'react';
import { Ticket, Glasses, Sparkles, Camera, MessageCircle } from 'lucide-react';
import CountdownTimer from './components/CountdownTimer';
import CursorTrail from './components/CursorTrail';

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
    <CursorTrail>
      <div className="min-h-screen relative overflow-hidden cursor-trail" style={{ backgroundColor: '#121212' }}>
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 hero-section-with-bg">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/imagen/imagen fondo.jpg")',
          }}
        >
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Gradient transition to dark gray at the bottom */}
          <div 
            className="absolute inset-x-0 bottom-0"
            style={{
              height: '60vh',
              background: 'linear-gradient(to bottom, transparent 0%, rgba(18,18,18,0.4) 15%, rgba(18,18,18,0.7) 35%, rgba(18,18,18,0.9) 55%, rgba(18,18,18,0.98) 75%, #121212 90%, #121212 100%)'
            }}
          ></div>
        </div>

      {/* Enhanced paper texture overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.7' /%3E%3C/svg%3E")`,
      }}></div>

      {/* Vignette lighting effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
      }}></div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 left-[10%] w-5 h-5 text-white/30 animate-pulse-slow" />
        <Sparkles className="absolute top-40 right-[15%] w-4 h-4 text-white/25 animate-pulse-slower" />
        <Sparkles className="absolute bottom-1/3 left-[20%] w-6 h-6 text-white/20 animate-pulse-slow" />
        <Glasses className="absolute top-1/4 right-[8%] w-7 h-7 text-white/20 animate-float" />
        <Glasses className="absolute bottom-1/4 right-[25%] w-6 h-6 text-white/20 animate-float-delayed" />
      </div>
        {/* Animated light rays */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-light-ray"></div>
          <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-light-ray-delayed"></div>
        </div>

        <div className={`max-w-6xl mx-auto text-center space-y-8 relative z-10 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          {/* Indiana X Travieso Title */}
          <div className="slide-up mb-6">
            <h1 className="text-vintage text-2xl md:text-3xl lg:text-4xl text-[#4a8f4c] font-bold tracking-widest uppercase drop-shadow-2xl">
              INDIANA X TRAVIESO
            </h1>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-[#4a8f4c]"></div>
              <div className="w-2 h-2 bg-[#4a8f4c] rounded-full animate-pulse drop-shadow-lg"></div>
              <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-[#4a8f4c]"></div>
            </div>
          </div>

          {/* Logo with animation */}
          <div className="flex justify-center mb-8">
            <div className={`relative group transition-all duration-500 hover:scale-105 ${logoWink ? 'wink' : ''}`}>
              <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl group-hover:blur-4xl transition-all duration-500 animate-pulse-gentle"></div>
              <img
                src="/imagen/WhatsApp Image 2025-10-15 at 23.43.40.jpeg"
                alt="Travieso Club Logo"
                className="relative w-40 h-40 md:w-48 md:h-48 object-cover rounded-full drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-500 border-4 border-white/50"
              />
            </div>
          </div>

          {/* Event Info */}
          <div className="slide-up mb-8">
            <h2 className="text-vintage text-2xl md:text-3xl lg:text-4xl text-[#4a8f4c] font-bold mb-4 drop-shadow-2xl">
              Próxima travesura en…
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-[#4a8f4c]"></div>
              <p className="text-lg md:text-xl text-[#4a8f4c] font-bold tracking-wide drop-shadow-lg">
                13.11.25 — Valencia
              </p>
              <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-[#4a8f4c]"></div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="slide-up mb-8">
            <CountdownTimer 
              targetDate="2025-11-13T00:00:00"
            />
          </div>

          {/* CTA Buttons */}
          <div className="slide-up pt-8 flex flex-col gap-4 items-center">
            <a
              href="https://www.fourvenues.com/traviesoclub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#4a8f4c] text-white px-12 py-6 rounded-full text-xl md:text-2xl font-bold transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:-translate-y-2 group relative overflow-hidden border-4 border-[#4a8f4c] hover:border-[#5fb561] button-heartbeat"
            >
              <Ticket className="w-7 h-7 group-hover:rotate-12 transition-transform relative z-10" />
              <span className="relative z-10">Compra tus entradas</span>
            </a>
            
            <a
              href="https://chat.whatsapp.com/FTo29a2956e8b6xW1XiBEX?mode=wwt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white text-[#4a8f4c] px-10 py-5 rounded-full text-lg md:text-xl font-bold transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:-translate-y-2 group relative overflow-hidden border-4 border-white hover:border-[#F5F2E9]"
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform relative z-10" />
              <span className="relative z-10">Únete al grupo de WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Text Section */}
      <section className="relative py-16 md:py-20 px-6" style={{ backgroundColor: '#121212' }}>
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="slide-up space-y-6 px-4">
            <h1 className="text-vintage text-4xl md:text-6xl lg:text-7xl leading-tight text-[#4a8f4c] font-bold drop-shadow-lg">
              Travieso no es la típica fiesta que hacen dos pijos,
              <span className="block text-5xl md:text-7xl lg:text-8xl mt-4 bg-gradient-to-r from-[#4a8f4c] via-[#5fb561] to-[#4a8f4c] bg-clip-text text-transparent animate-gradient">somos tres.</span>
            </h1>

            <p className="text-vintage text-3xl md:text-4xl lg:text-5xl text-[#4a8f4c] font-bold mt-6">
              Y por eso sale mejor.
            </p>

            {/* Subtitle */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-white"></div>
              <p className="text-xl md:text-2xl text-white font-bold tracking-wide uppercase">
                El caos más elegante de Valencia
              </p>
              <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-white"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifiesto Section */}
      <section className="relative py-16 md:py-20 px-6 parallax-bg" style={{ backgroundColor: '#121212' }}>
        {/* Floating decorative icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Glasses className="absolute top-10 left-[5%] w-8 h-8 text-[#4a8f4c]/10 animate-bubble" />
          <Glasses className="absolute top-1/3 right-[8%] w-10 h-10 text-[#4a8f4c]/10 animate-bubble-delayed" />
          <Sparkles className="absolute bottom-20 left-[15%] w-6 h-6 text-[#4a8f4c]/10 animate-bubble-slow" />
          <Sparkles className="absolute bottom-1/4 right-[12%] w-7 h-7 text-[#4a8f4c]/10 animate-bubble" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="slide-up bg-black/90 backdrop-blur-xl p-6 sm:p-8 md:p-12 lg:p-16 rounded-[2rem] sm:rounded-[3rem] shadow-3xl border-4 border-[#4a8f4c]/30 relative overflow-hidden group hover:shadow-4xl transition-all duration-500 hover:scale-[1.02]">
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a8f4c]/5 via-transparent to-[#4a8f4c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4a8f4c]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-3">
                <div className="h-1 w-16 bg-gradient-to-r from-transparent to-[#4a8f4c] rounded-full"></div>
                <Sparkles className="w-8 h-8 text-[#4a8f4c]/80 animate-pulse" />
                <div className="h-1 w-16 bg-gradient-to-l from-transparent to-[#4a8f4c] rounded-full"></div>
              </div>
            </div>

            <h2 className="text-vintage text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-[#4a8f4c] leading-tight font-bold mb-4 uppercase tracking-wider relative z-10">
              ¿Qué es Travieso?
            </h2>

            <div className="flex justify-center mb-8">
              <div className="w-24 h-1.5 bg-[#4a8f4c] rounded-full"></div>
            </div>

            <p className="text-vintage text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-white leading-relaxed font-bold relative z-10 mb-6">
              No nos tomamos la noche demasiado en serio, pero sí sabemos cómo pasarlo bien.
            </p>

            <p className="text-vintage text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center text-white/80 leading-relaxed font-semibold relative z-10">
              Aquí se mezcla el champán con las risas, el estilo con un ambiente travieso
              y la buena gente con las malas intenciones.
            </p>

            {/* Decorative element */}
            <div className="flex justify-center mt-8 gap-6 items-center">
              <div className="w-3 h-3 rounded-full bg-[#4a8f4c]/60 animate-pulse"></div>
              <img
                src="/imagen/WhatsApp Image 2025-10-15 at 23.43.40.jpeg"
                alt="Cocodrilo"
                className="w-10 h-10 rounded-full object-cover opacity-70 animate-wiggle"
              />
              <div className="w-3 h-3 rounded-full bg-[#4a8f4c]/60 animate-pulse" style={{animationDelay: '1s'}}></div>
              <img
                src="/imagen/WhatsApp Image 2025-10-15 at 23.43.40.jpeg"
                alt="Cocodrilo"
                className="w-10 h-10 rounded-full object-cover opacity-70 animate-wiggle-delayed"
              />
              <div className="w-3 h-3 rounded-full bg-[#4a8f4c]/60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="relative py-16 md:py-20 px-6 overflow-hidden" style={{ backgroundColor: '#121212' }}>
        {/* Enhanced confetti background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[10%] w-3 h-3 bg-[#4a8f4c]/10 rounded-full animate-confetti-dense"></div>
          <div className="absolute top-20 right-[15%] w-2 h-2 bg-[#4a8f4c]/10 rounded-full animate-confetti-dense" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-[25%] w-2.5 h-2.5 bg-[#4a8f4c]/10 rounded-full animate-confetti-dense" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-[20%] w-3 h-3 bg-[#4a8f4c]/10 rounded-full animate-confetti-dense" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 right-[30%] w-2 h-2 bg-[#4a8f4c]/10 rounded-full animate-confetti-dense" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-[40%] w-2 h-2 bg-[#4a8f4c]/10 rounded-full animate-confetti-dense" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Enhanced warning badge */}

          <div className="slide-up space-y-10">
            <p className="text-vintage text-3xl md:text-4xl lg:text-5xl text-[#4a8f4c] leading-tight font-bold px-4 drop-shadow-lg">
              No somos un club exclusivo, pero tampoco entra cualquiera.
            </p>

            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#4a8f4c] to-transparent rounded-full"></div>
            </div>

            <p className="text-vintage text-2xl md:text-3xl lg:text-4xl text-white/90 leading-relaxed italic font-bold">
              Solo los que saben que portarse bien… aburre.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <a
              href="https://www.fourvenues.com/traviesoclub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#4a8f4c] text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:shadow-3xl hover:scale-110 hover:-translate-y-2 w-full sm:w-auto justify-center group relative overflow-hidden border-4 border-[#4a8f4c] hover:border-[#5fb561] button-vibrate"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <Ticket className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">Comprar entradas</span>
            </a>

            <a
              href="https://www.instagram.com/traviesoclub_?igsh=M28wYzBvYTZmb2Rx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white text-[#1a1a1a] px-10 py-5 rounded-full text-xl font-bold border-4 border-white transition-all duration-300 hover:shadow-3xl hover:scale-110 hover:-translate-y-2 w-full sm:w-auto justify-center group relative overflow-hidden hover:bg-[#4a8f4c] hover:text-white hover:border-[#4a8f4c] button-instagram"
            >
              <span className="absolute inset-0 bg-[#4a8f4c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Camera className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">Síguenos en Instagram</span>
            </a>
          </div>

          {/* Location Map */}
          <div className="slide-up mt-16">
            <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-4 border-[#4a8f4c]/30 max-w-4xl mx-auto">
              <h3 className="text-vintage text-xl md:text-2xl text-white font-bold text-center mb-6 uppercase tracking-wider">
                 ¿Dónde nos encontramos?
              </h3>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://maps.google.com/maps?q=C%2F+de+Sant+Vicent+M%C3%A0rtir%2C+95%2C+Extramurs%2C+46004+Val%C3%A8ncia%2C+España&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Travieso Club"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-white font-bold text-lg">
                  C/ de Sant Vicent Màrtir, 95
                </p>
                <p className="text-white/80 font-semibold">
                  Extramurs, 46004 València
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 bg-[#4a8f4c]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-full max-w-md mx-auto"></div>
          <p className="text-white text-base md:text-lg font-bold">
            © 2025 Travieso Club®. Para los que saben que portarse bien… aburre. 
          </p>
        </div>
      </footer>
    </div>
    </CursorTrail>
  );
}

export default App;
