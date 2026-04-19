import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const installs = {
    npm: "npm install solvix",
    pnpm: "pnpm add solvix",
    yarn: "yarn add solvix",
    bun: "bun add solvix",
};

export default function InstallSection() {
    const [active, setActive] = useState<"npm" | "pnpm" | "yarn" | "bun">("npm");
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(installs[active]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-24 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">

                <h2 className="text-4xl font-bold mb-8">
                    Install Solvix
                </h2>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    {Object.keys(installs).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActive(key as any)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${active === key
                                    ? "bg-gradient-to-r from-[#1FD1B2] to-[#0FA38A] text-white shadow-md"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                        >
                            {key}
                        </button>
                    ))}
                </div>

                {/* Command */}
                <div className="relative max-w-3xl mx-auto">
                    <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900 rounded-2xl px-4 sm:px-8 py-6 flex items-center justify-between gap-4 border border-slate-200 shadow-lg overflow-hidden">

                        <AnimatePresence mode="wait">
                            <motion.code
                                key={active}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="text-sm sm:text-lg font-mono text-slate-800 truncate"
                            >
                                {installs[active]}
                            </motion.code>
                        </AnimatePresence>

                        <button
                            onClick={handleCopy}
                            className="flex-shrink-0 flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 transition-all duration-300 text-sm text-slate-700 font-medium"
                        >
                            {copied ? <Check size={16} /> : <Copy size={16} />}
                            {copied ? "Copied" : "Copy"}
                        </button>

                    </div>
                </div>

            </div>
        </section>
    );
}