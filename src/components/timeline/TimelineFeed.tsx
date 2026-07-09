"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Squircle } from "corner-smoothing";
import classes from "./timeline.module.css";

type TimelineEntry = {
    slug: string;
    date: string;
    title: string;
    description: string;
    tags: string[];
    current?: boolean;
};

// Descending order — most recent first. Dates sourced from the CV / case-study headers.
const TIMELINE: TimelineEntry[] = [
    {
        slug: "ambiguity-labs",
        date: "Mar 27 – Aug 10, 2026",
        title: "Ambiguity Labs - SDE Intern",
        description: "SDE Intern authoring technical benchmark tasks for Snorkel AI's agent evaluation platform — Docker environments, oracle solutions, and automated verifiers across Python, Go, Ruby, TypeScript, and C++.",
        tags: ["Python", "Go", "Ruby", "TypeScript", "C++"],
        current: true,
    },
    {
        slug: "meshstage",
        date: "Sept 2025 – Apr 28, 2026",
        title: "MeshStage",
        description: "Full-stack geometry meshing engine — CAD files to FEA-ready surface meshes, in the browser.",
        tags: ["C++", "OpenCASCADE", "Three.js"],
    },
    {
        slug: "iitd-vr",
        date: "May – Jul 2025",
        title: "IIT Delhi - SDE Intern",
        description: "Coal-mine safety training simulator built at IIT Delhi's DESCINED Lab — Unity, state machines, XR input.",
        tags: ["Unity (C#)", "XR Toolkit", "DESCINED Lab"],
    },
    {
        slug: "credit-risk",
        date: "Mar 2025",
        title: "Credit Risk Analyzer",
        description: "Scalable REST backend integrating ML-based risk scoring for automated credit decisioning.",
        tags: ["Node.js", "MongoDB", "REST APIs"],
    },
    {
        slug: "safeconnect",
        date: "Feb 2025",
        title: "SafeConnect",
        description: "Emergency resource discovery platform with real-time, geolocation-driven REST APIs.",
        tags: ["Backend Services", "REST APIs", "Geolocation"],
    },
];

export default function TimelineFeed() {
    const router = useRouter();

    const handleSelect = (slug: string) => {
        router.push(`/?project=${slug}`, { scroll: false });
    };

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
                    <div style={{ width: "90%", maxWidth: "700px", paddingBottom: "80px" }}>

                        <div style={{ marginBottom: "24px" }}>
                            <h1 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#1c2b33", margin: "0 0 8px 0" }}>
                                Work Timeline
                            </h1>
                            <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0 }}>
                                Everything I&apos;ve worked on, most recent first. Click any entry to open the full case study.
                            </p>
                        </div>

                        <div style={{ position: "relative", paddingLeft: "28px" }}>
                            {/* Connecting line, animates in from top */}
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
                                style={{
                                    position: "absolute",
                                    left: "6px",
                                    top: "6px",
                                    bottom: "6px",
                                    width: "2px",
                                    background: "linear-gradient(180deg, #788A62 0%, rgba(120,138,98,0.15) 100%)",
                                    transformOrigin: "top",
                                }}
                            />

                            {TIMELINE.map((entry, i) => (
                                <motion.div
                                    key={entry.slug}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.06, ease: [0.165, 0.84, 0.44, 1] }}
                                    whileHover={{ x: 4 }}
                                    whileTap={{ scale: 0.985 }}
                                    onClick={() => handleSelect(entry.slug)}
                                    className={classes.timelineRow}
                                    style={{
                                        position: "relative",
                                        marginBottom: i < TIMELINE.length - 1 ? "20px" : 0,
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "16px",
                                    }}
                                >
                                    {/* Dot */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            left: "-28px",
                                            top: "6px",
                                            width: "14px",
                                            height: "14px",
                                            borderRadius: "50%",
                                            background: entry.current ? "#788A62" : "#ffffff",
                                            border: `2px solid ${entry.current ? "#788A62" : "#c9c9c9"}`,
                                            boxShadow: entry.current ? "0 0 0 4px rgba(120,138,98,0.15)" : "none",
                                            boxSizing: "border-box",
                                            flexShrink: 0,
                                        }}
                                    />

                                    <div className={classes.timelineCard} style={{ flex: 1, padding: "16px 18px" }}>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", marginBottom: "6px" }}>
                                            <span className={classes.timelineDate}>
                                                {entry.date}
                                            </span>
                                            <ArrowUpRight size={14} className={classes.timelineArrow} />
                                        </div>
                                        <div className={classes.timelineTitle}>{entry.title}</div>
                                        <div className={classes.timelineDesc}>{entry.description}</div>
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                                            {entry.tags.map((tag) => (
                                                <span key={tag} className={classes.timelineTag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Squircle>
        </div>
    );
}
