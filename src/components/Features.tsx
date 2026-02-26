import { motion } from "motion/react";

export default function Features() {
    const features = [
        {
            title: "Cross-Runtime",
            desc: "Works seamlessly across Node.js, Browser, Bun, Deno, and Edge runtimes with zero configuration."
        },
        {
            title: "TypeScript First",
            desc: "Built with TypeScript for type safety and excellent developer experience with full autocomplete."
        },
        {
            title: "Production Ready",
            desc: "Battle-tested with automatic retries, interceptors, and comprehensive error handling built-in."
        }
    ];

    return (
        <section className="relative py-24 px-6 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl rounded-full -z-10" />

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

                {features.map((f, index) => (
                    <motion.div
                        key={f.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="relative p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-xl"
                    >
                        {/* Hover Glow */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 hover:from-blue-500/10 hover:to-cyan-500/10 transition-all duration-500 pointer-events-none" />

                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            {f.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {f.desc}
                        </p>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}