"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Squircle } from "corner-smoothing";

const POSTS = [
  {
    id: "1",
    author: "Swosti",
    avatar: "/avatar.jpeg",
    location: "Gandhinagar, Gujarat",
    time: "Aug 2025",
    content: "Certificate of Participation — 24 hrs Odoo Hackathon 2025, presented by Odoo.",
    mediaUrl: "/images/posts/certificate-odoo-hackathon.png",
    detailedContent: `
      <h2>Odoo Hackathon 2025</h2>
      <p>Certificate of Participation for the 24-hour Odoo Hackathon, held August 11–12, 2025 in Gandhinagar, Gujarat.</p>
      <img src="/images/posts/certificate-odoo-hackathon.png" alt="Odoo Hackathon Certificate" style="width: 100%; border-radius: 16px; margin: 32px 0;" />
    `
  },
  {
    id: "2",
    author: "Swosti",
    avatar: "/avatar.jpeg",
    location: "IIT Delhi",
    time: "Aug 2025",
    content: "Certificate of Completion — Summer Internship at the DESCINED Lab, Department of Design, IIT Delhi, where I contributed to building a VR-based training simulator.",
    mediaUrl: "/images/posts/certificate-iitd-internship.png",
    detailedContent: `
      <h2>Summer Internship — IIT Delhi</h2>
      <p>Certificate of Completion of Summer Internship, awarded by Prof. Srinivasan Venkataraman, Department of Design, Indian Institute of Technology Delhi (DESCINED Lab), for the period 19 May – 16 July, 2025. Contributed to building a Virtual Reality-based training simulator.</p>
      <img src="/images/posts/certificate-iitd-internship.png" alt="IIT Delhi Internship Certificate" style="width: 100%; border-radius: 16px; margin: 32px 0;" />
    `
  }
];

