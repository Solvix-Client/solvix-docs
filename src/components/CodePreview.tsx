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
        <section className="relative py-24 px-6 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 flex justify-center">
                <div className="w-[800px] h-[400px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl rounded-full -z-10" />
            </div>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                >
                    {/* Outer Glow Border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#1FD1B2] to-[#0FA38A] rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-all duration-500"></div>

                    <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-2xl transition-all duration-300">

                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-4 text-sm text-gray-500">
                                    client.ts
                                </span>
                            </div>

                            {/* Copy Button */}
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition-all duration-300"
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
                        <pre className="text-sm md:text-base text-gray-100 font-mono overflow-x-auto leading-relaxed">
                            {code}
                        </pre>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}