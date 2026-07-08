"use client";
import React from "react";
import Image from "next/image";
import { Squircle } from "corner-smoothing";

const SLIDES = [
  { file: "cams-03.webp", caption: "Proposed solution — CAMS system flow, memory tier architecture, and KPI targets." },
  { file: "cams-04.webp", caption: "Technical details — software data-flow architecture and the runtime state-transition machine." },
  { file: "cams-05.webp", caption: "Prediction pipeline — context sensing, behavioral clustering, next-app prediction, and confidence-gated preload." },
  { file: "cams-06.webp", caption: "Memory management pipeline — adaptive cache architecture, smart eviction, and offline adaptation." },
  { file: "cams-07.webp", caption: "Simulation report — CAMS vs. baseline LRU across cache hit rate, thrashing, and app-launch latency." },
  { file: "cams-08.webp", caption: "Technical plausibility and honest constraints — why CAMS is deployable, and where it's limited." },
  { file: "cams-09.webp", caption: "Novelty & differentiation from state-of-the-art Android memory systems." },
  { file: "cams-10.webp", caption: "Open datasets planned for building, validating, and benchmarking CAMS." },
  { file: "cams-11.webp", caption: "Open models planned to be used, developed, trained, or fine-tuned." },
  { file: "cams-12.webp", caption: "AI/GenAI/agentic tools — how AI accelerated the engineering workflow, human-led throughout." },
  { file: "cams-13.webp", caption: "Additional supporting materials, edge cases considered, and the final takeaway." },
];

export default function IdeasFeed() {
  return (
    <div className="posts-feed-root" style={{ position: "relative", overflow: "hidden" }}>
      <Squircle
        cornerRadius={48}
        style={{
          width: "100%",
          height: "100%",
          background: "#F0F0F0",
          overflowY: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.03)",
        }}
      >
        <div className="posts-inner-container">
          <div style={{ width: "90%", maxWidth: "820px", display: "flex", flexDirection: "column", gap: "24px", paddingBottom: "80px" }}>

            {/* Header card */}
            <Squircle cornerRadius={24} style={{ background: "#FBFBFB", padding: "28px 28px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
                {["Samsung PRISM Hackathon", "Team CONX", "Android Systems", "ML / Prediction"].map((tag) => (
                  <span key={tag} style={{ fontSize: "0.75rem", color: "#475569", background: "#f1f5f9", padding: "4px 12px", borderRadius: "100px", border: "1px solid #e2e8f0" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1c2b33", margin: "0 0 12px 0" }}>
                CAMS — Context-Aware Adaptive Memory System
              </h1>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>
                An ideation from a Samsung hackathon — a lightweight, Android-userspace memory orchestration
                layer that predicts what app you&apos;ll open next and preserves it intelligently, cutting cold
                restarts and keeping AI assistants alive across app switches. No kernel modification, no root.
              </p>
            </Squircle>

            {/* Slide deck */}
            {SLIDES.map((slide, i) => (
              <Squircle
                key={slide.file}
                cornerRadius={24}
                style={{ background: "#FBFBFB", padding: "0", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#0b1220" }}>
                  <Image
                    src={`/images/cams/${slide.file}`}
                    alt={`CAMS slide ${i + 3}`}
                    fill
                    sizes="(max-width: 768px) 90vw, 780px"
                    loading={i < 2 ? "eager" : "lazy"}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div style={{ padding: "14px 20px", fontSize: "0.85rem", color: "#475569", lineHeight: 1.5 }}>
                  {slide.caption}
                </div>
              </Squircle>
            ))}
          </div>
        </div>
      </Squircle>
    </div>
  );
}
