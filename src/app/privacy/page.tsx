import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Mail, ExternalLink, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Official Privacy Policy for K Chat. Explains how information is collected, used, processed by user-triggered AI, and protected.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
      <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
          <span>Official Legal Document</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm font-medium text-slate-500">
          Last Updated: 27 September 2026
        </p>
      </div>

      {/* Quick Summary Notice */}
      <div className="my-8 p-5 rounded-2xl bg-brand-50/70 border border-brand-200/80 text-sm text-slate-700 space-y-2">
        <strong className="text-navy-900 block font-bold">Important Privacy Highlights:</strong>
        <p className="text-xs sm:text-sm leading-relaxed">
          K Chat&apos;s AI features are <strong>strictly user-triggered</strong>. K Chat does not continuously scan conversations in the background for AI analysis. Relevant content is processed only when you explicitly invoke an AI feature.
        </p>
      </div>

      {/* Policy Content */}
      <article className="prose prose-slate max-w-none space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">1. INTRODUCTION</h2>
          <p>
            K Chat (&ldquo;K Chat&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is an AI-powered real-time communication application that provides direct messaging, group conversations, media sharing, voice and video calling, and AI-powered conversation features.
          </p>
          <p>
            This Privacy Policy explains how K Chat accesses, collects, uses, stores, and shares information when you use the K Chat application.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">2. INFORMATION WE COLLECT</h2>
          <p>Depending on the features you use, K Chat may process:</p>

          <div className="space-y-3 pl-2 sm:pl-4 border-l-2 border-slate-200">
            <div>
              <strong className="text-navy-900 font-semibold block">Account Information:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-slate-600">
                <li>Name</li>
                <li>Email address</li>
                <li>Profile picture</li>
                <li>Google account identifier</li>
              </ul>
            </div>

            <div>
              <strong className="text-navy-900 font-semibold block">Profile Information:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-slate-600">
                <li>Username</li>
                <li>Profile picture</li>
                <li>About/motto information</li>
              </ul>
            </div>

            <div>
              <strong className="text-navy-900 font-semibold block">Messages and Communication Content:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-slate-600">
                <li>Text messages</li>
                <li>Images</li>
                <li>Videos</li>
                <li>Audio messages</li>
                <li>Documents and files</li>
                <li>Reply information</li>
                <li>Message timestamps</li>
                <li>Delivery and read status</li>
              </ul>
            </div>

            <div>
              <strong className="text-navy-900 font-semibold block">Group Information:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-slate-600">
                <li>Group name</li>
                <li>Group image</li>
                <li>Group membership information</li>
                <li>Group creator information</li>
                <li>Group messages</li>
                <li>Group message timestamps</li>
                <li>Group online/read status information</li>
              </ul>
            </div>

            <div>
              <strong className="text-navy-900 font-semibold block">Media and Files:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-slate-600">
                <li>Photos</li>
                <li>Videos</li>
                <li>Audio recordings</li>
                <li>Documents and files</li>
                <li>Camera content when used</li>
                <li>Microphone input when used for supported features</li>
              </ul>
            </div>

            <div>
              <strong className="text-navy-900 font-semibold block">Presence:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-slate-600">
                <li>Online status</li>
                <li>Last-seen information</li>
                <li>Message delivery status</li>
                <li>Message read status</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">3. HOW WE USE INFORMATION</h2>
          <p>K Chat uses information to:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Provide authentication and login</li>
            <li>Provide real-time messaging</li>
            <li>Deliver messages and notifications</li>
            <li>Display user profiles</li>
            <li>Provide direct and group conversations</li>
            <li>Upload and display user-selected media and files</li>
            <li>Provide voice and video calling</li>
            <li>Display online and last-seen status</li>
            <li>Provide delivery and read receipts</li>
            <li>Provide saved-message functionality</li>
            <li>Provide AI-powered communication features</li>
            <li>Detect potential scam indicators when Scam Guard is explicitly used</li>
            <li>Maintain and secure the application</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">4. AI FEATURES</h2>
          <p>K Chat provides:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Smart Reply</li>
            <li>Thread Summary</li>
            <li>Context Search</li>
            <li>Scam Guard</li>
            <li>K Chat Extension</li>
          </ul>
          <p>
            AI features are user-triggered.
          </p>
          <p>
            K Chat does not continuously scan conversations in the background for AI analysis.
          </p>
          <p>
            When an AI feature is explicitly used, relevant content selected or provided by the user may be processed to generate the requested result.
          </p>
          <p className="text-slate-500 italic text-xs sm:text-sm">
            AI-generated results may not always be accurate.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">5. AI SERVICE PROVIDER</h2>
          <p>
            K Chat uses Firebase AI Logic with Google&apos;s Gemini Developer API for AI-powered features.
          </p>
          <p>
            When an AI feature is used, relevant content and instructions required to generate the requested result may be transmitted through Firebase AI Logic to the selected Gemini service.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">6. THIRD-PARTY SERVICES</h2>
          <p>K Chat uses third-party services including:</p>
          <div className="space-y-3 pl-2 sm:pl-4 border-l-2 border-slate-200 text-slate-600">
            <div>
              <strong className="text-navy-900 block">Google / Firebase:</strong>
              Used for authentication, real-time database, notifications, and Firebase AI Logic.
            </div>
            <div>
              <strong className="text-navy-900 block">Google Sign-In:</strong>
              Used for account authentication and may provide name, email address, profile picture, and account identifier.
            </div>
            <div>
              <strong className="text-navy-900 block">Supabase:</strong>
              Used for storage of user-selected media and files.
            </div>
            <div>
              <strong className="text-navy-900 block">ZEGOCLOUD:</strong>
              Used for supported voice and video calling functionality.
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">7. INFORMATION SHARING</h2>
          <p>
            K Chat does not sell personal information.
          </p>
          <p>
            Information may be transmitted to service providers when necessary to provide requested functionality.
          </p>
          <p>
            K Chat may also disclose information when required by applicable law or legal process.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">8. USER-CONTROLLED CONTENT</h2>
          <p>
            Messages, profile information, media, files, and other content voluntarily provided may be visible to other users according to the application&apos;s functionality.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">9. DATA SECURITY</h2>
          <p>
            K Chat uses reasonable technical and organizational measures designed to protect user information.
          </p>
          <p>
            Data transmitted between the application and supported services is intended to use secure communication mechanisms such as HTTPS/TLS where supported.
          </p>
          <p className="text-slate-500 italic text-xs sm:text-sm">
            No internet-based service can guarantee absolute security.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">10. DATA RETENTION</h2>
          <p>
            K Chat retains information for as long as reasonably necessary to provide functionality and maintain accounts and communication history.
          </p>
          <p>
            AI results generated during an AI operation are designed to be temporary and are not intentionally stored as permanent K Chat conversation messages unless the user separately chooses to save or send content through normal application functionality.
          </p>
        </section>

        {/* Section 11 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">11. ACCOUNT AND DATA DELETION</h2>
          <p>
            Users may request deletion of their K Chat account and associated personal information.
          </p>
          <p>
            Deletion requests may be subject to technical limitations, legal requirements, legitimate security requirements, and information that must be retained where required by law.
          </p>
          <p>
            Users may use the{" "}
            <Link href="/account-deletion" className="text-brand-600 font-semibold underline">
              Account Deletion page
            </Link>{" "}
            or contact the privacy contact listed by K Chat.
          </p>
        </section>

        {/* Section 12 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">12. CHILDREN&apos;S PRIVACY</h2>
          <p>
            K Chat is not specifically directed toward children.
          </p>
          <p>
            K Chat does not knowingly collect personal information from children in violation of applicable laws.
          </p>
        </section>

        {/* Section 13 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">13. CAMERA AND MICROPHONE</h2>
          <p>Camera access may be used for:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Profile pictures</li>
            <li>Photos</li>
            <li>Videos</li>
            <li>Other user-requested camera functionality</li>
          </ul>
          <p className="pt-2">Microphone access may be used for:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Audio messages</li>
            <li>Voice calls</li>
            <li>Video calls</li>
          </ul>
          <p className="pt-2 text-slate-600">
            K Chat does not intentionally use the camera or microphone for continuous background recording.
          </p>
        </section>

        {/* Section 14 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">14. FILE AND MEDIA ACCESS</h2>
          <p>
            K Chat accesses files and media when users voluntarily select or capture content for use within K Chat.
          </p>
        </section>

        {/* Section 15 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">15. NOTIFICATIONS</h2>
          <p>K Chat may use push notifications for:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>New messages</li>
            <li>Media messages</li>
            <li>Calls</li>
            <li>Other relevant communication events</li>
          </ul>
        </section>

        {/* Section 16 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">16. CHANGES TO THIS PRIVACY POLICY</h2>
          <p>
            K Chat may update this Privacy Policy from time to time.
          </p>
          <p>
            The Last Updated date indicates the most recent update.
          </p>
        </section>

        {/* Section 17 */}
        <section className="space-y-3 p-5 rounded-2xl bg-slate-100/80 border border-slate-200">
          <h2 className="text-xl font-bold text-navy-900">17. PRIVACY CONTACT</h2>
          <div className="text-sm text-slate-700 space-y-1">
            <p><strong>App Name:</strong> {siteConfig.name}</p>
            <p><strong>Developer:</strong> {siteConfig.developerName}</p>
            <p>
              <strong>Privacy Contact Email:</strong>{" "}
              <code className="px-2 py-0.5 rounded bg-white text-brand-600 border border-slate-200 font-mono text-xs">
                {siteConfig.privacyEmail}
              </code>
            </p>
          </div>
        </section>

        {/* Section 18 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">18. THIRD-PARTY PRIVACY POLICIES</h2>
          <p className="text-sm text-slate-600">
            For more information regarding third-party service providers used by K Chat, refer to their respective privacy statements:
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={siteConfig.thirdPartyLinks.googlePrivacy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-600 hover:underline"
              >
                <span>Google Privacy Policy</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <a
                href={siteConfig.thirdPartyLinks.supabasePrivacy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-600 hover:underline"
              >
                <span>Supabase Privacy Policy</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <a
                href={siteConfig.thirdPartyLinks.zegoPrivacy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-600 hover:underline"
              >
                <span>ZEGOCLOUD Privacy Policy</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
          </ul>
        </section>
      </article>

      {/* Bottom Link to Account Deletion */}
      <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-slate-500">
          Need to remove your account or data?
        </span>
        <Link
          href="/account-deletion"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 hover:underline"
        >
          <span>Visit Account Deletion Page</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        </div>
      </div>
    </div>
  );
}
