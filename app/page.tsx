"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, color } from "framer-motion";


export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white ">

      <img src="icon.png" className="w-50 h-50 heartbeat" />
      <h1 className="text-4xl font-bold text-black">It's you,</h1>
      <h1 className="text-4xl font-bold text-black">you Noodle!</h1>



    </main>

  );
}
