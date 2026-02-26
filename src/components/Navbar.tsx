import { Book, Github, Heart, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SolvixLogo from "../assets/solvix-png.png";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <>
            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img src={SolvixLogo} alt="Solvix Logo" className="w-6 h-6 object-contain" />
                        <span className="text-xl font-bold bg-gradient-to-r from-[#1FD1B2] to-[#0FA38A] bg-clip-text text-transparent">
                            Solvix
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        <a href="/docs" className="nav-link flex items-center gap-1">
                            <Book size={16} />
                            Getting Started
                        </a>

                        <a
                            href="https://github.com/solvix/solvix"
                            target="_blank"
                            className="nav-link flex items-center gap-1"
                        >
                            <Github size={16} />
                            GitHub
                        </a>

                        <a
                            href="https://github.com/sponsors/solvix"
                            target="_blank"
                            className="nav-link flex items-center gap-1"
                        >
                            <Heart size={16} />
                            Sponsor
                        </a>

                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                            >
                                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                        )}
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition transform hover:scale-105 active:scale-95"
                    >
                        <div className="relative w-6 h-5">
                            {/* Top */}
                            <span
                                className={`absolute left-0 h-0.5 w-6 bg-gray-900 dark:bg-gray-100 transition duration-300
                ${isOpen ? "rotate-45 top-2.5 bg-[#0FA38A]" : "top-0"}`}
                            />

                            {/* Middle */}
                            <span
                                className={`absolute left-0 h-0.5 w-6 bg-gray-900 dark:bg-gray-100 transition duration-300
                ${isOpen ? "opacity-0" : "top-2.5"}`}
                            />

                            {/* Bottom */}
                            <span
                                className={`absolute left-0 h-0.5 w-6 bg-gray-900 dark:bg-gray-100 transition duration-300
                ${isOpen ? "-rotate-45 top-2.5 bg-[#0FA38A]" : "top-5"}`}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                        />

                        {/* Slide Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 260, damping: 25 }}
                            className="fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-950 z-50 shadow-2xl p-8 flex flex-col gap-8"
                        >
                            <a href="/docs" className="mobile-link flex items-center gap-2" onClick={() => setIsOpen(false)}>
                                <Book size={18} />
                                Getting Started
                            </a>

                            <a
                                href="https://github.com/solvix/solvix"
                                target="_blank"
                                className="mobile-link flex items-center gap-2"
                                onClick={() => setIsOpen(false)}
                            >
                                <Github size={18} />
                                GitHub
                            </a>

                            <a
                                href="https://github.com/sponsors/solvix"
                                target="_blank"
                                className="mobile-link flex items-center gap-2"
                                onClick={() => setIsOpen(false)}
                            >
                                <Heart size={18} />
                                Sponsor
                            </a>

                            {mounted && (
                                <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                                    <button
                                        onClick={() => {
                                            setTheme(theme === "dark" ? "light" : "dark");
                                        }}
                                        className="flex items-center justify-between w-full px-4 py-3 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
      hover:bg-gray-200 dark:hover:bg-gray-800 
      transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3">
                                            {theme === "dark" ? (
                                                <Sun size={18} className="text-[#0FA38A]" />
                                            ) : (
                                                <Moon size={18} className="text-[#0FA38A]" />
                                            )}

                                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                                {theme === "dark" ? "Light Mode" : "Dark Mode"}
                                            </span>
                                        </div>

                                        <div className="w-10 h-5 bg-gray-300 dark:bg-gray-700 rounded-full relative transition">
                                            <div
                                                className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all duration-300 ${theme === "dark" ? "left-5" : "left-0.5"
                                                    }`}
                                            />
                                        </div>
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}