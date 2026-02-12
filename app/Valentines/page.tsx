"use client";
import { motion } from "framer-motion";

export default function ValentinesPage() {
    return (
        <main className="relative h-screen w-full overflow-hidden bg-black">
            <picture className="absolute inset-0 h-full w-full">

                <source
                    srcSet="/bench-render-mobile.png"
                    media="(max-width: 767px)"
                />


                <img
                    src="/bench render.png"
                    alt="Valentine Bench"
                    className="h-full w-full object-cover"
                />
            </picture>
        </main>
    );
}