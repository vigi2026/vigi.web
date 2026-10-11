import React from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  ShieldAlert,
  HelpCircle,
  CheckCircle2,
  Calendar,
  Bell,
  Mic,
  TrendingUp,
  Lock,
  Layers,
  Volume2
} from 'lucide-react';
import { OBJECTIVES } from '../data/projectData';

const ICON_MAP: Record<string, React.ElementType> = {
  Smartphone,
  ShieldAlert,
  HelpCircle,
  CheckCircle2,
  Calendar,
  Bell,
  Mic,
  TrendingUp,
  Lock,
  Layers
};

interface ObjectivesProps {
  onSpeak: (text: string) => void;
}

export function Objectives({ onSpeak }: ObjectivesProps) {
  return (
    <section id="objectives" className="py-20 px-4 sm:px-6 md:px-8 relative cyber-grid-bg">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-neonCyan/30 text-xs font-mono text-neonCyan">
            <span>SECTION 03 • ACADEMIC OBJECTIVES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Ten Project Objectives
          </h2>
          <p className="text-base text-gray-300 font-sans">
            Guiding goals governing the development of the proposed VIGI LOCK Android application and research presentation.
          </p>
        </div>

        {/* 10 Animated Objective Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {OBJECTIVES.map((obj, index) => {
            const Icon = ICON_MAP[obj.icon] || ShieldAlert;
            const isGold = index % 2 === 1;

            return (
              <motion.div
                key={obj.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`p-5 rounded-3xl glass-panel text-left flex flex-col justify-between transition-all duration-300 group hover:scale-[1.02] border ${
                  isGold
                    ? 'border-cyberGold/20 hover:border-cyberGold/60 hover:shadow-[0_0_25px_rgba(255,181,46,0.2)]'
                    : 'border-neonCyan/20 hover:border-neonCyan/60 hover:shadow-[0_0_25px_rgba(0,245,255,0.2)]'
                }`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center p-2 border ${
                        isGold
                          ? 'bg-cyberGold/15 border-cyberGold/30 text-cyberGold'
                          : 'bg-neonCyan/15 border-neonCyan/30 text-neonCyan'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-500 group-hover:text-white transition-colors">
                      0{obj.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold font-display text-white mb-2 leading-snug">
                    {obj.title}
                  </h3>

                  {/* One Sentence Explanation */}
                  <p className="text-xs text-gray-300 leading-relaxed font-sans line-clamp-3">
                    {obj.shortDesc}
                  </p>
                </div>

                {/* Bottom Listen Button */}
                <div className="mt-4 pt-3 border-t border-gray-800">
                  <button
                    onClick={() => onSpeak(obj.narration)}
                    className="w-full py-1.5 px-2.5 rounded-xl text-[11px] font-mono font-semibold bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-gray-700 hover:border-neonCyan/40 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-neonCyan" />
                    <span>LISTEN</span>
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
