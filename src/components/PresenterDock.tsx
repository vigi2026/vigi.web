import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  RotateCcw,
  Sparkles,
  X,
  ChevronRight,
  MessageSquare,
  Mic
} from 'lucide-react';
import { PresenterStatus } from '../hooks/useSpeech';
import { QUICK_VOICE_TOPICS } from './VirtualPresenter';

interface PresenterDockProps {
  isOpen: boolean;
  onClose: () => void;
  status: PresenterStatus;
  isSpeaking: boolean;
  isPaused: boolean;
  currentText: string;
  isMuted: boolean;
  onPlay: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
  onReplay: () => void;
  onStartTour: () => void;
  onSelectTopic: (speech: string, title?: string) => void;
}

export function PresenterDock({
  isOpen,
  onClose,
  status,
  isSpeaking,
  isPaused,
  currentText,
  isMuted,
  onPlay,
  onPause,
  onResume,
  onStop,
  onReplay,
  onStartTour,
  onSelectTopic
}: PresenterDockProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed bottom-4 right-4 z-50 w-full max-w-sm glass-panel-glow rounded-3xl p-5 border border-neonCyan/40 shadow-[0_10px_50px_rgba(0,168,255,0.4)] text-left"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-neonCyan/20 mb-3">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-neonCyan to-cyberGold">
              <img
                src="/assets/vigi-avatar.png"
                alt="VIGI Virtual Presenter"
                className="w-full h-full rounded-full object-cover"
              />
              {isSpeaking && (
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border border-deepNavy animate-pulse" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-sm">VIGI</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-neonCyan/15 text-neonCyan border border-neonCyan/30">
                  {status}
                </span>
              </div>
              <p className="text-[10px] text-gray-400 font-mono">Virtual Presenter Dock</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
            aria-label="Close Presenter Dock"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Live Subtitle Transcript */}
        <div className="bg-blackNavy/90 rounded-2xl p-3 border border-neonCyan/20 mb-3">
          <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-1">
            <span className="flex items-center gap-1 text-neonCyan">
              <MessageSquare className="w-3 h-3" />
              AUDIO TRANSCRIPT
            </span>
            {isSpeaking && (
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Speaking
              </span>
            )}
          </div>
          <p className="text-xs text-gray-200 line-clamp-3 leading-relaxed">
            {currentText || "VIGI is ready to explain any topic or take you through the complete project tour."}
          </p>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center justify-between gap-1.5 mb-3">
          {isPaused ? (
            <button
              onClick={onResume}
              className="flex-1 py-2 rounded-xl text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 flex items-center justify-center gap-1 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              RESUME
            </button>
          ) : isSpeaking ? (
            <button
              onClick={onPause}
              className="flex-1 py-2 rounded-xl text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40 hover:bg-amber-500/30 flex items-center justify-center gap-1 cursor-pointer"
            >
              <Pause className="w-3.5 h-3.5" />
              PAUSE
            </button>
          ) : (
            <button
              onClick={onPlay}
              className="flex-1 py-2 rounded-xl text-xs font-bold bg-electricBlue/20 text-neonCyan border border-neonCyan/40 hover:bg-neonCyan/25 flex items-center justify-center gap-1 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              SPEAK
            </button>
          )}

          <button
            onClick={onStop}
            className="p-2 rounded-xl bg-gray-800 text-gray-300 hover:text-white border border-gray-700 hover:border-red-400 cursor-pointer"
            title="Stop Speech"
          >
            <Square className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onReplay}
            className="p-2 rounded-xl bg-gray-800 text-gray-300 hover:text-white border border-gray-700 hover:border-neonCyan cursor-pointer"
            title="Replay Current Topic"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onStartTour}
            className="py-2 px-3 rounded-xl text-xs font-bold bg-gradient-to-r from-electricBlue to-neonCyan text-blackNavy flex items-center gap-1 cursor-pointer"
            title="Start Full Tour"
          >
            <Sparkles className="w-3.5 h-3.5" />
            TOUR
          </button>
        </div>

        {/* Quick Topic Prompts */}
        <div className="pt-2 border-t border-gray-800">
          <p className="text-[10px] font-mono text-gray-400 mb-1.5 uppercase">
            Quick Explain Prompts:
          </p>
          <div className="flex flex-col gap-1 max-h-28 overflow-y-auto pr-1">
            {QUICK_VOICE_TOPICS.map((topic, i) => (
              <button
                key={i}
                onClick={() => onSelectTopic(topic.speech, topic.title)}
                className="text-left px-2.5 py-1.5 rounded-lg text-[11px] bg-deepNavy/60 hover:bg-neonCyan/15 text-gray-300 hover:text-neonCyan border border-gray-800 hover:border-neonCyan/30 flex items-center justify-between cursor-pointer transition-all"
              >
                <span className="truncate">{topic.title}</span>
                <ChevronRight className="w-3 h-3 flex-shrink-0 text-gray-500" />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
