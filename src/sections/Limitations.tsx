import React from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Sparkles,
  ShieldCheck,
  Zap,
  Volume2,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';

interface LimitationsProps {
  onSpeak: (text: string) => void;
}

export function Limitations({ onSpeak }: LimitationsProps) {
  const CURRENT_LIMITATIONS = [
    {
      title: "Heuristic Scope Boundary",
      desc: "Basic syntactic rules cannot detect every zero-day threat without live global threat telemetry.",
      status: "CURRENT DEMONSTRATION"
    },
    {
      title: "External Threat Dependency",
      desc: "Accurate enterprise-level threat ratings require access to external threat intelligence feeds and valid API keys.",
      status: "PROPOSED FEATURE"
    },
    {
      title: "Network Connectivity Constraints",
      desc: "Live URL reputation lookups necessitate active internet connectivity; offline mode is limited to local syntax heuristics.",
      status: "CURRENT DEMONSTRATION"
    },
    {
      title: "Hardware Voice Engine Variations",
      desc: "Voice accuracy depends on Android SpeechRecognizer language pack availability on individual user handsets.",
      status: "PROPOSED FEATURE"
    },
    {
      title: "OS Notification & Battery Limits",
      desc: "Android background execution limits (Doze mode, OEM task killers) require explicit notification permissions.",
      status: "PROPOSED FEATURE"
    }
  ];

  const FUTURE_ENHANCEMENTS = [
    {
      title: "Reputable Threat-Intelligence Feeds",
      desc: "Integration with established threat intelligence databases for real-time reputation queries.",
      status: "FUTURE ENHANCEMENT"
    },
    {
      title: "Deep APK Manifest & Bytecode Inspection",
      desc: "Deeper static analysis of compiled DEX bytecode and intent filters before package installation.",
      status: "FUTURE ENHANCEMENT"
    },
    {
      title: "Encrypted Cloud Study Sync",
      desc: "Zero-knowledge end-to-end encrypted backup of timetables and study achievements across student devices.",
      status: "FUTURE ENHANCEMENT"
    },
    {
      title: "Multilingual Indian Regional Speech",
      desc: "Adding support for Kannada, Hindi, and regional speech models for broader accessibility.",
      status: "FUTURE ENHANCEMENT"
    },
    {
      title: "AI-Assisted Study Analytics & Insights",
      desc: "Smart pattern recognition identifying subject difficulty trends and suggesting adaptive revision schedules.",
      status: "FUTURE ENHANCEMENT"
    }
  ];

  const handleSpeakRoadmap = () => {
    onSpeak(
      "In the spirit of honest academic research, VIGI LOCK explicitly acknowledges its boundaries. Basic educational rules cannot guarantee detection of every threat, and Android notifications require explicit permissions. Our future roadmap includes integrating reputable threat feeds, deep APK bytecode inspection, encrypted cloud backups, and multilingual regional speech support."
    );
  };

  return (
    <section id="limitations" className="py-20 px-4 sm:px-6 md:px-8 relative cyber-grid-bg text-left">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-neonCyan/30 text-xs font-mono text-neonCyan">
            <span>SECTION 18 • ACADEMIC HONESTY & ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Limitations & Future Roadmap
          </h2>
          <p className="text-base text-gray-300 font-sans">
            Transparent academic evaluation distinguishing current demonstration parameters from proposed capabilities and future enhancements.
          </p>

          <button
            onClick={handleSpeakRoadmap}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-deepNavy border border-neonCyan/30 text-neonCyan hover:bg-neonCyan/15 transition-all cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>NARRATE ROADMAP & LIMITATIONS</span>
          </button>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Limitations */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-amber-500/30 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-white">
                    Current Scope & Limitations
                  </h3>
                  <span className="text-[10px] font-mono text-amber-400">RESEARCH BOUNDARIES</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {CURRENT_LIMITATIONS.map((lim, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-blackNavy/80 border border-gray-800 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                      {lim.title}
                    </h4>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold">
                      {lim.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed">
                    {lim.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Roadmap Enhancements */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-neonCyan/30 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-neonCyan/20 border border-neonCyan/40 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-neonCyan" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-white">
                    Future Roadmap & Enhancements
                  </h3>
                  <span className="text-[10px] font-mono text-neonCyan">PLANNED INNOVATIONS</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {FUTURE_ENHANCEMENTS.map((enh, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-blackNavy/80 border border-gray-800 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                      {enh.title}
                    </h4>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-neonCyan/15 text-neonCyan border border-neonCyan/30 font-bold">
                      {enh.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed">
                    {enh.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
