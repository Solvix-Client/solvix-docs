import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function CodePreview() {
    const [copied, setCopied] = useState(false);

    const code = `import { createClient } from "solvix";

const client = createClient({
  baseURL: "https://api.example.com",
  retry: { retries: 3 }
});

const response = await client.get("/users");`;

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative py-6 px-4 sm:px-6 overflow-hidden">

            {/* Background Glow - contained within section */}
            <div className="absolute inset-0 flex justify-center pointer-events-none overflow-hidden">
                <div className="w-full max-w-3xl h-[400px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl rounded-full -z-10" />
            </div>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    {/* Outer Glow Border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#1FD1B2] to-[#0FA38A] rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-all duration-500"></div>

                    <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-4 sm:p-8 border border-slate-200 shadow-xl transition-colors duration-300">

                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-4 text-sm text-slate-600 font-medium">
                                    client.ts
                                </span>
                            </div>

                            {/* Copy Button */}
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors duration-200 font-medium"
                            >
                                {copied ? (
                                    <>
                                        <Check size={16} />
                                        Copied
                                    </>
                                ) : (
                                    <>
                                        <Copy size={16} />
                                        Copy
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Code */}
                        <pre className="text-xs sm:text-sm md:text-base text-slate-900 font-mono overflow-x-auto leading-relaxed bg-white rounded-lg p-3 sm:p-4 border border-slate-200 shadow-sm">
                            <code className="text-slate-800">{code}</code>
                        </pre>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}