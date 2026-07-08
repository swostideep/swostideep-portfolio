import { useState, useCallback, useEffect } from "react";

export type WindowModeAPI = {
    openWindows: string[];
    bringToFront: (slug: string) => void;
    closeWindow: (slug: string) => void;
    getPosition: (slug: string) => { x: number; y: number } | undefined;
    getZIndex: (slug: string) => number;
};

export function useWindowMode(viewMode: 'tab' | 'card' = 'tab'): WindowModeAPI {
    // Start empty for SSR safety and to keep mobile clear on startup
    const [openWindows, setOpenWindows] = useState<string[]>([]);
    // meshstage has highest z (frontmost), iitd-vr middle, credit-risk back
    const [zIndexes, setZIndexes] = useState<Record<string, number>>({ "credit-risk": 1, "iitd-vr": 2, meshstage: 3 });
    const [topZ, setTopZ] = useState(3);

    // Initialize desktop open windows on mount — last item is frontmost.
    // Matches the "Default" filter (3 flagship projects in their original
    // staggered layout). The filter-change effect in CardStackContainer
    // brings in additional projects when the user switches filters.
    useEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth > 768) {
            setOpenWindows(["credit-risk", "iitd-vr", "meshstage"]);
        }
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
                meshstage:    { x:   50, y: -20 },
                "iitd-vr":    { x: -380, y: 350 },
                "credit-risk":{ x: -380, y: -20 },
                safeconnect:  { x:   50, y: 350 },
            };
            return gridPositions[slug] || { x: 0, y: 0 };
        }

        // Initial staggered positions — spread so all 4 default cards are
        // clearly visible without overlap. SafeConnect gets its own slot to the
        // right so it doesn't sit underneath Credit Risk.
        const positions: Record<string, { x: number, y: number }> = {
            "credit-risk":{ x: -260, y: -60 },
            safeconnect:  { x:  340, y: -80 },
            meshstage:    { x:  -70, y:  -15 },
            "iitd-vr":    { x:  150, y:   55 },
        };
        return positions[slug] || { x: 0, y: 0 };
    }, [viewMode]);

    const getZIndex = useCallback((slug: string) => zIndexes[slug] || 1, [zIndexes]);

    return { openWindows, bringToFront, closeWindow, getPosition, getZIndex };
}
