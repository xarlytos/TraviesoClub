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
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl border-2 sm:border-4 border-[#2E6930]/30 group hover:scale-110 transition-all duration-300">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E6930] font-mono">
            {value.toString().padStart(2, '0')}
          </span>
          {/* Flip animation effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2E6930]/10 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        {/* Floating sparkles around numbers */}
        <Sparkles className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 text-[#2E6930]/40 animate-pulse-slow" />
        <Sparkles className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 text-[#2E6930]/30 animate-pulse-slower" />
      </div>
      <span className="text-xs sm:text-sm md:text-base font-bold text-[#2E6930] mt-1 sm:mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="relative py-8 px-6">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-5 left-[5%] w-2 h-2 bg-[#2E6930]/20 rounded-full animate-bubble"></div>
        <div className="absolute top-10 right-[10%] w-1.5 h-1.5 bg-[#2E6930]/15 rounded-full animate-bubble-delayed"></div>
        <div className="absolute bottom-10 left-[15%] w-2 h-2 bg-[#2E6930]/20 rounded-full animate-bubble-slow"></div>
        <div className="absolute bottom-5 right-[20%] w-1.5 h-1.5 bg-[#2E6930]/15 rounded-full animate-bubble"></div>
        
        {/* Floating sparkles */}
        <Sparkles className="absolute top-1/4 left-[8%] w-4 h-4 text-[#2E6930]/10 animate-float" />
        <Sparkles className="absolute top-1/3 right-[12%] w-3 h-3 text-[#2E6930]/10 animate-float-delayed" />
        <Sparkles className="absolute bottom-1/3 left-[18%] w-5 h-5 text-[#2E6930]/10 animate-float" />
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
            <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-8 flex-wrap">
              <TimeUnit value={timeLeft.days} label="Días" />
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#2E6930] font-bold animate-pulse">:</div>
              <TimeUnit value={timeLeft.hours} label="Horas" />
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#2E6930] font-bold animate-pulse">:</div>
              <TimeUnit value={timeLeft.minutes} label="Min" />
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#2E6930] font-bold animate-pulse">:</div>
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
