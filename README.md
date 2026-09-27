# KChat Official Website

The official, production-ready website for **KChat** — an AI-powered intelligent real-time communication platform for Android.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Ready for seamless deployment to **Vercel**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm start
```

---

## 🧭 Routes

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Hero with real app mockup, Why KChat, AI USP spotlight, Extension preview, Full communication feature matrix, Privacy callout. |
| `/features` | **Features** | Complete directory of direct messaging, group conversations, World Chat, voice & video calling, presence, attachments, and receipts. |
| `/ai` | **KChat AI** | Dedicated deep dive into Smart Reply, Thread Summary, Context Search, Scam Guard, Extension workflow, and privacy architecture. |
| `/privacy` | **Privacy Policy** | 18-section legally accurate privacy policy covering data practices, user-triggered AI, third parties, and contacts. |
| `/terms` | **Terms of Service** | Comprehensive terms covering acceptable use, AI content accuracy notices, Scam Guard disclaimers, and liability limits. |
| `/account-deletion` | **Account Deletion** | Dedicated portal complying with Google Play account deletion policy with manual submission form and retention disclosures. |
| `/support` | **Support & Help** | FAQ knowledge base across accounts, messaging, AI, calls, privacy, and support contact details. |

---

## ⚙️ Configuration & Placeholders

All contact emails, store links, and external references are managed in a single central configuration file:

📁 **[`src/config/site.ts`](src/config/site.ts)**

```typescript
export const siteConfig = {
  name: "KChat",
  tagline: "AI That Understands Your Conversations.",
  developerName: "KUNAL",
  supportEmail: "kunal.connect7@gmail.com",
  privacyEmail: "kunal.connect7@gmail.com",
  googlePlayUrl: "#", // Replace with official Google Play store listing URL when published
  // ...
};
```

When ready to launch, update `src/config/site.ts` with your real public email and Play Store link.

---

## 🖼️ Media & Screenshots

Real app screenshots and logos are housed in:
📁 `public/images/`
- `KChatLogo.png`
- `ChattingScreen.jpg`
- `DirectChatHomeScreen.jpg`
- `GroupChatHomeScreen.jpg`
- `GroupChattingScreen.jpg`
- `SmartReplyUI.jpg`
- `ThreadSummaryUI.jpg`
- `ContextSearchUI.jpg`
- `ContextSearchResultUI.jpg`
- `ScamGuardUI.jpg`
- `KChatExtensionUI.jpg`
- `KChatExtensionSR.jpg`
- `KChatExtensionTS.jpg`
- `ProfileScreen.jpg`
- `LoginScreen.jpg`

---

## 🚢 Deployment to Vercel

1. Push this repository to GitHub/GitLab.
2. Import the project into your [Vercel Dashboard](https://vercel.com).
3. Framework Preset: **Next.js**.
4. Build Command: `npm run build`.
5. Output Directory: `.next`.
6. Click **Deploy**.
