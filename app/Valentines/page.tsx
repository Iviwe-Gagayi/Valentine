"use client";
import { motion } from "framer-motion";

export default function ValentinesPage() {




    return (
        <main className="relative h-screen w-full overflow-hidden bg-black">

            <motion.img
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src="/bench render.png"
                className="absolute inset-0 w-full h-full object-cover"
            />

        </main>
    );
}