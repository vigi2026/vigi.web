import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mic,
  Volume2,
  Play,
  RotateCcw,
  Square,
  Sparkles,
  Cpu,
  Smartphone,
  Globe,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { QUICK_VOICE_TOPICS } from '../components/VirtualPresenter';
import { PresenterStatus } from '../hooks/useSpeech';

interface VoiceAssistantSectionProps {
  onSpeak: (text: string) => void;
  onStartListening: () => void;
  isListening: boolean;
  status: PresenterStatus;
  isSpeaking: boolean;
  currentTranscript: string;
  isRecognitionSupported: boolean;
}

export function VoiceAssistantSection({
  onSpeak,
  onStartListening,
  isListening,
  status,
  isSpeaking,
  currentTranscript,
  isRecognitionSupported
}: VoiceAssistantSectionProps) {
  const [selectedPrompt, setSelectedPrompt] = useState<string>(QUICK_VOICE_TOPICS[0].title);

  const handleTriggerCommand = (title: string, speech: string) => {
    setSelectedPrompt(title);
    onSpeak(speech);
  };

  return (
    <section id="voice-assistant" className="py-20 px-4 sm:px-6 md:px-8 relative cyber-grid-bg">
      <div className="max-w-6xl mx-auto space-y-12 text-left">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-holographicPurple/30 text-xs font-mono text-holographicPurple">
            <span>SECTION 11 • CONVERSATIONAL VOICE AGENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            VIGI Voice Assistant
          </h2>
          <p className="text-base text-gray-300 font-sans">
            Hands-free academic companion: ask security questions, review your daily study slots, and explore native Android speech integration.
          </p>
        </div>

        {/* Central Holographic Audio Interface */}
        <div className="p-7 sm:p-10 rounded-3xl glass-panel-glow border border-holographicPurple/30 relative overflow-hidden text-center space-y-7">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-holographicPurple/10 blur-[100px] pointer-events-none" />

          {/* Central Holographic Mic Avatar */}
          <div className="relative flex justify-center py-4">
            <motion.div
              animate={isSpeaking || isListening ? { scale: [1, 1.08, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-neonCyan via-holographicPurple to-cyberGold flex items-center justify-center shadow-[0_0_40px_rgba(155,92,255,0.4)]"
            >
              <div className="w-full h-full rounded-full bg-blackNavy flex items-center justify-center relative overflow-hidden">
                {isListening ? (
                  <Mic className="w-14 h-14 text-neonCyan animate-bounce" />
                ) : isSpeaking ? (
                  <Volume2 className="w-14 h-14 text-emerald-400 animate-pulse" />
                ) : (
                  <Mic className="w-14 h-14 text-holographicPurple" />
                )}
                {/* Audio pulse ring */}
                {(isSpeaking || isListening) && (
                  <div className="absolute inset-0 rounded-full border-2 border-neonCyan/50 animate-ping pointer-events-none" />
                )}
              </div>
            </motion.div>
          </div>

          {/* Waveform Visualizer Bar */}
          <div className="flex items-center justify-center gap-1.5 h-8">
            {[6, 14, 22, 32, 18, 28, 12, 30, 24, 16, 26, 10, 18, 22, 12].map((h, i) => (
              <span
                key={i}
                className="w-1.5 bg-gradient-to-t from-electricBlue to-neonCyan rounded-full transition-all duration-150"
                style={{
                  height: isSpeaking ? `${Math.max(6, h * 0.85)}px` : isListening ? `${Math.max(8, h * 1.1)}px` : '6px',
                  opacity: isSpeaking || isListening ? 1 : 0.3
                }}
              />
            ))}
          </div>

          {/* Transcript Display */}
          <div className="max-w-xl mx-auto p-4 rounded-2xl bg-blackNavy/80 border border-holographicPurple/30 text-left space-y-1">
            <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 border-b border-gray-800 pb-1">
              <span className="text-neonCyan">LIVE SPEECH TRANSCRIPT</span>
              <span className="text-cyberGold">{status}</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-sans">
              "{currentTranscript || "Click any sample command below to hear VIGI respond, or activate the microphone to speak."}"
            </p>
          </div>

          {/* Clickable Voice Prompts */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
              SAMPLE CONVERSATIONAL COMMANDS:
            </span>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
              {QUICK_VOICE_TOPICS.map((topic, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTriggerCommand(topic.title, topic.speech)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                    selectedPrompt === topic.title
                      ? 'bg-holographicPurple/20 text-white border-holographicPurple shadow-[0_0_15px_rgba(155,92,255,0.4)]'
                      : 'bg-deepNavy/80 text-gray-300 border-gray-800 hover:border-holographicPurple/40'
                  }`}
                >
                  "{topic.title}"
                </button>
              ))}
            </div>
          </div>

          {/* Explicit Mic Activation Button */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={onStartListening}
              className={`px-6 py-3 rounded-2xl font-bold text-xs font-mono border transition-all flex items-center gap-2 cursor-pointer ${
                isListening
                  ? 'bg-red-500/20 text-red-400 border-red-500 animate-pulse'
                  : 'bg-holographicPurple/20 text-holographicPurple border-holographicPurple/50 hover:bg-holographicPurple/30'
              }`}
            >
              <Mic className="w-4 h-4" />
              <span>{isListening ? 'LISTENING TO SPEECH...' : 'CLICK TO SPEAK (MICROPHONE)'}</span>
            </button>
          </div>
        </div>

        {/* Technical Architecture Comparison: Native Android vs Browser Web Speech */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-neonCyan/20 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold font-display text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-neonCyan" />
              <span>Native Android Voice APIs vs Browser Web Speech Implementation</span>
            </h3>
            <span className="text-xs font-mono text-gray-400">
              ARCHITECTURE COMPARISON
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Native Android Side */}
            <div className="p-5 rounded-2xl bg-deepNavy border border-gray-800 space-y-3">
              <div className="flex items-center gap-2 text-neonCyan font-mono text-xs font-bold uppercase">
                <Smartphone className="w-4 h-4" />
                <span>Proposed Android Mobile App</span>
              </div>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-start gap-2">
                  <strong className="text-white font-mono min-w-[150px]">android.speech.SpeechRecognizer:</strong>
                  <span>Captures microphone audio streams natively and converts spoken Hindi or English into text tokens.</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-white font-mono min-w-[150px]">android.speech.tts.TextToSpeech:</strong>
                  <span>Synthesizes localized audio output directly on device without requiring external cloud speech fees.</span>
                </li>
              </ul>
            </div>

            {/* Browser Presentation Side */}
            <div className="p-5 rounded-2xl bg-deepNavy border border-gray-800 space-y-3">
              <div className="flex items-center gap-2 text-cyberGold font-mono text-xs font-bold uppercase">
                <Globe className="w-4 h-4" />
                <span>Web Presentation System</span>
              </div>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-start gap-2">
                  <strong className="text-white font-mono min-w-[150px]">window.speechSynthesis:</strong>
                  <span>Native W3C Web Speech API powering VIGI's spoken project narration in modern browsers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-white font-mono min-w-[150px]">webkitSpeechRecognition:</strong>
                  <span>Browser-dependent speech recognition triggered solely upon explicit user button click.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
