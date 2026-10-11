import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Shield, Play, Sparkles, User, Award } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

interface WelcomeModalProps {
  isOpen: boolean;
  onEnter: (enableVoice: boolean) => void;
}

export function WelcomeModal({ isOpen, onEnter }: WelcomeModalProps) {
  const [animStage, setAnimStage] = useState<number>(1);

  // Progressive cinematic reveal stages (1 to 5)
  useEffect(() => {
    if (!isOpen) return;
    const timers = [
      setTimeout(() => setAnimStage(2), 500),  // blue particles & circuits
      setTimeout(() => setAnimStage(3), 1100), // holographic ring forms
      setTimeout(() => setAnimStage(4), 1700), // logo reveals
      setTimeout(() => setAnimStage(5), 2300), // presenter, title & buttons
    ];
    return () => timers.forEach(clearTimeout);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#010611] cyber-grid-bg overflow-y-auto p-4 sm:p-6"
      >
        {/* Ambient Neon Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Cyan Glow Orb */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-electricBlue/10 blur-[130px] animate-pulse" />
          {/* Gold Glow Orb */}
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyberGold/8 blur-[120px]" />
          {/* Holographic Purple Glow */}
          <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-holographicPurple/10 blur-[110px]" />

          {/* Floating animated particles */}
          {animStage >= 2 && (
            <div className="absolute inset-0">
              {[...Array(24)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    y: [0, -60, -120],
                    x: Math.sin(i) * 25
                  }}
                  transition={{
                    duration: 4 + (i % 4),
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className={`absolute w-1.5 h-1.5 rounded-full ${
                    i % 3 === 0 ? 'bg-cyberGold shadow-[0_0_8px_#FFB52E]' : 'bg-neonCyan shadow-[0_0_8px_#00F5FF]'
                  }`}
                  style={{
                    left: `${(i * 13) % 95}%`,
                    top: `${60 + ((i * 7) % 35)}%`
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Central Modal Glass Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-3xl glass-panel-glow rounded-3xl p-6 sm:p-10 border border-neonCyan/30 shadow-[0_0_80px_rgba(0,168,255,0.3)] my-auto text-center"
        >
          {/* Top Status & Academic Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-neonCyan/15 text-xs font-mono">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electricBlue/10 border border-neonCyan/30 text-neonCyan">
              <span className="w-2 h-2 rounded-full bg-neonCyan animate-ping" />
              SYSTEM INITIALIZATION • 2026–2027
            </span>
            <span className="text-gray-400 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-cyberGold" />
              BCA VI SEMESTER FINAL-YEAR PROJECT
            </span>
          </div>

          {/* Central Logo Holographic Display */}
          <div className="py-6 flex flex-col items-center justify-center relative">
            {/* Rotating Holographic Circuit Ring */}
            {animStage >= 3 && (
              <motion.div
                initial={{ scale: 0.6, opacity: 0, rotate: -45 }}
                animate={{ scale: 1, opacity: 1, rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-dashed border-neonCyan/40 pointer-events-none"
              />
            )}
            {animStage >= 3 && (
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full border border-cyberGold/25 pointer-events-none"
              />
            )}

            {/* Official VIGI LOCK Logo Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={animStage >= 4 ? { scale: 1, opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl glass-panel p-3 border-2 border-neonCyan/50 shadow-[0_0_40px_rgba(0,245,255,0.4)] flex items-center justify-center"
            >
              <img
                src="/assets/vigi-lock-logo.png"
                alt="Official VIGI LOCK Shield & Padlock Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,245,255,0.6)]"
              />
              <div className="absolute -bottom-2.5 px-2.5 py-0.5 rounded-full bg-deepNavy border border-cyberGold text-[10px] font-mono text-cyberGold tracking-wider">
                OFFICIAL EMBLEM
              </div>
            </motion.div>
          </div>

          {/* Project Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={animStage >= 5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-2 mt-2"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white">
              VIGI <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan via-electricBlue to-cyberGold">LOCK</span>
            </h1>
            <p className="text-sm sm:text-base font-semibold tracking-wide text-neonCyan uppercase">
              Smart Cyber Security and Student Assistant
            </p>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto italic font-sans">
              "{PROJECT_INFO.welcomeMessage}"
            </p>
          </motion.div>

          {/* Virtual Presenter Introduction Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={animStage >= 5 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 p-4 rounded-2xl bg-deepNavy/80 border border-neonCyan/25 flex items-center gap-4 text-left max-w-xl mx-auto"
          >
            {/* Avatar Frame */}
            <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0.5 bg-gradient-to-tr from-neonCyan via-holographicPurple to-cyberGold shadow-[0_0_15px_rgba(0,245,255,0.4)]">
              <img
                src="/assets/vigi-avatar.png"
                alt="VIGI Virtual Presenter"
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  // Fallback if image fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-deepNavy border border-neonCyan flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm">VIGI</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neonCyan/15 text-neonCyan border border-neonCyan/30">
                  AI VIRTUAL PRESENTER
                </span>
              </div>
              <p className="text-xs text-gray-300 mt-1 line-clamp-2">
                "Hello! I am VIGI. Let me guide you through our cybersecurity checks, study planners, Java modules, and 3D architecture."
              </p>
            </div>
          </motion.div>

          {/* Action Decision Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animStage >= 5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary Button: Enable Voice & Enter */}
            <button
              onClick={() => onEnter(true)}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-neonCyan via-electricBlue to-holographicPurple text-blackNavy hover:shadow-[0_0_35px_rgba(0,245,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <Volume2 className="w-5 h-5 text-blackNavy group-hover:animate-bounce" />
              <span>🔊 ENABLE VOICE & ENTER</span>
            </button>

            {/* Secondary Button: Enter Without Voice */}
            <button
              onClick={() => onEnter(false)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium text-sm text-gray-300 hover:text-white bg-deepNavy/80 hover:bg-deepNavy border border-gray-700 hover:border-neonCyan/50 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <VolumeX className="w-4 h-4 text-gray-400" />
              <span>ENTER WITHOUT VOICE</span>
            </button>
          </motion.div>

          {/* Accessibility footnote */}
          <div className="mt-5 text-[11px] font-mono text-gray-400">
            Audio uses browser Web Speech synthesis • Fully controllable & mutable at any time
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
