import { useEffect, useRef } from "react";

const Bubbles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

  canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let width = canvas.width;
let height = canvas.height;
       
    ctx.scale(dpr, dpr); // Scale drawing context

    const generateBubbleImages = () => {
      const radius = 8 + Math.random() * 5;
      const blur = 15;
      const bubbleCv = document.createElement("canvas");
      const size = (radius * 2) + (blur * 2) + 2;
      bubbleCv.width = bubbleCv.height = size;
      const bubbleCtx = bubbleCv.getContext("2d");

      bubbleCtx.shadowColor = "#ffffff";
      bubbleCtx.shadowBlur = blur;
      bubbleCtx.fillStyle = `hsla(${200 + Math.random() * 50}, 100%, 65%, .2)`;
      bubbleCtx.beginPath();
      bubbleCtx.arc(radius + blur, radius + blur, radius, 0, Math.PI * 2);
      bubbleCtx.fill();

      const img = new Image();
      img.src = bubbleCv.toDataURL();
      return { img, size };
    };

    const bubbles = [];
    for (let i = 0; i < 100; i++) {
      const bubble = generateBubbleImages();
      bubbles.push({
        r: bubble.size / 2,
        v: 0.5 + Math.random() * 1.5,
        x: Math.random() * width,
        y: Math.random() * height,
        img: bubble.img
      });
    }

    let animationFrameId;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const b of bubbles) {
        b.y -= b.v;
        if (b.y + b.r < 0) {
          b.y = height + b.r;
          b.x = Math.random() * width;
        }
        ctx.drawImage(b.img, b.x - b.r, b.y - b.r);
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default Bubbles;
