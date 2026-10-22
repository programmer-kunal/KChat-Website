import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";
import { siteConfig } from "@/config/site";
import {
  Sparkles,
  FileText,
  Search,
  ShieldAlert,
  Layers,
  CheckCircle2,
  Lock,
  ArrowRight,
  ArrowDownToLine,
  AlertCircle,
  Cpu,
  EyeOff,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "K Chat AI — Intelligence Built Into Your Conversations",
  description:
    "Discover K Chat AI: user-triggered conversation tools including Smart Reply, Thread Summary, Context Search, Scam Guard, and K Chat Extension.",
};

export default function AIPage() {
  return (
    <div className="flex flex-col gap-14 sm:gap-20 lg:gap-24 py-10 sm:py-14 lg:py-16">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs sm:text-sm font-semibold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-brand-600" />
          <span>Intelligent Communication</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight">
          K Chat AI
        </h1>

        <p className="text-2xl sm:text-3xl font-bold text-brand-600 tracking-tight max-w-3xl mx-auto">
          &ldquo;Intelligence built into your conversations.&rdquo;
        </p>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          K Chat equips you with purposeful, user-triggered AI tools designed to help you understand, respond to, and manage discussions faster without compromising your privacy.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={siteConfig.googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-6 py-3.5 text-base font-semibold text-white shadow-md hover:bg-brand-600 transition-colors"
          >
            <ArrowDownToLine className="w-5 h-5" />
            <span>Download on Google Play</span>
          </Link>
          <a
            href="#smart-reply"
            className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-6 py-3.5 text-base font-semibold text-slate-700 hover:border-brand-300 hover:text-brand-600 transition-colors"
          >
            <span>Explore AI Suite</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SMART REPLY DEEP DIVE */}
      {/* ========================================================================= */}
      <section id="smart-reply" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Visual Mockup */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <PhoneMockup
                src="/images/SmartReplyUI.jpg"
                alt="Smart Reply Interface"
                caption="K Chat Smart Reply Suggestions"
              />
            </div>

            {/* Right Column: Explanations */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Feature 01</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                Smart Reply
              </h2>

              <p className="text-lg text-slate-700 font-medium leading-relaxed">
                Generate natural replies based on conversation context, tone, sentiment, intent, and urgency.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                When responding on the go, finding the right words quickly matters. K Chat analyzes the selected messages and crafts natural draft options that match the ongoing discussion style.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                  <h4 className="font-bold text-navy-900 text-sm">User-Triggered</h4>
                  <p className="text-xs text-slate-600">
                    Never auto-inserts text into your conversation. Suggestions appear only when you tap the Smart Reply action.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                  <h4 className="font-bold text-navy-900 text-sm">Review Before Sending</h4>
                  <p className="text-xs text-slate-600">
                    Every generated response is placed into your input draft. You can review, modify, or discard it entirely.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                  <h4 className="font-bold text-navy-900 text-sm">Context & Tone Aware</h4>
                  <p className="text-xs text-slate-600">
                    Accounts for conversational mood, friendly or formal nuances, and urgency indicators.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                  <h4 className="font-bold text-navy-900 text-sm">Selected Content Scope</h4>
                  <p className="text-xs text-slate-600">
                    Works strictly on the active conversation snippet you select, avoiding broader data exposure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THREAD SUMMARY DEEP DIVE */}
      {/* ========================================================================= */}
      <section id="thread-summary" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Explanations */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>Feature 02</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                Thread Summary
              </h2>

              <p className="text-lg text-slate-700 font-medium leading-relaxed">
                Turn long conversations into key points, decisions, action items, deadlines, and important details.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Catching up on dozens or hundreds of messages in an active direct or group chat can be overwhelming. Thread Summary reads the selected message sequence and presents a structured digest that saves time and prevents missed action items.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 text-sm block">Core Decisions:</strong>
                    <span className="text-xs text-slate-600">
                      Identifies agreed-upon outcomes without wading through back-and-forth deliberations.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 text-sm block">Action Items & Deadlines:</strong>
                    <span className="text-xs text-slate-600">
                      Extracts tasks, assignments, and calendar dates mentioned across the dialogue.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 text-sm block">Ephemeral Reading View:</strong>
                    <span className="text-xs text-slate-600">
                      Designed for fast reading; output is temporary and not permanently added to your chat history.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <PhoneMockup
                src="/images/ThreadSummaryUI.jpg"
                alt="Thread Summary Screen"
                caption="K Chat Thread Summary in Action"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CONTEXT SEARCH DEEP DIVE */}
      {/* ========================================================================= */}
      <section id="context-search" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Visual Mockups (Query + Result) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
              <PhoneMockup
                src="/images/ContextSearchUI.jpg"
                alt="Context Search Query Screen"
                caption="Natural Language Query"
              />
              <PhoneMockup
                src="/images/ContextSearchResultUI.jpg"
                alt="Context Search Results"
                caption="Targeted Message Matching"
              />
            </div>

            {/* Right Column: Explanations */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-semibold uppercase tracking-wider">
                <Search className="w-3.5 h-3.5" />
                <span>Feature 03</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                Context Search
              </h2>

              <p className="text-lg text-slate-700 font-medium leading-relaxed">
                Search conversations using natural language and quickly find the messages that contain the information you need.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Keyword search fails when you can&apos;t recall the exact wording used weeks ago. Context Search understands intent and semantic meaning, allowing you to ask questions naturally like &ldquo;What restaurant did we choose?&rdquo; or &ldquo;Where is the project download link?&rdquo;
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                  <h4 className="font-bold text-navy-900 text-sm">Semantic Understanding</h4>
                  <p className="text-xs text-slate-600">
                    Matches concepts and intent rather than solely searching for identical character sequences.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                  <h4 className="font-bold text-navy-900 text-sm">Direct Navigation</h4>
                  <p className="text-xs text-slate-600">
                    Select any search result to jump directly to that original point in the conversation thread.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SCAM GUARD DEEP DIVE */}
      {/* ========================================================================= */}
      <section id="scam-guard" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Explanations */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold uppercase tracking-wider">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Feature 04</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                Scam Guard
              </h2>

              <p className="text-lg text-slate-700 font-medium leading-relaxed">
                Analyze selected messages for phishing, fraud, impersonation, suspicious links, and other scam indicators.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Unsolicited messages often use fake urgency, deceptive links, or social engineering tactics. With Scam Guard, you can explicitly request an analysis on suspect messages before clicking any link or sending personal information.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                  <h4 className="font-bold text-navy-900 text-sm">Suspicious Link & Phishing Checks</h4>
                  <p className="text-xs text-slate-600">
                    Examines URL structures, spoofed hostnames, and known fraudulent phrasing.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                  <h4 className="font-bold text-navy-900 text-sm">Impersonation Tactics</h4>
                  <p className="text-xs text-slate-600">
                    Flags pressure tactics claiming to be banks, support agents, or urgent emergency requests.
                  </p>
                </div>
              </div>

              {/* Explicit Limitation Callout */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-900 flex items-start gap-3 text-xs leading-relaxed">
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">Important Limitation:</strong>
                  Scam Guard is an advisory assistance tool designed to highlight common risk patterns. It does not guarantee detection of all fraudulent material, nor does it guarantee absolute safety. Always exercise independent caution.
                </div>
              </div>
            </div>

            {/* Right Column: Visual Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <PhoneMockup
                src="/images/ScamGuardUI.jpg"
                alt="Scam Guard Interface"
                caption="K Chat Scam Guard Risk Analysis"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. KCHAT EXTENSION DEEP DIVE (Section 6) */}
      {/* ========================================================================= */}
      <section id="extension" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl space-y-12">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>Cross-App Utility</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                K Chat Extension: AI Beyond Your Chat
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                K Chat Extension lets you bring K Chat&apos;s AI capabilities to messages and screenshots from other applications.
              </p>
            </div>

            {/* 4-Step Workflow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-500 text-white flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <h3 className="font-bold text-base text-white">Paste or Capture</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Provide pasted text, imported notes, or captured screenshots from other messaging or social apps.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-500 text-white flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <h3 className="font-bold text-base text-white">Choose an AI Feature</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Select Smart Reply, Thread Summary, Context Search, or Scam Guard for the supplied content.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-500 text-white flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <h3 className="font-bold text-base text-white">Analyze</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Firebase AI Logic processes the provided snippet via Google Gemini Developer API.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-500 text-white flex items-center justify-center font-bold text-xs">
                  04
                </div>
                <h3 className="font-bold text-base text-white">Review the Result</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Read summaries, copy reply drafts, or inspect potential threat indicators immediately.
                </p>
              </div>
            </div>

            {/* Screenshots Gallery for Extension */}
            <div className="pt-6 space-y-4">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider text-center">
                K Chat Extension in Action
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <PhoneMockup
                  src="/images/KChatExtensionUI.jpg"
                  alt="K Chat Extension Home"
                  caption="Extension Home & Input"
                />
                <PhoneMockup
                  src="/images/KChatExtensionSR.jpg"
                  alt="K Chat Extension Smart Reply"
                  caption="Extension Smart Reply"
                />
                <PhoneMockup
                  src="/images/KChatExtensionTS.jpg"
                  alt="K Chat Extension Thread Summary"
                  caption="Extension Thread Summary"
                />
              </div>
            </div>

            {/* Transparency statement */}
            <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700 text-xs text-slate-300 leading-relaxed flex items-start gap-3">
              <EyeOff className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Privacy Notice for Extension:</strong>
                K Chat Extension does not continuously monitor, hook into, or automatically read other apps on your device. The user explicitly initiates every action by pasting text or selecting screenshots.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. PRIVACY-CONSCIOUS AI & ACCURACY DISCLAIMER */}
      {/* ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" />
              <span>Architectural Principles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
              Privacy-Conscious AI by Design
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We believe intelligent tools should respect user sovereignty. Here is exactly how K Chat approaches data and artificial intelligence:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
              <h4 className="font-bold text-navy-900 text-sm flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-600" />
                <span>Strictly User-Triggered</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                K Chat does not continuously scan conversations in the background for AI analysis. Processing happens only when you explicitly select a feature.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
              <h4 className="font-bold text-navy-900 text-sm flex items-center gap-2">
                <Cpu className="w-4 h-4 text-brand-600" />
                <span>Firebase AI Logic Provider</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                K Chat utilizes Firebase AI Logic with Google&apos;s Gemini Developer API. Selected content and instructions required for the request are transmitted securely over HTTPS/TLS.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
              <h4 className="font-bold text-navy-900 text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>Informational Assistance</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                AI-generated results may not always be accurate. Output is provided for informational and drafting assistance. Users should review results before relying on them.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-100">
            <span className="text-xs text-slate-500">
              For complete details on our data practices and retention policies, review our official legal documents.
            </span>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 hover:text-brand-700 hover:underline"
            >
              <span>Read Full Privacy Policy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy-900 text-white p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Ready to experience intelligent conversations?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Download K Chat today on Google Play and explore communication enhanced by user-controlled AI.
          </p>
          <div className="pt-2">
            <Link
              href={siteConfig.googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-navy-900 hover:bg-slate-100 transition-colors shadow-sm"
            >
              <ArrowDownToLine className="w-5 h-5 text-brand-600" />
              <span>Download on Google Play</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
