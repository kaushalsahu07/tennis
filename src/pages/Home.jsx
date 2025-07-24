import React from "react";
import "../index.css";

// Importing GSAP for animations
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  // Animate each word up into place with delay
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.set([".hero-title-1", ".hero-title-2", ".hero-title-3"], {
      y: 100,
      opacity: 0,
    })
    .to(".hero-title-1", { 
      duration: 0.2, y: 0, opacity: 1, ease: "expo.out" },
        ">=0.1"
      )
    .to(".hero-title-2",
        { duration: 0.2, y: 0, opacity: 1, ease: "expo.out" },
        ">=0.1"
      )
    .to(".hero-title-3",
        { duration: 0.2, y: 0, opacity: 1, ease: "expo.out" },
        ">=0.1"
      );
  });

  return (
    <div className="main relative">
      <div className="absolute xl:text-[11rem] lg:text-[9rem] md:text-8xl text-[5rem] left-1/2 -translate-x-1/2 top-[3rem] font-primary leading-none flex flex-col uppercase">
        <div className="flex flex-row whitespace-nowrap justify-center items-center">
          <span className="hero-title-1 mr-4">Swing</span>
          <span className="hero-title-2">with</span>
        </div>
        <span className="hero-title-3">Confidence</span>
      </div>
    </div>
  );
}
