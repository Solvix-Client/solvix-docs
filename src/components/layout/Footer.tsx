import { LucideExternalLink } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 py-12 px-6 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-sm text-gray-600">
                    © 2026 Solvix · MIT License
                </div>

                <div className="flex items-center gap-8 text-sm text-gray-600">
                    <a href="https://github.com/Solvix-Client/solvix" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">GitHub<LucideExternalLink size={14} /></a>
                    <a href="/docs" className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">Documentation<LucideExternalLink size={14} /></a>
                    <a href="https://opencollective.com/solvix" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">Sponsor<LucideExternalLink size={14} /></a>
                </div>
            </div>
        </footer>
    );
}