"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Send,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import {
  GithubIcon,
  XIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/icons/BrandIcons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#07090e] border-t border-white/[0.08] text-zinc-400 font-sans">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[800px] rounded-full bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent blur-3xl" />

      {/* Pre-footer Call to Action (LangChain Style) */}
      <div className="relative border-b border-white/[0.07] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 sm:p-14 lg:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-4">
                  <Sparkles size={14} />
                  <span>Agent Engineering Platform</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Get started with{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                    LangChain & LangSmith
                  </span>
                </h2>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-300">
                  Control, govern, and compound intelligence with an open agent engineering platform.
                  Trusted by over 7,000+ forward-thinking organizations worldwide.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <Link
                  href="/chat"
                  className="group flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm sm:text-base font-bold text-zinc-950 transition-all duration-200 hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(52,211,153,0.4)]"
                >
                  <MessageSquare size={18} />
                  <span>Launch AI Studio</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="https://smith.langchain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm sm:text-base font-semibold text-zinc-200 transition-all hover:border-emerald-500/40 hover:bg-white/10 hover:text-white"
                >
                  Try LangSmith
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Links Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info & Newsletter */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/25 p-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full text-emerald-400"
                >
                  <path
                    d="M7.5 14.25C8.75 13 9.45 11.3 9.45 9.5C9.45 7.7 8.75 6 7.5 4.75L2.8 0C1.55 1.25 0.85 2.95 0.85 4.75C0.85 6.55 1.55 8.25 2.8 9.5L7.5 14.25Z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.3 14.7C16.05 13.45 14.35 12.75 12.55 12.75C10.75 12.75 9.05 13.45 7.8 14.7L12.55 19.45C13.8 20.7 15.5 21.4 17.3 21.4C19.1 21.4 20.8 20.7 22.05 19.45L17.3 14.7Z"
                    fill="currentColor"
                  />
                  <path
                    d="M2.8 19.45C4.05 20.7 5.75 21.4 7.55 21.4V14.7H0.85C0.85 16.5 1.55 18.2 2.8 19.45Z"
                    fill="#38BDF8"
                  />
                  <path
                    d="M19.15 7.8C17.9 6.55 16.2 5.85 14.4 5.85C12.6 5.85 10.9 6.55 9.65 7.8L14.4 12.55L19.15 7.8Z"
                    fill="#818CF8"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">LangChain</span>
            </Link>

            <p className="text-sm leading-relaxed text-zinc-400 max-w-sm">
              The open agent platform to build, evaluate, and monitor LLM-powered applications from prototype to enterprise scale.
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">
                Sign up for our newsletter to stay up to date
              </h4>
              <form onSubmit={handleSubscribe} className="mt-3 flex max-w-md gap-2.5">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-emerald-500/50 focus:bg-white/[0.08]"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
                >
                  <span>Subscribe</span>
                  <Send size={14} />
                </button>
              </form>

              {subscribed && (
                <div className="mt-2.5 flex items-center gap-2 text-sm text-emerald-400 font-medium">
                  <Check size={16} />
                  <span>Thank you! Your submission has been received.</span>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://github.com/langchain-ai/langchain"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LangChain on GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <GithubIcon className="h-4 w-4" />
              </a>

              <a
                href="https://twitter.com/LangChain"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LangChain on X (Twitter)"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <XIcon className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/company/langchain/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LangChain on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>

              <a
                href="https://www.youtube.com/@LangChain"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LangChain on YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 1: Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Products
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/chat" className="text-emerald-400 font-semibold hover:text-emerald-300 flex items-center gap-1.5">
                  <span>Interactive AI Studio</span>
                  <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 text-[10px] font-bold text-emerald-400">
                    APP
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="https://smith.langchain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  LangSmith Platform
                </a>
              </li>
              <li>
                <a
                  href="https://smith.langchain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  Observability & Tracing
                </a>
              </li>
              <li>
                <a
                  href="https://smith.langchain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  Evaluation & Testing
                </a>
              </li>
              <li>
                <a
                  href="https://smith.langchain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  Production Deployment
                </a>
              </li>
              <li>
                <a
                  href="https://www.langchain.com/deep-agents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  Deep Agents
                </a>
              </li>
              <li>
                <a
                  href="https://www.langchain.com/langgraph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition hover:text-emerald-400"
                >
                  <span>LangGraph</span>
                  <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 text-[10px] font-bold text-emerald-400">
                    2.0
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.langchain.com/langchain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  LangChain OSS
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Resources */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="https://docs.langchain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://academy.langchain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  LangChain Academy
                </a>
              </li>
              <li>
                <a
                  href="https://blog.langchain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  Engineering Blog
                </a>
              </li>
              <li>
                <a
                  href="https://www.langchain.com/customers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  Customer Stories
                </a>
              </li>
              <li>
                <a
                  href="https://changelog.langchain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  Product Changelog
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/langchain-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  GitHub Cookbooks
                </a>
              </li>
              <li>
                <a
                  href="https://support.langchain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  Support & Help
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="https://www.langchain.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.langchain.com/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition hover:text-emerald-400"
                >
                  <span>Careers</span>
                  <span className="rounded bg-sky-500/20 px-2 py-0.5 text-[10px] font-bold text-sky-400">
                    Hiring
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.langchain.com/langchain-partner-network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  Partner Network
                </a>
              </li>
              <li>
                <a
                  href="https://www.langchain.com/events"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  Events & Meetups
                </a>
              </li>
              <li>
                <a
                  href="https://trust.langchain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  Trust Center
                </a>
              </li>
              <li>
                <a
                  href="https://www.langchain.com/brand-assets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  Brand Assets
                </a>
              </li>
              <li>
                <a
                  href="https://www.langchain.com/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  Pricing & Plans
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Giant Ambient LangChain Vector Watermark */}
      <div className="relative flex justify-center overflow-hidden border-t border-white/[0.04] py-10 opacity-20 hover:opacity-35 transition-opacity">
        <svg
          viewBox="0 0 1151 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-auto text-emerald-500/40"
        >
          <text
            x="50%"
            y="65%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="100"
            fontWeight="bold"
            letterSpacing="8"
            fill="currentColor"
          >
            LANGCHAIN
          </text>
        </svg>
      </div>

      {/* Bottom Legal & Status Bar */}
      <div className="border-t border-white/[0.06] bg-[#05070a] px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          {/* Status Indicator (LangChain Style) */}
          <a
            href="https://status.smith.langchain.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-zinc-300 transition hover:border-emerald-500/30 hover:bg-white/5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold group-hover:text-white">All systems operational</span>
          </a>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-400">
            <a
              href="https://www.langchain.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition"
            >
              Privacy policy
            </a>
            <span>·</span>
            <a
              href="https://www.langchain.com/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition"
            >
              Terms of service
            </a>
            <span>·</span>
            <a
              href="https://trust.langchain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition"
            >
              Security
            </a>
            <span>·</span>
            <span>© 2026 LangChain, Inc. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
