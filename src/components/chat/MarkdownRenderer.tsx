"use client";

import {
  isValidElement,
  type ReactNode,
} from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import CodeBlock from "./CodeBlock";

type MarkdownRendererProps = {
  content: string;
};

function getText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getText).join("");
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return getText(node.props.children);
  }

  return "";
}

const components: Components = {
  h1: ({ children }) => (
    <h1 className="mb-4 mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-white">
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className="mb-3 mt-6 text-xl sm:text-2xl font-bold tracking-tight text-white border-b border-white/10 pb-2">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="mb-2 mt-5 text-lg sm:text-xl font-semibold text-white">
      {children}
    </h3>
  ),

  p: ({ children }) => (
    <p className="mb-3 leading-7 sm:leading-8 text-zinc-200 text-[15px] sm:text-base last:mb-0">
      {children}
    </p>
  ),

  strong: ({ children }) => (
    <strong className="font-semibold text-white">
      {children}
    </strong>
  ),

  ul: ({ children }) => (
    <ul className="mb-4 ml-6 list-disc space-y-1.5 marker:text-emerald-400 text-[15px] sm:text-base">
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className="mb-4 ml-6 list-decimal space-y-1.5 marker:text-emerald-400 text-[15px] sm:text-base">
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className="pl-1 text-zinc-200 leading-relaxed">{children}</li>
  ),

  blockquote: ({ children }) => (
    <blockquote className="my-4 border-l-4 border-emerald-500 bg-emerald-500/10 px-4 py-2.5 rounded-r-xl text-zinc-300 text-[15px]">
      {children}
    </blockquote>
  ),

  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300 font-medium"
    >
      {children}
    </a>
  ),

  code: ({ children, className, ...props }) => (
    <code
      {...props}
      className={
        className ||
        "rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em] text-emerald-300"
      }
    >
      {children}
    </code>
  ),

  pre: ({ children }) => {
    if (
      isValidElement<{
        className?: string;
        children?: ReactNode;
      }>(children)
    ) {
      const className = children.props.className ?? "";
      const language =
        /language-([\w+#.-]+)/.exec(className)?.[1] ?? "text";

      return (
        <CodeBlock
          language={language}
          code={getText(children).replace(/\n$/, "")}
        >
          {children}
        </CodeBlock>
      );
    }

    return (
      <pre className="my-4 overflow-x-auto rounded-xl bg-[#0d1117] p-4 text-sm font-mono border border-white/10">
        {children}
      </pre>
    );
  },
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="w-full max-w-none text-zinc-200">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}