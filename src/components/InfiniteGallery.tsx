

import type React from 'react';
import { useMemo } from 'react';
import { motion } from 'framer-motion';

type ImageItem = string | {src: string;alt?: string;};

interface InfiniteGalleryProps {
  images: ImageItem[];
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

// A self-contained, dependency-free infinite scrolling gallery.
// Two rows drift in opposite directions for a premium, cinematic feel.
export function InfiniteGallery({
  images,
  speed = 40,
  className = 'h-96 w-full',
  style
}: InfiniteGalleryProps) {
  const normalized = useMemo(
    () => images.map((img) => typeof img === 'string' ? { src: img, alt: '' } : img),
    [images]
  );

  const half = Math.ceil(normalized.length / 2);
  const rowA = normalized.slice(0, half);
  const rowB = normalized.slice(half);

  const Row = ({
    items,
    direction,
    duration




  }: {items: {src: string;alt?: string;}[];direction: 'left' | 'right';duration: number;}) => {
    if (items.length === 0) return null;
    // Duplicate the set so the loop is seamless
    const loop = [...items, ...items];
    return (
      <div className="relative flex-1 overflow-hidden">
        <motion.div
          className="flex gap-4 md:gap-5 h-full"
          initial={{ x: direction === 'left' ? 0 : '-50%' }}
          animate={{ x: direction === 'left' ? '-50%' : 0 }}
          transition={{ duration, ease: 'linear', repeat: Infinity }}>
          
          {loop.map((img, i) =>
          <div
            key={`${img.src}-${i}`}
            className="group relative h-full aspect-[3/4] shrink-0 overflow-hidden">
            
              <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1.4s] ease-luxe group-hover:scale-110" />
            
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500" />
            </div>
          )}
        </motion.div>
      </div>);

  };

  return (
    <div className={className} style={style}>
      <div className="flex flex-col gap-4 md:gap-5 h-full">
        <Row items={rowA} direction="left" duration={speed} />
        <Row items={rowB} direction="right" duration={speed} />
      </div>
    </div>);

}