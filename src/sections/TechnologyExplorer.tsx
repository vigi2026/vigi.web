import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  FileCode,
  Monitor,
  Database,
  Boxes,
  LayoutGrid,
  Mic,
  Clock,
  BellRing,
  Cpu,
  ShieldCheck,
  GitBranch,
  Layers,
  FileCheck,
  Zap,
  Box,
  Palette,
  Activity,
  Volume2,
  Filter
} from 'lucide-react';
import { TECHNOLOGIES } from '../data/technologies';
import { Technology } from '../types';

const ICON_MAP: Record<string, React.ElementType> = {
  Code,
  FileCode,
  Monitor,
  Database,
  Boxes,
  LayoutGrid,
  Mic,
  Clock,
  BellRing,
  Cpu,
  ShieldCheck,
  GitBranch,
  Layers,
  FileCheck,
  Zap,
  Box,
  Palette,
  Activity,
  Volume2
};

interface TechnologyExplorerProps {
  onSpeak: (text: string) => void;
}

export function TechnologyExplorer({ onSpeak }: TechnologyExplorerProps) {
  const [filter, setFilter] = useState<'all' | 'android' | 'website'>('all');

  const filteredTechs = TECHNOLOGIES.filter((t) => {
    if (filter === 'all') return true;
    if (filter === 'android') return t.platform === 'android' || t.platform === 'both';
    if (filter === 'website') return t.platform === 'website' || t.platform === 'both';
    return true;
  });

  const getStatusBadge = (status: Technology['status']) => {
    switch (status) {
      case 'USED IN WEBSITE':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      case 'PROPOSED FOR ANDROID APP':
        return 'bg-neonCyan/20 text-neonCyan border-neonCyan/40';
      case 'OPTIONAL INTEGRATION':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
      case 'IMPLEMENTED IN ANDROID APP':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-600';
    }
  };

  return (
    <section id="technologies" className="py-20 px-4 sm:px-6 md:px-8 relative cyber-grid-bg">
      <div className="max-w-7xl mx-auto space-y-12 text-left">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-neonCyan/30 text-xs font-mono text-neonCyan">
            <span>SECTION 12 • FULL TECHNOLOGY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Technology Explorer
          </h2>
          <p className="text-base text-gray-300 font-sans">
            Comprehensive breakdown of development frameworks, libraries, APIs, and protocols governing both the proposed mobile app and this presentation website.
          </p>

          {/* Filter Pills */}
          <div className="flex justify-center items-center gap-2 pt-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-neonCyan text-blackNavy shadow-[0_0_15px_rgba(0,245,255,0.5)]'
                  : 'bg-deepNavy text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              ALL ({TECHNOLOGIES.length})
            </button>
            <button
              onClick={() => setFilter('android')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                filter === 'android'
                  ? 'bg-neonCyan text-blackNavy shadow-[0_0_15px_rgba(0,245,255,0.5)]'
                  : 'bg-deepNavy text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              ANDROID APP (12)
            </button>
            <button
              onClick={() => setFilter('website')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                filter === 'website'
                  ? 'bg-neonCyan text-blackNavy shadow-[0_0_15px_rgba(0,245,255,0.5)]'
                  : 'bg-deepNavy text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              WEBSITE PRESENTATION (10)
            </button>
          </div>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTechs.map((tech) => {
            const Icon = ICON_MAP[tech.iconName] || Code;
            return (
              <motion.div
                key={tech.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-3xl glass-panel border border-neonCyan/20 hover:border-neonCyan/50 flex flex-col justify-between transition-all hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(0,168,255,0.15)] group"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon & Status Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-electricBlue/15 border border-neonCyan/30 flex items-center justify-center text-neonCyan group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${getStatusBadge(tech.status)}`}>
                      {tech.status}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div>
                    <h3 className="text-lg font-bold font-display text-white">
                      {tech.name}
                    </h3>
                    <span className="text-xs font-mono text-neonCyan/90">
                      {tech.category}
                    </span>
                  </div>

                  {/* Purpose */}
                  <p className="text-xs text-gray-300 font-sans leading-relaxed">
                    {tech.purpose}
                  </p>

                  {/* Example Code / Usage */}
                  <div className="p-3 rounded-xl bg-blackNavy/90 border border-gray-800 font-mono text-[11px] text-gray-400 break-all">
                    <span className="text-gray-500 block text-[9px] uppercase font-bold mb-0.5">
                      Usage Pattern:
                    </span>
                    {tech.exampleUsage}
                  </div>
                </div>

                {/* Bottom Listen Button */}
                <div className="mt-5 pt-3 border-t border-gray-800">
                  <button
                    onClick={() => onSpeak(tech.speechText)}
                    className="w-full py-2 px-3 rounded-xl text-xs font-mono font-semibold bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-gray-700 hover:border-neonCyan/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-neonCyan" />
                    <span>LISTEN TO EXPLANATION</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
