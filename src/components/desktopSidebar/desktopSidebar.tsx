"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import classes from "./desktopSidebar.module.css";
import { useAboutModal } from "@/app/contexts/AboutModalContext";
import { useFeedbackModal } from "@/app/contexts/FeedbackModalContext";

type DesktopSidebarProps = {
    isProjectExpanded?: boolean;
    activePage?: string;
    onCollapseProject?: () => void;
    onShowPosts?: () => void;
    onShowIdeas?: () => void;
    onShowTimeline?: () => void;
};

const mainNavigationItems = ["Work", "About", "Timeline", "Ideas", "Certificates", "Resume"];
const socialItems = ["GitHub", "LinkedIn", "Contact", "Email", "Feedback"];

const getNavigationProps = (section: string) => {
    switch (section) {
        case "GitHub": return { href: "https://github.com/swostideep", target: "_blank" };
        case "LinkedIn": return { href: "https://www.linkedin.com/in/swostideep-nayak-1400081b5/", target: "_blank" };
        case "Contact": return { href: "tel:6371057820", target: "_self" };
        case "Email": return { href: "mailto:swostideep@gmail.com", target: "_self" };
        case "Work": return { href: "/", target: "_self" };
        case "Timeline": return { href: "#", target: "_self" };
        case "Ideas": return { href: "#", target: "_self" };
        case "Certificates": return { href: "#", target: "_self" };
        case "Resume": return { href: "https://drive.google.com/file/d/1-3hVwC3ftoJ5wIFMDtVSnAeZm1INa-SA/view?usp=sharing", target: "_blank" };
        case "Feedback": return { href: "#", target: "_self" };
        default: return { href: "#", target: "_self" };
    }
};

const useCursorElement = (opts: any) => ({ ref: useRef(null) });

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
    isProjectExpanded,
    activePage = "Work",
    onCollapseProject,
    onShowPosts,
    onShowIdeas,
    onShowTimeline
}) => {
    const nameRef = useRef<HTMLAnchorElement>(null);
    const { openModal: openAboutModal } = useAboutModal();
    const { openModal: openFeedbackModal } = useFeedbackModal();

    return (
        <div className={`${classes.sidebar} ${isProjectExpanded ? classes.sidebarOpaque : ""}`}>
            <div className={classes.sidebarContent}>
                <div className={classes.topSection}>
                    <div className={classes.header}>
                        <Link
                            ref={nameRef}
                            href="/"
                            className={classes.name}
                            onClick={
                                onCollapseProject
                                    ? (e) => { e.preventDefault(); onCollapseProject(); }
                                    : undefined
                            }
                        >
                            Swosti
                        </Link>
                        <p className={classes.bio}>
                            Software developer who turns &quot;that&apos;s impossible&quot; into a pull request.
                        </p>
                        <p className={classes.bioSecondary}>
                            Strong in logical thinking and shipping fast without breaking things.
                        </p>
                    </div>

                    <nav className={classes.navigation}>
                        {mainNavigationItems.map((section) => (
                            <NavItem
                                key={section}
                                section={section}
                                isActive={activePage === section}
                                navProps={getNavigationProps(section)}
                                onClick={
                                    section === "About"
                                        ? openAboutModal
                                        : section === "Certificates"
                                            ? onShowPosts
                                            : section === "Ideas"
                                                ? onShowIdeas
                                                : section === "Timeline"
                                                    ? onShowTimeline
                                                    : section === "Work" && onCollapseProject
                                                        ? onCollapseProject
                                                        : undefined
                                }
                            />
                        ))}
                    </nav>
                </div>

                <div className={classes.bottomSection}>
                    <p className={classes.socialsHeading}>Connect & Contact</p>
                    <nav className={classes.socialsNavigation}>
                        {socialItems.map((section) => (
                            <NavItem
                                key={section}
                                section={section}
                                isActive={false}
                                isFeedback={section === "Feedback"}
                                navProps={getNavigationProps(section)}
                                onClick={
                                    section === "Feedback"
                                        ? openFeedbackModal
                                        : undefined
                                }
                            />
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

// Brand glyphs (Simple Icons paths) and a small Mail/phone icon for Contact.
// Inlined SVGs use currentColor so they inherit the menu text colour and
// dark-mode swaps automatically.
const SectionIcon: React.FC<{ section: string }> = ({ section }) => {
    const common = { width: 16, height: 16, viewBox: "0 0 24 24", "aria-hidden": true, className: classes.navIcon };
    switch (section) {
        case "LinkedIn":
            return (
                <svg {...common} fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            );
        case "GitHub":
            return (
                <svg {...common} fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
            );
        case "Contact":
            // Phone glyph
            return (
                <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            );
        case "Email":
            // Envelope glyph
            return (
                <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 6-10 7L2 6" />
                </svg>
            );
        default:
            return null;
    }
};

const NavItem: React.FC<{
    section: string;
    isActive: boolean;
    navProps: { href: string; target: string };
    onClick?: () => void;
    isFeedback?: boolean;
}> = ({ section, isActive, navProps, onClick, isFeedback }) => {
    const { ref } = useCursorElement({
        mode: "block",
        cornerRadius: 12,
        resetOnClick: true,
    });

    const className = `${classes.navItem} ${isActive ? classes.navItemActive : ""} ${isFeedback ? classes.navItemFeedback : ""}`;
    const isExternal = navProps.target === "_blank";

    const content = (
        <>
            <SectionIcon section={section} />
            <span style={{ flex: 1 }}>{section}</span>
            {isFeedback && <ArrowUpRight size={16} strokeWidth={2} />}
        </>
    );

    if (isExternal) {
        return (
            <a
                ref={ref as React.Ref<HTMLAnchorElement>}
                href={navProps.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
            >
                {content}
            </a>
        );
    }

    if (navProps.href === "#") {
        return (
            <button
                ref={ref as React.Ref<HTMLButtonElement>}
                className={className}
                onClick={onClick}
            >
                {content}
            </button>
        );
    }

    return (
        <Link
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={navProps.href}
            className={className}
            onClick={onClick ? (e) => { e.preventDefault(); onClick(); } : undefined}
        >
            {content}
        </Link>
    );
};

export default React.memo(DesktopSidebar);
