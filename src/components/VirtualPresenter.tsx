import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  RotateCcw,
  Mic,
  MicOff,
  Sparkles,
  ChevronDown,
  ChevronUp,
  X,
  MessageSquare,
  List
} from 'lucide-react';
import { PresenterStatus } from '../hooks/useSpeech';

interface VirtualPresenterProps {
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
  onSelectTopic: (topicSpeech: string, topicTitle?: string) => void;
}

export const QUICK_VOICE_TOPICS = [
  {
    title: "Explain Phishing",
    speech: "Phishing is a social engineering attack where malicious actors deceive users into revealing confidential credentials, passwords, or OTPs using deceptive links and fake urgency."
  },
  {
    title: "Show My Timetable",
    speech: "Here is your study schedule. Your day is divided into morning revision, college lectures, afternoon practical coding, and evening note reviews to maximize focus."
  },
  {
    title: "Explain Java",
    speech: "Java is the foundational object-oriented language for our Android application. It manages the activity lifecycle, executes background threads, and handles view listeners."
  },
  {
    title: "Read Next Reminder",
    speech: "VIGI LOCK reminder: It is 6:00 PM, time for your Android programming and Java lab practice session. Review your Activity and Room database classes."
  },
  {
    title: "Explain Architecture",
    speech: "Our 5-layer architecture separates the User Interface from Application Logic, on-device Room Storage, native Android System Services, and optional external threat lookups."
  }
];

