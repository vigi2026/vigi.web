import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  RotateCcw,
  Square,
  X,
  Sparkles,
  Volume2,
  VolumeX,
  List
} from 'lucide-react';
import { PRESENTATION_TOUR_STEPS } from '../data/presentationScript';
import { TourStep } from '../types';

interface ProjectTourModalProps {
  isActive: boolean;
  isPaused: boolean;
  currentStepIndex: number;
  isSpeaking: boolean;
  onNext: () => void;
  onPrev: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
  onReplay: () => void;
  onRestart: () => void;
  onGoToStep: (index: number) => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

export function ProjectTourModal({
  isActive,
  isPaused,
  currentStepIndex,
  isSpeaking,
  onNext,
  onPrev,
  onPause,
  onResume,
  onStop,
  onReplay,
  onRestart,
  onGoToStep,
  isMuted,
  onToggleMute
}: ProjectTourModalProps) {
  if (!isActive) return null;

  const currentStep = PRESENTATION_TOUR_STEPS[currentStepIndex];
  const progressPercent = ((currentStepIndex + 1) / PRESENTATION_TOUR_STEPS.length) * 100;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        className="fixed bottom-3 inset-x-3 sm:inset-x-6 md:inset-x-auto md:right-8 md:w-[620px] z-50 glass-panel-glow rounded-3xl p-5 border-2 border-neonCyan/50 shadow-[0_15px_60px_rgba(0,168,255,0.4)] text-left"
      >
        {/* Progress Bar along the top edge */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-blackNavy overflow-hidden rounded-t-3xl">
          <motion.div
            className="h-full bg-gradient-to-r from-neonCyan via-electricBlue to-cyberGold"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Header Bar */}
        <div className="flex items-center justify-between pb-2.5 pt-1 border-b border-neonCyan/20 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-tr from-neonCyan to-cyberGold">
              <img
                src="/assets/vigi-avatar.png"
                alt="VIGI"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-xs font-display">
                  GUIDED PROJECT PRESENTATION TOUR
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyberGold/20 text-cyberGold border border-cyberGold/40 font-semibold">
                  STEP {currentStepIndex + 1} OF {PRESENTATION_TOUR_STEPS.length}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={onToggleMute}
              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
              className="p-1.5 rounded-lg text-gray-400 hover:text-neonCyan cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-neonCyan" />}
            </button>
            <button
              onClick={onStop}
              className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white cursor-pointer"
              title="Close Tour"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Step Title & Subtitle */}
        <div className="mb-2.5">
          <h4 className="text-base sm:text-lg font-extrabold text-white font-display flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-neonCyan flex-shrink-0" />
            <span>{currentStep.title}</span>
          </h4>
          <p className="text-xs font-mono text-neonCyan tracking-wide">
            {currentStep.subtitle}
          </p>
        </div>

        {/* Spoken Narration Subtitle Box */}
        <div className="bg-blackNavy/90 rounded-2xl p-3.5 border border-neonCyan/20 mb-3.5">
          <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-1">
            <span className="text-neonCyan flex items-center gap-1">
              <span className={`w-1.5 h-1.5 rounded-full ${isSpeaking ? 'bg-emerald-400 animate-ping' : 'bg-gray-500'}`} />
              SPOKEN EXPLANATION
            </span>
            <span>{isPaused ? 'PAUSED' : isSpeaking ? 'SPEAKING' : 'READY'}</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-h-24 overflow-y-auto pr-1">
            "{currentStep.narration}"
          </p>
        </div>

        {/* Tour Navigation Controls */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-gray-800">
          <div className="flex items-center gap-1.5">
            {/* Previous */}
            <button
              onClick={onPrev}
              disabled={currentStepIndex === 0}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-gray-800 text-gray-200 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>PREVIOUS</span>
            </button>

            {/* Pause / Resume */}
            {isPaused ? (
              <button
                onClick={onResume}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 flex items-center gap-1 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>RESUME</span>
              </button>
            ) : isSpeaking ? (
              <button
                onClick={onPause}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40 hover:bg-amber-500/30 flex items-center gap-1 cursor-pointer"
              >
                <Pause className="w-3.5 h-3.5" />
                <span>PAUSE</span>
              </button>
            ) : (
              <button
                onClick={onReplay}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-electricBlue/20 text-neonCyan border border-neonCyan/40 hover:bg-neonCyan/25 flex items-center gap-1 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>SPEAK</span>
              </button>
            )}

            {/* Replay */}
            <button
              onClick={onReplay}
              title="Replay Current Topic"
              className="p-1.5 rounded-xl bg-gray-800 text-gray-300 hover:text-neonCyan border border-gray-700 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            {/* Restart Tour */}
            <button
              onClick={onRestart}
              title="Restart Tour from Topic 1"
              className="px-2.5 py-1.5 rounded-xl text-[11px] font-mono text-gray-400 hover:text-cyberGold cursor-pointer"
            >
              RESTART
            </button>
          </div>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="px-4 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-neonCyan via-electricBlue to-cyberGold text-blackNavy hover:shadow-[0_0_15px_rgba(0,245,255,0.5)] flex items-center gap-1 cursor-pointer transition-all"
          >
            <span>{currentStepIndex === PRESENTATION_TOUR_STEPS.length - 1 ? 'FINISH' : 'NEXT'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
