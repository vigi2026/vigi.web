import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  LayoutDashboard,
  ShieldAlert,
  GraduationCap,
  Link2,
  CalendarCheck,
  HelpCircle,
  BellRing,
  Volume2,
  ArrowDown,
  Info
} from 'lucide-react';

interface SystemNode {
  id: string;
  title: string;
  category: 'core' | 'cyber' | 'student';
  desc: string;
  details: string;
}

const SYSTEM_NODES: Record<string, SystemNode> = {
  root: {
    id: 'root',
    title: 'VIGI LOCK ANDROID APPLICATION',
    category: 'core',
    desc: 'The master native application package containing modules, local Room storage, and Android service bindings.',
    details: 'Initiated via Android launcher icon, handling permission grants, initialization listeners, and theme setup.'
  },
  dashboard: {
    id: 'dashboard',
    title: 'HOME DASHBOARD',
    category: 'core',
    desc: 'Central unified UI providing instant security status badges, upcoming timetable slots, and voice triggers.',
    details: 'Coordinates state between the cybersecurity scanner module and the daily student schedule organizer.'
  },
  cyberModule: {
    id: 'cyberModule',
    title: 'CYBERSECURITY ASSISTANT',
    category: 'cyber',
    desc: 'The dedicated digital defense engine handling link sanitation, APK heuristic analysis, and phishing education.',
    details: 'Executes RFC URL parsing, tests domain spoofing patterns, and checks cryptographic file digests.'
  },
  studentModule: {
    id: 'studentModule',
    title: 'STUDENT ASSISTANT',
    category: 'student',
    desc: 'The academic productivity engine for schedule management, assignment deadlines, and spaced revision.',
    details: 'Stores daily schedules in Room SQLite and manages deadline tracking with visual progress indicators.'
  },
  cyberChecks: {
    id: 'cyberChecks',
    title: 'URL AND FILE CHECKS',
    category: 'cyber',
    desc: 'Syntactic format parsing, protocol verification, host inspection, and file extension structure review.',
    details: 'Evaluates parameters locally without uploading user files or browsing logs to third-party trackers.'
  },
  studentTasks: {
    id: 'studentTasks',
    title: 'TIMETABLE AND TASKS',
    category: 'student',
    desc: 'Customizable daily study blocks, subject classifications, practical lab tasks, and completion checklists.',
    details: 'Enables adding, editing, completing, and rescheduling daily study slots with instant state updates.'
  },
  cyberResults: {
    id: 'cyberResults',
    title: 'RISK EXPLANATIONS & RECOMMENDATIONS',
    category: 'cyber',
    desc: 'Plain-English diagnosis of findings, transparent reason tags, and actionable security precautions.',
    details: 'Classifies status into clear states like No Warning Found in Available Checks or Review Recommended.'
  },
  studentReminders: {
    id: 'studentReminders',
    title: 'REMINDERS & PROGRESS TRACKING',
    category: 'student',
    desc: 'System notification triggers via AlarmManager and visual productivity completion rings.',
    details: 'Employs AlarmManager for exact time alerts and TextToSpeech to vocalize reminders hands-free.'
  }
};

interface SystemOverviewProps {
  onSpeak: (text: string) => void;
}

