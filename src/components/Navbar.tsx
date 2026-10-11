import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Volume2,
  VolumeX,
  Play,
  RotateCcw,
  Sparkles,
  Eye,
  EyeOff,
  UserCheck
} from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'HOME' },
  { id: 'introduction', label: 'PROJECT INTRODUCTION' },
  { id: 'objectives', label: 'OBJECTIVES' },
  { id: 'cybersecurity', label: 'CYBERSECURITY' },
  { id: 'student-assistant', label: 'STUDENT ASSISTANT' },
  { id: 'voice-assistant', label: 'VOICE ASSISTANT' },
  { id: 'technologies', label: 'TECHNOLOGIES' },
  { id: 'programs', label: 'PROGRAMS' },
  { id: 'architecture', label: '3D ARCHITECTURE' },
  { id: 'live-demo', label: 'LIVE DEMO' },
  { id: 'team', label: 'TEAM' },
  { id: 'conclusion', label: 'CONCLUSION' }
];

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onStartTour: () => void;
  onTogglePresenterDock: () => void;
  isPresenterOpen: boolean;
  isSpeaking: boolean;
  isReducedMotion: boolean;
  onToggleReducedMotion: () => void;
}

export function Navbar({
  activeSection,
  onNavigate,
  isMuted,
  onToggleMute,
  onStartTour,
  onTogglePresenterDock,
  isPresenterOpen,
  isSpeaking,
  isReducedMotion,
  onToggleReducedMotion
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 py-3 transition-all duration-300">
        <div
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'glass-panel-glow border border-neonCyan/30 shadow-[0_4px_30px_rgba(0,168,255,0.2)] py-2 px-4'
              : 'glass-panel border border-neonCyan/15 py-2.5 px-4 sm:px-5'
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Logo and Brand Title */}
            <button
              onClick={() => handleItemClick('home')}
              className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none focus:ring-2 focus:ring-neonCyan rounded-xl p-1"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-deepNavy border border-neonCyan/40 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(0,245,255,0.3)] group-hover:shadow-[0_0_20px_rgba(0,245,255,0.6)] transition-all">
                <img
                  src="/assets/vigi-lock-logo.png"
                  alt="VIGI LOCK Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden xs:block sm:block">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-sm sm:text-base tracking-wider text-white font-display">
                    VIGI <span className="text-neonCyan">LOCK</span>
                  </span>
                  <span className="hidden md:inline px-1.5 py-0.5 rounded text-[9px] font-mono bg-cyberGold/15 text-cyberGold border border-cyberGold/30">
                    BCA 2026–27
                  </span>
                </div>
                <p className="text-[10px] text-gray-400 font-mono tracking-tight hidden sm:block">
                  CYBER SECURITY & STUDENT ASSISTANT
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links (Scrollable if many items) */}
            <nav className="hidden xl:flex items-center gap-1 overflow-x-auto py-1 scrollbar-none max-w-[62%]">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`relative px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-neonCyan'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-neonCyan via-electricBlue to-cyberGold rounded-full shadow-[0_0_8px_#00F5FF]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Action Buttons: Tour, Presenter Dock, Sound, Menu */}
            <div className="flex items-center gap-2">
              {/* Project Tour Button */}
              <button
                onClick={onStartTour}
                title="Start Guided 20-Topic Project Tour"
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-electricBlue to-neonCyan text-blackNavy hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-blackNavy" />
                <span>PROJECT TOUR</span>
              </button>

              {/* Virtual Presenter VIGI Toggle Button */}
              <button
                onClick={onTogglePresenterDock}
                title="Open VIGI Virtual Presenter"
                className={`relative flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  isPresenterOpen
                    ? 'bg-neonCyan/20 text-neonCyan border-neonCyan shadow-[0_0_15px_rgba(0,245,255,0.4)]'
                    : 'bg-deepNavy/80 text-gray-300 hover:text-white border-neonCyan/30 hover:border-neonCyan'
                }`}
              >
                {/* VIGI Avatar Mini Ring */}
                <div className="relative w-5 h-5 rounded-full overflow-hidden border border-neonCyan/60">
                  <img
                    src="/assets/vigi-avatar.png"
                    alt="VIGI"
                    className="w-full h-full object-cover"
                  />
                  {isSpeaking && (
                    <span className="absolute inset-0 bg-neonCyan/30 animate-pulse" />
                  )}
                </div>
                <span className="hidden sm:inline">VIGI</span>
                {/* Audio Waveform Indicator when speaking */}
                {isSpeaking && (
                  <div className="flex items-center gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-neonCyan animate-pulse" />
                    <span className="w-0.5 h-3 bg-neonCyan animate-ping" />
                    <span className="w-0.5 h-2 bg-neonCyan animate-pulse" />
                  </div>
                )}
              </button>

              {/* Sound Toggle */}
              <button
                onClick={onToggleMute}
                title={isMuted ? 'Unmute Spoken Explanations' : 'Mute Spoken Explanations'}
                className="p-2 rounded-xl bg-deepNavy/80 hover:bg-deepNavy border border-gray-700 hover:border-neonCyan/40 text-gray-300 hover:text-neonCyan transition-all cursor-pointer"
                aria-label="Toggle Audio"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-neonCyan" />}
              </button>

              {/* Reduced Motion Toggle */}
              <button
                onClick={onToggleReducedMotion}
                title={isReducedMotion ? 'Enable Full 3D & Animations' : 'Enable Reduced Motion Mode'}
                className="hidden lg:flex p-2 rounded-xl bg-deepNavy/80 hover:bg-deepNavy border border-gray-700 hover:border-cyberGold/40 text-gray-300 hover:text-cyberGold transition-all cursor-pointer"
                aria-label="Toggle Reduced Motion"
              >
                {isReducedMotion ? <EyeOff className="w-4 h-4 text-cyberGold" /> : <Eye className="w-4 h-4" />}
              </button>

              {/* Mobile Drawer Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl bg-deepNavy/80 border border-neonCyan/30 text-neonCyan hover:bg-neonCyan/10 transition-all cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 top-20 z-40 xl:hidden glass-panel-glow rounded-2xl border border-neonCyan/30 shadow-[0_10px_40px_rgba(0,168,255,0.4)] p-4 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-neonCyan/20 mb-3">
              <span className="font-mono text-xs text-neonCyan font-bold tracking-wider">
                NAVIGATION MATRIX
              </span>
              <button
                onClick={onStartTour}
                className="px-3 py-1 rounded-lg text-xs font-bold bg-gradient-to-r from-electricBlue to-neonCyan text-blackNavy flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                START TOUR
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-wider transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-neonCyan/20 text-neonCyan border border-neonCyan/40 font-bold'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-neonCyan shadow-[0_0_6px_#00F5FF]" />}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between text-xs font-mono text-gray-400">
              <button
                onClick={onToggleReducedMotion}
                className="flex items-center gap-1 text-cyberGold"
              >
                {isReducedMotion ? 'Reduced Motion: ON' : 'Reduced Motion: OFF'}
              </button>
              <span>Academic Year 2026–2027</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
