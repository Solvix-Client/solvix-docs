import { motion } from "framer-motion";
import { ShieldCheck, Zap, Layers, Repeat } from "lucide-react";

export default function AdvantagesSection() {
    const advantages = [
        {
            icon: <Zap size={28} />,
            title: "Built for Performance",
            desc: "Optimized core engine designed for minimal overhead and fast execution across runtimes.",
        },
        {
            icon: <ShieldCheck size={28} />,
            title: "Type-Safe by Default",
            desc: "Leverage full TypeScript inference for request and response handling.",
        },
        {
            icon: <Repeat size={28} />,
            title: "Automatic Retries",
            desc: "Built-in retry logic with smart error handling and exponential backoff.",
        },
        {
            icon: <Layers size={28} />,
            title: "Middleware & Interceptors",
            desc: "Extend and customize requests with a flexible interceptor system.",
        },
    ];

    return (
        <section className="py-24 px-4 sm:px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-4"
                >
                    Designed for Enterprise
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-lg text-gray-600 dark:text-gray-400"
                >
                    Solvix isn’t just another HTTP client. It’s engineered for reliability and scale.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {advantages.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="relative p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-[#0FA38A] transition-all duration-300 hover:shadow-xl"
                    >
                        <div className="mb-4 text-[#0FA38A]">
                            {item.icon}
                        </div>

                        <h3 className="text-xl font-semibold mb-3">
                            {item.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}