import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Bee({ delay, windowWidth, windowHeight }) {
  const randomY = () => Math.random() * windowHeight;

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      className="w-10 h-10 absolute"
      initial={{ x: -100, y: randomY() }}
      animate={{
        x: windowWidth + 100,
        y: randomY(),
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {/* Bee Body */}
      <ellipse cx="32" cy="32" rx="14" ry="10" fill="#FACC15" stroke="#000" strokeWidth="2" />
      <line x1="24" y1="24" x2="24" y2="40" stroke="#000" strokeWidth="2" />
      <line x1="32" y1="24" x2="32" y2="40" stroke="#000" strokeWidth="2" />
      <line x1="40" y1="24" x2="40" y2="40" stroke="#000" strokeWidth="2" />

      {/* Wings */}
      <ellipse cx="24" cy="18" rx="8" ry="5" fill="#BFDBFE" stroke="#000" strokeWidth="1" />
      <ellipse cx="40" cy="18" rx="8" ry="5" fill="#BFDBFE" stroke="#000" strokeWidth="1" />
    </motion.svg>
  );
}

export default function BeesAnimation() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bees = Array.from({ length: 25 }, (_, i) => i * 0.5); // 5 bees with staggered delays

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {bees.map((delay, i) => (
        <Bee key={i} delay={delay} windowWidth={windowSize.width} windowHeight={windowSize.height} />
      ))}
    </div>
  );
}
