import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  HelpCircle,
  MessageSquare,
  Sparkles,
  PhoneCall,
  ShieldCheck,
  Trash2,
  Mail,
  User,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Support & Help Center",
  description:
    "Find answers to frequently asked questions about K Chat accounts, messaging, user-triggered AI tools, calling, and privacy.",
};

const faqCategories = [
  {
    id: "account-login",
    title: "Account & Login",
    icon: User,
    faqs: [
      {
        question: "How do I sign in to K Chat?",
        answer:
          "K Chat uses Google Sign-In for streamlined and secure authentication. Simply tap 'Sign in with Google' on the welcome screen and select your verified Google Account.",
      },
      {
        question: "How can I customize my profile name, bio, and picture?",
        answer:
          "Navigate to the Profile screen inside K Chat. You can update your display name, edit your about/motto status, and upload a new profile picture.",
      },
      {
        question: "Can I use K Chat on multiple devices?",
        answer:
          "You can log in to your Google Account on supported Android devices. Your conversations and profile synchronize in real time through Firebase.",
      },
    ],
  },
  {
    id: "messaging",
    title: "Messaging & Conversations",
    icon: MessageSquare,
    faqs: [
      {
        question: "How does real-time messaging work in K Chat?",
        answer:
          "K Chat utilizes Firebase's real-time database to sync direct messages, replies, read receipts, and presence indicators immediately across devices.",
      },
      {
        question: "How do I reply to a specific message?",
        answer:
          "Long-press or select any message in a chat and choose 'Reply'. The original message snippet will be quoted above your draft text.",
      },
      {
        question: "Can I share multiple photos and documents?",
        answer:
          "Yes. The attachment menu allows you to select multiple images from your gallery at once, or attach documents (PDFs, files) stored on your device. Uploaded media is securely stored in Supabase.",
      },
      {
        question: "What is World Chat?",
        answer:
          "World Chat is K Chat's global community conversation room where members can meet and converse openly with users worldwide.",
      },
    ],
  },
  {
    id: "ai-features",
    title: "AI Features",
    icon: Sparkles,
    faqs: [
      {
        question: "How do I trigger Smart Reply?",
        answer:
          "Smart Reply is completely user-triggered. In any chat, tap the AI menu and select Smart Reply. K Chat analyzes the context of recent messages and provides natural reply options that you can edit before sending.",
      },
      {
        question: "What does Thread Summary do?",
        answer:
          "Thread Summary reads selected message threads and condenses long back-and-forth exchanges into key decisions, action items, deadlines, and core takeaways.",
      },
      {
        question: "How is Context Search different from keyword search?",
        answer:
          "Context Search uses natural language understanding. Rather than matching exact spelling, you can ask conceptual questions (e.g., 'What time did we agree to meet tomorrow?') to locate relevant messages.",
      },
      {
        question: "What is Scam Guard and what are its limitations?",
        answer:
          "Scam Guard analyzes selected messages for phishing URLs, impersonation tactics, and suspicious fraud patterns. Please note: Scam Guard is an assistance feature and does not guarantee detection or guarantee 100% protection.",
      },
      {
        question: "How do I use K Chat Extension with other apps?",
        answer:
          "Open K Chat Extension to paste text or upload screenshots from external apps. You can run Smart Reply, Thread Summary, or Scam Guard on external content without K Chat needing background access to other applications.",
      },
    ],
  },
  {
    id: "calls",
    title: "Voice & Video Calling",
    icon: PhoneCall,
    faqs: [
      {
        question: "How are calls powered in K Chat?",
        answer:
          "Direct audio and video calling is powered by ZEGOCLOUD infrastructure, delivering low-latency streams and clear audio across network conditions.",
      },
      {
        question: "What permissions are needed for calling?",
        answer:
          "K Chat requests microphone access for audio calls and camera access for video calls. These permissions are only used while an active call is underway.",
      },
    ],
  },
  {
    id: "privacy-data",
    title: "Privacy & Data",
    icon: ShieldCheck,
    faqs: [
      {
        question: "Does K Chat continuously scan my conversations in the background?",
        answer:
          "No. K Chat's AI features are strictly user-triggered. K Chat does not continuously scan conversations in the background for AI analysis. Relevant content is transmitted only when you explicitly invoke an AI tool.",
      },
      {
        question: "Which AI provider powers K Chat?",
        answer:
          "K Chat uses Firebase AI Logic with Google's Gemini Developer API to execute user-requested AI tasks.",
      },
      {
        question: "Does K Chat sell my personal data?",
        answer:
          "No. K Chat does not sell personal information to third parties or advertisers.",
      },
    ],
  },
  {
    id: "account-deletion",
    title: "Account Deletion",
    icon: Trash2,
    faqs: [
      {
        question: "How can I request deletion of my K Chat account?",
        answer:
          "You can submit a deletion request anytime on our dedicated Account Deletion page or by emailing our privacy contact. Our team will verify and process your request manually.",
      },
      {
        question: "What data is removed upon deletion?",
        answer:
          "Your Google authentication profile, display username, status motto, profile photo, and device tokens are removed. Mutual messages previously sent to other users remain in their chat history to maintain continuity.",
      },
    ],
  },
];

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 space-y-12 sm:space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
          <span>Help & Knowledge Base</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
          K Chat Support
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Explore frequently asked questions regarding setup, messaging features, AI tools, voice & video calls, and account security.
        </p>
      </div>

      {/* Categorized FAQs */}
      <div className="space-y-10 sm:space-y-12">
        {faqCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <section key={cat.id} id={cat.id} className="scroll-mt-24 space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900">
                  {cat.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-bold text-navy-900 text-base leading-snug">
                        {faq.question}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mt-2">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Dedicated Contact Section (Aligned & Centered in max-w-7xl) */}
      <section id="contact" className="scroll-mt-24">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-xl space-y-8">
          <div className="max-w-2xl space-y-2 text-left">
            <span className="text-xs font-bold text-brand-400 uppercase tracking-widest">
              Direct Assistance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Contact K Chat Support
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Have questions, feedback, or need manual assistance with your account? Reach out to our official support and privacy contact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Card 1: Support & Inquiries */}
            <div className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl bg-slate-800/70 border border-slate-700/80 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-slate-300 font-bold">
                    Support & Inquiries
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  For help with app issues, messaging questions, or general support:
                </p>
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="block font-mono text-sm sm:text-base text-brand-300 hover:text-brand-200 bg-slate-900/90 p-3 rounded-xl border border-slate-700/80 select-all break-all transition-colors font-semibold"
                >
                  {siteConfig.supportEmail}
                </a>
              </div>
              <div className="pt-2 border-t border-slate-700/50 text-xs text-slate-400">
                Typical response time: 24–48 business hours
              </div>
            </div>

            {/* Card 2: Privacy & Data Inquiries */}
            <div className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl bg-slate-800/70 border border-slate-700/80 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-slate-300 font-bold">
                    Privacy & Data Inquiries
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  For data requests, privacy questions, or account verification:
                </p>
                <a
                  href={`mailto:${siteConfig.privacyEmail}`}
                  className="block font-mono text-sm sm:text-base text-brand-300 hover:text-brand-200 bg-slate-900/90 p-3 rounded-xl border border-slate-700/80 select-all break-all transition-colors font-semibold"
                >
                  {siteConfig.privacyEmail}
                </a>
              </div>
              <div className="pt-2 border-t border-slate-700/50 text-xs text-slate-400 flex items-center justify-between">
                <span>Developer:</span>
                <span className="font-semibold text-slate-200">{siteConfig.developerName}</span>
              </div>
            </div>
          </div>

          {/* Links Footer Aligned */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400">
            <Link href="/privacy" className="hover:text-white underline transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/terms" className="hover:text-white underline transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/account-deletion" className="hover:text-white underline transition-colors">
              Account Deletion
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
