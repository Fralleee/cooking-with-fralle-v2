"use client";
import FrozenRouter from "@/components/frozen-router";
import { AnimatePresence, motion } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";
import { ElementRef, forwardRef } from "react";

const Child = forwardRef<
    ElementRef<typeof motion.div>,
    { children: React.ReactNode }
>((props, ref) => {
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 1.05 }}
            transition={{ duration: 0.1 }}
            onAnimationComplete={() => window.scrollTo(0, 0)}
        >
            <FrozenRouter>{props.children}</FrozenRouter>
        </motion.div>
    );
});

Child.displayName = "Child";

export default function ClientLayout(props: { children: React.ReactNode }) {
    const segment = useSelectedLayoutSegment();
    return (
        <AnimatePresence mode="wait" initial={false}>
            <Child key={segment}>{props.children}</Child>
        </AnimatePresence>
    );
}
