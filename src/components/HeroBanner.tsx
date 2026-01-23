"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import wallpaper1 from "@/assets/wallpaper-1.jpg";

interface HeroBannerProps {
  backgroundImageUrl?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  backgroundImageUrl = wallpaper1,
}) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <header className="flex w-full items-center justify-between px-6 py-6 md:px-12 lg:px-24">
          {/* Logo */}
          <span className="text-xs font-medium tracking-[0.3em] text-foreground/90 uppercase">
            Standard
          </span>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <Link
              to="/desktop"
              className="text-xs font-medium tracking-widest text-foreground/70 uppercase transition-colors duration-300 hover:text-foreground"
            >
              Desktop
            </Link>
            <Link
              to="/mobile"
              className="text-xs font-medium tracking-widest text-foreground/70 uppercase transition-colors duration-300 hover:text-foreground"
            >
              Mobile
            </Link>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 md:px-12 lg:px-24">
          <div className="animate-fade-in text-center">
            <h1 className="font-serif text-5xl font-normal tracking-tight text-foreground md:text-7xl lg:text-8xl">
              Wallpapers
            </h1>
            <p className="mt-4 text-sm font-normal tracking-wide text-foreground/60 md:text-base">
              Curated for desktop & mobile
            </p>
          </div>

          {/* CTA Links */}
          <div className="mt-12 flex items-center gap-8 animate-fade-in" style={{ animationDelay: '150ms' }}>
            <Link
              to="/desktop"
              className="group flex items-center gap-2 text-sm font-medium tracking-wide text-foreground/80 transition-colors duration-300 hover:text-foreground"
            >
              Browse Desktop
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              to="/mobile"
              className="group flex items-center gap-2 text-sm font-medium tracking-wide text-foreground/80 transition-colors duration-300 hover:text-foreground"
            >
              Browse Mobile
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="flex flex-col items-center gap-2 text-foreground/40">
            <span className="text-[10px] tracking-widest uppercase">Scroll</span>
            <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
