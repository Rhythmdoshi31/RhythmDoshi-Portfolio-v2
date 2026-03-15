"use client";
import { useEffect, useState } from "react";

const texts = [
  "Full Stack Engineer",
  "I love creating, crafting and learning",
  "And you'll always gravitate towards what you love",
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-8 overflow-hidden text2 font-medium">
      <div
        className="transition-transform duration-700 ease-out"
        style={{
          transform: `translateY(-${index * 2}rem)`,
        }}
      >
        {texts.map((text, i) => (
          <div key={i} className="h-8 flex items-center">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}