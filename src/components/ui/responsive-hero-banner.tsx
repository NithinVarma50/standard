"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, Play } from 'lucide-react';

interface NavLink {
    label: string;
    href: string;
    isActive?: boolean;
}

interface Partner {
    logoUrl: string;
    href: string;
}

import { SaveButton } from './save-button';

interface ResponsiveHeroBannerProps {
    logoUrl?: string;
    backgroundImageUrl?: string;
    navLinks?: NavLink[];
    ctaButtonText?: string;
    ctaButtonHref?: string;
    badgeText?: string;
    badgeLabel?: string;
    title?: string;
    titleLine2?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    partnersTitle?: string;
    partners?: Partner[];
    showPwaInstall?: boolean;
    onPwaInstall?: () => void;
    stats?: React.ReactNode;
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
    logoUrl,
    backgroundImageUrl,
    navLinks = [],
    ctaButtonText,
    ctaButtonHref = "#",
    badgeLabel,
    badgeText,
    title,
    titleLine2,
    description,
    primaryButtonText,
    primaryButtonHref = "#",
    secondaryButtonText,
    secondaryButtonHref = "#",
    partnersTitle,
    partners = [],
    showPwaInstall = false,
    onPwaInstall,
    stats
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <section className="w-full isolate min-h-screen overflow-hidden relative">
            <img
                src={backgroundImageUrl}
                alt=""
                className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
            />
            {/* Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 pointer-events-none" />

            <header className="z-20 xl:top-6 relative">
                <div className="mx-6 md:mx-10">
                    <div className="flex items-center justify-between pt-6">
                        <Link
                            to="/"
                            className="relative z-50 group hover:scale-105 transition-transform duration-300 cursor-pointer"
                            aria-label="Go to Home"
                        >
                            {logoUrl ? (
                                <div
                                    className="inline-flex items-center justify-center bg-center w-[120px] h-[48px] bg-cover rounded-2xl shadow-lg"
                                    style={{ backgroundImage: `url(${logoUrl})` }}
                                />
                            ) : (
                                <button className="text-sm font-bold tracking-[0.2em] text-white uppercase bg-white/10 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full cursor-pointer hover:bg-white/20 transition-all shadow-lg focus:outline-none">
                                    Standard
                                </button>
                            )}
                        </Link>

                        <nav className="hidden md:flex items-center gap-4">
                            {navLinks.length > 0 && (
                                <div className="flex items-center gap-1 rounded-full bg-black/20 px-2 py-1.5 ring-1 ring-white/10 backdrop-blur-2xl shadow-2xl">
                                    {navLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            to={link.href}
                                            className={`px-5 py-2.5 text-sm font-medium hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 ${link.isActive ? 'text-white bg-white/10 shadow-inner' : 'text-white/80'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    {ctaButtonText && (
                                        <Link
                                            to={ctaButtonHref}
                                            className="ml-2 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg"
                                        >
                                            {ctaButtonText}
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    )}
                                </div>
                            )}

                            {showPwaInstall && (
                                <div className="ml-4">
                                    <SaveButton onSave={onPwaInstall} className="scale-90" />
                                </div>
                            )}
                        </nav>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/20 ring-1 ring-white/20 backdrop-blur-xl hover:bg-white/10 transition-colors z-50 relative shadow-lg"
                            aria-expanded={mobileMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay with Curves */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center space-y-8 animate-fade-in">
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="absolute top-8 right-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-xl hover:bg-white/20 hover:scale-110 transition-all shadow-xl"
                        aria-label="Close menu"
                    >
                        <X className="h-6 w-6 text-white" />
                    </button>

                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-3xl font-bold text-white/90 hover:text-white hover:scale-105 transition-transform"
                        >
                            {link.label}
                        </Link>
                    ))}
                    {ctaButtonText && (
                        <Link
                            to={ctaButtonHref}
                            onClick={() => setMobileMenuOpen(false)}
                            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-xl font-bold text-black hover:scale-105 transition-transform shadow-2xl"
                        >
                            {ctaButtonText}
                            <ArrowRight className="h-6 w-6" />
                        </Link>
                    )}

                    {showPwaInstall && (
                        <div className="mt-8">
                            <SaveButton onSave={async () => {
                                if (onPwaInstall) await onPwaInstall();
                                setMobileMenuOpen(false);
                            }} />
                        </div>
                    )}
                </div>
            )}

            <div className="z-10 relative">
                <div className="sm:pt-32 md:pt-40 lg:pt-48 max-w-7xl mx-auto pt-32 px-6 pb-20">
                    <div className="mx-auto max-w-4xl text-center">
                        {(badgeLabel || badgeText) && (
                            <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-black/30 px-4 py-2 ring-1 ring-white/10 backdrop-blur-xl shadow-xl animate-fade-slide-in-1">
                                {badgeLabel && (
                                    <span className="inline-flex items-center text-xs font-bold tracking-wide text-black bg-white rounded-full py-1 px-3 shadow-md">
                                        {badgeLabel}
                                    </span>
                                )}
                                {badgeText && (
                                    <span className="text-sm font-medium text-white/90 tracking-wide">
                                        {badgeText}
                                    </span>
                                )}
                            </div>
                        )}

                        <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-none text-white tracking-tighter font-serif font-black uppercase animate-fade-slide-in-2 drop-shadow-2xl">
                            {title}
                            <br className="hidden sm:block" />
                            {titleLine2}
                        </h1>

                        {description && (
                            <p className="sm:text-xl animate-fade-slide-in-3 text-lg text-white/80 max-w-2xl mt-8 mx-auto font-medium leading-relaxed drop-shadow-lg font-sans">
                                {description}
                            </p>
                        )}

                        <div className="flex flex-col sm:flex-row sm:gap-6 mt-12 gap-4 items-center justify-center animate-fade-slide-in-4">
                            {primaryButtonText && (
                                <Link
                                    to={primaryButtonHref}
                                    className="inline-flex items-center gap-3 hover:bg-white/20 text-base font-bold text-white bg-white/10 ring-white/20 ring-1 rounded-full py-4 px-8 backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-xl"
                                >
                                    {primaryButtonText}
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            )}
                            {secondaryButtonText && (
                                <Link
                                    to={secondaryButtonHref}
                                    className="inline-flex items-center gap-3 rounded-full bg-transparent px-8 py-4 text-base font-bold text-white hover:text-white/90 hover:bg-white/5 transition-all duration-300"
                                >
                                    {secondaryButtonText}
                                    <Play className="h-5 w-5 fill-current" />
                                </Link>
                            )}
                        </div>

                        {stats && (
                            <div className="mt-12 animate-fade-slide-in-4 flex items-center justify-center gap-8 border-t border-white/10 pt-8 max-w-lg mx-auto">
                                {stats}
                            </div>
                        )}
                    </div>

                    {partners && partners.length > 0 && (
                        <div className="mx-auto mt-24 max-w-6xl">
                            {partnersTitle && (
                                <p className="animate-fade-slide-in-1 text-sm font-medium tracking-widest text-white/60 text-center uppercase mb-8">
                                    {partnersTitle}
                                </p>
                            )}
                            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 animate-fade-slide-in-2">
                                {partners.map((partner, index) => (
                                    <a
                                        key={index}
                                        href={partner.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300"
                                    >
                                        <div
                                            className="w-32 h-10 bg-contain bg-center bg-no-repeat filter brightness-0 invert"
                                            style={{ backgroundImage: `url(${partner.logoUrl})` }}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ResponsiveHeroBanner;
