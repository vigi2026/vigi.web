import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldAlert,
  GraduationCap,
  Users,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Volume2,
  Sparkles,
  Link2,
  FileSearch,
  BookOpen,
  Calendar,
  Mic,
  TrendingUp,
  Info
} from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

interface IntroductionProps {
  onSpeak: (text: string) => void;
}

export function Introduction({ onSpeak }: IntroductionProps) {
  const [selectedModule, setSelectedModule] = useState<'cyber' | 'student'>('cyber');

  const handleExplainProject = () => {
    onSpeak(
      "VIGI LOCK is a proposed Android application combining cybersecurity awareness and student productivity. Module 1, the Cybersecurity Assistant, reviews URLs and supported files to detect suspicious indicators and explain risk simply. Module 2, the Student Study Assistant, organizes timetables, subject assignments, and voice reminders. We target college students and everyday smartphone users, providing helpful guidance without unrealistic guarantees."
    );
  };

  return (
    <section id="introduction" className="py-20 px-4 sm:px-6 md:px-8 relative cyber-grid-bg">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-neonCyan/30 text-xs font-mono text-neonCyan">
            <span>SECTION 01 • PROJECT SCOPE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Complete Project Introduction
          </h2>
          <p className="text-base text-gray-300 font-sans">
            VIGI LOCK is an educational proposed Android application designed to unite digital risk vigilance with daily academic discipline.
          </p>

          <button
            onClick={handleExplainProject}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs font-mono bg-deepNavy border border-neonCyan/40 text-neonCyan hover:bg-neonCyan/15 hover:border-neonCyan transition-all shadow-[0_0_15px_rgba(0,245,255,0.2)] cursor-pointer"
          >
            <Volume2 className="w-4 h-4 text-neonCyan" />
            <span>LET VIGI EXPLAIN THE PROJECT</span>
          </button>
        </div>

        {/* 2 Interactive Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* MODULE 1: Cybersecurity Assistant */}
          <div
            onClick={() => setSelectedModule('cyber')}
            className={`p-6 sm:p-8 rounded-3xl glass-panel cursor-pointer transition-all duration-300 relative overflow-hidden ${
              selectedModule === 'cyber'
                ? 'border-2 border-neonCyan shadow-[0_0_40px_rgba(0,245,255,0.3)] bg-deepNavy/90'
                : 'border border-neonCyan/20 hover:border-neonCyan/50 bg-deepNavy/60'
            }`}
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-electricBlue/10 blur-[60px] pointer-events-none" />

            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-electricBlue/20 border border-neonCyan/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,245,255,0.3)]">
                <ShieldAlert className="w-6 h-6 text-neonCyan" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-neonCyan/15 text-neonCyan border border-neonCyan/30 font-semibold">
                MODULE 1
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
              Cybersecurity Assistant
            </h3>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Provides pre-emptive review of entered URLs and supported files using demonstrable heuristic rules, translating complex threats into plain English.
            </p>

            {/* Feature List */}
            <div className="space-y-2.5">
              {[
                { label: 'URL Input Validation', icon: Link2 },
                { label: 'Suspicious-Link Pattern Review', icon: AlertTriangle },
                { label: 'Supported-File & APK Inspection', icon: FileSearch },
                { label: 'Plain-English Risk Explanations', icon: Info },
                { label: 'Contextual Safety Recommendations', icon: CheckCircle2 },
                { label: 'Continuous Security Awareness', icon: Sparkles }
              ].map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                    <Icon className="w-4 h-4 text-neonCyan flex-shrink-0" />
                    <span>{feat.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-neonCyan/15 flex items-center justify-between text-xs font-mono text-neonCyan">
              <span>{selectedModule === 'cyber' ? '● Active Module View' : 'Click to View Module Details'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* MODULE 2: Student Study Assistant */}
          <div
            onClick={() => setSelectedModule('student')}
            className={`p-6 sm:p-8 rounded-3xl glass-panel cursor-pointer transition-all duration-300 relative overflow-hidden ${
              selectedModule === 'student'
                ? 'border-2 border-cyberGold shadow-[0_0_40px_rgba(255,181,46,0.3)] bg-deepNavy/90'
                : 'border border-cyberGold/20 hover:border-cyberGold/50 bg-deepNavy/60'
            }`}
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-cyberGold/10 blur-[60px] pointer-events-none" />

            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-cyberGold/20 border border-cyberGold/40 flex items-center justify-center shadow-[0_0_15px_rgba(255,181,46,0.3)]">
                <GraduationCap className="w-6 h-6 text-cyberGold" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyberGold/15 text-cyberGold border border-cyberGold/30 font-semibold">
                MODULE 2
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
              Student Study Assistant
            </h3>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Empowers students to maintain academic momentum through customizable daily timetables, assignment alerts, revision reminders, and voice interactions.
            </p>

            {/* Feature List */}
            <div className="space-y-2.5">
              {[
                { label: 'Daily Study Timetables & Routines', icon: Calendar },
                { label: 'Subject & Topic Organization', icon: BookOpen },
                { label: 'Assignment & Record Tracking', icon: CheckCircle2 },
                { label: 'Spaced Revision Planning', icon: TrendingUp },
                { label: 'Reliable Scheduled Study Reminders', icon: AlertTriangle },
                { label: 'Hands-Free Voice Query Support', icon: Mic }
              ].map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                    <Icon className="w-4 h-4 text-cyberGold flex-shrink-0" />
                    <span>{feat.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-cyberGold/15 flex items-center justify-between text-xs font-mono text-cyberGold">
              <span>{selectedModule === 'student' ? '● Active Module View' : 'Click to View Module Details'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Target Users & Realistic Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {/* Target Audience */}
          <div className="p-6 rounded-2xl glass-panel border border-neonCyan/20 space-y-4 text-left">
            <div className="flex items-center gap-2 text-neonCyan font-mono text-xs font-bold uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>Target Audience & Beneficiaries</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neonCyan mt-1.5 flex-shrink-0" />
                <span><strong>College Students:</strong> Learners needing structured daily study schedules and safe handling of peer-shared links and notes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neonCyan mt-1.5 flex-shrink-0" />
                <span><strong>Smartphone Users:</strong> Individuals receiving suspicious SMS, WhatsApp links, or deceptive APK installation prompts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neonCyan mt-1.5 flex-shrink-0" />
                <span><strong>Everyday Learners:</strong> Non-technical users who require clear, plain-language security advice without intimidating jargon.</span>
              </li>
            </ul>
          </div>

          {/* Responsible Realistic Expectations */}
          <div className="p-6 rounded-2xl glass-panel-gold border border-cyberGold/25 space-y-4 text-left">
            <div className="flex items-center gap-2 text-cyberGold font-mono text-xs font-bold uppercase tracking-wider">
              <Info className="w-4 h-4" />
              <span>Realistic Scope & Scientific Integrity</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              VIGI LOCK provides educational risk guidance and organizational assistance. It is designed with academic rigor:
            </p>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-cyberGold">✔</span>
                <span>Does not guarantee 100% detection of zero-day attacks or sophisticated polymorphic malware.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyberGold">✔</span>
                <span>Does not promise elevated exam grades; success depends on consistent student execution and personal effort.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyberGold">✔</span>
                <span>Prioritizes user privacy by executing basic heuristic evaluations locally on-device.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
