"use client";
import React, { useEffect, useState, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import "./FadeInComponent.css";

interface FadeInComponentProps {
  children: ReactNode;
}

const FadeInComponent: React.FC<FadeInComponentProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`fade-in-section ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default FadeInComponent;
