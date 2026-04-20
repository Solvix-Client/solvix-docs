import { Book, Github, Heart, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { motion, AnimatePresence } from "framer-motion";
import Link from "@docusaurus/Link";
import logoUrl from "@site/static/img/solvix-png.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { colorMode, setColorMode } = useColorMode();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = colorMode === "dark";
    const toggleTheme = () => setColorMode(isDark ? "light" : "dark");

    return (
        <>
            {/* NAVBAR */}
            <nav className="navbar-custom fixed top-0 left-0 right-0 z-50">
                <div
                    aria-hidden="true"
                    className="navbar absolute inset-x-0 top-0 h-full opacity-0 pointer-events-none -z-10"
                    style={{ padding: 0, boxShadow: "none", backgroundColor: "transparent" }}
                />
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 no-underline">
                        <img
                            src={logoUrl}
                            alt="Solvix Logo"
                            className="w-6 h-6 object-contain"
                        />

                        <span className="text-xl font-bold bg-gradient-to-r from-[#1FD1B2] to-[#0FA38A] bg-clip-text text-transparent">
                            Solvix
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/docs" className="nav-link flex items-center gap-1">
                            <Book size={16} />
                            Getting Started
                        </Link>

                        <a
                            href="https://github.com/Solvix-Client/solvix"
                            target="_blank"
                            className="nav-link flex items-center gap-1"
                        >
                            <Github size={16} />
                            GitHub
                        </a>

                        {/* <a
                            href="https://opencollective.com/solvix"
                            target="_blank"
                            className="nav-link flex items-center gap-1"
                        >
                            <Heart size={16} />
                            Sponsor
                        </a> */}

                        {/* Theme Toggle */}
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="nav-link flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                                aria-label="Toggle dark mode"
                                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                        )}
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="mobile-hamburger md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition transform hover:scale-105 active:scale-95"
                    >
                        <div className="relative w-6 h-5">
                            {/* Top */}
                            <span
                                className={`hamburger-line absolute left-0 h-0.5 w-6 bg-gray-900 dark:bg-gray-100 transition duration-300
                ${isOpen ? "rotate-45 top-2.5 bg-[#0FA38A]" : "top-0"}`}
                            />

                            {/* Middle */}
                            <span
                                className={`hamburger-line absolute left-0 h-0.5 w-6 bg-gray-900 dark:bg-gray-100 transition duration-300
                ${isOpen ? "opacity-0" : "top-2.5"}`}
                            />

                            {/* Bottom */}
                            <span
                                className={`hamburger-line absolute left-0 h-0.5 w-6 bg-gray-900 dark:bg-gray-100 transition duration-300
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
                            className="mobile-menu-panel fixed top-0 right-0 h-full w-72 z-50 p-8 flex flex-col gap-8"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="self-end p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                aria-label="Close menu"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-gray-600 dark:text-gray-400"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>

                            <Link to="/docs" className="mobile-link flex items-center gap-2" onClick={() => setIsOpen(false)}>
                                <Book size={18} />
                                Getting Started
                            </Link>

                            <a
                                href="https://github.com/solvix/solvix"
                                target="_blank"
                                className="mobile-link flex items-center gap-2"
                                onClick={() => setIsOpen(false)}
                            >
                                <Github size={18} />
                                GitHub
                            </a>

                            {/* <a
                                href="https://github.com/sponsors/solvix"
                                target="_blank"
                                className="mobile-link flex items-center gap-2"
                                onClick={() => setIsOpen(false)}
                            >
                                <Heart size={18} />
                                Sponsor
                            </a> */}

                            {/* Theme Toggle Mobile */}
                            {mounted && (
                                <button
                                    onClick={toggleTheme}
                                    className="mobile-link flex items-center gap-2 border-t border-gray-200 dark:border-gray-700 pt-6 mt-4"
                                    title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                                >
                                    {isDark ? (
                                        <>
                                            <Sun size={18} />
                                            Light Mode
                                        </>
                                    ) : (
                                        <>
                                            <Moon size={18} />
                                            Dark Mode
                                        </>
                                    )}
                                </button>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
