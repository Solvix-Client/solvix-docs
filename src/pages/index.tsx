import Layout from "@theme/Layout";
import Hero from "../components/landing/Hero";
import CodePreview from "../components/landing/CodePreview";
import Features from "../components/landing/Features";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import InstallSection from "../components/landing/InstallSection";
import AdvantagesSection from "../components/landing/AdvantagesSection";


export default function App() {
  return (
    <Layout noFooter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        layout="position"
        className="homepage-wrapper min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 overflow-x-hidden"
      >
        <Hero />
        <InstallSection />
        <CodePreview />
        <AdvantagesSection />
        <Features />
        <Footer />
      </motion.div>
    </Layout>
  );
}