"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ValentinesPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <main className="relative h-screen w-full overflow-hidden bg-black">

            {/* LOADER  */}
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50"
                    >

                        <div className="w-12 h-12 border-4 border-emerald-900/30 border-t-emerald-500 rounded-full animate-spin" />
                        <p className="mt-4 text-emerald-500/60 font-mono text-sm tracking-widest uppercase">
                            Just give it a sec...
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>


            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{
                    opacity: isLoaded ? 1 : 0,
                    scale: isLoaded ? 1 : 1.05
                }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <picture className="h-full w-full">
                    <source srcSet="/bench-render-mobile.png" media="(max-width: 767px)" />
                    <img
                        src="/bench render.png"
                        alt="Valentine Bench"

                        className="h-full w-full object-cover object-bottom"
                        onLoad={() => setIsLoaded(true)}
                    />
                </picture>
            </motion.div>

        </main>
    );
}