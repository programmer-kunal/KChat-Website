"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Trash2,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Mail,
  ArrowRight,
  Info,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";

export default function AccountDeletionPage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const mailtoSubject = "K Chat Account Deletion Request";
  const mailtoBody = `Hello K Chat Support,

I am requesting the permanent deletion of my K Chat account and associated personal data.

K Chat Account Email: ${email}
Reason for deletion: ${reason.trim() || "Not specified"}

Please confirm once the account deletion has been processed.

Thank you.`;

  const mailtoUrl = `mailto:${siteConfig.supportEmail}?subject=${encodeURIComponent(
    mailtoSubject
  )}&body=${encodeURIComponent(mailtoBody)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    // Attempt opening user's mail client
    window.location.href = mailtoUrl;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `To: ${siteConfig.supportEmail}\nSubject: ${mailtoSubject}\n\n${mailtoBody}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
      <div className="max-w-3xl mx-auto space-y-10 sm:space-y-12">
        {/* Page Header */}
        <div className="space-y-4 border-b border-slate-200 pb-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold uppercase tracking-wider">
            <Trash2 className="w-3.5 h-3.5 text-rose-600" />
            <span>Google Play Account Deletion Portal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            Delete Your K Chat Account
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            If you would like to request deletion of your K Chat account and associated data, use the contact method below.
          </p>
        </div>

        {/* Main Request Form or Confirmation */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-sm">
          {submitted ? (
            <div className="space-y-6 text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-navy-900">
                  Deletion Request Prepared
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Your deletion request for the account{" "}
                  <span className="font-semibold text-navy-900">{email}</span> has been formatted for K Chat Support.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-3">
                <div className="flex items-center gap-2 font-semibold text-navy-900">
                  <Info className="w-4 h-4 text-brand-600" />
                  <span>Manual Processing & Verification</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To ensure security and prevent unauthorized deletions, requests are verified and processed manually by the administrator upon receipt of your email at:
                </p>
                <p className="font-mono text-xs sm:text-sm bg-white p-2.5 rounded-lg border border-slate-200 text-brand-700 select-all font-semibold">
                  {siteConfig.supportEmail}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 hover:bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open in Email App</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-300 hover:border-slate-400 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>Copy Email Template</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setEmail("");
                    setReason("");
                  }}
                  className="text-xs font-semibold text-brand-600 hover:underline"
                >
                  ← Edit details or submit another request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900">
                  Submit an Account Deletion Request
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Enter your K Chat account email. Submitting this form prepares a pre-filled deletion request directed to our official support contact (<span className="font-semibold text-navy-900">{siteConfig.supportEmail}</span>).
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="account-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    K Chat account email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="account-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter the email associated with your K Chat account"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    This is your own Google account email used to sign into K Chat.
                  </span>
                </div>

                <div>
                  <label
                    htmlFor="deletion-reason"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Reason for Deletion (Optional)
                  </label>
                  <textarea
                    id="deletion-reason"
                    rows={3}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Tell us why you are deleting your account (optional feedback)"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  ></textarea>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-xs text-slate-600 space-y-1.5">
                <strong className="text-slate-800 block">How Your Request Is Processed:</strong>
                <p>
                  Requests are verified and processed manually by the administrator in accordance with Google Play developer requirements.
                </p>
                <p>
                  Official K Chat Support Contact:{" "}
                  <code className="text-brand-700 font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200 font-semibold">
                    {siteConfig.supportEmail}
                  </code>
                </p>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 hover:bg-rose-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
              >
                <Trash2 className="w-4 h-4" />
                <span>Submit Deletion Request</span>
              </button>
            </form>
          )}
        </div>

        {/* Google Play Policy Transparency Details */}
        <div className="space-y-6 sm:space-y-8">
          <h3 className="text-xl sm:text-2xl font-bold text-navy-900">
            Account Deletion & Data Retention Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* What is deleted */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <h4 className="font-bold text-navy-900 text-base flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>What Data Is Deleted</span>
              </h4>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc pl-5">
                <li>Authentication profile and Google account identifiers</li>
                <li>Display username, bio, and custom status motto</li>
                <li>Profile photo stored in Supabase</li>
                <li>Personal direct chat references and presence record</li>
                <li>Push notification tokens associated with your device</li>
              </ul>
            </div>

            {/* What happens to messages */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <h4 className="font-bold text-navy-900 text-base flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Messages Sent to Other Users</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In order to protect conversation continuity for the other participants, messages and media you previously sent to mutual conversations remain visible to the recipients in their own threads, while your personal profile identifiers are unlinked.
              </p>
            </div>

            {/* Legal Retention */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <h4 className="font-bold text-navy-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-600 shrink-0" />
                <span>Legally Required Retention</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Certain transaction records, security logs, or data subject to legal preservation requirements or ongoing dispute defense may be retained for the minimum statutory period mandated by applicable law.
              </p>
            </div>

            {/* Manual Contact Method */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <h4 className="font-bold text-navy-900 text-base flex items-center gap-2">
                <Mail className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>Direct Privacy & Support Contact</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You can contact our support team at any time with deletion inquiries:
              </p>
              <p className="text-xs sm:text-sm font-mono text-brand-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200 break-all select-all font-semibold">
                {siteConfig.supportEmail}
              </p>
            </div>
          </div>
        </div>

        {/* Helpful Navigation Links */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <Link href="/privacy" className="text-brand-600 hover:underline flex items-center gap-1">
            <span>Read our full Privacy Policy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/support" className="text-slate-600 hover:text-navy-900 hover:underline">
            Visit Support & FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
