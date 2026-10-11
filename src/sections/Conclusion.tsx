import React from 'react';
import { motion } from 'framer-motion';
import {
  RotateCcw,
  Sparkles,
  Layers,
  Users,
  Home,
  Volume2,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROJECT_INFO } from '../data/projectData';
import { VIGI_LOGO } from '../utils/assets';

interface ConclusionProps {
  onRestartTour: () => void;
  onExploreTechnologies: () => void;
  onViewTeam: () => void;
  onReturnHome: () => void;
  onSpeak: (text: string) => void;
}

export function Conclusion({
  onRestartTour,
  onExploreTechnologies,
  onViewTeam,
  onReturnHome,
  onSpeak
}: ConclusionProps) {
  const CONCLUSION_TEXT =
    "VIGI LOCK aims to combine cybersecurity awareness and student productivity in one Android application. It helps users review potential digital risks, understand security warnings, organize study schedules, and access convenient voice assistance. Its effectiveness depends on accurate implementation, suitable security integrations, privacy protection, and thorough testing.";

  const handleSpeakConclusion = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#00A8FF', '#00F5FF', '#FFB52E', '#9B5CFF']
      });
    } catch (e) {
      // ignore
    }
    onSpeak(CONCLUSION_TEXT);
  };

  return (
    <section id="conclusion" className="py-24 px-4 sm:px-6 md:px-8 relative cyber-grid-bg text-center">
      {/* Background Neon Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electricBlue/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-cyberGold/10 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        {/* Holographic Logo Emblem with Rotating Energy Rings */}
        <div className="flex justify-center relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-dashed border-neonCyan/40 pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-cyberGold/25 pointer-events-none"
          />

          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl glass-panel-glow p-4 border-2 border-neonCyan/60 flex items-center justify-center shadow-[0_0_50px_rgba(0,245,255,0.4)]">
            <img
              src={VIGI_LOGO}
              alt="Official VIGI LOCK Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(0,245,255,0.7)]"
            />
          </div>
        </div>

        {/* Title and Subtitle */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyberGold/30 text-xs font-mono text-cyberGold">
            <span>SECTION 20 • PROJECT CONCLUSION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            VIGI <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan via-electricBlue to-cyberGold">LOCK</span>
          </h2>
          <p className="text-sm sm:text-base font-bold font-mono text-neonCyan uppercase tracking-widest">
            YOUR DIGITAL SAFETY AND STUDY COMPANION
          </p>
        </div>

        {/* Spoken Conclusion Box */}
        <div className="p-7 sm:p-9 rounded-3xl glass-panel-glow border border-neonCyan/35 text-left space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-gray-800">
            <span className="text-xs font-mono font-bold text-neonCyan flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>FINAL ACADEMIC SUMMARY</span>
            </span>
            <button
              onClick={handleSpeakConclusion}
              className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-deepNavy border border-neonCyan/40 text-neonCyan hover:bg-neonCyan/20 flex items-center gap-1.5 cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
              <span>SPEAK CONCLUSION</span>
            </button>
          </div>

          <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-sans">
            "{CONCLUSION_TEXT}"
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-400 border-t border-gray-800">
            <span>BCA VI Semester Final-Year Project</span>
            <span>Department of Computer Applications • 2026–2027</span>
          </div>
        </div>

        {/* Four Functional Action Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
          {/* Button 1: Restart Tour */}
          <button
            onClick={onRestartTour}
            className="p-3.5 rounded-2xl glass-panel hover:glass-panel-glow border border-neonCyan/30 hover:border-neonCyan text-white text-xs font-mono font-bold flex flex-col items-center gap-2 transition-all hover:scale-105 cursor-pointer"
          >
            <RotateCcw className="w-5 h-5 text-neonCyan" />
            <span>RESTART TOUR</span>
          </button>

          {/* Button 2: Explore Technologies */}
          <button
            onClick={onExploreTechnologies}
            className="p-3.5 rounded-2xl glass-panel hover:glass-panel-glow border border-electricBlue/30 hover:border-electricBlue text-white text-xs font-mono font-bold flex flex-col items-center gap-2 transition-all hover:scale-105 cursor-pointer"
          >
            <Layers className="w-5 h-5 text-electricBlue" />
            <span>TECHNOLOGIES</span>
          </button>

          {/* Button 3: View Project Team */}
          <button
            onClick={onViewTeam}
            className="p-3.5 rounded-2xl glass-panel hover:glass-panel-glow border border-cyberGold/30 hover:border-cyberGold text-white text-xs font-mono font-bold flex flex-col items-center gap-2 transition-all hover:scale-105 cursor-pointer"
          >
            <Users className="w-5 h-5 text-cyberGold" />
            <span>PROJECT TEAM</span>
          </button>

          {/* Button 4: Return Home */}
          <button
            onClick={onReturnHome}
            className="p-3.5 rounded-2xl glass-panel hover:glass-panel-glow border border-holographicPurple/30 hover:border-holographicPurple text-white text-xs font-mono font-bold flex flex-col items-center gap-2 transition-all hover:scale-105 cursor-pointer"
          >
            <Home className="w-5 h-5 text-holographicPurple" />
            <span>RETURN HOME</span>
          </button>
        </div>
      </div>
    </section>
  );
}
