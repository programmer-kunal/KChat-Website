import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import PhoneMockup from "@/components/PhoneMockup";
import {
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Search,
  FileText,
  MessageSquare,
  Users,
  Globe2,
  PhoneCall,
  Video,
  Mic,
  FileCheck,
  CheckCheck,
  Radio,
  Bell,
  Layers,
  ArrowDownToLine,
  ArrowRightCircle,
  CopyCheck,
  Lock,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-14 sm:gap-20 lg:gap-24 pb-16 overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-6 sm:pt-10 lg:pt-14">
        {/* Subtle background gradient glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-brand-100/70 via-blue-50/40 to-transparent blur-3xl opacity-80 pointer-events-none"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
              {/* Product Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-brand-600" />
                <span>Next-Gen Android Messaging</span>
              </div>

              {/* Main Heading & Tagline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.12]">
                {siteConfig.name}
                <span className="block mt-2 text-brand-600 font-bold text-3xl sm:text-4xl lg:text-5xl">
                  {siteConfig.tagline}
                </span>
              </h1>

              {/* Secondary Description */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
                {siteConfig.description}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href={siteConfig.googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-navy-900 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-navy-900/10 hover:bg-brand-600 active:bg-brand-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  <ArrowDownToLine className="w-5 h-5" />
                  <span>Download on Google Play</span>
                </Link>

                <Link
                  href="/ai"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-200/90 px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-brand-600 hover:border-brand-200 hover:bg-brand-50/50 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  <span>Explore AI Features</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust & Transparency Note */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Zero background chat scanning • 100% user-triggered AI</span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase (Balanced & Contained) */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
              <div className="w-full max-w-[310px] sm:max-w-[340px] flex flex-col items-center">
                {/* Primary phone showcase */}
                <PhoneMockup
                  src="/images/ChattingScreen.jpg"
                  alt="K Chat Live Chat Interface"
                  priority
                  caption="K Chat Real-Time Chat & AI Actions"
                  maxWidthClassName="max-w-[280px] sm:max-w-[320px]"
                />

                {/* Subordinate contextual badge (cleanly aligned below mockup) */}
                <div className="mt-4 w-full bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-md border border-slate-200/90 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-brand-50 text-brand-600 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-navy-900 block leading-tight">
                      Smart Reply Ready
                    </span>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                      Natural suggestions generated on demand for selected messages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ARCHITECTURAL PRINCIPLE SECTION (Updated Wording) */}
      {/* ========================================================================= */}
      <section id="why-kchat" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white p-8 sm:p-12 lg:p-16 shadow-xl">
            <div className="max-w-3xl space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-300">
                Architectural Principle
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                Designed to make conversations smarter, more meaningful, and secure.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
                Traditional messaging apps either distract with bloated feeds or stay completely passive. K Chat introduces intentional intelligence: modern real-time messaging paired with AI tools that run only when you ask them to, giving you instant clarity without compromising privacy.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-700/60">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-300 flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-lg font-semibold text-white">Full-Fledged Messaging</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Instant direct chats, group conversations, World Chat, and voice/video calling.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-300 flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-lg font-semibold text-white">Intentional AI</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Summarize lengthy discussions, compose contextual replies, and inspect suspicious links on demand.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-300 flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-lg font-semibold text-white">User-Controlled AI</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  AI tools run when you choose to use them. K Chat does not continuously scan conversations in the background for AI analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. AI SECTION — THE MAIN USP (Section 5) */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Innovation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              More Than a Chat App
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Intelligent tools that help you understand, respond to, and manage conversations.
            </p>
          </div>

          {/* 4 Major Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Card 1: SMART REPLY */}
            <div className="group rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-brand-300 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shadow-inner">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">
                    Context-Aware Responses
                  </span>
                  <h3 className="text-2xl font-bold text-navy-900 mt-1">Smart Reply</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Generate natural replies based on conversation context, tone, sentiment, intent, and urgency.
                </p>

                <ul className="space-y-2.5 pt-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>User-triggered:</strong> Only activated when you request suggestions</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Review before sending:</strong> Edit or discard any suggested draft</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Natural suggestions:</strong> Matches conversation mood and tone</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Scoped context:</strong> Works strictly with selected conversation content</span>
                  </li>
                </ul>
              </div>

              {/* Screenshot Preview */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex justify-center">
                <div className="relative w-full max-w-[240px] rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/images/SmartReplyUI.jpg"
                    alt="K Chat Smart Reply Interface"
                    width={400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 2: THREAD SUMMARY */}
            <div className="group rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-brand-300 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-inner">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                    Instant Condensation
                  </span>
                  <h3 className="text-2xl font-bold text-navy-900 mt-1">Thread Summary</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Turn long conversations into key points, decisions, action items, deadlines, and important details.
                </p>

                <ul className="space-y-2.5 pt-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Structured takeaways:</strong> Key points grouped cleanly</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Decision & deadline tracking:</strong> Highlight critical commitments</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Fast catch-up:</strong> Review dozens of messages in seconds</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Zero clutter:</strong> Ephemeral output designed for quick reading</span>
                  </li>
                </ul>
              </div>

              {/* Screenshot Preview */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex justify-center">
                <div className="relative w-full max-w-[240px] rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/images/ThreadSummaryUI.jpg"
                    alt="K Chat Thread Summary Interface"
                    width={400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 3: CONTEXT SEARCH */}
            <div className="group rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-brand-300 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shadow-inner">
                  <Search className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wider">
                    Natural Language Retrieval
                  </span>
                  <h3 className="text-2xl font-bold text-navy-900 mt-1">Context Search</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Search conversations using natural language and quickly find the messages that contain the information you need.
                </p>

                <ul className="space-y-2.5 pt-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Semantic matching:</strong> Search by meaning, not just exact keywords</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Conversational queries:</strong> Ask questions like &ldquo;where did we agree to meet?&rdquo;</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Jump to original context:</strong> Directly locate the target message</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Fast & targeted:</strong> Operates strictly over chosen chat logs</span>
                  </li>
                </ul>
              </div>

              {/* Screenshot Preview */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex justify-center">
                <div className="relative w-full max-w-[240px] rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/images/ContextSearchResultUI.jpg"
                    alt="K Chat Context Search Results Interface"
                    width={400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 4: SCAM GUARD */}
            <div className="group rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-brand-300 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-inner">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                    Threat & Deception Analysis
                  </span>
                  <h3 className="text-2xl font-bold text-navy-900 mt-1">Scam Guard</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Analyze selected messages for phishing, fraud, impersonation, suspicious links, and other scam indicators.
                </p>

                <ul className="space-y-2.5 pt-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Selected message scanning:</strong> Inspects content you submit</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Phishing & link alerts:</strong> Flags deceptive domains and urgency tricks</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Clear advisory:</strong> Explains why a message looks suspicious</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCheck className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong>Assistance disclaimer:</strong> Does not guarantee detection or 100% protection</span>
                  </li>
                </ul>
              </div>

              {/* Screenshot Preview */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex justify-center">
                <div className="relative w-full max-w-[240px] rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/images/ScamGuardUI.jpg"
                    alt="K Chat Scam Guard Interface"
                    width={400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Deep-dive Link */}
          <div className="text-center pt-2">
            <Link
              href="/ai"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold text-base hover:text-brand-700 hover:underline"
            >
              <span>Explore full K Chat AI details & architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. KCHAT EXTENSION SECTION (Section 6) */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Text & Workflow */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  <span>K Chat Extension</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  AI Beyond Your Chat
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  K Chat Extension lets you bring K Chat&apos;s AI capabilities to messages and screenshots from other applications.
                </p>

                {/* What user can provide */}
                <div className="pt-2">
                  <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">
                    Content you can provide:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-sm">
                      <span className="block font-semibold text-white">Pasted Messages</span>
                      <span className="text-xs text-slate-400">Copied text from any app</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-sm">
                      <span className="block font-semibold text-white">Imported Text</span>
                      <span className="text-xs text-slate-400">Notes or external snippets</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-sm">
                      <span className="block font-semibold text-white">Screenshots</span>
                      <span className="text-xs text-slate-400">Images of external chats</span>
                    </div>
                  </div>
                </div>

                {/* Workflow Steps */}
                <div className="pt-2 space-y-3">
                  <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
                    How it works:
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                      <span className="text-xs font-bold text-brand-400 block mb-1">Step 1</span>
                      <span className="text-xs font-medium text-slate-200">Paste or capture</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                      <span className="text-xs font-bold text-brand-400 block mb-1">Step 2</span>
                      <span className="text-xs font-medium text-slate-200">Choose AI feature</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                      <span className="text-xs font-bold text-brand-400 block mb-1">Step 3</span>
                      <span className="text-xs font-medium text-slate-200">Analyze</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                      <span className="text-xs font-bold text-brand-400 block mb-1">Step 4</span>
                      <span className="text-xs font-medium text-slate-200">Review result</span>
                    </div>
                  </div>
                </div>

                {/* Explicit Transparency Notice */}
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white block mb-1">Important Transparency:</strong>
                  K Chat does not directly read other apps automatically. You maintain full control by explicitly pasting text or selecting screenshots to share with K Chat Extension.
                </div>
              </div>

              {/* Extension Visual Showcase */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[310px]">
                  <PhoneMockup
                    src="/images/KChatExtensionUI.jpg"
                    alt="K Chat Extension Interface"
                    caption="K Chat Extension: AI on external content"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. COMMUNICATION FEATURES SECTION (Section 7) */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5 text-brand-600" />
              <span>Full Communication Suite</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              Everything You Need to Communicate
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              A comprehensive real-time chat platform engineered for speed, clarity, and dependable connectivity.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Direct Messaging */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Real-Time Direct Messaging</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Instant one-on-one text chats with real-time delivery and responsive conversation feeds.
              </p>
            </div>

            {/* Group Conversations */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Group Conversations</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Collaborate with friends and teams with custom group names, icons, and member controls.
              </p>
            </div>

            {/* World Chat */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">World Chat</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Discover and connect with the broader K Chat global public community in open discussions.
              </p>
            </div>

            {/* Voice Calling */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Voice Calling</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Direct peer-to-peer audio calls powered by ZEGOCLOUD infrastructure for low-latency voice.
              </p>
            </div>

            {/* Video Calling */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Video Calling</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Seamless real-time video calls with crisp video streams and reliable peer connectivity.
              </p>
            </div>

            {/* Media Sharing: Image & Video */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <CopyCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Image & Video Sharing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Send photos and video clips with support for multiple media selection at once.
              </p>
            </div>

            {/* Audio Messages */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <Mic className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Audio Messages</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Record and exchange voice notes quickly when typing isn&apos;t convenient.
              </p>
            </div>

            {/* Documents & Files */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Documents and Files</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Share PDFs, spreadsheets, and files directly within any direct or group conversation.
              </p>
            </div>

            {/* Message Replies */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <ArrowRightCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Message Replies</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Quote and reply directly to specific messages to maintain clear context in busy chats.
              </p>
            </div>

            {/* Saved Messages */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Saved Messages</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bookmark important notes, reminders, or crucial files into your private personal space.
              </p>
            </div>

            {/* Read & Delivery Receipts */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <CheckCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Read & Delivery Receipts</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clear visual indicators for when messages are sent, received, and read by your recipients.
              </p>
            </div>

            {/* Presence & Notifications */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-300 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Presence & Notifications</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Real-time online status, last-seen timestamps, and instant Firebase push notifications.
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold text-base hover:text-brand-700 hover:underline"
            >
              <span>View full feature list and details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PRIVACY SECTION (Section 9) */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Privacy-Conscious Architecture</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight">
                  Privacy-Conscious AI
                </h2>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                  K Chat&apos;s AI features are user-triggered. K Chat does not continuously scan conversations in the background for AI analysis.
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Relevant content is processed only when you explicitly invoke an AI feature (such as Smart Reply, Thread Summary, Context Search, or Scam Guard). Once the requested result is generated, the output is temporary and not intentionally stored as a permanent conversation message unless you choose to send or save it.
                </p>

                <div className="pt-2">
                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors"
                  >
                    <span>Read Privacy Policy</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-600">
                <h4 className="font-bold text-navy-900 text-sm">Key Privacy Guarantees</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>100% user-directed activation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>No automated background conversation analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Secure transmission via HTTPS/TLS</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Firebase AI Logic & Google Gemini Developer API</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. BOTTOM CTA SECTION */}
      {/* ========================================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-navy-900 text-white p-8 sm:p-12 text-center space-y-6 shadow-xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Experience Smarter Conversations with K Chat
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Download the official Android app and explore user-triggered intelligence designed for everyday communication.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href={siteConfig.googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-navy-900 hover:bg-slate-100 transition-colors shadow-sm"
              >
                <ArrowDownToLine className="w-5 h-5 text-brand-600" />
                <span>Download on Google Play</span>
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-6 py-3 text-base font-semibold text-slate-200 hover:bg-slate-700 transition-colors"
              >
                <span>View All Features</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
