import React from "react";
import { useEffect, useRef } from "react";

export function AnimatedSection({ id, className, children }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`transition-all duration-700 opacity-0 translate-y-10 ${className}`}
    >
      {children}
    </section>
  );
}

// Add CSS for the animation in your CSS file:
// .animate-in {
//   opacity: 1 !important;
//   transform: translateY(0) !important;
// }

export default AnimatedSection;
