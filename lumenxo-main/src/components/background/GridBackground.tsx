import React, { useEffect, useRef } from 'react';

const GridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let hue = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines
      const gridSize = 50;
      ctx.lineWidth = 0.15;
      
      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.stroke();
      }
      
      // Draw moving glow
      hue = (hue + 0.1) % 360;
      const glowX = (Math.sin(Date.now() * 0.0005) * 0.5 + 0.5) * canvas.width;
      const glowY = (Math.cos(Date.now() * 0.0003) * 0.5 + 0.5) * canvas.height;
      
      const gradient = ctx.createRadialGradient(
        glowX, glowY, 0, 
        glowX, glowY, 400
      );
      
      gradient.addColorStop(0, `hsla(${hue}, 100%, 60%, 0.1)`);
      gradient.addColorStop(0.5, `hsla(${hue}, 100%, 50%, 0.05)`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      animationFrameId = requestAnimationFrame(drawGrid);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-50"
    />
  );
};

export default GridBackground;