import { useState, useEffect } from 'react';
import { PartyPopper, Sparkles } from 'lucide-react';

interface CountdownTimerProps {
  targetDate: string; // Formato: "2025-10-16T00:00:00"
  eventTitle: string;
  eventLocation: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate, eventTitle, eventLocation }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsExpired(false);
      } else {
        setIsExpired(true);
        if (!showConfetti) {
          setShowConfetti(true);
          // Confetti effect duration
          setTimeout(() => setShowConfetti(false), 5000);
        }
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, showConfetti]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border-4 border-[#2E6930]/30 group hover:scale-110 transition-all duration-300">
          <span className="text-3xl md:text-4xl font-bold text-[#2E6930] font-mono">
            {value.toString().padStart(2, '0')}
          </span>
          {/* Flip animation effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2E6930]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        {/* Floating sparkles around numbers */}
        <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-[#2E6930]/40 animate-pulse-slow" />
        <Sparkles className="absolute -bottom-2 -left-2 w-3 h-3 text-[#2E6930]/30 animate-pulse-slower" />
      </div>
      <span className="text-sm md:text-base font-bold text-[#2E6930] mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="relative py-20 px-6 bg-gradient-to-b from-[#F5F2E9] to-[#F0EDE4] overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.7' /%3E%3C/svg%3E")`,
      }}></div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[5%] w-3 h-3 bg-[#2E6930]/20 rounded-full animate-bubble"></div>
        <div className="absolute top-20 right-[10%] w-2 h-2 bg-[#2E6930]/15 rounded-full animate-bubble-delayed"></div>
        <div className="absolute bottom-20 left-[15%] w-2.5 h-2.5 bg-[#2E6930]/20 rounded-full animate-bubble-slow"></div>
        <div className="absolute bottom-10 right-[20%] w-3 h-3 bg-[#2E6930]/15 rounded-full animate-bubble"></div>
        
        {/* Floating glasses */}
        <Sparkles className="absolute top-1/4 left-[8%] w-6 h-6 text-[#2E6930]/10 animate-float" />
        <Sparkles className="absolute top-1/3 right-[12%] w-5 h-5 text-[#2E6930]/10 animate-float-delayed" />
        <Sparkles className="absolute bottom-1/3 left-[18%] w-7 h-7 text-[#2E6930]/10 animate-float" />
      </div>

      {/* Confetti effect when expired */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#2E6930] rounded-full animate-confetti-explosion"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                backgroundColor: ['#2E6930', '#4a8f4c', '#F5F2E9'][Math.floor(Math.random() * 3)]
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <div className="slide-up mb-12">
          <h2 className="text-vintage text-3xl md:text-4xl lg:text-5xl text-[#2E6930] font-bold mb-4">
            {isExpired ? '¡Es hoy! 🍾🔥' : 'Próxima travesura en…'}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-[#2E6930]"></div>
            <p className="text-lg md:text-xl text-[#2E6930] font-bold tracking-wide">
              {eventTitle} — {eventLocation}
            </p>
            <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-[#2E6930]"></div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="slide-up">
          {isExpired ? (
            <div className="flex justify-center items-center gap-4 py-8">
              <PartyPopper className="w-12 h-12 text-[#2E6930] animate-bounce" />
              <span className="text-4xl md:text-6xl font-bold text-[#2E6930] font-mono">
                ¡AHORA!
              </span>
              <PartyPopper className="w-12 h-12 text-[#2E6930] animate-bounce" style={{animationDelay: '0.5s'}} />
            </div>
          ) : (
            <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
              <TimeUnit value={timeLeft.days} label="Días" />
              <div className="text-3xl md:text-4xl text-[#2E6930] font-bold animate-pulse">:</div>
              <TimeUnit value={timeLeft.hours} label="Horas" />
              <div className="text-3xl md:text-4xl text-[#2E6930] font-bold animate-pulse">:</div>
              <TimeUnit value={timeLeft.minutes} label="Min" />
              <div className="text-3xl md:text-4xl text-[#2E6930] font-bold animate-pulse">:</div>
              <TimeUnit value={timeLeft.seconds} label="Seg" />
            </div>
          )}
        </div>

        {/* Call to action when expired */}
        {isExpired && (
          <div className="slide-up mt-12">
            <a
              href="https://www.fourvenues.com/traviesoclub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#2E6930] text-[#F5F2E9] px-12 py-6 rounded-full text-xl md:text-2xl font-bold transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:-translate-y-2 group relative overflow-hidden border-4 border-[#2E6930] hover:border-[#1a3f1c] animate-pulse-gentle"
            >
              <PartyPopper className="w-7 h-7 group-hover:rotate-12 transition-transform relative z-10" />
              <span className="relative z-10">¡Únete a la travesura!</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