export function VirtualPresenter({
  status,
  isSpeaking,
  isPaused,
  isListening,
  currentText,
  isMuted,
  onPlay,
  onPause,
  onResume,
  onStop,
  onReplay,
  onStartTour,
  onStartListening,
  isRecognitionSupported,
  onSelectTopic
}: VirtualPresenterProps) {
  const [showTopicButtons, setShowTopicButtons] = useState(false);

  // Status badge styling
  const getStatusBadge = () => {
    switch (status) {
      case 'SPEAKING':
        return {
          bg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
          dot: 'bg-emerald-400 animate-ping'
        };
      case 'PAUSED':
        return {
          bg: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
          dot: 'bg-amber-400'
        };
      case 'LISTENING':
        return {
          bg: 'bg-neonCyan/20 text-neonCyan border-neonCyan/40',
          dot: 'bg-neonCyan animate-pulse'
        };
      default:
        return {
          bg: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
          dot: 'bg-blue-400'
        };
    }
  };

  const badgeStyle = getStatusBadge();

  return (
    <div className="w-full glass-panel-glow rounded-3xl p-5 sm:p-7 border border-neonCyan/35 shadow-[0_0_50px_rgba(0,168,255,0.25)] relative overflow-hidden">
      {/* Background Cyber Grid Accent */}
      <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-holographicPurple/10 blur-[80px] pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-electricBlue/10 blur-[80px] pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
        {/* Holographic Circular Frame with Avatar */}
        <div className="relative flex-shrink-0 flex items-center justify-center">
          {/* Animated Energy Rings */}
          <motion.div
            animate={isSpeaking ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-dashed border-neonCyan/50 pointer-events-none"
          />
          <motion.div
            animate={isSpeaking ? { rotate: -360 } : { rotate: 0 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-holographicPurple/40 pointer-events-none"
          />

          {/* Pulse Halo when speaking */}
          {isSpeaking && (
            <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-neonCyan/15 animate-ping pointer-events-none" />
          )}

          {/* Avatar Container */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-neonCyan via-holographicPurple to-cyberGold shadow-[0_0_30px_rgba(0,245,255,0.4)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-blackNavy">
              <img
                src="/assets/vigi-avatar.png"
                alt="VIGI AI Virtual Presenter"
                className="w-full h-full object-cover select-none"
              />
            </div>

            {/* Glowing Microphone / Status Dot */}
            <div className="absolute bottom-1 right-1 p-2 rounded-full bg-deepNavy border border-neonCyan shadow-[0_0_12px_#00F5FF]">
              {isListening ? (
                <Mic className="w-4 h-4 text-neonCyan animate-bounce" />
              ) : isSpeaking ? (
                <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
              ) : (
                <Sparkles className="w-4 h-4 text-cyberGold" />
              )}
            </div>
          </div>
        </div>

        {/* Presenter Info & Transcript */}
        <div className="flex-1 w-full text-center md:text-left space-y-3">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-2">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white tracking-wide">
                  VIGI
                </h3>
                <span className="text-xs font-mono text-neonCyan uppercase font-semibold">
                  • Virtual Project Presenter
                </span>
              </div>
              <p className="text-xs text-gray-400 font-mono">
                BCA VI Semester Academic Presentation System
              </p>
            </div>

            {/* Presenter Status Badge */}
            <div className="flex items-center gap-2">
              <div className={`px-3 py-1 rounded-full text-xs font-mono border flex items-center gap-2 ${badgeStyle.bg}`}>
                <span className={`w-2 h-2 rounded-full ${badgeStyle.dot}`} />
                <span className="font-bold tracking-wider">{status}</span>
              </div>
            </div>
          </div>

          {/* Speaking Audio Waveform */}
          <div className="flex items-center justify-center md:justify-start gap-1 h-5 py-1">
            <span className="text-[10px] font-mono text-gray-400 mr-1">AUDIO FEED:</span>
            {[4, 10, 16, 24, 18, 12, 20, 14, 8, 22, 16, 6].map((h, i) => (
              <span
                key={i}
                className="w-1 bg-neonCyan rounded-full transition-all duration-150"
                style={{
                  height: isSpeaking ? `${Math.max(4, (h * (Math.sin(i * 1.5) + 1.2)))}px` : '4px',
                  opacity: isSpeaking ? 0.9 : 0.3
                }}
              />
            ))}
          </div>

          {/* Synchronized Subtitle / Transcript Panel */}
          <div className="relative rounded-2xl bg-blackNavy/80 border border-neonCyan/20 p-4 text-left shadow-inner">
            <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-1.5 border-b border-gray-800 pb-1">
              <span className="flex items-center gap-1.5 text-neonCyan">
                <MessageSquare className="w-3.5 h-3.5" />
                SYNCHRONIZED TRANSCRIPT
              </span>
              <span>Web Speech API</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-sans max-h-24 overflow-y-auto pr-1">
              {currentText || "Welcome! Select a project topic or start the tour to listen to the explanation."}
            </p>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
            {/* Play / Resume */}
            {isPaused ? (
              <button
                onClick={onResume}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                RESUME
              </button>
            ) : isSpeaking ? (
              <button
                onClick={onPause}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40 hover:bg-amber-500/30 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Pause className="w-3.5 h-3.5" />
                PAUSE
              </button>
            ) : (
              <button
                onClick={onPlay}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-electricBlue/20 text-neonCyan border border-neonCyan/40 hover:bg-neonCyan/25 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                PLAY
              </button>
            )}

            {/* Stop */}
            <button
              onClick={onStop}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-gray-800/80 text-gray-300 hover:text-white border border-gray-700 hover:border-red-400/50 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Square className="w-3.5 h-3.5" />
              STOP
            </button>

            {/* Replay */}
            <button
              onClick={onReplay}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-gray-800/80 text-gray-300 hover:text-white border border-gray-700 hover:border-neonCyan/40 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              REPLAY
            </button>

            {/* Microphone Voice Input (Only after explicit user click!) */}
            <button
              onClick={onStartListening}
              title={isRecognitionSupported ? "Speak a voice command (Click to activate mic)" : "Speech recognition not supported in this browser"}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all cursor-pointer ${
                isListening
                  ? 'bg-red-500/20 text-red-400 border-red-500 animate-pulse'
                  : 'bg-purple-900/30 text-holographicPurple border-holographicPurple/40 hover:bg-holographicPurple/20'
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>{isListening ? 'LISTENING...' : 'SPEAK COMMAND'}</span>
            </button>

            {/* Project Tour Shortcut */}
            <button
              onClick={onStartTour}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-electricBlue to-neonCyan text-blackNavy hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-blackNavy" />
              PROJECT TOUR
            </button>

            {/* Toggle Quick Voice Questions */}
            <button
              onClick={() => setShowTopicButtons(!showTopicButtons)}
              className="px-3 py-2 rounded-xl text-xs font-mono text-gray-400 hover:text-neonCyan flex items-center gap-1 cursor-pointer"
            >
              <List className="w-3.5 h-3.5" />
              <span>{showTopicButtons ? 'Hide Prompts' : 'Voice Prompts'}</span>
              {showTopicButtons ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Clickable Voice Command Prompts */}
      <AnimatePresence>
        {showTopicButtons && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mt-4 pt-4 border-t border-gray-800"
          >
            <p className="text-xs font-mono text-gray-400 mb-2.5">
              CLICK TO HEAR VIGI EXPLAIN SAMPLE QUERIES:
            </p>
            <div className="flex flex-wrap gap-2">
              {QUICK_VOICE_TOPICS.map((topic, i) => (
                <button
                  key={i}
                  onClick={() => onSelectTopic(topic.speech, topic.title)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-deepNavy hover:bg-neonCyan/15 text-gray-300 hover:text-neonCyan border border-gray-700 hover:border-neonCyan/40 transition-all cursor-pointer text-left"
                >
                  "{topic.title}"
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
