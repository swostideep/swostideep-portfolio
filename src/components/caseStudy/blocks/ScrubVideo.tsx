"use client";
import React from "react";

type ScrubVideoProps = {
  src: string;
  caption?: string;
  isMobile?: boolean;
};

export default function ScrubVideo({ src, caption, isMobile }: ScrubVideoProps) {
  return (
    <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
      <div style={{ width: '100%', height: isMobile ? '50vh' : '80vh', background: '#0b0b0d' }}>
        <video
          src={src}
          controls
          playsInline
          preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
        />
      </div>
      {caption && (
        <div style={{ padding: '14px 18px', background: '#f8fafc', fontSize: '0.8rem', color: '#64748b', borderTop: '1px solid #e2e8f0' }}>
          {caption}
        </div>
      )}
    </div>
  );
}
