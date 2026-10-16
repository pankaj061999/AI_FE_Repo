import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Bot,
  Layers,
  Activity,
  Code2,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Zap,
  MessageSquare,
} from "lucide-react";

const stats = [
  { number: "350M+", label: "Monthly open source downloads" },
  { number: "7K+", label: "Active LangSmith customers" },
  { number: "5 / 10", label: "Of the Fortune 10 in production" },
  { number: "98K+", label: "GitHub community stars" },
];

const features = [
  {
    icon: Code2,
    tag: "OPEN SOURCE",
    title: "LangChain Core",
    description:
      "The industry-standard composable abstractions to connect any LLM with prompts, vector stores, tools, and memory in TypeScript and Python.",
    link: "https://www.langchain.com/langchain",
    accent: "text-emerald-400",
    border: "hover:border-emerald-500/40",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Layers,
    tag: "STATEFUL AGENTS",
    title: "LangGraph 2.0",
    description:
      "Build resilient, cyclical multi-agent workflows with built-in persistence, human-in-the-loop review, and state branching.",
    link: "https://www.langchain.com/langgraph",
    accent: "text-sky-400",
    border: "hover:border-sky-500/40",
    bg: "bg-sky-500/10",
  },
  {
    icon: Activity,
    tag: "OBSERVABILITY",
    title: "LangSmith Platform",
    description:
      "Enterprise debugging, latency flame charts, prompt evaluation, and real-time production monitoring across all agent steps.",
    link: "https://smith.langchain.com/",
    accent: "text-violet-400",
    border: "hover:border-violet-500/40",
    bg: "bg-violet-500/10",
  },
  {
    icon: Bot,
    tag: "AUTONOMOUS",
    title: "Deep Agents",
    description:
      "Coordinate specialized multi-agent squads capable of decomposing multi-step reasoning, self-healing code, and executing tasks autonomously.",
    link: "https://www.langchain.com/deep-agents",
    accent: "text-pink-400",
    border: "hover:border-pink-500/40",
    bg: "bg-pink-500/10",
  },
  {
    icon: ShieldCheck,
    tag: "SECURITY",
    title: "Sandboxes & Guardrails",
    description:
      "Execute untrusted agent code safely in isolated ephemeral containers and enforce strict safety policies on inputs and outputs.",
    link: "https://smith.langchain.com/",
    accent: "text-amber-400",
    border: "hover:border-amber-500/40",
    bg: "bg-amber-500/10",
  },
  {
    icon: Cpu,
    tag: "GATEWAY",
    title: "LLM Model Gateway",
    description:
      "Unified routing across Gemini, Claude, and OpenAI with automated fallbacks, semantic caching, and token budget enforcement.",
    link: "https://smith.langchain.com/",
    accent: "text-teal-400",
    border: "hover:border-teal-500/40",
    bg: "bg-teal-500/10",
  },
];

export default function HomePage() {
  return (
    <div className="w-full flex flex-col font-sans text-zinc-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] bg-[#07090e]">
        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Radial Ambient Glows */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[450px] w-[900px] rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute right-1/4 top-1/3 h-[300px] w-[500px] rounded-full bg-sky-500/10 blur-[110px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-300 backdrop-blur-md mb-8">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>LangChain 2026 Platform</span>
            <span className="text-zinc-600">·</span>
            <span>Own Your Intelligence</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
            The open agent platform to{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              own your intelligence
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-zinc-300">
            Control, govern, and compound intelligence with an open agent engineering platform.
            Build stateful agents with LangGraph, evaluate with LangSmith, and chat interactively.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/chat"
              className="group flex items-center gap-3 rounded-full bg-emerald-500 px-8 py-4 text-base font-bold text-zinc-950 transition-all duration-200 hover:bg-emerald-400 hover:shadow-[0_0_35px_rgba(52,211,153,0.45)] hover:scale-[1.02]"
            >
              <MessageSquare size={20} />
              <span>Launch AI Chat Studio</span>
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href="https://docs.langchain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-zinc-200 transition-all hover:border-emerald-500/40 hover:bg-white/10 hover:text-white"
            >
              <span>Explore Documentation</span>
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Interactive Agent Mockup Card */}
          <div className="mt-16 text-left mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0c1018]/90 p-5 sm:p-7 shadow-2xl shadow-black/90 backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 font-mono text-xs text-zinc-400">langchain-agent-runtime.ts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                    Gemini 2.5 Active
                  </span>
                </div>
              </div>

              <div className="py-5 space-y-4 font-mono text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">user&gt;</span>
                  <span className="text-zinc-200">
                    How do I implement cyclical multi-agent workflows with human-in-the-loop validation using LangGraph?
                  </span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#07090e] p-4 text-xs sm:text-sm text-zinc-300 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <Sparkles size={14} />
                    <span>LangChain Agent Solution:</span>
                  </div>
                  <p className="text-zinc-400">
                    Use <code className="text-emerald-300 bg-white/5 px-1 rounded">StateGraph</code> with compiled memory checkpointers to persist state across interruptions:
                  </p>
                  <pre className="text-emerald-300/90 text-xs overflow-x-auto py-2">
{`const workflow = new StateGraph({ channels: agentStateChannels })
  .addNode("planner", planStep)
  .addNode("executor", executeStep)
  .addEdge("planner", "executor")
  .compile({ checkpointer: new MemorySaver() });`}
                  </pre>
                </div>
              </div>

              {/* Direct Jump In Banner */}
              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <span className="text-xs sm:text-sm text-zinc-400">
                  Ready to test with your own prompts and questions?
                </span>
                <Link
                  href="/chat"
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs sm:text-sm font-bold text-zinc-950 hover:bg-emerald-400 transition"
                >
                  <span>Open Interactive Studio</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-white/[0.08] bg-[#090c14] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-2">
              Proven Worldwide
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Trusted by the largest builder community in AI
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 hover:border-emerald-500/30 transition-all hover:-translate-y-1"
              >
                <div className="text-3xl sm:text-5xl font-black tracking-tight text-white font-mono">
                  {stat.number}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-zinc-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-2">
            Complete Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Everything you need to ship autonomous agents
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            From initial prototyping in our studio to enterprise-scale deployment with observability and evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0c1018] p-8 transition-all duration-200 hover:-translate-y-1 ${feature.border}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.bg} ${feature.accent}`}
                    >
                      <Icon size={24} />
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {feature.description}
                  </p>
                </div>

                <a
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

