"use client";

import { GithubIcon } from "@/components/icons/BrandIcons";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  CheckCircle,
  ChevronDown,
  Code2,
  ExternalLink,
  FileText,
  GraduationCap,
  Layers,
  Lock,
  Menu,
  MessageSquare,
  Rocket,
  Shield,
  Users,
  X
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [showBanner, setShowBanner] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSectionOpen, setMobileSectionOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileSection = (name: string) => {
    setMobileSectionOpen((prev) => (prev === name ? null : name));
  };

  return (
    <header ref={navRef} className="sticky top-0 z-50 w-full font-sans">
      {/* Top Announcement Banner (LangChain Style) */}
      {showBanner && (
        <div className="relative isolate flex items-center justify-center gap-x-2.5 overflow-hidden bg-gradient-to-r from-emerald-950/90 via-teal-900/70 to-cyan-950/90 px-4 py-2 text-xs sm:text-sm border-b border-emerald-500/20 text-zinc-200">
          <div className="flex items-center gap-2 truncate">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-300 shrink-0">New Release:</span>
            <span className="truncate hidden md:inline">
              Interrupt Conference is coming to London! Experience agent engineering live.
            </span>
            <span className="truncate md:hidden">Interrupt London 2026</span>
          </div>

          <a
            href="https://interrupt.langchain.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors ml-1 shrink-0"
          >
            <span>Get tickets</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </a>

          <button
            onClick={() => setShowBanner(false)}
            aria-label="Close banner"
            className="absolute right-3 p-1 text-zinc-400 hover:text-white transition-colors"
          >
            <X size={15} />
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-200 ${
          scrolled
            ? "bg-[#0b0f17]/95 backdrop-blur-md border-b border-white/[0.1] shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            : "bg-[#0b0f17]/90 backdrop-blur-sm border-b border-white/[0.08]"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-6 xl:gap-8 shrink-0">
            <Link href="/" className="group flex items-center gap-2.5 shrink-0">
              {/* LangChain Vector Logo */}
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/25 p-1.5 transition-all duration-300 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
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

              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-white transition group-hover:text-emerald-300">
                  LangChain
                </span>
                <span className="hidden sm:inline-block rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                  Studio
                </span>
              </div>
            </Link>

            {/* Center Desktop Navigation (Visible on lg: 1024px and up) */}
            <div className="hidden lg:flex lg:items-center lg:gap-1 xl:gap-2">
              {/* Products Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("products")}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    activeDropdown === "products"
                      ? "text-white bg-white/10"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      activeDropdown === "products" ? "rotate-180 text-emerald-400" : "text-zinc-500"
                    }`}
                  />
                </button>

                {/* Products Mega Menu Dropdown */}
                {activeDropdown === "products" && (
                  <div className="absolute left-0 mt-3 w-[660px] rounded-2xl border border-white/10 bg-[#0d121c]/98 backdrop-blur-2xl p-6 shadow-2xl shadow-black/90 animate-in fade-in zoom-in-95 duration-150">
                    <div className="grid grid-cols-2 gap-6">
                      {/* LangSmith Platform */}
                      <div>
                        <div className="flex items-center justify-between pb-2 border-b border-white/10">
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                            LangSmith Platform
                          </span>
                          <span className="text-xs text-zinc-500">Enterprise Ready</span>
                        </div>
                        <div className="mt-3 space-y-1">
                          <a
                            href="https://smith.langchain.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-3 rounded-xl p-2 transition hover:bg-white/5"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20">
                              <Activity size={16} />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 text-sm font-semibold text-zinc-100 group-hover:text-emerald-400">
                                <span>Observability</span>
                                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed">
                                Real-time tracing and monitoring for agents
                              </p>
                            </div>
                          </a>

                          <a
                            href="https://smith.langchain.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-3 rounded-xl p-2 transition hover:bg-white/5"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20">
                              <CheckCircle size={16} />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 text-sm font-semibold text-zinc-100 group-hover:text-sky-400">
                                <span>Evaluation</span>
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed">
                                Test and benchmark prompt quality & accuracy
                              </p>
                            </div>
                          </a>

                          <a
                            href="https://smith.langchain.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-3 rounded-xl p-2 transition hover:bg-white/5"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20">
                              <Rocket size={16} />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 text-sm font-semibold text-zinc-100 group-hover:text-violet-400">
                                <span>Deployment</span>
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed">
                                Host and auto-scale agents with 1-click
                              </p>
                            </div>
                          </a>

                          <a
                            href="https://smith.langchain.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-3 rounded-xl p-2 transition hover:bg-white/5"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20">
                              <Shield size={16} />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 text-sm font-semibold text-zinc-100 group-hover:text-amber-400">
                                <span>Sandboxes</span>
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed">
                                Safe container execution & model gateway
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>

                      {/* Open Source Frameworks */}
                      <div>
                        <div className="flex items-center justify-between pb-2 border-b border-white/10">
                          <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                            Agent Frameworks
                          </span>
                          <span className="text-xs text-zinc-500">Open Source</span>
                        </div>
                        <div className="mt-3 space-y-1">
                          <a
                            href="https://www.langchain.com/langgraph"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-3 rounded-xl p-2 transition hover:bg-white/5"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20">
                              <Layers size={16} />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 text-sm font-semibold text-zinc-100 group-hover:text-indigo-400">
                                <span>LangGraph</span>
                                <span className="rounded bg-indigo-500/20 px-1.5 py-0.2 text-[10px] font-bold text-indigo-300">
                                  2.0
                                </span>
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed">
                                Cyclical multi-agent state graphs
                              </p>
                            </div>
                          </a>

                          <a
                            href="https://www.langchain.com/langchain"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-3 rounded-xl p-2 transition hover:bg-white/5"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400 group-hover:bg-teal-500/20">
                              <Code2 size={16} />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 text-sm font-semibold text-zinc-100 group-hover:text-teal-400">
                                <span>LangChain Core</span>
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed">
                                Modular abstractions for prompts & tools
                              </p>
                            </div>
                          </a>

                          <Link
                            href="/chat"
                            className="group flex items-start gap-3 rounded-xl p-2 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                              <MessageSquare size={16} />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 text-sm font-bold text-emerald-400">
                                <span>Interactive Chat Studio</span>
                              </div>
                              <p className="text-xs text-zinc-300 leading-relaxed">
                                Test agents live in full-screen workspace
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Learn Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("learn")}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    activeDropdown === "learn"
                      ? "text-white bg-white/10"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>Learn</span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      activeDropdown === "learn" ? "rotate-180 text-emerald-400" : "text-zinc-500"
                    }`}
                  />
                </button>

                {activeDropdown === "learn" && (
                  <div className="absolute left-0 mt-3 w-72 rounded-2xl border border-white/10 bg-[#0d121c]/98 backdrop-blur-2xl p-3 shadow-2xl shadow-black/90 animate-in fade-in zoom-in-95 duration-150 space-y-1">
                    <a
                      href="https://academy.langchain.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/5"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                        <GraduationCap size={16} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-zinc-100 group-hover:text-emerald-400">
                          LangChain Academy
                        </div>
                        <div className="text-xs text-zinc-400">Interactive courses</div>
                      </div>
                    </a>

                    <a
                      href="https://blog.langchain.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/5"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                        <FileText size={16} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-zinc-100 group-hover:text-sky-400">
                          Engineering Blog
                        </div>
                        <div className="text-xs text-zinc-400">Updates & research</div>
                      </div>
                    </a>

                    <a
                      href="https://www.langchain.com/customers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/5"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                        <Users size={16} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-zinc-100 group-hover:text-violet-400">
                          Customer Stories
                        </div>
                        <div className="text-xs text-zinc-400">Enterprise case studies</div>
                      </div>
                    </a>
                  </div>
                )}
              </div>

              {/* Company Dropdown (Visible on xl: 1280px+) */}
              <div className="relative hidden xl:block">
                <button
                  onClick={() => toggleDropdown("company")}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    activeDropdown === "company"
                      ? "text-white bg-white/10"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>Company</span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      activeDropdown === "company" ? "rotate-180 text-emerald-400" : "text-zinc-500"
                    }`}
                  />
                </button>

                {activeDropdown === "company" && (
                  <div className="absolute left-0 mt-3 w-64 rounded-2xl border border-white/10 bg-[#0d121c]/98 backdrop-blur-2xl p-3 shadow-2xl shadow-black/90 animate-in fade-in zoom-in-95 duration-150 space-y-1">
                    <a
                      href="https://www.langchain.com/about"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/5"
                    >
                      <Building2 size={16} className="text-zinc-400 group-hover:text-white" />
                      <div>
                        <div className="text-sm font-semibold text-zinc-100 group-hover:text-emerald-400">About Us</div>
                        <div className="text-xs text-zinc-400">Mission and vision</div>
                      </div>
                    </a>

                    <a
                      href="https://www.langchain.com/careers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/5"
                    >
                      <Briefcase size={16} className="text-zinc-400 group-hover:text-white" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-sm font-semibold text-zinc-100 group-hover:text-emerald-400">
                          <span>Careers</span>
                          <span className="rounded-full bg-emerald-500/20 px-1.5 py-0.2 text-[10px] text-emerald-400 font-bold">
                            Hiring
                          </span>
                        </div>
                        <div className="text-xs text-zinc-400">Join our team</div>
                      </div>
                    </a>

                    <a
                      href="https://trust.langchain.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/5"
                    >
                      <Lock size={16} className="text-zinc-400 group-hover:text-white" />
                      <div>
                        <div className="text-sm font-semibold text-zinc-100 group-hover:text-emerald-400">Trust Center</div>
                        <div className="text-xs text-zinc-400">Security & compliance</div>
                      </div>
                    </a>
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <a
                href="https://docs.langchain.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <span>Docs</span>
                <ExternalLink size={13} className="text-zinc-500" />
              </a>

              <a
                href="https://www.langchain.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                Pricing
              </a>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* GitHub Stars (Visible on xl: 1280px+) */}
            <a
              href="https://github.com/langchain-ai/langchain"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>Star</span>
              <span className="rounded-full bg-white/10 px-1.5 py-0.2 text-[11px] text-zinc-300 font-mono">
                98.4k
              </span>
            </a>

            {/* Try LangSmith (Visible on 2xl: 1400px+) */}
            <a
              href="https://smith.langchain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden 2xl:inline-flex rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-zinc-200 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              Try LangSmith
            </a>

            {/* Primary Action Button: Launch Studio / Open Chat (Visible on ALL screens) */}
            <Link
              href="/chat"
              className="group flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-1.5 sm:px-4.5 sm:py-2 text-xs sm:text-sm font-bold text-zinc-950 transition-all duration-200 hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.45)] shrink-0"
            >
              <MessageSquare size={15} />
              <span>Launch Studio</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>

            {/* Mobile / Tablet Menu Button (Visible below lg: 1024px) */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="lg:hidden rounded-lg p-2 text-zinc-300 hover:bg-white/10 hover:text-white transition"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#090d15] px-5 py-6 lg:hidden max-h-[85vh] overflow-y-auto">
            <div className="space-y-4">
              <Link
                href="/chat"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-sm font-bold text-zinc-950 hover:bg-emerald-400 transition"
              >
                <MessageSquare size={17} />
                <span>Open Full-Screen Chat Studio</span>
              </Link>

              {/* Products Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileSection("products")}
                  className="flex w-full items-center justify-between py-2 text-sm font-semibold text-zinc-200"
                >
                  <span>Products</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      mobileSectionOpen === "products" ? "rotate-180 text-emerald-400" : "text-zinc-500"
                    }`}
                  />
                </button>
                {mobileSectionOpen === "products" && (
                  <div className="mt-2 space-y-2 pl-3 border-l border-white/10">
                    <p className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                      LangSmith Platform
                    </p>
                    <a
                      href="https://smith.langchain.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1 text-sm text-zinc-300 hover:text-emerald-400"
                    >
                      Observability & Tracing
                    </a>
                    <a
                      href="https://smith.langchain.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1 text-sm text-zinc-300 hover:text-emerald-400"
                    >
                      Evaluation & Benchmarking
                    </a>
                    <a
                      href="https://smith.langchain.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1 text-sm text-zinc-300 hover:text-emerald-400"
                    >
                      Deployment & Scaling
                    </a>
                    <p className="pt-2 text-xs uppercase font-bold tracking-wider text-sky-400">
                      Open Source Frameworks
                    </p>
                    <a
                      href="https://www.langchain.com/langgraph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1 text-sm text-zinc-300 hover:text-sky-400"
                    >
                      LangGraph (Stateful Agents)
                    </a>
                    <a
                      href="https://www.langchain.com/langchain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1 text-sm text-zinc-300 hover:text-sky-400"
                    >
                      LangChain Library
                    </a>
                  </div>
                )}
              </div>

              {/* Learn Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileSection("learn")}
                  className="flex w-full items-center justify-between py-2 text-sm font-semibold text-zinc-200"
                >
                  <span>Learn</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      mobileSectionOpen === "learn" ? "rotate-180 text-emerald-400" : "text-zinc-500"
                    }`}
                  />
                </button>
                {mobileSectionOpen === "learn" && (
                  <div className="mt-2 space-y-2 pl-3 border-l border-white/10">
                    <a
                      href="https://academy.langchain.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1 text-sm text-zinc-300 hover:text-emerald-400"
                    >
                      LangChain Academy
                    </a>
                    <a
                      href="https://blog.langchain.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1 text-sm text-zinc-300 hover:text-emerald-400"
                    >
                      Engineering Blog
                    </a>
                    <a
                      href="https://www.langchain.com/customers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1 text-sm text-zinc-300 hover:text-emerald-400"
                    >
                      Customer Case Studies
                    </a>
                  </div>
                )}
              </div>

              {/* Company Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileSection("company")}
                  className="flex w-full items-center justify-between py-2 text-sm font-semibold text-zinc-200"
                >
                  <span>Company</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      mobileSectionOpen === "company" ? "rotate-180 text-emerald-400" : "text-zinc-500"
                    }`}
                  />
                </button>
                {mobileSectionOpen === "company" && (
                  <div className="mt-2 space-y-2 pl-3 border-l border-white/10">
                    <a
                      href="https://www.langchain.com/about"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1 text-sm text-zinc-300 hover:text-emerald-400"
                    >
                      About
                    </a>
                    <a
                      href="https://www.langchain.com/careers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1 text-sm text-zinc-300 hover:text-emerald-400"
                    >
                      Careers
                    </a>
                    <a
                      href="https://trust.langchain.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1 text-sm text-zinc-300 hover:text-emerald-400"
                    >
                      Trust & Security
                    </a>
                  </div>
                )}
              </div>

              <div className="border-t border-white/10 pt-3 space-y-2.5">
                <a
                  href="https://docs.langchain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-sm font-medium text-zinc-300 hover:text-white"
                >
                  <span>Documentation</span>
                  <ExternalLink size={14} className="text-zinc-500" />
                </a>

                <a
                  href="https://www.langchain.com/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-medium text-zinc-300 hover:text-white"
                >
                  Pricing
                </a>
              </div>

              <div className="border-t border-white/10 pt-4 flex flex-col gap-2.5">
                <a
                  href="https://github.com/langchain-ai/langchain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-zinc-200"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>Star on GitHub (98.4k)</span>
                </a>
                <a
                  href="https://smith.langchain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/15 py-2.5 text-xs font-semibold text-zinc-200"
                >
                  <span>Try LangSmith</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
