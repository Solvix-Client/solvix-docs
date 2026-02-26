import { LucideExternalLink } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 py-12 px-6 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                    © 2026 Solvix · MIT License
                </div>

                <div className="flex items-center gap-8 text-sm text-gray-600 dark:text-gray-400">
                    <a href="https://github.com/solvix/solvix" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-1">GitHub<LucideExternalLink size={14} /></a>
                    <a href="/docs" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-1">Documentation<LucideExternalLink size={14} /></a>
                    <a href="https://github.com/sponsors/solvix" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-1">Sponsor<LucideExternalLink size={14} /></a>
                </div>
            </div>
        </footer>
    );
}