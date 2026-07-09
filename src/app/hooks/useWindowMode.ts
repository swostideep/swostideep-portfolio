import { useState, useCallback, useEffect } from "react";

export type WindowModeAPI = {
    openWindows: string[];
    bringToFront: (slug: string) => void;
    closeWindow: (slug: string) => void;
    getPosition: (slug: string) => { x: number; y: number } | undefined;
    getZIndex: (slug: string) => number;
};

// Stagger offsets below were tuned for a wide desktop monitor (~1920px+).
// On a laptop-width viewport the same pixel offsets push the leftmost
// cards past the sidebar's edge, so we scale them down proportionally to
// the available width instead of keeping them fixed.
const STAGGER_TUNED_WIDTH = 1920;
const MIN_STAGGER_SCALE = 0.5;

function getStaggerScale() {
    if (typeof window === "undefined") return 1;
    return Math.min(1, Math.max(MIN_STAGGER_SCALE, window.innerWidth / STAGGER_TUNED_WIDTH));
}

export function useWindowMode(viewMode: 'tab' | 'card' = 'tab'): WindowModeAPI {
    // Start empty for SSR safety and to keep mobile clear on startup
    const [openWindows, setOpenWindows] = useState<string[]>([]);
    // meshstage has highest z (frontmost), iitd-vr middle, ambiguity-labs back
    const [zIndexes, setZIndexes] = useState<Record<string, number>>({ "ambiguity-labs": 1, "iitd-vr": 2, meshstage: 3 });
    const [topZ, setTopZ] = useState(3);
    const [staggerScale, setStaggerScale] = useState(1);

    // Initialize desktop open windows on mount — last item is frontmost.
    // Matches the "Default" filter (3 flagship cards in their original
    // staggered layout). The filter-change effect in CardStackContainer
    // brings in additional projects when the user switches filters.
    useEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth > 768) {
            setOpenWindows(["ambiguity-labs", "iitd-vr", "meshstage"]);
        }
    }, []);

    useEffect(() => {
        setStaggerScale(getStaggerScale());
        const handleResize = () => setStaggerScale(getStaggerScale());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const bringToFront = useCallback((slug: string) => {
        setOpenWindows((prev) => {
            const filtered = prev.filter((w) => w !== slug);
            return [...filtered, slug];
        });
        setTopZ((prev) => {
            const nextZ = prev + 1;
            setZIndexes((z) => ({ ...z, [slug]: nextZ }));
            return nextZ;
        });
    }, []);

    const closeWindow = useCallback((slug: string) => {
        setOpenWindows((prev) => prev.filter((w) => w !== slug));
    }, []);

    const getPosition = useCallback((slug: string) => {
        const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
        if (isMobile) {
            return { x: 0, y: 0 };
        }

        if (viewMode === 'card') {
            // Grid layout positions
            const gridPositions: Record<string, { x: number, y: number }> = {
                meshstage:      { x:   50, y: -20 },
                "iitd-vr":      { x: -380, y: 350 },
                "ambiguity-labs": { x: -380, y: -20 },
                safeconnect:    { x:   50, y: 350 },
                "credit-risk":  { x: -380, y: 620 },
            };
            const pos = gridPositions[slug] || { x: 0, y: 0 };
            return { x: pos.x * staggerScale, y: pos.y * staggerScale };
        }

        // Initial staggered positions — spread so cards are clearly visible
        // without overlap. Scaled down on narrower viewports so the
        // leftmost cards don't reach the sidebar.
        const positions: Record<string, { x: number, y: number }> = {
            "ambiguity-labs": { x: -260, y: -60 },
            safeconnect:    { x:  340, y: -80 },
            meshstage:      { x:  -70, y:  -15 },
            "iitd-vr":      { x:  150, y:   55 },
            "credit-risk":  { x: -260, y:  220 },
        };
        const pos = positions[slug] || { x: 0, y: 0 };
        return { x: pos.x * staggerScale, y: pos.y * staggerScale };
    }, [viewMode, staggerScale]);

    const getZIndex = useCallback((slug: string) => zIndexes[slug] || 1, [zIndexes]);

    return { openWindows, bringToFront, closeWindow, getPosition, getZIndex };
}
