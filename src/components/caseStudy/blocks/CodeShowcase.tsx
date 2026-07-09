"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeShowcaseProps = {
    filename: string;
    language: string;
    code: string;
    caption?: string;
    // Fixed pixel height for the code area — use when placing showcases
    // side by side in a grid, so uneven snippet lengths still align.
    codeHeight?: number;
};

export default function CodeShowcase({ filename, language, code, caption, codeHeight = 420 }: CodeShowcaseProps) {
    return (
        <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0", background: "#1e1e1e", display: "flex", flexDirection: "column", height: "100%" }}>
            {/* macOS-style title bar */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px", background: "#252526", borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
                <div style={{ display: "flex", gap: "6px" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f56" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27c93f" }} />
                </div>
                <span style={{ fontSize: "0.75rem", color: "#9d9d9d", fontFamily: "monospace", marginLeft: "4px" }}>{filename}</span>
            </div>
            <div style={{ height: `${codeHeight}px`, overflow: "auto", flexShrink: 0 }}>
                <SyntaxHighlighter
                    language={language}
                    style={vscDarkPlus}
                    customStyle={{ margin: 0, padding: "20px", fontSize: "0.8rem", background: "#1e1e1e", lineHeight: 1.6, minHeight: "100%" }}
                    showLineNumbers
                >
                    {code}
                </SyntaxHighlighter>
            </div>
            {caption && (
                <div style={{ padding: "12px 18px", background: "#f8fafc", fontSize: "0.8rem", color: "#64748b", borderTop: "1px solid #e2e8f0", flex: 1 }}>
                    {caption}
                </div>
            )}
        </div>
    );
}
