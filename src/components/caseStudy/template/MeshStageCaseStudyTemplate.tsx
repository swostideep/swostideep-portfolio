"use client";
import React from "react";
import Image from "next/image";
import CaseStudyHeader from "../blocks/CaseStudyHeader";
import ScrubVideo from "../blocks/ScrubVideo";
import classes from "./caseStudy.module.css";
import { useVoiceModal } from "@/app/contexts/VoiceModalContext";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import {
  CheckCircle2, ArrowRight, Cpu, Boxes, Globe,
  FileBox, Triangle, ListOrdered, MonitorPlay
} from "lucide-react";

export default function MeshStageCaseStudyTemplate() {
  const { openModal } = useVoiceModal();
  const isMobile = useIsMobile();

  return (
    <div className={classes.pageWrapper}>

      {/* ============================================================
          SECTION 1: HERO & BRIEF
          ============================================================ */}
      <div className={classes.contentMaxWidth}>

        <CaseStudyHeader
          title="MeshStage"
          subtitle="A geometry meshing engine — from raw STEP/IGES CAD files to watertight, isotropic, FEA-ready surface meshes in the browser."
          tags={["C++ · OpenCASCADE", "Node.js · Redis (BullMQ)", "Three.js (WebGL)", "Sept 2025 – Apr 28, 2026"]}
          onVoiceModeClick={openModal}
        />

        {/* Hero Video */}
        <div style={{ width: isMobile ? '100%' : 'calc(100% + 80px)', marginLeft: isMobile ? 0 : '-40px', marginBottom: '100px', borderRadius: '16px', overflow: 'hidden' }}>
          <video
            src="/videos/meshstage-card-preview.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

      </div>

      {/* ============================================================
          SECTION 2: PROBLEM & PIPELINE
          ============================================================ */}
      <div className={classes.contentMaxWidth} style={{ padding: isMobile ? '60px 0' : '100px 0', maxWidth: '1000px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{ width: '24px', height: '2px', background: '#0ea5e9' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#64748b', letterSpacing: '0.1em' }}>01 - THE PROBLEM</span>
        </div>

        <h2 className={classes.htmlH2}>
          CAD files aren't simulation-ready.<br />
          <span style={{ fontStyle: 'italic', color: 'var(--primary-color)' }}>Meshes are.</span>
        </h2>

        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, maxWidth: '80%', marginBottom: '60px' }}>
          Finite element analysis needs watertight, isotropic surface meshes — but engineers start from STEP/IGES CAD data full of trimmed surfaces, tolerance gaps, and degenerate faces. MeshStage is the full-stack pipeline I architected to close that gap: upload a CAD file, get back a validated, FEA-ready mesh with interactive quality heatmaps.
        </p>

        {/* Pipeline Journey */}
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', marginBottom: '80px', background: '#fff' }}>
          {[
            { icon: '📐', title: 'STEP / IGES Upload', desc: 'Raw CAD geometry, secured behind Google OAuth 2.0' },
            { icon: '🧵', title: 'BullMQ Job Queue', desc: 'Redis-backed queue orchestrates the compute workers' },
            { icon: '⚙️', title: 'C++ Engine', desc: 'OpenCASCADE + optimized Constrained Delaunay Triangulation', active: true },
            { icon: '✅', title: 'FEA Validation', desc: 'Watertightness, isotropy, and element-quality checks' },
            { icon: '🌐', title: 'WebGL Viewer', desc: 'Three.js renders the mesh with 3D quality heatmaps' }
          ].map((step, i) => (
            <div key={i} style={{ flex: 1, padding: '24px 16px', textAlign: 'center', borderRight: i < 4 ? '1px solid #e2e8f0' : 'none', background: step.active ? '#f0f9ff' : 'transparent' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{step.icon}</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: step.active ? '#0284c7' : '#1e293b', marginBottom: '8px' }}>{step.title}</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.5 }}>{step.desc}</div>
            </div>
          ))}
        </div>

        {/* Key numbers */}
        <div className={classes.htmlSectionCard}>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#0284c7', letterSpacing: '0.1em' }}>ENGINEERING AT A GLANCE</span>
          <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '24px' }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0ea5e9', marginBottom: '8px' }}>40%</div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}><strong>reduced meshing latency</strong> from a multi-threaded C++ engine with an optimized Constrained Delaunay Triangulation core.</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0ea5e9', marginBottom: '8px' }}>100+</div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}><strong>concurrent workflows</strong> orchestrated by an asynchronous Express.js + MongoDB backend with a Redis-backed BullMQ queue.</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0ea5e9', marginBottom: '8px' }}>99.9%</div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}><strong>uptime</strong> across the Dockerized deployment — engine, API, queue, and WebGL frontend shipped as containers.</div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          SECTION 3: THE THREE SUBSYSTEMS
          ============================================================ */}
      <div style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className={classes.contentMaxWidth} style={{ padding: isMobile ? '60px 0' : '100px 0', maxWidth: '1000px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#0ea5e9', letterSpacing: '0.1em', marginBottom: '16px', display: 'block' }}>02 - SYSTEM DESIGN</span>
          <h2 className={classes.htmlH2}>
            Compute, orchestrate, <span style={{ fontStyle: 'italic', color: 'var(--primary-color)' }}>visualize.</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, maxWidth: '70%', marginBottom: '40px' }}>
            The engine is CPU-bound C++, the orchestration is I/O-bound Node.js, and the viewer is GPU-bound WebGL. Splitting the system along those boundaries is what makes it scale.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', marginBottom: '80px' }}>
            {[
              {
                icon: <Cpu size={20} color="#0ea5e9" />,
                label: "COMPUTE",
                title: "C++ Meshing Engine",
                desc: "Multi-threaded OpenCASCADE pipeline: BRep healing, face discretization, and Constrained Delaunay Triangulation tuned for complex trimmed geometries.",
                decision: "CDT optimization cut meshing latency by 40% on complex parts."
              },
              {
                icon: <Boxes size={20} color="#0ea5e9" />,
                label: "ORCHESTRATION",
                title: "Async Job Backend",
                desc: "Express.js REST API with MongoDB persistence; every meshing request becomes a BullMQ job so heavy compute never blocks the API.",
                decision: "Redis-backed queue sustains 100+ parallel workflows at 99.9% uptime."
              },
              {
                icon: <Globe size={20} color="#0ea5e9" />,
                label: "VISUALIZATION",
                title: "WebGL Frontend",
                desc: "Dockerized Three.js viewer with secure Google OAuth 2.0 sign-in and interactive 3D quality heatmaps painted per-element on the mesh.",
                decision: "Heatmaps make FEA validation legible at a glance — no desktop tools needed."
              }
            ].map((card, i) => (
              <div key={i} className={classes.htmlCard} style={{ padding: '24px', background: '#fff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#1e293b', textTransform: 'uppercase' }}>The Payoff</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>{card.decision}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Screenshots: heatmap + raw mesh result */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '24px', marginBottom: '40px' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
              <Image src="/images/meshstage/meshstage-shot-1.webp" alt="Mesh quality heatmap in the WebGL viewer" width={1904} height={991} sizes="(max-width: 768px) 100vw, 45vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '14px 18px', background: '#fff', fontSize: '0.8rem', color: '#64748b', borderTop: '1px solid #e2e8f0' }}>
                FEA quality heatmap on a meshed valve assembly — 1.2M elements, zero bad elements.
              </div>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
              <Image src="/images/meshstage/meshstage-shot-2.webp" alt="CAD upload meshed into a surface result" width={1909} height={984} sizes="(max-width: 768px) 100vw, 45vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '14px 18px', background: '#fff', fontSize: '0.8rem', color: '#64748b', borderTop: '1px solid #e2e8f0' }}>
                Raw STEP upload meshed into a clean, watertight surface — ready for FEA.
              </div>
            </div>
          </div>

          {/* Master product walkthrough video */}
          <ScrubVideo
            src="/videos/meshstage-master.mp4"
            caption="Full product walkthrough — upload, mesh, and inspect a CAD part end to end."
            isMobile={isMobile}
          />
        </div>
      </div>

      {/* ============================================================
          SECTION 4: MESHING DEEP DIVE
          ============================================================ */}
      <div className={classes.contentMaxWidth} style={{ padding: isMobile ? '60px 0' : '100px 0', maxWidth: '1000px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div style={{ width: '24px', height: '2px', background: '#0ea5e9' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#64748b', letterSpacing: '0.1em' }}>03 - DEEP DIVE</span>
        </div>

        <h2 className={classes.htmlH2}>
          From B-Rep to a mesh<br />
          <span style={{ fontStyle: 'italic', color: 'var(--primary-color)' }}>a solver will accept.</span>
        </h2>
        <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, maxWidth: '80%', marginBottom: '60px' }}>
          "Watertight and isotropic" is a quality bar, not a checkbox. Every stage of the engine exists to defend it.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '64px' }}>
          {[
            { icon: <FileBox size={18} color="#0ea5e9" />, name: "Geometry Ingestion", desc: "STEP / IGES via OpenCASCADE", items: ["B-Rep healing", "Tolerance stitching", "Degenerate-face cleanup"] },
            { icon: <Triangle size={18} color="#0ea5e9" />, name: "Surface Meshing", desc: "Optimized CDT core", items: ["Per-face parametric meshing", "Isotropic sizing field", "Multi-threaded face batches"] },
            { icon: <ListOrdered size={18} color="#0ea5e9" />, name: "FEA Validation", desc: "Quality gates before export", items: ["Watertightness check", "Aspect-ratio & skew metrics", "Per-element quality scores"] },
            { icon: <MonitorPlay size={18} color="#0ea5e9" />, name: "Delivery", desc: "Back to the browser", items: ["Mesh + metrics payload", "Three.js heatmap rendering", "Job status via queue events"] }
          ].map((tier, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 24px', display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', gap: '24px', flexDirection: isMobile ? 'column' : 'row' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{tier.icon}</div>
              <div style={{ width: isMobile ? 'auto' : '250px' }}>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a' }}>{tier.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{tier.desc}</div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', flexGrow: 1 }}>
                {tier.items.map((item, j) => (
                  <span key={j} style={{ fontSize: '0.8rem', color: '#475569', background: '#f8fafc', padding: '4px 12px', borderRadius: '100px', border: '1px solid #e2e8f0' }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Outcome card */}
        <div style={{ padding: isMobile ? '32px 24px' : '64px 48px', background: '#f0f9ff', borderRadius: '24px', position: 'relative', overflow: 'hidden', border: '1.5px solid #bae6fd' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#0284c7', letterSpacing: '0.1em', marginBottom: '16px', display: 'block' }}>→ WHY IT MATTERS</span>
          <h2 className={classes.htmlH2}>Simulation-grade meshing, without desktop software.</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '80%' }}>
            {[
              "One pipeline covers the full journey: authenticated CAD upload → queued C++ compute → validated mesh → interactive 3D review.",
              "The queue architecture scales horizontally — add workers, not complexity — while the API stays responsive.",
              "Quality heatmaps turn abstract FEA metrics into something an engineer can see and act on in the browser."
            ].map((pt, j) => (
              <li key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5 }}>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ============================================================
          SECTION 5: PRODUCT IN ACTION
          ============================================================ */}
      <div style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className={classes.contentMaxWidth} style={{ padding: isMobile ? '60px 0' : '100px 0', maxWidth: '1000px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '24px', height: '2px', background: '#0ea5e9' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#64748b', letterSpacing: '0.1em' }}>04 - PRODUCT IN ACTION</span>
          </div>
          <h2 className={classes.htmlH2}>
            The viewer,<br />
            <span style={{ fontStyle: 'italic', color: 'var(--primary-color)' }}>up close.</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, maxWidth: '80%', marginBottom: '48px' }}>
            X-ray transparency mode lets an engineer see straight through a meshed assembly to check internal surfaces without hiding a single part.
          </p>

          <ScrubVideo
            src="/videos/meshstage-walkthrough.mp4"
            caption="A closer look at the mesh viewer — X-ray transparency, cross-sections, and live diagnostic reporting."
            isMobile={isMobile}
          />

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '24px', marginTop: '40px' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
              <Image src="/images/meshstage/meshstage-shot-3.webp" alt="X-ray transparency view of a meshed valve assembly" width={1903} height={985} sizes="(max-width: 768px) 100vw, 45vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '14px 18px', background: '#fff', fontSize: '0.8rem', color: '#64748b', borderTop: '1px solid #e2e8f0' }}>
                Transparency dialed down to reveal internal surfaces through the mesh wireframe.
              </div>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
              <Image src="/images/meshstage/meshstage-shot-4.webp" alt="Wireframe view of a meshed valve handle assembly" width={1899} height={982} sizes="(max-width: 768px) 100vw, 45vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '14px 18px', background: '#fff', fontSize: '0.8rem', color: '#64748b', borderTop: '1px solid #e2e8f0' }}>
                Full wireframe render — every triangle in the 1.2M-element mesh, rendered live in WebGL.
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
