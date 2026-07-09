"use client";
import React from "react";
import Image from "next/image";
import CaseStudyHeader from "../blocks/CaseStudyHeader";
import ScrubVideo from "../blocks/ScrubVideo";
import classes from "./caseStudy.module.css";
import { useVoiceModal } from "@/app/contexts/VoiceModalContext";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import {
  CheckCircle2, ArrowRight, Gamepad2, Drill, Flame,
  Layers, GitBranch, Box, Workflow
} from "lucide-react";

export default function IITDelhiVRCaseStudyTemplate() {
  const { openModal } = useVoiceModal();
  const isMobile = useIsMobile();

  return (
    <div className={classes.pageWrapper}>

      {/* ============================================================
          SECTION 1: HERO & BRIEF
          ============================================================ */}
      <div className={classes.contentMaxWidth}>

        <CaseStudyHeader
          title="IIT Delhi - SDE Intern"
          subtitle="A coal-mine safety training simulator — teaching drilling, blasting, and hazard response inside a virtual mine before workers ever face the real one."
          tags={["Unity (C#)", "XR Toolkit", "DESCINED Lab · IIT Delhi", "May – July 2025"]}
          onVoiceModeClick={openModal}
        />

        {/* Hero Video */}
        <div style={{ width: isMobile ? '100%' : 'calc(100% + 80px)', marginLeft: isMobile ? 0 : '-40px', marginBottom: '100px', borderRadius: '16px', overflow: 'hidden' }}>
          <video
            src="/videos/iitd-vr.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

      </div>

      {/* ============================================================
          SECTION 2: CONTEXT & CONTRIBUTION
          ============================================================ */}
      <div className={classes.contentMaxWidth} style={{ padding: isMobile ? '60px 0' : '100px 0', maxWidth: '1000px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{ width: '24px', height: '2px', background: '#f59e0b' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#64748b', letterSpacing: '0.1em' }}>01 - THE CONTEXT</span>
        </div>

        <h2 className={classes.htmlH2}>
          Mining accidents are trained away<br />
          <span style={{ fontStyle: 'italic', color: 'var(--primary-color)' }}>before they happen.</span>
        </h2>

        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, maxWidth: '80%', marginBottom: '60px' }}>
          As a Software Development Intern (sponsored by American Express) at the Design Science, Innovation and Education (DESCINED) Lab, Department of Design, IIT Delhi, I built the core software platform for a VR simulator that trains coal-mine operators on heavy machinery — safely, repeatably, and measurably.
        </p>

        {/* Core Contribution Block */}
        <div className={classes.htmlSectionCard}>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#d97706', letterSpacing: '0.1em' }}>WHAT I BUILT</span>
          <p style={{ fontSize: '1.4rem', color: '#0f172a', fontStyle: 'italic', fontWeight: 400, lineHeight: 1.5, marginTop: '16px', fontFamily: 'Instrument Serif, serif' }}>
            "A modular Unity (C#) platform — object-oriented, state-machine driven, and event-based — so new missions and machines can be added without touching the core."
          </p>

          <div style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid #fef3c7', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '24px' }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f59e0b', marginBottom: '8px' }}>6+</div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}><strong>reusable core modules</strong> built with OOP, state machines, and event-driven architecture.</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f59e0b', marginBottom: '8px' }}>3</div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}><strong>reusable system components</strong> — vehicle control, drilling logic, and hazard handling — behind clean interfaces.</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f59e0b', marginBottom: '8px' }}>5+</div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}><strong>controller actions</strong> wired through Unity XR Toolkit input handling — joysticks, triggers, and button chords.</div>
            </div>
          </div>
        </div>

        {/* Screenshot Gallery */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <Image src="/images/iitd/iitd-tunnel.webp" alt="Drill arm advancing through the mine tunnel" width={1800} height={840} sizes="(max-width: 768px) 100vw, 90vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div style={{ padding: '14px 18px', background: '#f8fafc', fontSize: '0.8rem', color: '#64748b', borderTop: '1px solid #e2e8f0' }}>
              The jumbo drill advancing through the timber-supported tunnel — every prop, light, and support beam placed to mirror a real underground mine.
            </div>
          </div>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <Image src="/images/iitd/iitd-cockpit.webp" alt="Operator cockpit view with joysticks" width={1800} height={845} sizes="(max-width: 768px) 100vw, 90vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div style={{ padding: '14px 18px', background: '#f8fafc', fontSize: '0.8rem', color: '#64748b', borderTop: '1px solid #e2e8f0' }}>
              First-person cockpit: physical joysticks mapped to XR controller input.
            </div>
          </div>
        </div>

        {/* Drill Video */}
        <ScrubVideo
          src="/videos/drill-movement.mp4"
          caption="Drilling logic up close — bit alignment, contact detection, and hole placement."
          isMobile={isMobile}
        />
      </div>

      {/* ============================================================
          SECTION 3: ARCHITECTURE
          ============================================================ */}
      <div style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className={classes.contentMaxWidth} style={{ padding: isMobile ? '60px 0' : '100px 0', maxWidth: '1000px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#f59e0b', letterSpacing: '0.1em', marginBottom: '16px', display: 'block' }}>02 - SYSTEM ARCHITECTURE</span>
          <h2 className={classes.htmlH2}>
            Three components. <span style={{ fontStyle: 'italic', color: 'var(--primary-color)' }}>Clean abstractions.</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, maxWidth: '70%', marginBottom: '40px' }}>
            Each machine behaviour lives behind an interface, so mission designers compose training scenarios instead of rewriting control code.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', marginBottom: '80px' }}>
            {[
              {
                icon: <Gamepad2 size={20} color="#f59e0b" />,
                label: "COMPONENT 01",
                title: "Vehicle Control",
                desc: "Drives the jumbo drill through the tunnel network — acceleration, steering, and seat entry — mapped to XR joystick input with physics-based movement.",
                decision: "One controller interface reused across every drivable machine in the simulator."
              },
              {
                icon: <Drill size={20} color="#f59e0b" />,
                label: "COMPONENT 02",
                title: "Drilling Logic",
                desc: "Boom extension, arm articulation, and trigger-driven drilling with hole placement validation for the blast-hole patterns used in real mine headings.",
                decision: "Drill state machine (Idle → Position → Drill → Retract) keeps mission code declarative."
              },
              {
                icon: <Flame size={20} color="#f59e0b" />,
                label: "COMPONENT 03",
                title: "Hazard Handling",
                desc: "Fire, water-logging, and ventilation emergencies raised as events — missions subscribe to test the trainee's situational awareness under pressure.",
                decision: "Event-driven hazards decouple emergencies from mission scripts entirely."
              }
            ].map((card, i) => (
              <div key={i} className={classes.htmlCard} style={{ padding: '24px', background: '#fff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#1e293b', textTransform: 'uppercase' }}>Engineering Decision</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>{card.decision}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Architecture layers */}
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#111', marginBottom: '24px' }}>Platform Layers: Input to Mission</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { icon: <Workflow size={18} color="#f59e0b" />, name: "Mission & Progression Layer", desc: "Structured progression logic", items: ["Mission state machine", "Objective tracking", "Force-field mission boundaries", "Completion events"] },
              { icon: <GitBranch size={18} color="#f59e0b" />, name: "Workflow & State Management", desc: "Scalable feature expansion", items: ["Central game-state store", "Event bus", "Scene transitions", "Save/resume of training runs"] },
              { icon: <Box size={18} color="#f59e0b" />, name: "System Components", desc: "Reusable machine behaviours", items: ["Vehicle Control", "Drilling Logic", "Hazard Handling"] },
              { icon: <Layers size={18} color="#f59e0b" />, name: "Input & Interaction Layer", desc: "Unity XR Toolkit", items: ["5+ controller actions", "Joystick mapping", "Trigger drilling", "Seat & grab interactions"] }
            ].map((tier, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 24px', display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', gap: '24px', flexDirection: isMobile ? 'column' : 'row' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{tier.icon}</div>
                <div style={{ width: isMobile ? 'auto' : '280px' }}>
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
        </div>
      </div>

      {/* ============================================================
          SECTION 4: MISSIONS & IN-GAME TUTORIALS
          ============================================================ */}
      <div className={classes.contentMaxWidth} style={{ padding: isMobile ? '60px 0' : '100px 0', maxWidth: '1000px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div style={{ width: '24px', height: '2px', background: '#f59e0b' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#64748b', letterSpacing: '0.1em' }}>03 - MISSIONS & TUTORIALS</span>
        </div>

        <h2 className={classes.htmlH2}>
          Structured progression,<br />
          <span style={{ fontStyle: 'italic', color: 'var(--primary-color)' }}>taught inside the cab.</span>
        </h2>
        <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, maxWidth: '80%', marginBottom: '60px' }}>
          Training runs as a sequence of missions — Navigation, Drill Arm, Blast Holes, Water Logging, Blast Setup, Ventilation, Fire Hazard — each gated by the state-management system. Trainees learn controls from short video tutorials rendered directly onto the cockpit display, and force-field colliders keep them from wandering off-mission on the map.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginBottom: '64px' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <Image src="/images/iitd/iitd-missions.webp" alt="Mission goal cards for drilling and blasting levels" width={1800} height={1150} sizes="(max-width: 768px) 100vw, 90vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div style={{ padding: '14px 18px', background: '#f8fafc', fontSize: '0.8rem', color: '#64748b', borderTop: '1px solid #e2e8f0' }}>
              Mission briefs surface in-world at the start of each task — 8 mission types across the Drilling and Blasting tracks, driven by the same progression state machine.
            </div>
          </div>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <Image src="/images/iitd/iitd-tutorials.webp" alt="In-game tutorial video renders showing drill arm controls" width={1800} height={1105} sizes="(max-width: 768px) 100vw, 90vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div style={{ padding: '14px 18px', background: '#f8fafc', fontSize: '0.8rem', color: '#64748b', borderTop: '1px solid #e2e8f0' }}>
              In-game tutorial system: quick video renders demonstrate each control — accelerate, extend arm, operate arm, drill — before the trainee performs it.
            </div>
          </div>
        </div>

        {/* Outcome card */}
        <div style={{ padding: isMobile ? '32px 24px' : '64px 48px', background: '#fffbeb', borderRadius: '24px', position: 'relative', overflow: 'hidden', border: '1.5px solid #fde68a' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#d97706', letterSpacing: '0.1em', marginBottom: '16px', display: 'block' }}>→ OUTCOME</span>
          <h2 className={classes.htmlH2}>Certified, shipped, and built to grow.</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '80%' }}>
            {[
              "Internship completed at the DESCINED Lab under Prof. Srinivasan Venkataraman, Department of Design, IIT Delhi (19 May – 16 July 2025).",
              "Modular architecture lets new missions, machines, and hazards ship without touching the six core modules.",
              "Work certified as good with professional conduct — and the platform continues as the lab's training-simulator base."
            ].map((pt, j) => (
              <li key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="#d97706" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5 }}>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ============================================================
          SECTION 5: REFLECTION
          ============================================================ */}
      <div className={classes.contentMaxWidth} style={{ padding: isMobile ? '60px 0' : '100px 0', maxWidth: '1000px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div style={{ width: '24px', height: '2px', background: '#f59e0b' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#64748b', letterSpacing: '0.1em' }}>04 - REFLECTION</span>
        </div>

        <h2 className={classes.htmlH2}>
          What building for VR<br />
          <span style={{ fontStyle: 'italic', color: 'var(--primary-color)' }}>taught me.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '24px', marginTop: '60px' }}>
          <div className={classes.htmlCard} style={{ background: '#fff', padding: '32px' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#f1f5f9', lineHeight: 1, marginBottom: '16px' }}>01</div>
            <h4 className={classes.htmlH3} style={{ margin: '0 0 12px 0' }}>State machines beat spaghetti — especially in 3D.</h4>
            <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
              A VR simulator has dozens of simultaneous behaviours: the drill, the vehicle, the hazards, the tutorial overlays. My first prototype tangled them together in update loops. Rebuilding around explicit state machines and an event bus made every new mission a composition problem instead of a debugging problem.
            </p>
          </div>

          <div className={classes.htmlCard} style={{ background: '#fff', padding: '32px' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#f1f5f9', lineHeight: 1, marginBottom: '16px' }}>02</div>
            <h4 className={classes.htmlH3} style={{ margin: '0 0 12px 0' }}>Interfaces are how a lab project outlives its intern.</h4>
            <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
              I was building a platform other researchers would extend after I left. Designing the vehicle, drilling, and hazard systems behind clean abstractions — rather than the fastest working version — was the difference between a demo and a codebase the DESCINED Lab could keep shipping on.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
