import React from "react";
import "../index.css";

// Importing GSAP for animations
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Importing the hero video
import heroVideo from "../assets/hero-v.mp4";

export default function Home() {
  // Animate each word up into place with delay
  useGSAP(() => {

    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.set([".hero-title-1", ".hero-title-2", ".hero-title-3"], {
      y: 100,
      opacity: 0,
    })
      .to(".hero-title-1", {
        duration: 0.1, y: 0, opacity: 1, ease: "power2.out"
      },
        ">=0.1"
      )
      .to(".hero-title-2",
        { duration: 0.1, y: 0, opacity: 1, ease: "power2.out" },
        ">=0.1"
      )
      .to(".hero-title-3",
        { duration: 0.1, y: 0, opacity: 1, ease: "power2.out" },
        ">=0.1"
      );

    const triggerConfig = {
      trigger: ".hero-video",
      start: "top 30%",
      end: "bottom 30%",
      scrub: true,
    };

    gsap.set(".hero-video", { scale: 1, borderRadius: "2rem" });
    gsap.to(".hero-video", {
      scale: 2,
      y: -100,
      ease: "expo.out",
      scrollTrigger: {
        ...triggerConfig,
        pin: true,
        pinSpacing: false,
      }
    });
    gsap.to(".hero-title-main", {
      y: -300,
      ease: "power2.out",
      scrollTrigger: triggerConfig,
    })
  });


  return (
    <div className="relative w-full h-auto overflow-hidden">
      {/* Hero title */}
      <div className="hero-title-main absolute xl:text-[11rem] lg:text-[9rem] md:text-8xl text-[5rem] z-50 left-1/2 -translate-x-1/2 top-[3rem] font-primary leading-none flex items-center flex-col uppercase">
        <div className="flex flex-row whitespace-nowrap justify-center items-center">
          <span className="hero-title-1 mr-4">Swing</span>
          <span className="hero-title-2">with</span>
        </div>
        <span className="hero-title-3">Confidence</span>
      </div>
      {/* Hero Video */}
      <div className="hero-video-wrapper relative top-0 w-full h-[125vh] overflow-hidden">
        <div className="hero-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vw] max-w-[1000px] max-h-[500px] z-10 overflow-hidden">
          <video src={heroVideo} autoPlay loop muted className="w-full h-full object-cover"></video>
        </div>
      </div>
    </div>
  );
}
