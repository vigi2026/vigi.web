import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  GraduationCap,
  AlertTriangle,
  ArrowRight,
  Volume2,
  CheckCircle2,
  Link2,
  FileWarning,
  MessageSquareWarning,
  Clock,
  CalendarX,
  FileQuestion,
  HelpCircle
} from 'lucide-react';
import { CYBER_PROBLEMS, STUDENT_PROBLEMS } from '../data/projectData';

interface ProblemStatementProps {
  onSpeak: (text: string) => void;
}

export function ProblemStatement({ onSpeak }: ProblemStatementProps) {
  const [activeTab, setActiveTab] = useState<'both' | 'cyber' | 'student'>('both');
  const [activeProblemIndex, setActiveProblemIndex] = useState<number | null>(0);

  const handleSpeakProblemStatement = () => {
    onSpeak(
      "Many users receive suspicious messages and links but may not understand the warning signs. Students may also struggle to organize their daily study activities and remember important deadlines. VIGI LOCK proposes to bring understandable cybersecurity guidance and student productivity tools together in one Android application."
    );
  };

  return (
    <section id="problems" className="py-20 px-4 sm:px-6 md:px-8 relative bg-blackNavy/60 border-t border-b border-neonCyan/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-neonCyan/30 text-xs font-mono text-neonCyan">
            <span>SECTION 02 • THE DUAL CHALLENGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Problem Statement
          </h2>
          <p className="text-base text-gray-300 font-sans">
            Modern college students navigate an increasingly deceptive cyber landscape while juggling demanding academic schedules.
          </p>

          <button
            onClick={handleSpeakProblemStatement}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-deepNavy border border-neonCyan/30 text-neonCyan hover:bg-neonCyan/15 transition-all cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>NARRATE PROBLEM STATEMENT</span>
          </button>
        </div>

        {/* Animated Split-Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          {/* LEFT SIDE: CYBERSECURITY PROBLEMS */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-red-500/30 space-y-6 text-left relative overflow-hidden">
            {/* Ambient Red/Cyan glow */}
            <div className="absolute top-0 left-0 w-44 h-44 rounded-full bg-red-500/10 blur-[70px] pointer-events-none" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                    Cybersecurity Vulnerabilities
                  </h3>
                  <p className="text-xs text-red-400 font-mono">The Threat Landscape</p>
                </div>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-red-500/15 text-red-400 border border-red-500/30">
                4 CRITICAL RISKS
              </span>
            </div>

            <div className="space-y-4">
              {CYBER_PROBLEMS.map((prob, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveProblemIndex(idx)}
                  className={`p-4 rounded-2xl transition-all cursor-pointer border ${
                    activeProblemIndex === idx
                      ? 'bg-red-950/40 border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                      : 'bg-blackNavy/60 border-gray-800 hover:border-red-500/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>{prob.title}</span>
                    </h4>
                    <span className="text-[10px] font-mono text-gray-500">#{idx + 1}</span>
                  </div>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                    {prob.description}
                  </p>

                  {/* Fictional Sample Box */}
                  <div className="mt-2.5 p-2.5 rounded-lg bg-blackNavy border border-red-900/50 font-mono text-[11px] text-red-300/90 break-all">
                    <span className="text-gray-500 block text-[9px] uppercase">Fictional Example:</span>
                    {prob.example}
                  </div>

                  {/* Connected VIGI Solution */}
                  <div className="mt-3 pt-2.5 border-t border-gray-800 flex items-center gap-2 text-xs font-mono text-neonCyan">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neonCyan flex-shrink-0" />
                    <span>{prob.vigiSolution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: STUDENT PROBLEMS */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-cyberGold/30 space-y-6 text-left relative overflow-hidden">
            {/* Ambient Gold glow */}
            <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-cyberGold/10 blur-[70px] pointer-events-none" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyberGold/20 border border-cyberGold/40 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-cyberGold" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                    Student Productivity Friction
                  </h3>
                  <p className="text-xs text-cyberGold font-mono">Academic Challenges</p>
                </div>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyberGold/15 text-cyberGold border border-cyberGold/30">
                4 CRITICAL CHALLENGES
              </span>
            </div>

            <div className="space-y-4">
              {STUDENT_PROBLEMS.map((prob, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveProblemIndex(idx)}
                  className={`p-4 rounded-2xl transition-all cursor-pointer border ${
                    activeProblemIndex === idx
                      ? 'bg-amber-950/30 border-cyberGold/50 shadow-[0_0_20px_rgba(255,181,46,0.2)]'
                      : 'bg-blackNavy/60 border-gray-800 hover:border-cyberGold/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyberGold flex-shrink-0" />
                      <span>{prob.title}</span>
                    </h4>
                    <span className="text-[10px] font-mono text-gray-500">#{idx + 1}</span>
                  </div>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                    {prob.description}
                  </p>

                  {/* Fictional Sample Box */}
                  <div className="mt-2.5 p-2.5 rounded-lg bg-blackNavy border border-amber-900/50 font-mono text-[11px] text-amber-200/90">
                    <span className="text-gray-500 block text-[9px] uppercase">Common Dilemma:</span>
                    "{prob.example}"
                  </div>

                  {/* Connected VIGI Solution */}
                  <div className="mt-3 pt-2.5 border-t border-gray-800 flex items-center gap-2 text-xs font-mono text-cyberGold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyberGold flex-shrink-0" />
                    <span>{prob.vigiSolution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Unified Bridge Callout */}
        <div className="p-6 rounded-2xl glass-panel-glow border border-neonCyan/30 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-neonCyan to-cyberGold p-0.5 flex-shrink-0">
            <div className="w-full h-full bg-deepNavy rounded-2xl flex items-center justify-center">
              <img
                src="/assets/vigi-lock-logo.png"
                alt="VIGI LOCK"
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-sm sm:text-base font-bold text-white font-display">
              The VIGI LOCK Convergence
            </h4>
            <p className="text-xs text-gray-300 mt-0.5">
              By harmonizing digital threat verification and daily study scheduling into a single native Android application, students avoid juggling multiple fragmented apps and gain actionable digital peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
