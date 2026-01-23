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
    partners = []
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <section className="w-full isolate min-h-screen overflow-hidden relative">
            <img
                src={backgroundImageUrl}
                alt=""
                className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/40" />

            <header className="z-10 xl:top-4 relative">
                <div className="mx-6">
                    <div className="flex items-center justify-between pt-4">
                        <Link to="/" className="hover:opacity-80 transition-opacity">
                            {logoUrl ? (
                                <div
                                    className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-cover rounded"
                                    style={{ backgroundImage: `url(${logoUrl})` }}
                                />
                            ) : (
                                <span className="text-xs font-medium tracking-[0.3em] text-white/90 uppercase">
                                    Standard
                                </span>
                            )}
                        </Link>

                        <nav className="hidden md:flex items-center gap-2">
                            {navLinks.length > 0 && (
                                <div className="flex items-center gap-1 rounded-full bg-white/5 px-1 py-1 ring-1 ring-white/10 backdrop-blur">
                                    {navLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            to={link.href}
                                            className={`px-3 py-2 text-sm font-medium hover:text-white font-sans transition-colors ${link.isActive ? 'text-white/90' : 'text-white/80'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    {ctaButtonText && (
                                        <Link
                                            to={ctaButtonHref}
                                            className="ml-1 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-medium text-neutral-900 hover:bg-white/90 font-sans transition-colors"
                                        >
                                            {ctaButtonText}
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    )}
                                </div>
                            )}
                        </nav>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur z-50 relative"
                            aria-expanded={mobileMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="h-5 w-5 text-white/90" /> : <Menu className="h-5 w-5 text-white/90" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md md:hidden flex flex-col items-center justify-center space-y-8 animate-fade-in">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-2xl font-medium text-white/90 hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                    {ctaButtonText && (
                        <Link
                            to={ctaButtonHref}
                            onClick={() => setMobileMenuOpen(false)}
                            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-lg font-medium text-neutral-900 hover:bg-white/90"
                        >
                            {ctaButtonText}
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    )}
                </div>
            )}

            <div className="z-10 relative">
                <div className="sm:pt-28 md:pt-32 lg:pt-40 max-w-7xl mx-auto pt-28 px-6 pb-16">
                    <div className="mx-auto max-w-3xl text-center">
                        {(badgeLabel || badgeText) && (
                            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur animate-fade-slide-in-1">
                                {badgeLabel && (
                                    <span className="inline-flex items-center text-xs font-medium text-neutral-900 bg-white/90 rounded-full py-0.5 px-2 font-sans">
                                        {badgeLabel}
                                    </span>
                                )}
                                {badgeText && (
                                    <span className="text-sm font-medium text-white/90 font-sans">
                                        {badgeText}
                                    </span>
                                )}
                            </div>
                        )}

                        <h1 className="sm:text-6xl md:text-7xl lg:text-9xl leading-tight text-5xl text-white tracking-tighter font-serif font-black uppercase animate-fade-slide-in-2">
                            {title}
                            <br className="hidden sm:block" />
                            {titleLine2}
                        </h1>

                        {description && (
                            <p className="sm:text-lg animate-fade-slide-in-3 text-base text-white/80 max-w-2xl mt-6 mx-auto font-sans">
                                {description}
                            </p>
                        )}

                        <div className="flex flex-col sm:flex-row sm:gap-4 mt-10 gap-3 items-center justify-center animate-fade-slide-in-4">
                            {primaryButtonText && (
                                <Link
                                    to={primaryButtonHref}
                                    className="inline-flex items-center gap-2 hover:bg-white/15 text-sm font-medium text-white bg-white/10 ring-white/15 ring-1 rounded-full py-3 px-5 font-sans transition-colors"
                                >
                                    {primaryButtonText}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            )}
                            {secondaryButtonText && (
                                <Link
                                    to={secondaryButtonHref}
                                    className="inline-flex items-center gap-2 rounded-full bg-transparent px-5 py-3 text-sm font-medium text-white/90 hover:text-white font-sans transition-colors"
                                >
                                    {secondaryButtonText}
                                    <Play className="h-4 w-4 fill-current" />
                                </Link>
                            )}
                        </div>
                    </div>

                    {partners && partners.length > 0 && (
                        <div className="mx-auto mt-20 max-w-5xl">
                            {partnersTitle && (
                                <p className="animate-fade-slide-in-1 text-sm text-white/70 text-center font-sans mb-6">
                                    {partnersTitle}
                                </p>
                            )}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 animate-fade-slide-in-2 text-white/70 items-center justify-items-center gap-4">
                                {partners.map((partner, index) => (
                                    <a
                                        key={index}
                                        href={partner.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-cover rounded-full opacity-80 hover:opacity-100 transition-opacity"
                                        style={{ backgroundImage: `url(${partner.logoUrl})` }}
                                    />
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
