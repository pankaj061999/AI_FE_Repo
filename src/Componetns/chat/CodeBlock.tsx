
"use client";

import { useState, type ReactNode } from "react";
import { Check, Copy, Code2 } from "lucide-react";

type CodeBlockProps = {
    language: string;
    code: string;
    children: ReactNode;
};

export default function CodeBlock({
    language,
    code,
    children,
}: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    }

    return (
        <div className="my-4 min-w-0 overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]">
            <div className="flex items-center justify-between border-b border-white/10 bg-[#161b22] px-4 py-2.5">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <Code2 size={15} className="text-violet-400" />
                    <span className="font-mono">{language}</span>
                </div>

                <button
                    type="button"
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-zinc-400 transition hover:bg-white/10 hover:text-white"
                    aria-label="Copy code"
                >
                    {copied ? (
                        <>
                            <Check size={14} className="text-green-400" />
                            Copied
                        </>
                    ) : (
                        <>
                            <Copy size={14} />
                            Copy
                        </>
                    )}
                </button>
            </div>

            <div className="overflow-x-auto p-4">
                <pre className="m-0 bg-transparent font-mono text-[13px] leading-6">
                    {children}
                </pre>
            </div>
        </div>
    );
}
