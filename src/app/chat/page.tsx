"use client";

import { askAI } from "@/services/ai.service";
import MarkdownRenderer from "@/components/chat/MarkdownRenderer";
import Link from "next/link";
import {
  ArrowUp,
  BrainCircuit,
  Check,
  ChevronLeft,
  Code2,
  Copy,
  Lightbulb,
  Menu,
  MessageCircle,
  PanelLeft,
  Plus,
  Sparkles,
  Trash2,
  Zap,
  Bot,
  ArrowLeft,
  Search,
  Maximize2,
  Minimize2,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type Chat = {
  id: string;
  title: string;
  messages: Message[];
};

const suggestions = [
  {
    icon: Code2,
    title: "Build LangGraph Stateful Agent",
    description: "Multi-agent coordination with persistence & checkpointers",
    prompt: "Write a complete LangGraph agent example in TypeScript with StateGraph, custom tool binding, and memory checkpointer.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: BrainCircuit,
    title: "React & Next.js Learning Flow",
    description: "Full roadmap from basics to AI engineering",
    prompt: "Create a complete step-by-step React & Next.js learning flow diagram and roadmap for modern frontend & AI UI development.",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  {
    icon: Lightbulb,
    title: "Production Agent Architectures",
    description: "Enterprise system patterns & observability",
    prompt: "Suggest 4 unique, production-grade AI agent use cases using LangSmith observability and evaluation.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Zap,
    title: "Optimize Prompt Latency & Cost",
    description: "Token efficiency, caching & latency flame charts",
    prompt: "What are the best practices to reduce LLM latency and token costs in production with LangSmith evaluation?",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
  },
];

const quickChips = [
  "React Learning Flow",
  "LangGraph Agent Code",
  "Reduce Token Latency",
  "Explain Codebase",
];

const createId = () => crypto.randomUUID();

export default function ChatPage() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isFullWidth, setIsFullWidth] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const requestLock = useRef(false);

  const activeChat = chats.find((chat) => chat.id === activeChatId);
  const messages = activeChat?.messages ?? [];

  const filteredChats = chats.filter((chat) =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading]);

  function newChat() {
    if (requestLock.current) return;
    setActiveChatId(null);
    setQuestion("");
    setMobileSidebarOpen(false);
    textareaRef.current?.focus();
  }

  function deleteChat(id: string) {
    if (requestLock.current) return;

    setChats((prev) => prev.filter((chat) => chat.id !== id));
    if (activeChatId === id) {
      setActiveChatId(null);
    }
  }

  async function handleSubmit(
    e?: FormEvent<HTMLFormElement>,
    suggestedText?: string
  ) {
    e?.preventDefault();

    const text = (suggestedText ?? question).trim();
    if (!text || requestLock.current) return;

    requestLock.current = true;
    setLoading(true);
    setQuestion("");

    const chatId = activeChatId ?? createId();

    const userMessage: Message = {
      id: createId(),
      role: "user",
      content: text,
    };

    if (!activeChatId) {
      setChats((prev) => [
        {
          id: chatId,
          title: text.slice(0, 48),
          messages: [userMessage],
        },
        ...prev,
      ]);
      setActiveChatId(chatId);
    } else {
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === chatId
            ? { ...chat, messages: [...chat.messages, userMessage] }
            : chat
        )
      );
    }

    try {
      const result = await askAI(text);
      const answer = result.data.answer;

      const assistantMessage: Message = {
        id: createId(),
        role: "assistant",
        content:
          typeof answer === "string" && answer.trim()
            ? answer
            : "No response received.",
      };

      setChats((prev) =>
        prev.map((chat) =>
          chat.id === chatId
            ? {
                ...chat,
                messages: [...chat.messages, assistantMessage],
              }
            : chat
        )
      );
    } catch (error) {
      const errorMessage: Message = {
        id: createId(),
        role: "assistant",
        content:
          error instanceof Error
            ? `Sorry, something went wrong: ${error.message}`
            : "Unable to get a response. Please try again.",
      };

      setChats((prev) =>
        prev.map((chat) =>
          chat.id === chatId
            ? {
                ...chat,
                messages: [...chat.messages, errorMessage],
              }
            : chat
        )
      );
    } finally {
      requestLock.current = false;
      setLoading(false);
      textareaRef.current?.focus();
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      void handleSubmit();
    }
  }

  async function copyMessage(message: Message) {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopiedId(message.id);
      window.setTimeout(() => setCopiedId(null), 1800);
    } catch {
      setCopiedId(null);
    }
  }

  const sidebarContent = (
    <div className="flex h-full flex-col bg-[#0b0e15] border-r border-white/[0.08] font-sans">
      {/* Brand Header */}
      <div className="flex h-16 items-center justify-between px-5 border-b border-white/[0.08]">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/25 p-1 text-emerald-400 group-hover:bg-emerald-500/20 transition">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
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
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-1.5">
              <span>LangChain AI</span>
              <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 text-[10px] text-emerald-400 font-semibold">
                Studio
              </span>
            </div>
            <p className="text-xs text-zinc-400">Agent Workspace</p>
          </div>
        </Link>

        <button
          onClick={() => {
            setSidebarOpen(false);
            setMobileSidebarOpen(false);
          }}
          className="rounded-lg p-1.5 text-zinc-400 transition hover:bg-white/10 hover:text-white"
          aria-label="Close sidebar"
        >
          <ChevronLeft size={18} />
        </button>
      </div>

      {/* New Chat Button */}
      <div className="px-4 pt-4">
        <button
          onClick={newChat}
          disabled={loading}
          className="flex w-full items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-300 transition-all hover:bg-emerald-500/20 hover:border-emerald-500/50 disabled:opacity-50"
        >
          <div className="flex items-center gap-2">
            <Plus size={18} />
            <span>New conversation</span>
          </div>
          <span className="font-mono text-xs text-emerald-400/70">⌘K</span>
        </button>
      </div>

      {/* Search Input for Threads */}
      {chats.length > 2 && (
        <div className="px-4 pt-3">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-3 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search conversations..."
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] pl-9 pr-3 py-2 text-xs text-white placeholder:text-zinc-500 outline-none focus:border-emerald-500/40"
            />
          </div>
        </div>
      )}

      {/* Conversations List */}
      <div className="mt-4 flex-1 overflow-y-auto px-3">
        <p className="mb-2 px-3 text-xs font-bold uppercase tracking-wider text-zinc-400">
          Recent Threads
        </p>

        {chats.length === 0 ? (
          <div className="px-3 py-5 text-sm leading-relaxed text-zinc-500">
            No conversations yet. Choose a suggested topic or ask a question to begin.
          </div>
        ) : (
          <div className="space-y-1">
            {filteredChats.map((chat) => (
              <div
                key={chat.id}
                className={`group flex items-center gap-2 rounded-xl transition ${
                  activeChatId === chat.id
                    ? "bg-white/10 text-white font-semibold"
                    : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
                }`}
              >
                <button
                  onClick={() => {
                    if (loading) return;
                    setActiveChatId(chat.id);
                    setMobileSidebarOpen(false);
                  }}
                  disabled={loading}
                  className="flex min-w-0 flex-1 items-center gap-2.5 px-3 py-2.5 text-left disabled:opacity-60"
                >
                  <MessageCircle size={16} className="shrink-0 text-emerald-400" />
                  <span className="truncate text-sm">{chat.title}</span>
                </button>
                <button
                  onClick={() => deleteChat(chat.id)}
                  disabled={loading}
                  aria-label={`Delete ${chat.title}`}
                  className="mr-2 rounded-md p-1.5 text-zinc-500 opacity-0 transition hover:text-red-400 group-hover:opacity-100 focus:opacity-100 disabled:opacity-30"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Model Spec Badge & Back to Home */}
      <div className="p-4 border-t border-white/[0.08] space-y-3">
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
            <Sparkles size={14} />
            <span>Gemini 2.5 Flash Engine</span>
          </div>
          <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
            Connected to LangChain agent runtime.
          </p>
        </div>

        <Link
          href="/"
          className="flex items-center justify-center gap-2 w-full rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/10 transition"
        >
          <ArrowLeft size={16} />
          <span>Back to LangChain Home</span>
        </Link>
      </div>
    </div>
  );

  // Responsive max width class that gives spacious, readable reading width
  const containerWidthClass = isFullWidth
    ? "w-full max-w-full px-4 sm:px-8 lg:px-16"
    : "w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-8 lg:px-12";

  return (
    <div className="flex h-dvh w-full overflow-hidden bg-[#080b12] font-sans text-zinc-100">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden shrink-0 overflow-hidden transition-[width] duration-300 md:block ${
          sidebarOpen ? "w-[280px]" : "w-0 border-none"
        }`}
      >
        <div className="h-full w-[280px]">{sidebarContent}</div>
      </aside>

      {/* Mobile Sidebar Modal */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close menu"
          />
          <aside className="relative z-10 h-full w-[300px] max-w-[85vw] shadow-2xl">
            {sidebarContent}
          </aside>
        </div>
      )}

      {/* Main Chat Stream & Input Area */}
      <div className="flex min-w-0 flex-1 flex-col bg-[#07090e]">
        {/* Top Chat Bar (Dedicated minimal bar, NO website header) */}
        <header className="z-10 flex h-16 shrink-0 items-center justify-between border-b border-white/[0.08] px-4 sm:px-8 bg-[#0a0d14]/90 backdrop-blur-md">
          <div className="flex items-center gap-3.5 min-w-0">
            <button
              onClick={() => {
                if (window.innerWidth < 768) {
                  setMobileSidebarOpen(true);
                } else {
                  setSidebarOpen((prev) => !prev);
                }
              }}
              className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white shrink-0"
              aria-label="Toggle sidebar"
            >
              <PanelLeft size={19} className="hidden md:block" />
              <Menu size={20} className="md:hidden" />
            </button>

            <Link
              href="/"
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition px-2.5 py-1.5 rounded-lg border border-white/10 bg-white/5 shrink-0"
            >
              <ArrowLeft size={13} />
              <span>Home</span>
            </Link>

            <div className="h-4 w-px bg-white/10 hidden sm:block shrink-0" />

            <span className="truncate text-sm sm:text-base font-semibold text-white">
              {activeChat?.title ?? "New Conversation"}
            </span>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            {/* Width Toggle: Comfort vs Ultra-Wide */}
            <button
              onClick={() => setIsFullWidth((prev) => !prev)}
              title={isFullWidth ? "Standard Wide View" : "Ultra Wide Reading View"}
              className="hidden lg:flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-zinc-400 hover:text-white hover:bg-white/10 transition"
            >
              {isFullWidth ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
              <span>{isFullWidth ? "Standard View" : "Expanded View"}</span>
            </button>

            <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              LangChain Runtime
            </span>

            <button
              onClick={newChat}
              disabled={loading}
              title="New Chat"
              aria-label="New chat"
              className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs sm:text-sm font-semibold text-zinc-200 transition hover:bg-white/10 hover:text-white disabled:opacity-40"
            >
              <Plus size={16} />
              <span className="hidden sm:inline">New Chat</span>
            </button>
          </div>
        </header>

        {/* Message Stream with Comfortable Wide Reading Area */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          {messages.length === 0 ? (
            <div className={`${containerWidthClass} flex min-h-full flex-col items-center justify-center py-12`}>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/25 bg-emerald-500/10 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                <Bot size={32} className="text-emerald-400" />
              </div>

              <div className="mb-3 flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  LangChain Studio AI
                </span>
              </div>

              <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-white max-w-2xl">
                How can I assist your agent build today?
              </h2>
              <p className="mt-3 max-w-xl text-center text-sm sm:text-base leading-relaxed text-zinc-400">
                Ask architectural questions, generate roadmaps, design LangGraph cyclical workflows, debug prompts, or write clean code.
              </p>

              <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
                {suggestions.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.title}
                      onClick={() => void handleSubmit(undefined, item.prompt)}
                      disabled={loading}
                      className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0f131d] p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-[#141926] disabled:opacity-50"
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
                      >
                        <Icon size={22} />
                      </div>
                      <div className="min-w-0 pt-0.5">
                        <p className="text-sm font-semibold text-zinc-100 group-hover:text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-zinc-400">
                          {item.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className={`${containerWidthClass} space-y-8 py-8`}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-4 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 shadow-md mt-1">
                      <Bot size={20} />
                    </div>
                  )}

                  <div
                    className={
                      message.role === "user"
                        ? "max-w-[85%] sm:max-w-[80%] rounded-2xl rounded-tr-sm border border-emerald-500/30 bg-[#14202e] px-6 py-4 text-[15px] sm:text-base text-zinc-100 shadow-md"
                        : "min-w-0 flex-1 rounded-2xl border border-white/[0.08] bg-[#0c1018]/80 p-5 sm:p-7 shadow-sm"
                    }
                  >
                    {message.role === "assistant" && (
                      <div className="mb-3 flex items-center justify-between border-b border-white/[0.08] pb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                            LangChain Assistant
                          </span>
                          <span className="rounded bg-emerald-500/15 px-2 py-0.5 text-[11px] font-mono text-emerald-300">
                            Gemini 2.5
                          </span>
                        </div>
                        <button
                          onClick={() => void copyMessage(message)}
                          className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-400 transition hover:bg-white/10 hover:text-white"
                          title="Copy response"
                          aria-label="Copy response"
                        >
                          {copiedId === message.id ? (
                            <>
                              <Check size={14} className="text-emerald-400" />
                              <span className="text-emerald-400 font-medium">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    {message.role === "assistant" ? (
                      <div className="w-full overflow-hidden">
                        <MarkdownRenderer content={message.content} />
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap break-words leading-relaxed">
                        {message.content}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex items-start gap-4 w-full">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 mt-1">
                    <Sparkles size={20} />
                  </div>
                  <div className="flex-1 rounded-2xl border border-white/[0.08] bg-[#0c1018]/80 p-5">
                    <div className="flex items-center gap-2">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="h-2.5 w-2.5 animate-bounce rounded-full bg-emerald-400"
                          style={{ animationDelay: `${i * 150}ms` }}
                        />
                      ))}
                      <span className="ml-2 text-sm sm:text-base text-zinc-300 font-medium">
                        Synthesizing agent response...
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>
          )}
        </div>

        {/* Prompt Input Composer (Full-Width Responsive Container) */}
        <div className="shrink-0 border-t border-white/[0.08] bg-[#090c14] p-4 sm:p-6">
          <div className={containerWidthClass}>
            {/* Quick Prompt Chips */}
            {messages.length > 0 && (
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="text-xs text-zinc-500 font-medium mr-1">Quick prompts:</span>
                {quickChips.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => void handleSubmit(undefined, chip)}
                    disabled={loading}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-300 transition-colors disabled:opacity-50"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => void handleSubmit(e)}
              className="rounded-2xl border border-white/15 bg-[#101420] p-3 shadow-xl transition-all focus-within:border-emerald-500/60 focus-within:ring-2 focus-within:ring-emerald-500/20"
            >
              <textarea
                ref={textareaRef}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Ask LangChain AI anything about agent architecture, tools, or code..."
                disabled={loading}
                aria-label="Your message"
                className="max-h-48 min-h-[60px] w-full resize-none bg-transparent px-3 py-2 text-sm sm:text-base leading-relaxed text-white outline-none placeholder:text-zinc-500 disabled:opacity-60"
              />

              <div className="flex items-center justify-between px-2 pt-2 border-t border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1">
                    <Sparkles size={13} className="text-emerald-400" />
                    <span className="text-xs font-semibold text-zinc-300">
                      Gemini 2.5 + LangChain
                    </span>
                  </div>
                  <span className="text-xs text-zinc-500 hidden sm:inline">
                    Enter to send · Shift + Enter for new line
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={!question.trim() || loading}
                  aria-label="Send message"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-zinc-950 transition-all hover:bg-emerald-400 hover:scale-105 disabled:cursor-not-allowed disabled:bg-zinc-800 disabled:text-zinc-600 disabled:hover:scale-100"
                >
                  <ArrowUp size={20} strokeWidth={2.5} />
                </button>
              </div>
            </form>

            <p className="mt-2 text-center text-xs text-zinc-500">
              LangChain Agent Studio can make mistakes. Verify critical code and outputs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