export function SystemOverview({ onSpeak }: SystemOverviewProps) {
  const [selectedNode, setSelectedNode] = useState<SystemNode>(SYSTEM_NODES.root);

  const handleExplainArchitecture = () => {
    onSpeak(
      "The VIGI LOCK system flows downward from the root Android Application into the central Home Dashboard. From there, it branches into two specialized subsystems: the Cybersecurity Assistant on the left for URL and file checks, leading to risk explanations; and the Student Assistant on the right for daily timetables and tasks, leading to scheduled reminders and progress tracking."
    );
  };

  return (
    <section id="system-overview" className="py-20 px-4 sm:px-6 md:px-8 relative cyber-grid-bg">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-neonCyan/30 text-xs font-mono text-neonCyan">
            <span>SECTION 04 • SYSTEM FLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Interactive System Overview
          </h2>
          <p className="text-base text-gray-300 font-sans">
            Explore the end-to-end data flow and component hierarchy powering the proposed Android application.
          </p>

          <button
            onClick={handleExplainArchitecture}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-deepNavy border border-neonCyan/30 text-neonCyan hover:bg-neonCyan/15 transition-all cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>EXPLAIN THIS ARCHITECTURE</span>
          </button>
        </div>

        {/* Selected Component Detail Inspector Box */}
        <motion.div
          key={selectedNode.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl glass-panel-glow border border-neonCyan/30 text-left flex items-start gap-4"
        >
          <div className="p-2.5 rounded-xl bg-neonCyan/15 text-neonCyan border border-neonCyan/30 mt-1 flex-shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h4 className="text-sm sm:text-base font-bold text-white font-display">
                {selectedNode.title}
              </h4>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300">
                INSPECTOR ACTIVE
              </span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              {selectedNode.desc}
            </p>
            <p className="text-[11px] text-gray-400 font-mono pt-1">
              {selectedNode.details}
            </p>
          </div>
        </motion.div>

        {/* Interactive Responsive Flowchart Diagram */}
        <div className="relative max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl glass-panel border border-neonCyan/20">
          {/* Level 1: App Root */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setSelectedNode(SYSTEM_NODES.root)}
              className={`px-6 py-3.5 rounded-2xl font-bold font-display text-xs sm:text-sm tracking-wider border transition-all cursor-pointer ${
                selectedNode.id === 'root'
                  ? 'bg-neonCyan text-blackNavy border-neonCyan shadow-[0_0_25px_rgba(0,245,255,0.6)] scale-105'
                  : 'bg-deepNavy text-white border-neonCyan/40 hover:border-neonCyan'
              }`}
            >
              VIGI LOCK ANDROID APPLICATION
            </button>
          </div>

          {/* Animated Downward Data Connector */}
          <div className="flex justify-center mb-6">
            <div className="flex flex-col items-center">
              <span className="w-0.5 h-6 bg-gradient-to-b from-neonCyan to-electricBlue animate-pulse" />
              <ArrowDown className="w-4 h-4 text-neonCyan" />
            </div>
          </div>

          {/* Level 2: Home Dashboard */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setSelectedNode(SYSTEM_NODES.dashboard)}
              className={`px-7 py-3 rounded-2xl font-bold font-display text-xs sm:text-sm tracking-wider border transition-all cursor-pointer ${
                selectedNode.id === 'dashboard'
                  ? 'bg-electricBlue text-blackNavy border-electricBlue shadow-[0_0_25px_rgba(0,168,255,0.6)] scale-105'
                  : 'bg-deepNavy text-white border-electricBlue/40 hover:border-electricBlue'
              }`}
            >
              HOME DASHBOARD
            </button>
          </div>

          {/* Branching Lines */}
          <div className="hidden md:flex justify-center mb-6">
            <div className="w-3/4 border-t-2 border-dashed border-neonCyan/30 relative">
              <span className="absolute -left-1 -top-1.5 w-3 h-3 rounded-full bg-neonCyan shadow-[0_0_8px_#00F5FF]" />
              <span className="absolute -right-1 -top-1.5 w-3 h-3 rounded-full bg-cyberGold shadow-[0_0_8px_#FFB52E]" />
            </div>
          </div>

          {/* Level 3: Dual Subsystems (Cybersecurity Assistant vs Student Assistant) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Left Column: Cyber Branch */}
            <div className="space-y-6 flex flex-col items-center">
              <button
                onClick={() => setSelectedNode(SYSTEM_NODES.cyberModule)}
                className={`w-full py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm border transition-all cursor-pointer ${
                  selectedNode.id === 'cyberModule'
                    ? 'bg-neonCyan/25 text-neonCyan border-neonCyan shadow-[0_0_20px_rgba(0,245,255,0.4)]'
                    : 'bg-deepNavy/80 text-gray-200 border-neonCyan/30 hover:border-neonCyan'
                }`}
              >
                CYBERSECURITY ASSISTANT
              </button>

              <ArrowDown className="w-4 h-4 text-neonCyan animate-bounce" />

              <button
                onClick={() => setSelectedNode(SYSTEM_NODES.cyberChecks)}
                className={`w-full py-3 px-4 rounded-2xl font-semibold text-xs border transition-all cursor-pointer ${
                  selectedNode.id === 'cyberChecks'
                    ? 'bg-neonCyan/25 text-neonCyan border-neonCyan shadow-[0_0_20px_rgba(0,245,255,0.4)]'
                    : 'bg-deepNavy/80 text-gray-300 border-gray-700 hover:border-neonCyan/40'
                }`}
              >
                URL AND FILE CHECKS
              </button>

              <ArrowDown className="w-4 h-4 text-neonCyan animate-bounce" />

              <button
                onClick={() => setSelectedNode(SYSTEM_NODES.cyberResults)}
                className={`w-full py-3 px-4 rounded-2xl font-semibold text-xs border transition-all cursor-pointer ${
                  selectedNode.id === 'cyberResults'
                    ? 'bg-neonCyan/25 text-neonCyan border-neonCyan shadow-[0_0_20px_rgba(0,245,255,0.4)]'
                    : 'bg-deepNavy/80 text-gray-300 border-gray-700 hover:border-neonCyan/40'
                }`}
              >
                RISK EXPLANATIONS & RECOMMENDATIONS
              </button>
            </div>

            {/* Right Column: Student Branch */}
            <div className="space-y-6 flex flex-col items-center">
              <button
                onClick={() => setSelectedNode(SYSTEM_NODES.studentModule)}
                className={`w-full py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm border transition-all cursor-pointer ${
                  selectedNode.id === 'studentModule'
                    ? 'bg-cyberGold/25 text-cyberGold border-cyberGold shadow-[0_0_20px_rgba(255,181,46,0.4)]'
                    : 'bg-deepNavy/80 text-gray-200 border-cyberGold/30 hover:border-cyberGold'
                }`}
              >
                STUDENT ASSISTANT
              </button>

              <ArrowDown className="w-4 h-4 text-cyberGold animate-bounce" />

              <button
                onClick={() => setSelectedNode(SYSTEM_NODES.studentTasks)}
                className={`w-full py-3 px-4 rounded-2xl font-semibold text-xs border transition-all cursor-pointer ${
                  selectedNode.id === 'studentTasks'
                    ? 'bg-cyberGold/25 text-cyberGold border-cyberGold shadow-[0_0_20px_rgba(255,181,46,0.4)]'
                    : 'bg-deepNavy/80 text-gray-300 border-gray-700 hover:border-cyberGold/40'
                }`}
              >
                TIMETABLE AND TASKS
              </button>

              <ArrowDown className="w-4 h-4 text-cyberGold animate-bounce" />

              <button
                onClick={() => setSelectedNode(SYSTEM_NODES.studentReminders)}
                className={`w-full py-3 px-4 rounded-2xl font-semibold text-xs border transition-all cursor-pointer ${
                  selectedNode.id === 'studentReminders'
                    ? 'bg-cyberGold/25 text-cyberGold border-cyberGold shadow-[0_0_20px_rgba(255,181,46,0.4)]'
                    : 'bg-deepNavy/80 text-gray-300 border-gray-700 hover:border-cyberGold/40'
                }`}
              >
                REMINDERS & PROGRESS TRACKING
              </button>
            </div>
          </div>

          <div className="text-center text-[11px] font-mono text-gray-400 border-t border-gray-800 pt-3">
            Click any node in the flowchart to view its architectural specification in the inspector above.
          </div>
        </div>
      </div>
    </section>
  );
}
