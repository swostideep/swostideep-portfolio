"use client";
import React from "react";
import CaseStudyHeader from "../blocks/CaseStudyHeader";
import classes from "./caseStudy.module.css";
import { useVoiceModal } from "@/app/contexts/VoiceModalContext";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { ArrowRight, CheckCircle2, MapPin, Radio, Timer } from "lucide-react";
import CodeShowcase from "../blocks/CodeShowcase";

const NEARBY_ROUTE_CODE = `router.get('/api/v1/resources/nearby', async (req, res) => {
  const { lat, lng, radiusKm = 5, type } = req.query;
  if (!lat || !lng) {
    return res.status(400).json({ error: 'lat and lng are required' });
  }

  const query = {
    location: {
      $near: {
        $geometry: { type: 'Point', coordinates: [Number(lng), Number(lat)] },
        $maxDistance: Number(radiusKm) * 1000,
      },
    },
    ...(type && { type }),
    available: true,
  };

  const resources = await Resource.find(query)
    .select('name type location contact lastUpdated')
    .limit(25)
    .lean();

  return res.status(200).json({
    count: resources.length,
    resources: resources.map(withDistanceFrom(lat, lng)),
  });
});`;

export default function SafeConnectCaseStudyTemplate() {
  const { openModal } = useVoiceModal();
  const isMobile = useIsMobile();

  return (
    <div className={classes.pageWrapper}>

      {/* ============================================================
          SECTION 1: HERO & BRIEF
          ============================================================ */}
      <div className={classes.contentMaxWidth}>
        <CaseStudyHeader
          title="SafeConnect"
          subtitle="An emergency resource discovery platform — geolocation-driven APIs that put the nearest help on screen when seconds matter."
          tags={["Backend Services", "REST APIs", "Geolocation", "February 2025"]}
          onVoiceModeClick={openModal}
        />
      </div>

      {/* ============================================================
          SECTION 2: THE SYSTEM
          ============================================================ */}
      <div className={classes.contentMaxWidth} style={{ padding: isMobile ? '40px 0 60px' : '60px 0 100px', maxWidth: '1000px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{ width: '24px', height: '2px', background: '#ef4444' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#64748b', letterSpacing: '0.1em' }}>01 - THE SYSTEM</span>
        </div>

        <h2 className={classes.htmlH2}>
          In an emergency, stale data<br />
          <span style={{ fontStyle: 'italic', color: 'var(--primary-color)' }}>is wrong data.</span>
        </h2>

        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, maxWidth: '80%', marginBottom: '60px' }}>
          SafeConnect aggregates emergency resources behind location-aware APIs, so a user's coordinates return the nearest available help — with the data-handling pipeline tuned for low-latency, real-time delivery and accuracy across dynamic data streams.
        </p>

        <div className={classes.htmlSectionCard}>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#dc2626', letterSpacing: '0.1em' }}>AT A GLANCE</span>
          <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '24px' }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ef4444', marginBottom: '8px' }}>4</div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}><strong>RESTful API endpoints</strong> for geolocation-driven query processing with reliable response handling across services.</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ef4444', marginBottom: '8px' }}>2</div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}><strong>emergency resource feeds</strong> aggregated into one consistent, always-available view.</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ef4444', marginBottom: '8px' }}>Real-time</div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}><strong>location-based access</strong> with optimized data workflows for low-latency information delivery.</div>
            </div>
          </div>
        </div>

        {/* Component cards */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', marginBottom: '64px' }}>
          {[
            {
              icon: <Radio size={20} color="#ef4444" />,
              label: "MODULE 01",
              title: "Resource Aggregation",
              desc: "Backend modules normalize heterogeneous emergency-resource feeds into one schema, keeping availability data consistent across sources.",
              decision: "One query surface regardless of where the data originates."
            },
            {
              icon: <MapPin size={20} color="#ef4444" />,
              label: "MODULE 02",
              title: "Geolocation Queries",
              desc: "Location-indexed endpoints resolve a user's coordinates to nearby resources, with query processing built for efficient spatial lookups.",
              decision: "Proximity is computed server-side — thin clients, fast answers."
            },
            {
              icon: <Timer size={20} color="#ef4444" />,
              label: "MODULE 03",
              title: "Real-time Delivery",
              desc: "Optimized data-handling workflows keep responses low-latency and accurate even as the underlying resource streams change.",
              decision: "Freshness guarantees are part of the pipeline, not an afterthought."
            }
          ].map((card, i) => (
            <div key={i} className={classes.htmlCard} style={{ padding: '24px', background: '#fff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

        {/* Code showcase */}
        <div style={{ marginBottom: '64px' }}>
          <CodeShowcase
            filename="routes/resources.js"
            language="javascript"
            code={NEARBY_ROUTE_CODE}
            caption="The geolocation query at the core of SafeConnect — a MongoDB $near query resolves a user's coordinates to the nearest available emergency resources."
          />
        </div>

        {/* Outcome */}
        <div style={{ padding: isMobile ? '32px 24px' : '64px 48px', background: '#fef2f2', borderRadius: '24px', border: '1.5px solid #fecaca' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#dc2626', letterSpacing: '0.1em', marginBottom: '16px', display: 'block' }}>→ OUTCOME</span>
          <h2 className={classes.htmlH2}>Help, findable in seconds.</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '80%' }}>
            {[
              "Real-time, location-based access to aggregated emergency resources with consistent data availability.",
              "Efficient geolocation-driven query processing and reliable response handling across services.",
              "Data workflows optimized for low latency and accuracy over dynamic, changing streams."
            ].map((pt, j) => (
              <li key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="#dc2626" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5 }}>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}
