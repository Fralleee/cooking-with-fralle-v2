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
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
        >
            <FrozenRouter>{props.children}</FrozenRouter>
        </motion.div>
    );
});

Child.displayName = "Child";

export default function ClientLayout(props: { children: React.ReactNode }) {
    const segment = useSelectedLayoutSegment();
    return (
        <AnimatePresence mode="popLayout" initial={false}>
            <Child key={segment}>{props.children}</Child>
        </AnimatePresence>
    );
}
