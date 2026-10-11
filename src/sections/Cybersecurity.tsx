import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  HelpCircle,
  FileQuestion,
  CheckCircle2,
  Volume2,
  ArrowRight,
  Info
} from 'lucide-react';

interface CybersecurityProps {
  onSpeak: (text: string) => void;
}

export function Cybersecurity({ onSpeak }: CybersecurityProps) {
  const handleSpeakWorkflow = () => {
    onSpeak(
      "The Cybersecurity Assistant follows a seven-step workflow: from validating the entered input to evaluating available evidence and recommending safer actions. We categorize findings into five distinct results, clearly explaining that passing basic heuristic checks does not guarantee complete safety."
    );
  };

  const RESULT_LABELS = [
    {
      label: "NO WARNING FOUND IN AVAILABLE CHECKS",
      color: "border-emerald-500/50 bg-emerald-500/10 text-emerald-400",
      description: "Basic educational heuristic checks detected no obvious red flags.",
      nuance: "Important: This does not mean the link or file is 100% safe. Basic syntactic checks cannot detect sophisticated zero-day threats without deeper intelligence."
    },
    {
      label: "SUSPICIOUS INDICATORS DETECTED",
      color: "border-amber-500/50 bg-amber-500/10 text-amber-400",
      description: "One or more risk patterns (such as brand spoofing or naked IP hosts) triggered a rule.",
      nuance: "Important: A heuristic warning is not definitive proof of malicious intent. It is an educational flag advising heightened user caution."
    },
    {
      label: "KNOWN THREAT REPORTED",
      color: "border-red-500/50 bg-red-500/10 text-red-400",
      description: "A confirmed threat report from an integrated threat-intelligence database.",
      nuance: "Important: Only reported when genuine supporting telemetry from an external threat feed exists. In local demo mode, this is simulated."
    },
    {
      label: "INCONCLUSIVE",
      color: "border-blue-500/50 bg-blue-500/10 text-blue-300",
      description: "Insufficient data exists to formulate a conclusive risk score.",
      nuance: "Important: Indicates that basic heuristic parameters could not determine safety, recommending manual verification."
    },
    {
      label: "CHECK UNAVAILABLE",
      color: "border-gray-500/50 bg-gray-500/10 text-gray-400",
      description: "Network connectivity is offline or the target service is temporarily unreachable.",
      nuance: "Important: Occurs when optional external endpoints are unavailable or rate-limited."
    }
  ];

  return (
    <section id="cybersecurity" className="py-20 px-4 sm:px-6 md:px-8 relative cyber-grid-bg">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-neonCyan/30 text-xs font-mono text-neonCyan">
            <span>SECTION 05 • CYBER DEFENSE PRINCIPLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Cybersecurity Assistant Engine
          </h2>
          <p className="text-base text-gray-300 font-sans">
            The proposed inspection architecture combines syntactic format parsing, heuristic pattern matching, and responsible risk communication.
          </p>

          <button
            onClick={handleSpeakWorkflow}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-deepNavy border border-neonCyan/30 text-neonCyan hover:bg-neonCyan/15 transition-all cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>NARRATE CYBERSECURITY WORKFLOW</span>
          </button>
        </div>

        {/* 7-Step Workflow Diagram */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-neonCyan/30">
          <h3 className="text-lg font-bold font-display text-white mb-6 text-left flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-neonCyan shadow-[0_0_8px_#00F5FF]" />
            Proposed 7-Stage Inspection Workflow
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            {[
              { step: '01', title: 'Input Entry', desc: 'User enters link or selects file.' },
              { step: '02', title: 'Validation', desc: 'RFC syntax and file format parsing.' },
              { step: '03', title: 'Heuristics', desc: 'Protocol, domain, and keyword checks.' },
              { step: '04', title: 'Evaluation', desc: 'Compile evidence & risk indicators.' },
              { step: '05', title: 'Categorization', desc: 'Assign transparent result state.' },
              { step: '06', title: 'Explanation', desc: 'Explain reasons in plain English.' },
              { step: '07', title: 'Safer Actions', desc: 'Provide actionable safety guidance.' }
            ].map((st, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-deepNavy/80 border border-neonCyan/20 text-left flex flex-col justify-between hover:border-neonCyan/60 transition-all"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-neonCyan block mb-1">
                    STEP {st.step}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                    {st.title}
                  </h4>
                  <p className="text-[11px] text-gray-300 leading-tight">
                    {st.desc}
                  </p>
                </div>
                {i < 6 && (
                  <div className="hidden md:flex justify-end pt-2 text-neonCyan/50">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Transparent Result Categories */}
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold font-display text-white">
              Official Result Classifications & Honest Nuance
            </h3>
            <span className="text-xs font-mono text-cyberGold">
              • Academic Truth in Cybersecurity
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {RESULT_LABELS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-panel border border-gray-800 hover:border-neonCyan/30 transition-all space-y-3"
              >
                <div className={`p-2 rounded-xl border text-xs font-mono font-bold tracking-tight text-center ${item.color}`}>
                  {item.label}
                </div>
                <p className="text-xs text-gray-200 font-medium">
                  {item.description}
                </p>
                <div className="p-3 rounded-xl bg-blackNavy/80 border border-gray-800 text-[11px] text-gray-400 font-sans leading-relaxed">
                  <span className="text-cyberGold font-mono block text-[10px] uppercase font-bold mb-0.5">
                    Academic Nuance:
                  </span>
                  {item.nuance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
