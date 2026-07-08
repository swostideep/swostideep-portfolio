export type ProjectContent = {
    name: string;
    slug: string;
    description: string;
    tags?: string[];
    video?: string;
    demo?: string;
    demoPoster?: string;
    disabled?: boolean;
};

export const PROJECTS: ProjectContent[] = [
    {
        name: "MeshStage",
        slug: "meshstage",
        description: "Full-stack computational geometry pipeline generating watertight, isotropic 3D surface meshes from raw CAD data (STEP/IGES) with FEA validation.",
        tags: ["C++", "OpenCASCADE", "Three.js"],
        demoPoster: "/images/meshstage/meshstage-poster.webp"
    },
    {
        name: "IIT Delhi VR",
        slug: "iitd-vr",
        description: "VR coal-mine safety training simulator built in Unity (C#) at IIT Delhi's DESCINED Lab — state machines, event-driven architecture, and XR Toolkit input systems.",
        tags: ["Unity", "C#", "XR"],
        video: "/videos/iitd-vr.mp4",
        demoPoster: "/images/iitd/iitd-tunnel.webp"
    },
    {
        name: "Credit Risk Analyzer",
        slug: "credit-risk",
        description: "Scalable RESTful backend integrating ML-based risk scoring models for automated credit decisioning.",
        tags: ["Node.js", "MongoDB", "REST"],
        demoPoster: "/images/credit-risk/credit-risk-poster.webp"
    },
    {
        name: "SafeConnect",
        slug: "safeconnect",
        description: "Emergency resource discovery platform with real-time, geolocation-driven REST APIs and low-latency data delivery.",
        tags: ["Backend", "REST APIs"],
        demoPoster: "/images/safeconnect/safeconnect-poster.webp"
    }
];
