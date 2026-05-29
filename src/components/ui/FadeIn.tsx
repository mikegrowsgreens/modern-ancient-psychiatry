"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Content is ALWAYS visible. Animation is purely additive —
  // a subtle upward shift that plays once when the element enters the viewport.
  // No hiding, no opacity:0 default. SSR-safe, no-JS-safe.
  return (
    <div
      ref={ref}
      className={className}
      style={
        animate
          ? {
              animation: `fade-in 0.8s ease-out ${delay}ms both`,
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
