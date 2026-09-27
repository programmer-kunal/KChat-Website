"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Menu, X, ArrowDownToLine, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-18">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-sm border border-slate-200/60 group-hover:scale-105 transition-transform shrink-0">
            <Image
              src="/logo.png"
              alt="KChat Official Logo"
              width={40}
              height={40}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-xl sm:text-2xl text-navy-900 tracking-tight leading-none group-hover:text-brand-600 transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-wider uppercase mt-0.5">
              Intelligent Chat
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium"
        >
          {siteConfig.navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-2 rounded-xl transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                  active
                    ? "text-brand-600 bg-brand-50 font-semibold"
                    : "text-slate-600 hover:text-navy-900 hover:bg-slate-100/70"
                }`}
              >
                {link.name === "AI" && <Sparkles className="w-3.5 h-3.5 text-brand-500" />}
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href={siteConfig.googlePlayUrl}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 active:bg-brand-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            <ArrowDownToLine className="w-4 h-4" />
            <span>Download</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl text-slate-600 hover:text-navy-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {siteConfig.navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`px-3.5 py-2.5 rounded-xl text-base font-medium flex items-center justify-between ${
                    active
                      ? "text-brand-600 bg-brand-50 font-semibold"
                      : "text-slate-700 hover:text-navy-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.name === "AI" && <Sparkles className="w-4 h-4 text-brand-500" />}
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <Link
              href={siteConfig.googlePlayUrl}
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-navy-900 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-600 transition-colors"
            >
              <ArrowDownToLine className="w-5 h-5" />
              <span>Download on Google Play</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
