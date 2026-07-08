"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import TrafficLights from "@/components/card/trafficLights/trafficLights";
import MeshStageCaseStudyTemplate from "@/components/caseStudy/template/MeshStageCaseStudyTemplate";
import IITDelhiVRCaseStudyTemplate from "@/components/caseStudy/template/IITDelhiVRCaseStudyTemplate";
import CreditRiskCaseStudyTemplate from "@/components/caseStudy/template/CreditRiskCaseStudyTemplate";
import SafeConnectCaseStudyTemplate from "@/components/caseStudy/template/SafeConnectCaseStudyTemplate";
import classes from "./expandedProject.module.css";
interface ExpandedProjectProps {
    projectName: string | null;
    onClose: () => void;
    layoutId: string;
}
export default function ExpandedProject({ projectName, onClose, layoutId }: ExpandedProjectProps) {
    // Close on escape key + lock body scroll when modal is open
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        if (projectName) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [projectName, onClose]);
    return (
        <AnimatePresence>
            {projectName && (
                <div className={classes.overlay}>
                    <motion.div
                        className={classes.backdrop}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className={classes.windowContainer}
                        layoutId={layoutId}
                        transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                        data-component="ExpandedProject"
                        data-project={projectName}
                    >
                        <div className={classes.header}>
                            <TrafficLights onClose={onClose} visible={true} />
                            <span className={classes.windowTitle}>{projectName}</span>
                            <div className={classes.trafficLightsPlaceholder} />
                        </div>
                        <div className={classes.content}>
                            {projectName?.toLowerCase() === 'meshstage' && <MeshStageCaseStudyTemplate />}
                            {(projectName?.toLowerCase() === 'iit delhi vr' || projectName?.toLowerCase() === 'iitd-vr') && <IITDelhiVRCaseStudyTemplate />}
                            {(projectName?.toLowerCase() === 'credit risk analyzer' || projectName?.toLowerCase() === 'credit-risk') && <CreditRiskCaseStudyTemplate />}
                            {projectName?.toLowerCase() === 'safeconnect' && <SafeConnectCaseStudyTemplate />}
                            {/* Fallback for other projects temporarily */}
                            {projectName && !['meshstage', 'iit delhi vr', 'iitd-vr', 'credit risk analyzer', 'credit-risk', 'safeconnect'].includes(projectName.toLowerCase()) && (
                                <div style={{ padding: "60px", textAlign: "center", color: "rgba(0,0,0,0.5)" }}>
                                    Case study for {projectName} is currently under construction.
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
