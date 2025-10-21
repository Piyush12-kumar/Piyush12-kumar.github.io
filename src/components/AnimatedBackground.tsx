import { useEffect, useRef } from 'react';

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(0, 170, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
      
      {/* Floating decorative elements */}
      <div className="fixed top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-lg animate-float-diagonal z-0 pointer-events-none" />
      <div className="fixed top-40 right-20 w-16 h-16 border-2 border-accent/20 rounded-full animate-float z-0 pointer-events-none" style={{ animationDelay: '1s' }} />
      <div className="fixed bottom-40 left-20 w-24 h-24 border-2 border-primary/10 rounded-lg animate-rotate z-0 pointer-events-none" />
      <div className="fixed bottom-20 right-40 w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full animate-float z-0 pointer-events-none blur-xl" style={{ animationDelay: '2s' }} />
      <div className="fixed top-1/2 left-1/4 w-32 h-32 border border-accent/10 rounded-full animate-pulse-glow z-0 pointer-events-none" />
    </>
  );
};
