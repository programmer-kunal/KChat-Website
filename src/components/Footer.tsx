import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Sparkles, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-sm border border-slate-100 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="K Chat Logo"
                  width={36}
                  height={36}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-bold text-xl text-navy-900 tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>User-Triggered & Privacy-Conscious AI</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-navy-900 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-brand-600" />
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/features"
                  className="hover:text-brand-600 transition-colors focus:outline-none focus-visible:underline"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/ai"
                  className="hover:text-brand-600 transition-colors focus:outline-none focus-visible:underline flex items-center gap-1.5"
                >
                  <span>K Chat AI</span>
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-brand-50 text-brand-600 rounded">
                    USP
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/ai#extension"
                  className="hover:text-brand-600 transition-colors focus:outline-none focus-visible:underline"
                >
                  K Chat Extension
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-navy-900 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-brand-600 transition-colors focus:outline-none focus-visible:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-brand-600 transition-colors focus:outline-none focus-visible:underline"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/account-deletion"
                  className="hover:text-brand-600 transition-colors focus:outline-none focus-visible:underline"
                >
                  Account Deletion
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-navy-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/support"
                  className="hover:text-brand-600 transition-colors focus:outline-none focus-visible:underline"
                >
                  Support & FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/support#contact"
                  className="hover:text-brand-600 transition-colors focus:outline-none focus-visible:underline"
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2">
                <span className="text-xs text-slate-500 block">Developer</span>
                <span className="text-xs font-medium text-slate-700">
                  {siteConfig.developerName}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Designed for authentic, secure, and intelligent communication.
          </p>
        </div>
      </div>
    </footer>
  );
}
