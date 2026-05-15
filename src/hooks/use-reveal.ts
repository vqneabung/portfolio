"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hook phát hiện element xuất hiện trong viewport.
 * Trả về `ref` gắn vào element + `isVisible` để kích hoạt animation.
 *
 * @param options.threshold - Tỷ lệ element phải visible (0-1), mặc định 0.15
 * @param options.triggerOnce - Chỉ trigger 1 lần, mặc định true
 */
export function useReveal(options?: {
  threshold?: number;
  triggerOnce?: boolean;
}) {
  const { threshold = 0.15, triggerOnce = true } = options ?? {};
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(element);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return { ref, isVisible };
}