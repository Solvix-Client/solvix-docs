import { Github, Heart, Book } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">

            {/* Background Glow */}
            {/* <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#1FD1B2]/20 to-[#0FA38A]/20 blur-3xl rounded-full -z-10 animate-pulse" /> */}

            <div className="max-w-4xl mx-auto text-center">
                {/* Version Badge */}
                <div className="flex flex-col items-center gap-4 mb-6">

                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
              bg-gradient-to-r from-[#1FD1B2]/20 to-[#0FA38A]/20 
              text-[#0FA38A] dark:text-[#1FD1B2]
              border border-[#1FD1B2]/30 
              text-sm font-medium backdrop-blur-md
              hover:scale-105 transition-all duration-300 animate-[float_4s_ease-in-out_infinite]"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#1FD1B2] animate-pulse"></span>
                        v1.0.0-beta.1 • Current Release
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-6xl md:text-7xl font-bold mt-6 bg-gradient-to-r from-[#1FD1B2] to-[#0FA38A] bg-clip-text text-transparent"
                    >
                        Solvix
                    </motion.h1>
                </div>
                {/* Subtitle */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
                >
                    Universal Cross-Runtime HTTP Client
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    Solvix is a production-ready, TypeScript-first HTTP client built to
                    run seamlessly across Node.js, browsers, Bun, Deno, and Edge runtimes —
                    using one consistent API everywhere.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    {/* Get Started */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1FD1B2] to-[#0FA38A] hover:from-[#18C2A6] hover:to-[#0E8E79] text-white font-semibold px-8 py-2 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <Book size={18} />
                        Get Started
                    </motion.button>

                    {/* GitHub */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 border-2 border-gray-300 dark:border-gray-700 font-semibold px-8 py-2 text-lg rounded-lg hover:border-[#0E8E79] hover:text-[#0E8E79] dark:hover:text-[#0E8E79]-400 transition-all duration-300"
                    >
                        <Github size={18} />
                        View on GitHub
                    </motion.button>

                    {/* Sponsor */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 font-medium px-8 py-4 text-lg rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300"
                    >
                        <Heart size={18} />
                        Become a Sponsor
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}