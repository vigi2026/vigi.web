import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  FileCheck2,
  CalendarDays,
  Mic,
  Sparkles,
  ArrowRight,
  Play,
  Award,
  Layers,
  ChevronDown
} from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';
import { ShieldScene } from '../components/3d/ShieldScene';
import { VirtualPresenter } from '../components/VirtualPresenter';
import { PresenterStatus } from '../hooks/useSpeech';

interface HeroSectionProps {
  onExplore: () => void;
  onStartVoice: () => void;
  onTryLiveDemo: () => void;
  onNavigateSection: (sectionId: string) => void;
  isReducedMotion: boolean;
  presenterProps: {
    status: PresenterStatus;
    isSpeaking: boolean;
    isPaused: boolean;
    isListening: boolean;
    currentText: string;
    isMuted: boolean;
    onPlay: () => void;
    onPause: () => void;
    onResume: () => void;
    onStop: () => void;
    onReplay: () => void;
    onStartTour: () => void;
    onStartListening: () => void;
    isRecognitionSupported: boolean;
    onSelectTopic: (speech: string, title?: string) => void;
  };
}

export function HeroSection({
  onExplore,
  onStartVoice,
  onTryLiveDemo,
  onNavigateSection,
  isReducedMotion,
  presenterProps
}: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 md:px-8 flex flex-col justify-center cyber-grid-bg">
      {/* Background radial glow spots */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 rounded-full bg-electricBlue/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-cyberGold/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT SIDE: Project Headline, Subtitle, Academic Info, Action Buttons */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Academic Badge Pill */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-neonCyan/30 text-xs font-mono text-neonCyan"
            >
              <Award className="w-3.5 h-3.5 text-cyberGold" />
              <span>BCA VI SEMESTER • ACADEMIC YEAR 2026–2027</span>
            </motion.div>

            {/* Project Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white leading-[1.1]">
                VIGI <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan via-electricBlue to-cyberGold">LOCK</span>
              </h1>
              <p className="text-lg sm:text-xl font-bold tracking-wide text-neonCyan uppercase font-display">
                SMART CYBER SECURITY AND STUDENT ASSISTANT
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 font-sans max-w-xl leading-relaxed"
            >
              "{PROJECT_INFO.tagline}"
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              {/* Explore Project */}
              <button
                onClick={onExplore}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-neonCyan via-electricBlue to-holographicPurple text-blackNavy hover:shadow-[0_0_25px_rgba(0,245,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>EXPLORE PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Start Voice Presentation */}
              <button
                onClick={onStartVoice}
                className="px-5 py-3.5 rounded-xl font-bold text-sm bg-deepNavy hover:bg-deepNavy/90 text-neonCyan border border-neonCyan/40 hover:border-neonCyan hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>START VOICE PRESENTATION</span>
              </button>

              {/* Try Live Demo */}
              <button
                onClick={onTryLiveDemo}
                className="px-5 py-3.5 rounded-xl font-medium text-sm text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-cyberGold/50 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyberGold" />
                <span>TRY LIVE DEMO</span>
              </button>
            </motion.div>

            {/* Academic Footnote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-3 border-t border-gray-800/80 flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400"
            >
              <span className="flex items-center gap-1.5 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Proposed Android Application
              </span>
              <span>•</span>
              <span>Department of Computer Applications</span>
              <span>•</span>
              <span>Academic Year 2026–2027</span>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Interactive 3D Cybersecurity Shield & Floating Quick Cards */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* 3D Canvas Scene */}
            <ShieldScene isReducedMotion={isReducedMotion} />

            {/* 4 Floating Quick Cards (URL Security, File Safety, Timetable, Voice Assistant) */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-md mt-4">
              {/* Card 1: URL Security */}
              <button
                onClick={() => onNavigateSection('url-demo')}
                className="p-3 rounded-2xl glass-panel hover:glass-panel-glow border border-neonCyan/25 hover:border-neonCyan text-left transition-all hover:scale-[1.02] cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-1">
                  <ShieldCheck className="w-5 h-5 text-neonCyan group-hover:animate-pulse" />
                  <span className="text-[10px] font-mono text-gray-400 group-hover:text-neonCyan">Explore →</span>
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
                  URL SECURITY
                </h4>
                <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">
                  Heuristic link review
                </p>
              </button>

              {/* Card 2: File Safety */}
              <button
                onClick={() => onNavigateSection('file-safety')}
                className="p-3 rounded-2xl glass-panel hover:glass-panel-glow border border-cyberGold/25 hover:border-cyberGold text-left transition-all hover:scale-[1.02] cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-1">
                  <FileCheck2 className="w-5 h-5 text-cyberGold group-hover:animate-pulse" />
                  <span className="text-[10px] font-mono text-gray-400 group-hover:text-cyberGold">Explore →</span>
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
                  FILE SAFETY
                </h4>
                <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">
                  APK & file hashes
                </p>
              </button>

              {/* Card 3: Study Timetable */}
              <button
                onClick={() => onNavigateSection('student-assistant')}
                className="p-3 rounded-2xl glass-panel hover:glass-panel-glow border border-electricBlue/25 hover:border-electricBlue text-left transition-all hover:scale-[1.02] cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-1">
                  <CalendarDays className="w-5 h-5 text-electricBlue group-hover:animate-pulse" />
                  <span className="text-[10px] font-mono text-gray-400 group-hover:text-electricBlue">Explore →</span>
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
                  STUDY TIMETABLE
                </h4>
                <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">
                  Organized daily routines
                </p>
              </button>

              {/* Card 4: Voice Assistant */}
              <button
                onClick={() => onNavigateSection('voice-assistant')}
                className="p-3 rounded-2xl glass-panel hover:glass-panel-glow border border-holographicPurple/25 hover:border-holographicPurple text-left transition-all hover:scale-[1.02] cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-1">
                  <Mic className="w-5 h-5 text-holographicPurple group-hover:animate-pulse" />
                  <span className="text-[10px] font-mono text-gray-400 group-hover:text-holographicPurple">Explore →</span>
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
                  VOICE ASSISTANT
                </h4>
                <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">
                  Hands-free reminders
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Embedded VIGI Virtual Presenter Centerpiece */}
        <div className="mt-14 w-full">
          <VirtualPresenter {...presenterProps} />
        </div>
      </div>
    </section>
  );
}
