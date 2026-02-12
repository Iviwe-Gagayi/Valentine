"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, color } from "framer-motion";

const LAYERS = [
  { color: "bg-emerald-900", delay: 0 },
  { color: "bg-emerald-600", delay: 0.1 },
  { color: "bg-lime-400", delay: 0.2 },
  { color: "bg-white", delay: 0.3 },
];

export default function EntryButton() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const handleStart = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      router.push("/Valentines");
    }, 1000);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white ">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />



      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full bg-green-300"
          animate={{
            scale: [1, 1.5],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />


        <motion.button
          onClick={handleStart}
          animate={{
            scale: [1, 1.09, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}


          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
          whileTap={{ scale: 0.95 }}

          className="bg-green-500 text-white px-7 py-3 rounded-full border border-green-600 cursor-pointer"
          style={{ willChange: "transform" }}
        >
          Click me :D
        </motion.button>

        <AnimatePresence>
          {isTransitioning && (
            <>
              {LAYERS.map((layer, index) => (
                <motion.div
                  key={index}
                  initial={{ clipPath: "circle(0% at 50% 50%)" }}
                  animate={{ clipPath: "circle(150% at 50% 50%)" }}
                  transition={{
                    duration: 0.8,
                    delay: layer.delay,
                    ease: [0.76, 0, 0.24, 1]
                  }}
                  className={`fixed inset-0 ${layer.color} z-[${50 + index}]`}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </div>




    </main>
  );
}
