import type { Metadata } from "next";
import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";
import { siteConfig } from "@/config/site";
import {
  MessageSquare,
  Users,
  Globe2,
  Image as ImageIcon,
  Mic,
  Video,
  FileText,
  PhoneCall,
  VideoIcon,
  Bookmark,
  CheckCheck,
  Radio,
  Bell,
  Layers,
  Sparkles,
  ArrowRight,
  ArrowDownToLine,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features — Everything You Need to Communicate",
  description:
    "Explore K Chat's complete feature suite: direct chats, group messaging, World Chat, voice & video calling, media sharing, and user-triggered AI tools.",
};

const featureList = [
  {
    id: "messaging",
    title: "Real-Time Direct Messaging",
    category: "Communication",
    icon: MessageSquare,
    description:
      "Instant one-on-one messaging with real-time sync, message timestamps, reply threading, and instant status updates.",
    highlights: [
      "Sub-second delivery via Firebase real-time database",
      "Inline message replies with quote context",
      "Saved message bookmarking for quick reference",
    ],
  },
  {
    id: "groups",
    title: "Group Conversations",
    category: "Collaboration",
    icon: Users,
    description:
      "Create and manage group chats with friends, colleagues, and communities. Enjoy shared media streams and group administration.",
    highlights: [
      "Custom group title, description, and group icon",
      "Real-time member status and group participant directory",
      "Seamless group media and document sharing",
    ],
  },
  {
    id: "world-chat",
    title: "World Chat Community",
    category: "Community",
    icon: Globe2,
    description:
      "A public global conversation hub where users can connect, exchange perspectives, and chat openly with fellow K Chat members.",
    highlights: [
      "Global real-time public feed",
      "Meet new people across the K Chat ecosystem",
      "Active moderation and community safety",
    ],
  },
  {
    id: "voice-calls",
    title: "Voice Calling",
    category: "Calls",
    icon: PhoneCall,
    description:
      "Direct peer-to-peer audio calls powered by ZEGOCLOUD infrastructure for low-latency voice communication.",
    highlights: [
      "Low bandwidth audio optimization",
      "Instant call signaling and incoming call screen",
      "Microphone mute and speakerphone controls",
    ],
  },
  {
    id: "video-calls",
    title: "Real-Time Video Calling",
    category: "Calls",
    icon: VideoIcon,
    description:
      "Face-to-face video calling with adaptive resolution, front/back camera toggling, and dependable connection stability.",
    highlights: [
      "Crisp video streams with ZEGOCLOUD engine",
      "Smooth camera toggle & mic mute controls",
      "Direct integration into chat conversations",
    ],
  },
  {
    id: "media-sharing",
    title: "Image & Video Sharing",
    category: "Media",
    icon: ImageIcon,
    description:
      "Share photos and video recordings seamlessly. Select multiple images at once to send photo galleries effortlessly.",
    highlights: [
      "Multiple media item selection from gallery",
      "Secure cloud storage backed by Supabase",
      "Inline high-resolution media previews",
    ],
  },
  {
    id: "audio-messages",
    title: "Audio Voice Notes",
    category: "Media",
    icon: Mic,
    description:
      "Record and transmit crisp audio messages on the fly when you want to communicate naturally without typing.",
    highlights: [
      "One-tap voice recording and playback",
      "In-chat audio waveform player",
      "Instant delivery across direct and group chats",
    ],
  },
  {
    id: "documents",
    title: "Documents & File Sharing",
    category: "Files",
    icon: FileText,
    description:
      "Transmit files, documents, PDFs, and archives with clear file name, size metadata, and direct download options.",
    highlights: [
      "Support for multiple file types",
      "Reliable Supabase-powered storage",
      "Direct in-app file viewer launch",
    ],
  },
  {
    id: "saved-messages",
    title: "Saved Messages & Notes",
    category: "Productivity",
    icon: Bookmark,
    description:
      "Your private cloud notebook inside K Chat. Forward messages, save important links, or keep quick notes accessible anywhere.",
    highlights: [
      "Personal private bookmarking room",
      "Never lose crucial links, addresses, or instructions",
      "Searchable alongside your other conversations",
    ],
  },
  {
    id: "read-receipts",
    title: "Read & Delivery Receipts",
    category: "Transparency",
    icon: CheckCheck,
    description:
      "Always know when your message reached the recipient and when it was opened, with distinct sent, delivered, and read ticks.",
    highlights: [
      "Real-time delivery status updates",
      "Clear visual indicators (Sent, Delivered, Read)",
      "Syncs instantly across sender and recipient devices",
    ],
  },
  {
    id: "presence",
    title: "Online Presence & Last Seen",
    category: "Presence",
    icon: Radio,
    description:
      "View friend activity in real-time with automatic online indicators and precise last-seen timestamps.",
    highlights: [
      "Live online status indicators",
      "Last-seen time tracking",
      "Respects user active connection state",
    ],
  },
  {
    id: "notifications",
    title: "Push Notifications",
    category: "System",
    icon: Bell,
    description:
      "Reliable Firebase Cloud Messaging delivers notifications for new direct messages, group mentions, and incoming calls.",
    highlights: [
      "Instant alert on incoming messages and calls",
      "Quick action notifications",
      "Optimized for Android battery efficiency",
    ],
  },
  {
    id: "ai-suite",
    title: "K Chat AI Intelligence Suite",
    category: "AI",
    icon: Sparkles,
    description:
      "User-triggered conversation intelligence powered by Google Gemini Developer API via Firebase AI Logic.",
    highlights: [
      "Smart Reply: Context-aware draft replies",
      "Thread Summary: Condense conversations into bullet points",
      "Context Search: Natural language query search",
      "Scam Guard: Analyze suspicious messages for phishing",
    ],
  },
  {
    id: "extension",
    title: "K Chat Extension",
    category: "AI",
    icon: Layers,
    description:
      "Bring K Chat's AI suite to external apps. Paste messages or upload screenshots from any app to analyze and summarize.",
    highlights: [
      "Analyze external screenshots and text snippets",
      "100% user-supplied content, zero background snooping",
      "Smart Reply and Thread Summary for external chats",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex flex-col gap-14 sm:gap-20 lg:gap-24 py-10 sm:py-14 lg:py-16">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complete Feature Guide</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          Everything You Need to Communicate
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          From voice and video calling to user-triggered AI summaries, K Chat provides a dependable, transparent messaging experience.
        </p>
      </section>

      {/* Visual Showcase: Prominently Sized Mobile Screens */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-slate-900 text-white shadow-xl">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-xs font-bold text-brand-400 uppercase tracking-widest">
              Authentic Mobile Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Built for speed, clarity, and daily reliability
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore the actual Android app interface across direct chats, group rooms, active conversations, and user profiles.
            </p>
          </div>

          {/* 2-Column Responsive Grid with Large, Readable Phone Mockups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {/* Screen 1: Direct Chat Feed */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 flex flex-col items-center justify-between text-center space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                  Direct Chats
                </span>
                <h3 className="text-lg font-bold text-white">Direct Chat Feed</h3>
                <p className="text-xs text-slate-300 max-w-xs mx-auto">
                  Clean conversation list with presence indicators and recent message previews.
                </p>
              </div>
              <PhoneMockup
                src="/images/DirectChatHomeScreen.jpg"
                alt="Direct Chat Home Screen"
                maxWidthClassName="max-w-[290px] sm:max-w-[320px] md:max-w-[340px]"
              />
            </div>

            {/* Screen 2: Group Conversations */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 flex flex-col items-center justify-between text-center space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  Collaboration
                </span>
                <h3 className="text-lg font-bold text-white">Group Chat Feed</h3>
                <p className="text-xs text-slate-300 max-w-xs mx-auto">
                  Dedicated group channels with participant badges and quick creation tools.
                </p>
              </div>
              <PhoneMockup
                src="/images/GroupChatHomeScreen.jpg"
                alt="Group Chat Home Screen"
                maxWidthClassName="max-w-[290px] sm:max-w-[320px] md:max-w-[340px]"
              />
            </div>

            {/* Screen 3: Active Group Chatting */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 flex flex-col items-center justify-between text-center space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Real-Time Messaging
                </span>
                <h3 className="text-lg font-bold text-white">Active Group Conversation</h3>
                <p className="text-xs text-slate-300 max-w-xs mx-auto">
                  Multi-user messaging, inline replies, and shared media streams.
                </p>
              </div>
              <PhoneMockup
                src="/images/GroupChattingScreen.jpg"
                alt="Group Chatting Screen"
                maxWidthClassName="max-w-[290px] sm:max-w-[320px] md:max-w-[340px]"
              />
            </div>

            {/* Screen 4: User Profile & Status */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 flex flex-col items-center justify-between text-center space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Customization
                </span>
                <h3 className="text-lg font-bold text-white">User Profile & Motto</h3>
                <p className="text-xs text-slate-300 max-w-xs mx-auto">
                  Manage display name, custom status motto, and profile photo settings.
                </p>
              </div>
              <PhoneMockup
                src="/images/ProfileScreen.jpg"
                alt="User Profile Screen"
                maxWidthClassName="max-w-[290px] sm:max-w-[320px] md:max-w-[340px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Feature Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
            Complete Feature Directory
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every feature listed here is an active part of the K Chat platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                    <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    {item.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brand-600 font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {item.id === "ai-suite" || item.id === "extension" ? (
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href="/ai"
                      className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                    >
                      <span>Explore AI details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-50 border border-brand-200/80 p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
              Ready to get started?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Download K Chat on your Android device to experience fast, dependable messaging and helpful AI assistance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={siteConfig.googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-6 py-3.5 text-base font-semibold text-white shadow-md hover:bg-brand-600 transition-colors"
            >
              <ArrowDownToLine className="w-5 h-5" />
              <span>Download on Google Play</span>
            </Link>
            <Link
              href="/ai"
              className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-6 py-3.5 text-base font-semibold text-slate-700 hover:border-brand-400 hover:text-brand-600 transition-colors"
            >
              <span>Explore AI Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
