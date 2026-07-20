import React, {
  useRef,
  useEffect,
  useMemo,
} from "react";
import {
  motion,
  useTransform,
  useSpring,
  useMotionValue,
  animate,
  useInView,
} from "framer-motion";
import { InstagramIcon } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ActionButton } from "../ui/Button";
import { GALLERY_SOURCES } from "../../data/images";

interface ImageCardProps {
  src: string;
}

const ImageCard = ({ src }: ImageCardProps) => {
  return (
    <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] flex-shrink-0 bg-[#111] transition-transform duration-300 hover:scale-[1.02] cursor-pointer relative will-change-transform backface-hidden preserve-3d">
      <img
        src={src}
        alt="Gallery Asset"
        loading="lazy"
        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
};

function ParallaxGalleryMatrix() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0);
  const isInView = useInView(containerRef, { amount: 0.25, once: false });

  useEffect(() => {
    if (!isInView) {
      progress.set(0);
      return;
    }

    const controls = animate(progress, [0, 1], {
      duration: 14,
      ease: [0.16, 1, 0.3, 1],
      repeat: Infinity,
      repeatType: "reverse",
    });

    return () => controls.stop();
  }, [isInView, progress]);

  const colMedia = useMemo(() => {
    const col1Base = GALLERY_SOURCES.filter((_, i) => i % 4 === 0);
    const col2Base = GALLERY_SOURCES.filter((_, i) => i % 4 === 1);
    const col3Base = GALLERY_SOURCES.filter((_, i) => i % 4 === 2);
    const col4Base = GALLERY_SOURCES.filter((_, i) => i % 4 === 3);

    return {
      col1: [...col1Base, ...col1Base],
      col2: [...col2Base, ...col2Base],
      col3: [...col3Base, ...col3Base],
      col4: [...col4Base, ...col4Base],
    };
  }, []);

  const smoothProgress = useSpring(progress, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  const bannerWidth = useTransform(smoothProgress, [0, 0.15], ["90vw", "100vw"]);
  const bannerHeight = useTransform(smoothProgress, [0, 0.15], ["80vh", "100vh"]);
  const bannerRadius = useTransform(smoothProgress, [0, 0.15], ["48px", "0px"]);
  const bannerBorderWidth = useTransform(smoothProgress, [0, 0.15], ["4px", "0px"]);

  const rotateY = useTransform(smoothProgress, [0.15, 1], [-45, -8]);
  const rotateX = useTransform(smoothProgress, [0.15, 1], [25, 4]);
  const rotateZ = useTransform(smoothProgress, [0.15, 1], [15, 2]);
  const translateZ = useTransform(smoothProgress, [0.15, 1], [-800, 0]);

  const yCol1 = useTransform(smoothProgress, [0.15, 1], ["0%", "-40%"]);
  const yCol2 = useTransform(smoothProgress, [0.15, 1], ["-40%", "10%"]);
  const yCol3 = useTransform(smoothProgress, [0.15, 1], ["0%", "-40%"]);
  const yCol4 = useTransform(smoothProgress, [0.15, 1], ["-30%", "20%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#050505] text-white font-sans selection:bg-white selection:text-black"
    >
      <div className="h-full w-full flex justify-center items-center overflow-hidden">
        <motion.div
            style={{
              width: bannerWidth,
              height: bannerHeight,
              borderRadius: bannerRadius,
              borderWidth: bannerBorderWidth,
              borderColor: "#2c2738",
            }}
            className="relative bg-black overflow-hidden flex items-center justify-center max-w-[1920px] mx-auto will-change-transform backface-hidden preserve-3d"
          >
            <div
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute inset-0 z-20 shadow-[inset_0_100px_150px_-50px_rgba(0,0,0,1),inset_0_-100px_150px_-50px_rgba(0,0,0,1)]" />
              <div className="absolute inset-0 z-20 shadow-[inset_150px_0_150px_-50px_rgba(0,0,0,1),inset_-150px_0_150px_-50px_rgba(0,0,0,1)]" />

              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  rotateZ,
                  z: translateZ,
                  transformStyle: "preserve-3d",
                }}
                className="flex gap-4 md:gap-6 justify-center items-center w-[120vw] h-[150vh] origin-center opacity-100 will-change-transform backface-hidden"
              >
                <motion.div style={{ y: yCol1 }} className="flex flex-col gap-4 md:gap-6 w-[22vw] min-w-[200px] pointer-events-auto">
                  {colMedia.col1.map((src, index) => (
                    <ImageCard key={`col1-${index}`} src={src} />
                  ))}
                </motion.div>

                <motion.div style={{ y: yCol2 }} className="flex flex-col gap-4 md:gap-6 w-[22vw] min-w-[200px] pointer-events-auto">
                  {colMedia.col2.map((src, index) => (
                    <ImageCard key={`col2-${index}`} src={src} />
                  ))}
                </motion.div>

                <motion.div style={{ y: yCol3 }} className="flex flex-col gap-4 md:gap-6 w-[22vw] min-w-[200px] pointer-events-auto">
                  {colMedia.col3.map((src, index) => (
                    <ImageCard key={`col3-${index}`} src={src} />
                  ))}
                </motion.div>

                <motion.div style={{ y: yCol4 }} className="flex flex-col gap-4 md:gap-6 w-[22vw] min-w-[200px] pointer-events-auto">
                  {colMedia.col4.map((src, index) => (
                    <ImageCard key={`col4-${index}`} src={src} />
                  ))}
                </motion.div>
              </motion.div>
            </div>
        </motion.div>
      </div>
    </div>
  );
}

export function InstagramGallery() {
  return (
    <section className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="On Instagram"
          title="Latest From Our Studio"
          description="An immersive stream of our most recent wedding moments — scroll to explore."
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mt-14 relative"
      >
        <ParallaxGalleryMatrix />
      </motion.div>

      <div className="mt-14 text-center">
        <a
          href="https://www.instagram.com/vt_creative_studio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ActionButton variant="solid">
            <InstagramIcon className="w-4 h-4" /> Follow on Instagram
          </ActionButton>
        </a>
      </div>
    </section>
  );
}
