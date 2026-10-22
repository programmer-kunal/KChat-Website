import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FileText, ShieldAlert, Sparkles, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Official Terms of Service for K Chat. Understand the terms, acceptable use, AI content disclaimers, and service guidelines.",
};

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
      <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
          <FileText className="w-3.5 h-3.5 text-brand-600" />
          <span>Terms & Conditions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
          K Chat Terms of Service
        </h1>
        <p className="text-sm font-medium text-slate-500">
          Last Updated: 27 September 2026
        </p>
      </div>

      {/* AI & Scam Guard Disclaimers Highlight */}
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-brand-50/70 border border-brand-200/80 text-xs sm:text-sm text-slate-700 space-y-1.5">
          <div className="flex items-center gap-2 text-brand-800 font-bold">
            <Sparkles className="w-4 h-4 text-brand-600" />
            <span>AI Content Advisory</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            AI-generated suggestions, summaries, and results are informational assistance only and may contain errors. You are responsible for reviewing content before sending.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-slate-700 space-y-1.5">
          <div className="flex items-center gap-2 text-amber-800 font-bold">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            <span>Scam Guard Limitation</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Scam Guard is an advisory analysis feature. It does not guarantee detection or guarantee that any message, link, or sender is safe or fraudulent.
          </p>
        </div>
      </div>

      {/* Terms Body */}
      <article className="prose prose-slate max-w-none space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
        {/* 1. Acceptance */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">1. Acceptance of Terms</h2>
          <p>
            By downloading, accessing, or using K Chat, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not install or use the K Chat application.
          </p>
        </section>

        {/* 2. Account Responsibility */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">2. Account Responsibility</h2>
          <p>
            To use K Chat, you may authenticate through supported mechanisms such as Google Sign-In. You are responsible for maintaining the confidentiality of your credentials and account access. You agree to notify us immediately of any unauthorized use of your account.
          </p>
        </section>

        {/* 3. User-Generated Content */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">3. User-Generated Content</h2>
          <p>
            You retain ownership of the text messages, photos, videos, audio notes, and files you send through K Chat. You grant K Chat the technical license necessary to transmit, store, and display your content to your designated recipients to operate the service.
          </p>
          <p>
            You are solely responsible for all content you create, transmit, or share using the application.
          </p>
        </section>

        {/* 4. Acceptable Use */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">4. Acceptable Use</h2>
          <p>
            K Chat is intended for lawful personal and group communications. You agree to use K Chat in compliance with all applicable local, national, and international laws, regulations, and these terms.
          </p>
        </section>

        {/* 5. Prohibited Misuse */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">5. Prohibited Misuse</h2>
          <p>You agree not to engage in any of the following activities:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Harassing, threatening, stalking, or defaming other individuals;</li>
            <li>Distributing malware, viruses, phishing payloads, or malicious links;</li>
            <li>Sending unsolicited bulk commercial messages (spam);</li>
            <li>Impersonating another person, organization, or K Chat entity;</li>
            <li>Attempting to bypass security controls, reverse-engineer, or disrupt servers;</li>
            <li>Using automated bots or scrapers without express written authorization.</li>
          </ul>
        </section>

        {/* 6. Messaging & Communication Functionality */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">6. Messaging and Communication</h2>
          <p>
            K Chat provides direct messaging, group conversations, World Chat, and audio/video calling. Message delivery depends on active network conditions, third-party infrastructure (such as Google Firebase and ZEGOCLOUD), and recipient device availability.
          </p>
        </section>

        {/* 7. AI-Generated Content */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">7. AI-Generated Content & Limitations</h2>
          <p>
            K Chat incorporates AI features including Smart Reply, Thread Summary, Context Search, Scam Guard, and K Chat Extension.
          </p>
          <p>
            <strong>Important Notice:</strong> AI-generated outputs are informational and may contain errors, inaccuracies, or unexpected responses. AI suggestions do not replace human judgment. You are exclusively responsible for reviewing, editing, and verifying any AI-suggested text or action before relying on or sending it.
          </p>
        </section>

        {/* 8. Scam Guard Limitations */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">8. Scam Guard Limitations</h2>
          <p>
            Scam Guard is an advisory feature provided to assist users in identifying common deception indicators in user-selected messages.
          </p>
          <p>
            <strong>Limitation:</strong> Scam Guard does not guarantee that analyzed content is safe, nor does it guarantee the detection of all fraudulent, phishing, or malicious communication. K Chat disclaims any liability arising from reliance on Scam Guard evaluations.
          </p>
        </section>

        {/* 9. Third-Party Services */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">9. Third-Party Services</h2>
          <p>
            K Chat integrates with third-party service providers:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li><strong>Google / Firebase:</strong> Authentication, real-time database, cloud messaging, and AI logic;</li>
            <li><strong>Supabase:</strong> Storage of user-selected media and files;</li>
            <li><strong>ZEGOCLOUD:</strong> Voice and video calling infrastructure.</li>
          </ul>
          <p>
            Use of these features may be governed by the respective terms and privacy policies of these third parties.
          </p>
        </section>

        {/* 10. Service Availability */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">10. Service Availability</h2>
          <p>
            We strive for reliable service operations, but K Chat is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We do not warrant that service operations will be uninterrupted, error-free, or entirely bug-free.
          </p>
        </section>

        {/* 11. Intellectual Property */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">11. Intellectual Property</h2>
          <p>
            The K Chat name, brand logo, software code, design, and graphics are the intellectual property of {siteConfig.developerName} and K Chat. You may not copy, reproduce, distribute, or create derivative works without prior written consent.
          </p>
        </section>

        {/* 12. Account Termination */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">12. Account Termination & Suspension</h2>
          <p>
            We reserve the right to suspend or terminate accounts that violate these Terms of Service or engage in malicious or abusive behavior. Users may also voluntarily request account deletion at any time via the{" "}
            <Link href="/account-deletion" className="text-brand-600 font-semibold underline">
              Account Deletion page
            </Link>.
          </p>
        </section>

        {/* 13. Changes to the Service */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">13. Changes to the Service</h2>
          <p>
            We may introduce improvements, update features, or temporarily suspend certain functionality to conduct maintenance or comply with legal requirements.
          </p>
        </section>

        {/* 14. Changes to Terms */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">14. Changes to Terms</h2>
          <p>
            We may revise these Terms of Service periodically. The &ldquo;Last Updated&rdquo; date at the top of this document indicates the effective date of the latest revisions. Continued use of the application following updates constitutes acceptance of the amended terms.
          </p>
        </section>

        {/* 15. Limitation of Liability */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">15. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, K Chat and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data, loss of profits, or service interruptions arising out of or related to your use of or inability to use K Chat.
          </p>
        </section>

        {/* 16. Contact */}
        <section className="space-y-3 p-5 rounded-2xl bg-slate-100/80 border border-slate-200">
          <h2 className="text-xl font-bold text-navy-900">16. Contact Information</h2>
          <p className="text-sm text-slate-700">
            If you have questions, inquiries, or notices regarding these Terms of Service, please contact:
          </p>
          <div className="text-sm text-slate-700 space-y-1">
            <p><strong>App Name:</strong> {siteConfig.name}</p>
            <p><strong>Developer:</strong> {siteConfig.developerName}</p>
            <p>
              <strong>Contact Email:</strong>{" "}
              <code className="px-2 py-0.5 rounded bg-white text-brand-600 border border-slate-200 font-mono text-xs">
                {siteConfig.supportEmail}
              </code>
            </p>
          </div>
        </section>
      </article>

      {/* Footer Navigation */}
      <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <Link href="/privacy" className="text-brand-600 hover:underline">
          ← View Privacy Policy
        </Link>
        <Link href="/support" className="text-brand-600 hover:underline">
          Go to Support Center →
        </Link>
      </div>
      </div>
    </div>
  );
}
