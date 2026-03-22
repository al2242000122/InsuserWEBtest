"use client";

import * as React from "react";
import { motion, PanInfo } from "framer-motion";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number | string;
  name: string;
  avatar: string;
  description: string;
}

interface TestimonialCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[];
  showArrows?: boolean;
  showDots?: boolean;
}

const TestimonialCarousel = React.forwardRef<
  HTMLDivElement,
  TestimonialCarouselProps
>(
  (
    { className, testimonials, showArrows = true, showDots = true, ...props },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [exitX, setExitX] = React.useState<number>(0);

    const goNext = React.useCallback(() => {
      setExitX(-200);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setExitX(0);
      }, 200);
    }, [testimonials.length]);

    const goPrev = React.useCallback(() => {
      setExitX(200);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setExitX(0);
      }, 200);
    }, [testimonials.length]);

    const handleDragEnd = (
      _event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
    ) => {
      if (Math.abs(info.offset.x) > 80) {
        if (info.offset.x > 0) {
          goPrev();
        } else {
          goNext();
        }
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "h-[26rem] w-full flex items-center justify-center",
          className
        )}
        {...props}
      >
        <div className="relative w-80 h-80">
          {testimonials.map((testimonial, index) => {
            const totalCards = testimonials.length;
            const isCurrentCard = index === currentIndex;
            const isPrevCard =
              index === (currentIndex + 1) % totalCards;
            const isNextCard =
              index === (currentIndex + 2) % totalCards;

            if (!isCurrentCard && !isPrevCard && !isNextCard) return null;

            return (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "absolute w-full rounded-2xl cursor-grab active:cursor-grabbing",
                  "shadow-xl border",
                )}
                style={{
                  zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1,
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-color)",
                  minHeight: "260px",
                }}
                drag={isCurrentCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={isCurrentCard ? handleDragEnd : undefined}
                initial={{
                  scale: 0.95,
                  opacity: 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4,
                }}
                animate={{
                  scale: isCurrentCard ? 1 : 0.95,
                  opacity: isCurrentCard ? 1 : isPrevCard ? 0.6 : 0.3,
                  x: isCurrentCard ? exitX : 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <div className="p-6 pt-8 flex flex-col items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl"
                    style={{
                      background: "linear-gradient(135deg, var(--accent-light), var(--accent-gradient-to))",
                      color: "var(--bg-primary)",
                    }}
                  >
                    {testimonial.avatar}
                  </div>
                  <h3 className="text-base font-semibold text-center px-2" style={{ color: "var(--text-primary)" }}>
                    {testimonial.name}
                  </h3>
                  <p className="text-center text-sm leading-relaxed px-2" style={{ color: "var(--text-muted)" }}>
                    {testimonial.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Functional navigation arrows */}
          {showArrows && (
            <div className="absolute -bottom-14 left-0 right-0 flex justify-center gap-6 z-10">
              <button
                onClick={goPrev}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:border-amber-500 cursor-pointer"
                style={{ borderColor: "var(--border-color)", color: "var(--text-muted)", backgroundColor: "var(--bg-card)" }}
                aria-label="Anterior testimonio"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:border-amber-500 cursor-pointer"
                style={{ borderColor: "var(--border-color)", color: "var(--text-muted)", backgroundColor: "var(--bg-card)" }}
                aria-label="Siguiente testimonio"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          )}

          {/* Clickable dot indicators */}
          {showDots && (
            <div className="absolute -bottom-24 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setExitX(0);
                  }}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                    index === currentIndex
                      ? "bg-amber-500 scale-110"
                      : "hover:bg-gray-500"
                  )}
                  style={{
                    backgroundColor: index === currentIndex ? undefined : "var(--text-dimmed)",
                    opacity: index === currentIndex ? 1 : 0.5,
                  }}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  },
);
TestimonialCarousel.displayName = "TestimonialCarousel";

export { TestimonialCarousel, type Testimonial };
