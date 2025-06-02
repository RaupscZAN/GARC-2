import React, { useEffect, useRef } from 'react';

const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth / 15), 80);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: [
            'rgba(0, 191, 165, 0.15)', // Primary teal
            'rgba(0, 172, 193, 0.15)', // Secondary blue
            'rgba(255, 184, 0, 0.15)',  // Accent yellow
          ][Math.floor(Math.random() * 3)]
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(0, 191, 165, ${0.05 - distance / 6000})`;
              ctx.lineWidth = 0.3;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });
      
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full -z-10 opacity-40 pointer-events-none"
      />
      <div className="fixed -top-[30%] -right-[20%] w-[60%] h-[60%] bg-glow-primary rounded-full blur-[120px] opacity-[0.05] -z-10" />
      <div className="fixed top-[60%] -left-[30%] w-[70%] h-[70%] bg-glow-secondary rounded-full blur-[120px] opacity-[0.05] -z-10" />
      <div className="fixed -bottom-[20%] right-[20%] w-[50%] h-[50%] bg-glow-accent rounded-full blur-[120px] opacity-[0.05] -z-10" />
    </>
  );
};

export default BackgroundEffects;