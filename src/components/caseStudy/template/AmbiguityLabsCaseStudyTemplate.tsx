"use client";
import React from "react";
import CaseStudyHeader from "../blocks/CaseStudyHeader";
import classes from "./caseStudy.module.css";
import { useVoiceModal } from "@/app/contexts/VoiceModalContext";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { ArrowRight, CheckCircle2, Container, FlaskConical, ShieldCheck, Languages } from "lucide-react";

export default function AmbiguityLabsCaseStudyTemplate() {
  const { openModal } = useVoiceModal();
  const isMobile = useIsMobile();

  return (
    <div className={classes.pageWrapper}>

      {/* ============================================================
          SECTION 1: HERO & BRIEF
          ============================================================ */}
      <div className={classes.contentMaxWidth}>
        <CaseStudyHeader
          title="Ambiguity Labs"
          subtitle="SDE Intern authoring technical benchmark tasks for Snorkel AI's agent evaluation platform — the test suite that decides whether an AI agent actually works."
          tags={["Python", "Go", "Ruby", "TypeScript", "C++", "March – August 2026"]}
          onVoiceModeClick={openModal}
        />
      </div>

      {/* ============================================================
          SECTION 2: THE WORK
          ============================================================ */}
      <div className={classes.contentMaxWidth} style={{ padding: isMobile ? '40px 0 60px' : '60px 0 100px', maxWidth: '1000px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{ width: '24px', height: '2px', background: '#7c3aed' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#64748b', letterSpacing: '0.1em' }}>01 - THE WORK</span>
        </div>

        <h2 className={classes.htmlH2}>
          You can't evaluate an agent<br />
          <span style={{ fontStyle: 'italic', color: 'var(--primary-color)' }}>with a bad benchmark.</span>
        </h2>

        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, maxWidth: '80%', marginBottom: '60px' }}>
          Ambiguity Labs builds technical work for Snorkel AI's agent evaluation platform — the benchmarks other
          companies use to measure whether their AI coding agents actually solve real problems. My job was to
          design and author those benchmark tasks end to end: realistic problem statements, Dockerized environments
          to run them in, reference/oracle solutions that prove a task is solvable, and automated verifier scripts
          that score any agent's attempt. The work spanned everything from scripting languages like Python and Ruby
          to statically typed stacks like Go and TypeScript, down to systems-level C++ — because a benchmark that
          only tests one language teaches an agent to game one language.
        </p>

        <div className={classes.htmlSectionCard}>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#7c3aed', letterSpacing: '0.1em' }}>AT A GLANCE</span>
          <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '24px' }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#7c3aed', marginBottom: '8px' }}>5+</div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}><strong>language stacks covered</strong> — Python, Go, Ruby, TypeScript, and C++ — each with its own Dockerized runtime and toolchain.</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#7c3aed', marginBottom: '8px' }}>End-to-end</div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}><strong>task authorship</strong> — problem spec, environment, oracle solution, and verifier, shipped as one unit.</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#7c3aed', marginBottom: '8px' }}>Peer-reviewed</div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}><strong>quality gates</strong> caught correctness bugs and ambiguous specs before any task shipped.</div>
            </div>
          </div>
        </div>

        {/* Component cards */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', marginBottom: '64px' }}>
          {[
            {
              icon: <Container size={20} color="#7c3aed" />,
              label: "AUTHORING",
              title: "Benchmark Task Design",
              desc: "Authored technical benchmark tasks — Docker environments, reference/oracle solutions, and automated verifier scripts — across Python, Go, Ruby, and TypeScript stacks.",
              decision: "Every task ships as a self-contained, reproducible unit an agent can be scored against."
            },
            {
              icon: <ShieldCheck size={20} color="#7c3aed" />,
              label: "QUALITY",
              title: "Pre-Submission Gates",
              desc: "Built pre-submission quality gates — lint checks, build reproducibility, and pass/fail scoring validation — to catch broken or ambiguous tasks before release.",
              decision: "A benchmark is only as trustworthy as its weakest task — these gates keep the bar high."
            },
            {
              icon: <FlaskConical size={20} color="#7c3aed" />,
              label: "REVIEW",
              title: "Peer Task Review",
              desc: "Reviewed peer-authored tasks against packaging and scoring specs, identifying correctness bugs and edge cases prior to shipping.",
              decision: "Catching an ambiguous task in review is cheaper than an agent gaming it in production."
            }
          ].map((card, i) => (
            <div key={i} className={classes.htmlCard} style={{ padding: '24px', background: '#fff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {card.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', color: '#1e293b', fontWeight: 800, letterSpacing: '0.05em' }}>{card.label}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e293b', margin: '4px 0 0 0' }}>{card.title}</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
              <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <ArrowRight size={14} color="#1e293b" />
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#1e293b', textTransform: 'uppercase' }}>Why It Matters</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>{card.decision}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Language breadth callout */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px 28px', background: '#f5f3ff', borderRadius: '16px', border: '1px solid #ddd6fe', marginBottom: '64px' }}>
          <Languages size={24} color="#7c3aed" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
            Working across five language ecosystems in one role meant relearning each stack's idioms, build
            tooling, and failure modes — from Go's static typing and C++'s manual memory management, to Ruby and
            TypeScript's dynamic and structural typing. Polyglot fluency wasn't a nice-to-have here; it was the job.
          </p>
        </div>

        {/* Outcome */}
        <div style={{ padding: isMobile ? '32px 24px' : '64px 48px', background: '#f5f3ff', borderRadius: '24px', border: '1.5px solid #ddd6fe' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#7c3aed', letterSpacing: '0.1em', marginBottom: '16px', display: 'block' }}>→ OUTCOME</span>
          <h2 className={classes.htmlH2}>Benchmarks an AI agent can't game.</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '80%' }}>
            {[
              "Shipped Dockerized benchmark tasks with reference solutions and automated verifiers across five language stacks.",
              "Pre-submission quality gates caught broken builds and ambiguous scoring before tasks reached the platform.",
              "Peer review of packaging and scoring specs closed correctness gaps other authors' tasks would have shipped with."
            ].map((pt, j) => (
              <li key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="#7c3aed" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5 }}>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}
