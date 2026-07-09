export type CardProps = {
    height: number | string;
    width: number | string;
    zIndex: number;
    projectName: string;
    projectDescription: string;
    isExiting?: boolean;
    video?: string;
    onExpandProject?: (name: string) => void;
    layoutId?: string;
    onVideoLoaded?: () => void;
    isProjectExpanded?: boolean;
    onCloseWindow?: () => void;
    demoPoster?: string;
    isActive?: boolean;
};

// clamp() so cards shrink on laptop-width viewports instead of staying
// pinned to a size tuned for large desktop monitors (was overlapping the
// sidebar on MacBook-sized screens while looking fine on a 24"+ display).
export const CARD_STYLES = {
    window: { width: "clamp(20rem, 34vw, 31.61rem)", height: "clamp(18.5rem, 31.5vw, 29.32rem)" },
    grid: { width: "clamp(16rem, 26vw, 23.7rem)", height: "clamp(14.8rem, 24vw, 22rem)" }
};
