/**
 * KChat Central Website Configuration
 * 
 * Update placeholders here to reflect official production values.
 * Do not scatter environment or contact variables across multiple files.
 */

export const siteConfig = {
  name: "K Chat",
  tagline: "Make Messaging Smarter.",
  title: "K Chat: Make Messaging Smarter",
  description:
    "K Chat is an AI-powered intelligent real-time communication platform designed to make conversations smarter, more meaningful, and secure.",
  developerName: "KUNAL",
  copyrightYear: 2026,

  // Central contact & store settings
  supportEmail: "kunal.connect7@gmail.com",
  privacyEmail: "kunal.connect7@gmail.com",
  googlePlayUrl: "https://play.google.com/store/apps/details?id=com.kunal.kchat",

  // Third-party service documentation & privacy policies referenced in legal docs
  thirdPartyLinks: {
    googlePrivacy: "https://policies.google.com/privacy",
    supabasePrivacy: "https://supabase.com/privacy",
    zegoPrivacy: "https://www.zegocloud.com/privacy-policy",
  },

  // Main navigation links
  navLinks: [
    { name: "Features", href: "/features" },
    { name: "AI", href: "/ai" },
    { name: "Why K Chat", href: "/#why-kchat" },
    { name: "Support", href: "/support" },
  ],

  // Footer navigation groups
  footerLinks: {
    product: [
      { name: "Features", href: "/features" },
      { name: "K Chat AI", href: "/ai" },
      { name: "K Chat Extension", href: "/ai#extension" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Account Deletion", href: "/account-deletion" },
    ],
    support: [
      { name: "Support & FAQ", href: "/support" },
      { name: "Contact", href: "/support#contact" },
    ],
  },
} as const;
