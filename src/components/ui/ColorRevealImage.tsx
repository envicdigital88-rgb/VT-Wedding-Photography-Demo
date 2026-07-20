import React, { useRef, useState, useCallback } from "react";

interface ColorRevealImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
  wrapperClassName?: string;
  revealRadius?: number;
}

export function ColorRevealImage({
  src,
  alt = "",
  className = "w-full h-full object-cover",
  wrapperClassName = "",
  revealRadius = 140,
  loading,
  ...imgProps
}: ColorRevealImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const updatePosition = useCallback((clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    setPos({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
    setActive(true);
  }, []);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      updatePosition(event.clientX, event.clientY);
    },
    [updatePosition]
  );

  const handleTouchMove = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      const touch = event.touches[0];
      if (!touch) return;
      updatePosition(touch.clientX, touch.clientY);
    },
    [updatePosition]
  );

  const handleLeave = useCallback(() => setActive(false), []);

  const maskStyle: React.CSSProperties = active
    ? {
        WebkitMaskImage: `radial-gradient(circle ${revealRadius}px at ${pos.x}px ${pos.y}px, black 0%, transparent 100%)`,
        maskImage: `radial-gradient(circle ${revealRadius}px at ${pos.x}px ${pos.y}px, black 0%, transparent 100%)`,
      }
    : {
        WebkitMaskImage: "none",
        maskImage: "none",
      };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-[1.75rem] ${wrapperClassName}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      onTouchStart={handleTouchMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleLeave}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`${className} grayscale rounded-[1.5rem]`}
        {...imgProps}
      />
      <img
        src={src}
        alt=""
        aria-hidden
        draggable={false}
        className={`absolute inset-0 ${className} pointer-events-none select-none`}
        style={maskStyle}
      />
    </div>
  );
}
