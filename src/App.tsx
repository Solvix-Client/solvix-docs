import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CodePreview from "./components/CodePreview";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { motion } from "motion/react";


export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors duration-300"
      >
        <Navbar />
        <Hero />
        <CodePreview />
        <Features />
        <Footer />
      </motion.div>
    </ThemeProvider>
  );
}