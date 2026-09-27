import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  priority?: boolean;
  caption?: string;
  className?: string;
  badge?: string;
  maxWidthClassName?: string;
}

export default function PhoneMockup({
  src,
  alt,
  priority = false,
  caption,
  className = "",
  badge,
  maxWidthClassName = "max-w-[280px] sm:max-w-[310px] md:max-w-[330px]",
}: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto flex flex-col items-center w-full ${className}`}>
      {/* Device frame container */}
      <div
        className={`relative w-full ${maxWidthClassName} rounded-[36px] sm:rounded-[40px] p-2.5 sm:p-3 bg-navy-900 shadow-2xl ring-1 ring-slate-800/80 shadow-slate-950/30 transition-transform`}
      >
        {/* Subtle camera punch hole */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-navy-950 rounded-full z-20 border border-slate-700/50 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
        </div>

        {/* Screen container */}
        <div className="relative overflow-hidden rounded-[26px] sm:rounded-[30px] bg-slate-950 aspect-[9/19.5] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 400px"
            priority={priority}
            className="object-cover object-top"
          />
        </div>

        {/* Bottom indicator line */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-700/60 rounded-full z-20"></div>

        {/* Optional floating badge */}
        {badge && (
          <div className="absolute -top-3 -right-3 z-30 bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md border border-white/20">
            {badge}
          </div>
        )}
      </div>

      {/* Caption if provided */}
      {caption && (
        <span className="mt-3 text-xs font-medium text-slate-500 tracking-wide text-center">
          {caption}
        </span>
      )}
    </div>
  );
}
