"use client";
import { motion } from "framer-motion";

export default function ValentinesPage() {
    return (
        <main className="relative h-screen w-full overflow-hidden bg-black">

            <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <picture className="h-full w-full">
                    <source srcSet="/bench-render-mobile.png" media="(max-width: 767px)" />
                    <img
                        src="/bench render.png"
                        alt="Valentine Bench"
                        className="h-full w-full object-cover"
                    />
                </picture>
            </motion.div>
        </main>
    );
}