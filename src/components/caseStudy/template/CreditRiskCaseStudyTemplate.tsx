"use client";
import React from "react";
import CaseStudyHeader from "../blocks/CaseStudyHeader";
import classes from "./caseStudy.module.css";
import { useVoiceModal } from "@/app/contexts/VoiceModalContext";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { ArrowRight, CheckCircle2, ShieldCheck, Braces, Database } from "lucide-react";

export default function CreditRiskCaseStudyTemplate() {
  const { openModal } = useVoiceModal();
  const isMobile = useIsMobile();

  return (
    <div className={classes.pageWrapper}>

      {/* ============================================================
          SECTION 1: HERO & BRIEF
          ============================================================ */}
      <div className={classes.contentMaxWidth}>
        <CaseStudyHeader
          title="Credit Risk Analyzer"
          subtitle="A RESTful backend that turns ML risk scores into automated credit decisions — structured, validated, and built to scale."
          tags={["Node.js", "REST APIs", "MongoDB", "March 2025"]}
          onVoiceModeClick={openModal}
        />
      </div>

      {/* ============================================================
          SECTION 2: THE SYSTEM
          ============================================================ */}
      <div className={classes.contentMaxWidth} style={{ padding: isMobile ? '40px 0 60px' : '60px 0 100px', maxWidth: '1000px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{ width: '24px', height: '2px', background: '#8b5cf6' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#64748b', letterSpacing: '0.1em' }}>01 - THE SYSTEM</span>
        </div>

        <h2 className={classes.htmlH2}>
          Risk scoring is a model.<br />
          <span style={{ fontStyle: 'italic', color: 'var(--primary-color)' }}>Decisioning is a system.</span>
        </h2>

        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, maxWidth: '80%', marginBottom: '60px' }}>
          An ML model that scores credit risk is only useful if applications can reach it reliably, data arrives clean, and decisions persist auditably. I built the backend that makes that happen — 5+ REST endpoints wrapping ML-based scoring behind a structured API layer.
        </p>

        <div className={classes.htmlSectionCard}>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#7c3aed', letterSpacing: '0.1em' }}>AT A GLANCE</span>
          <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '24px' }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#8b5cf6', marginBottom: '8px' }}>5+</div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}><strong>API endpoints</strong> covering the full credit-evaluation workflow, from application intake to decision retrieval.</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#8b5cf6', marginBottom: '8px' }}>3</div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}><strong>modular backend components</strong> — validation, processing, persistence — each independently testable and replaceable.</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#8b5cf6', marginBottom: '8px' }}>ML</div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}><strong>risk models integrated</strong> via structured API layers, so scoring logic can evolve without breaking clients.</div>
            </div>
          </div>
        </div>

        {/* Component cards */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', marginBottom: '64px' }}>
          {[
            {
              icon: <ShieldCheck size={20} color="#8b5cf6" />,
              label: "COMPONENT 01",
              title: "Data Validation",
              desc: "Schema-level validation at the API boundary rejects malformed applications before they touch scoring — consistent errors, no silent failures.",
              decision: "Bad data stops at the door, not in the decision log."
            },
            {
              icon: <Braces size={20} color="#8b5cf6" />,
              label: "COMPONENT 02",
              title: "Scoring & Processing",
              desc: "A processing layer normalizes applicant features, calls the ML risk-scoring models, and maps scores to decision outcomes via policy thresholds.",
              decision: "The API contract isolates model changes from every consumer."
            },
            {
              icon: <Database size={20} color="#8b5cf6" />,
              label: "COMPONENT 03",
              title: "Persistence",
              desc: "MongoDB stores applications, scores, and decisions with full history, making every automated decision reconstructable after the fact.",
              decision: "Auditability designed in, not bolted on."
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

        {/* Outcome */}
        <div style={{ padding: isMobile ? '32px 24px' : '64px 48px', background: '#f5f3ff', borderRadius: '24px', border: '1.5px solid #ddd6fe' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#7c3aed', letterSpacing: '0.1em', marginBottom: '16px', display: 'block' }}>→ OUTCOME</span>
          <h2 className={classes.htmlH2}>Reliable, automated decisioning.</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '80%' }}>
            {[
              "Efficient, reliable credit-risk evaluation workflows exposed through scalable RESTful services.",
              "Modular validation / processing / persistence split improved system scalability and maintainability.",
              "Structured API layers let ML models be retrained and swapped without client-side changes."
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
