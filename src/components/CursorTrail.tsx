import { useEffect, useState } from 'react';

interface CursorTrailProps {
  children: React.ReactNode;
}

export default function CursorTrail({ children }: CursorTrailProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add new trail point
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now()
      };
      
      setTrail(prev => {
        const newTrail = [newPoint, ...prev].slice(0, 10); // Keep only last 10 points
        return newTrail;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative">
      {children}
      
      {/* Cursor trail */}
      <div className="fixed pointer-events-none z-50">
        {trail.map((point, index) => (
          <div
            key={point.id}
            className="absolute w-2 h-2 bg-[#2E6930] rounded-full opacity-30"
            style={{
              left: point.x - 4,
              top: point.y - 4,
              transform: `scale(${1 - index * 0.1})`,
              opacity: 0.3 - index * 0.03,
              transition: 'all 0.1s ease-out'
            }}
          />
        ))}
        
        {/* Main cursor */}
        <div
          className="absolute w-4 h-4 bg-[#2E6930] rounded-full opacity-60 pointer-events-none"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            transition: 'all 0.1s ease-out'
          }}
        />
      </div>
    </div>
  );
}