export default function PostsFeed() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    // ROOT: Padded to push the grey box from top and left
    <div className="posts-feed-root" style={{ position: "relative", overflow: "hidden" }}>
      
      {/* THE GREY BOX (Island) */}
      <Squircle 
        cornerRadius={48} 
        style={{ 
          width: "100%", 
          height: "100%", 
          background: "#F0F0F0", 
          overflowY: "auto", 
          scrollbarWidth: "none", 
          msOverflowStyle: "none",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.03)"
        }}
      >
        {/* INNER CONTAINER: Shifted 70px left on desktop */}
        <div className="posts-inner-container">
          <div style={{ width: "90%", maxWidth: "680px", display: "flex", flexDirection: "column", gap: "24px" }}>
            {POSTS.map((post) => (
              <Squircle
                key={post.id}
                cornerRadius={24}
                style={{ background: "#FBFBFB", padding: "20px 20px 20px", boxShadow: "0 4px 20px rgba(0,0,0,0.03)", cursor: "pointer" }}
                onClick={() => setExpandedId(post.id)}
              >
                <motion.div layoutId={`post-container-${post.id}`}>
                  
                  {/* Post Header */}
                  <motion.div layoutId={`post-header-${post.id}`} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#ccc", overflow: "hidden", position: "relative" }}>
                       <Image src={post.avatar} alt={post.author} fill sizes="36px" style={{ objectFit: "cover" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                      <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#1c2b33", display: "flex", alignItems: "center", gap: "4px" }}>
                        {post.author} 
                        <img src="/icons/SVG.png" alt="verified" style={{ width: 14, height: 14, objectFit: "contain" }} /> 
                        <span style={{ color: "#8e8e93", fontWeight: 400, fontSize: "0.8rem" }}>• {post.time}</span>
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#8e8e93", fontWeight: 500 }}>{post.location}</div>
                    </div>
                  </motion.div>

                  {/* Post Media: 4/3 aspect ratio */}
                  <motion.div layoutId={`post-media-${post.id}`} style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "12px", overflow: "hidden", marginBottom: "14px", background: "#f0f0f0" }}>
                    <Image src={post.mediaUrl} alt="Post media" fill sizes="(max-width: 768px) 90vw, 400px" loading="lazy" style={{ objectFit: "contain" }} />
                    <div style={{ 
                      position: "absolute", 
                      bottom: "12px", 
                      right: "12px", 
                      background: "rgba(231, 231, 231, 0.7)", 
                      width: "42.39px",
                      height: "42.39px",
                      borderRadius: "7.95px", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      backdropFilter: "blur(5.3px)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                    }}>
                      <img src="/icons/Frame 1932992809.png" alt="expand" style={{ width: 20, height: 20 }} />
                    </div>
                  </motion.div>

                  {/* Post Actions & Content */}
                  <motion.div layoutId={`post-footer-${post.id}`}>
                    <div style={{ display: "flex", gap: "20px", marginBottom: "12px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", fontWeight: 500, color: "#1c2b33" }}>
                        <img src="/icons/Vector.png" alt="like" style={{ width: 22, height: 22 }} /> 119 likes
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", fontWeight: 500, color: "#5c6770" }}>
                        <img src="/icons/Container.png" alt="share" style={{ width: 22, height: 22 }} /> Share
                      </div>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "#1c2b33", lineHeight: 1.6, margin: 0 }}>
                      <span style={{ fontWeight: 600 }}>{post.author}</span> 
                      <img src="/icons/SVG.png" alt="verified" style={{ width: 12, height: 12, margin: "0 6px", display: "inline-block" }} />
                      {post.content}
                    </p>
                  </motion.div>

                </motion.div>
              </Squircle>
            ))}
          </div>
        </div>
      </Squircle>

      {/* EXPANDED OVERLAY */}
      <AnimatePresence>
        {expandedId && (
          <>
            {/* Backdrop: Covering the entire window */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="posts-expanded-backdrop"
              onClick={() => setExpandedId(null)}
            />
            
            {/* SCROLLABLE WRAPPER */}
            <div 
              className="posts-expanded-wrapper"
              onClick={(e) => {
                 if(e.target === e.currentTarget) setExpandedId(null);
              }}
            >
              <Squircle 
                cornerRadius={32} 
                className="posts-expanded-card"
              >
                {POSTS.filter(p => p.id === expandedId).map(post => (
                  <motion.div key="expanded" layoutId={`post-container-${post.id}`}>
                    
                    {/* Header */}
                    <motion.div layoutId={`post-header-${post.id}`} style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
                      <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#ccc", overflow: "hidden", position: "relative" }}>
                        <Image src={post.avatar} alt={post.author} fill sizes="48px" style={{ objectFit: "cover" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#1c2b33", display: "flex", alignItems: "center", gap: "6px" }}>
                          {post.author} 
                          <img src="/icons/SVG.png" alt="verified" style={{ width: 16, height: 16, objectFit: "contain" }} />
                          <span style={{ color: "#8e8e93", fontWeight: 400, fontSize: "0.9rem" }}>• {post.time}</span>
                        </div>
                        <div style={{ fontSize: "0.9rem", color: "#8e8e93", fontWeight: 500 }}>{post.location}</div>
                      </div>
                    </motion.div>

                    {/* Media */}
                    <motion.div 
                      layoutId={`post-media-${post.id}`} 
                      style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden", marginBottom: "24px", background: "#f0f0f0" }}
                    >
                      <Image src={post.mediaUrl} alt="Post media" fill sizes="(max-width: 768px) 90vw, 700px" loading="lazy" style={{ objectFit: "contain" }} />
                      <button 
                        onClick={() => setExpandedId(null)}
                        style={{ 
                          position: "absolute", 
                          bottom: "16px", 
                          right: "16px", 
                          background: "rgba(231, 231, 231, 0.7)", 
                          border: "none", 
                          padding: "12px", 
                          borderRadius: "12px", 
                          color: "#1c2b33", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                          cursor: "pointer",
                          backdropFilter: "blur(5.3px)"
                        }}
                      >
                        <img src="/icons/Frame 1932992809.png" alt="minimize" style={{ width: 24, height: 24, transform: "scale(-1, -1)" }} />
                      </button>
                    </motion.div>

                    {/* Actions */}
                    <motion.div layoutId={`post-footer-${post.id}`}>
                      <div style={{ display: "flex", gap: "24px", marginBottom: "20px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1rem", fontWeight: 600, color: "#1c2b33" }}>
                          <img src="/icons/Vector.png" alt="like" style={{ width: 24, height: 24 }} /> 119 likes
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1rem", fontWeight: 500, color: "#5c6770" }}>
                          <img src="/icons/Container.png" alt="share" style={{ width: 24, height: 24 }} /> Share
                        </div>
                      </div>
                      <p style={{ fontSize: "1.1rem", color: "#1c2b33", lineHeight: 1.7, marginBottom: "40px" }}>
                        <span style={{ fontWeight: 700 }}>{post.author}</span> 
                        <img src="/icons/SVG.png" alt="verified" style={{ width: 14, height: 14, margin: "0 8px", display: "inline-block" }} />
                        {post.content}
                      </p>
                    </motion.div>

                    {/* EXTENDED MEDIUM-STYLE CONTENT */}
                    <div 
                      className="post-content-rich"
                      style={{ 
                        color: "#1c2b33", 
                        fontSize: "1.1rem", 
                        lineHeight: 1.8, 
                        borderTop: "1px solid #f0f0f0", 
                        paddingTop: "40px",
                        fontFamily: "Inter, sans-serif"
                      }}
                      dangerouslySetInnerHTML={{ __html: post.detailedContent }}
                    />

                  </motion.div>
                ))}
              </Squircle>
            </div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .post-content-rich h2 { font-size: 1.8rem; font-weight: 700; margin: 32px 0 16px; }
        .post-content-rich h3 { font-size: 1.4rem; font-weight: 600; margin: 24px 0 12px; }
        .post-content-rich p { margin-bottom: 24px; color: #333; }
        /* Hard width caps so nothing in the rich body can push the panel
           wider than its column (was overflowing on small phones). */
        .post-content-rich { max-width: 100%; word-wrap: break-word; overflow-wrap: anywhere; }
        .post-content-rich img,
        .post-content-rich video,
        .post-content-rich iframe,
        .post-content-rich svg,
        .post-content-rich canvas { max-width: 100%; height: auto; display: block; }
        .post-content-rich pre,
        .post-content-rich code { max-width: 100%; white-space: pre-wrap; word-break: break-word; }
        .post-content-rich table { max-width: 100%; display: block; overflow-x: auto; }
      `}</style>

    </div>
  );
}
