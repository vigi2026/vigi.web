import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertOctagon,
  Lock,
  Unlock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Volume2,
  Sparkles,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

interface PhishingAwarenessProps {
  onSpeak: (text: string) => void;
}

export function PhishingAwareness({ onSpeak }: PhishingAwarenessProps) {
  // Mini quiz state for "Spot the Warning Signs" activity
  const [selectedSigns, setSelectedSigns] = useState<Record<string, boolean>>({});
  const [hasEvaluated, setHasEvaluated] = useState<boolean>(false);

  const WARNING_SIGNS = [
    {
      id: 'urgency',
      label: 'Artificial Urgency ("Blocked Today")',
      isCorrect: true,
      explanation: 'Scammers create panic so victims click impulsively before thinking critically.'
    },
    {
      id: 'threat',
      label: 'Threats Involving Account Closure',
      isCorrect: true,
      explanation: 'Coercive language threatens dire consequences to bypass rational skepticism.'
    },
    {
      id: 'unfamiliar_domain',
      label: 'Unfamiliar / Lookalike Domain Link',
      isCorrect: true,
      explanation: 'Links pointing outside official organizational domains often host deceptive spoofed pages.'
    },
    {
      id: 'otp_request',
      label: 'Prompts to Submit Password or OTP',
      isCorrect: true,
      explanation: 'Legitimate institutions never request OTPs or passwords over SMS links.'
    },
    {
      id: 'proper_punctuation',
      label: 'Presence of standard punctuation marks',
      isCorrect: false,
      explanation: 'Standard punctuation is normal grammar and not by itself an indicator of malicious fraud.'
    }
  ];

  const handleToggleSign = (id: string) => {
    setSelectedSigns(prev => ({ ...prev, [id]: !prev[id] }));
    setHasEvaluated(false);
  };

  const handleEvaluateSigns = () => {
    setHasEvaluated(true);
    const score = Object.entries(selectedSigns).filter(
      ([id, checked]) => checked && WARNING_SIGNS.find(s => s.id === id)?.isCorrect
    ).length;

    onSpeak(
      `You selected warning signs. In this phishing lure, the key warning signs are artificial urgency claiming account block, threats of service closure, unfamiliar domain links, and attempts to harvest credentials or OTPs. Remember, HTTPS encrypts traffic in transit, but does not prove a site is authentic.`
    );
  };

  return (
    <section id="phishing" className="py-20 px-4 sm:px-6 md:px-8 relative cyber-grid-bg">
      <div className="max-w-6xl mx-auto space-y-12 text-left">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-neonCyan/30 text-xs font-mono text-neonCyan">
            <span>SECTION 07 • SOCIAL ENGINEERING DEFENSE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Phishing Awareness & Analysis
          </h2>
          <p className="text-base text-gray-300 font-sans">
            Learn to dissect deceptive lures, spot suspicious patterns, and understand the crucial distinction between transport encryption and authentic legitimacy.
          </p>
        </div>

        {/* Fictional Message Anatomy Breakdown */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-red-500/30 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
              <AlertOctagon className="w-5 h-5 text-red-400" />
              <span>Anatomy of a Phishing Message (Fictional Example)</span>
            </h3>
            <span className="text-xs font-mono text-red-400 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/30">
              SIMULATED THREAT
            </span>
          </div>

          {/* Interactive Message Viewer */}
          <div className="p-5 sm:p-6 rounded-2xl bg-blackNavy/90 border border-gray-800 space-y-3 font-sans">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400 pb-2 border-b border-gray-800">
              <span>FROM: Unknown (+91 98XXX-XXXXX)</span>
              <span>•</span>
              <span className="text-red-400 font-bold">Unsolicited SMS</span>
            </div>

            <div className="p-4 rounded-xl bg-deepNavy border border-red-900/40 text-sm sm:text-base text-gray-100 leading-relaxed">
              "<span className="bg-red-500/30 text-red-200 px-1 py-0.5 rounded border border-red-500/50 font-semibold" title="Urgency & Closure threat">
                Your account will be blocked today.
              </span>{' '}
              Click this{' '}
              <span className="bg-amber-500/30 text-amber-200 px-1 py-0.5 rounded border border-amber-500/50 font-mono text-xs" title="Unfamiliar link spoof">
                http://verify-portal-update.example.test
              </span>{' '}
              immediately to confirm your identity and prevent permanent suspension."
            </div>

            {/* Explanatory Annotations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-blackNavy border border-gray-800 text-xs space-y-1">
                <span className="text-red-400 font-mono font-bold block text-[11px]">1. Artificial Urgency</span>
                <p className="text-gray-300">Creates panic ("blocked today") preventing the victim from verifying independently.</p>
              </div>
              <div className="p-3 rounded-xl bg-blackNavy border border-gray-800 text-xs space-y-1">
                <span className="text-amber-400 font-mono font-bold block text-[11px]">2. Deceptive Domain</span>
                <p className="text-gray-300">Uses words like "verify-portal" but does not belong to any recognized institution.</p>
              </div>
              <div className="p-3 rounded-xl bg-blackNavy border border-gray-800 text-xs space-y-1">
                <span className="text-neonCyan font-mono font-bold block text-[11px]">3. Credential Harvesting</span>
                <p className="text-gray-300">Landing pages entice users to input banking passwords, college logins, or OTPs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* HTTP vs HTTPS Visual Breakdown (Crucial Nuance) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 rounded-3xl glass-panel border border-neonCyan/30 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                <Lock className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-display">
                  Understanding HTTPS (TLS Transport Security)
                </h4>
                <p className="text-xs text-neonCyan font-mono">Encryption in Transit</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              HTTPS encrypts communication between your browser and the remote server so eavesdroppers on public Wi-Fi cannot read data in transit.
            </p>

            <div className="p-3.5 rounded-xl bg-blackNavy/80 border border-cyberGold/30 text-xs text-cyberGold font-sans space-y-1">
              <strong className="block font-mono uppercase text-[11px]">Critical Cybersecurity Principle:</strong>
              <p className="text-gray-300">
                A green padlock or HTTPS scheme <strong>does NOT prove</strong> that a website is legitimate! Anyone, including a scammer, can obtain a free SSL certificate for a fake website.
              </p>
            </div>
          </div>

          {/* Activity: Spot the Warning Signs */}
          <div className="p-6 rounded-3xl glass-panel border border-cyberGold/30 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyberGold/20 border border-cyberGold/40 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-cyberGold" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-display">
                    Activity: Spot the Warning Signs
                  </h4>
                  <p className="text-xs text-cyberGold font-mono">Interactive Knowledge Check</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyberGold/15 text-cyberGold">
                QUIZ
              </span>
            </div>

            <p className="text-xs text-gray-300">
              Select which elements below represent genuine red flags of phishing:
            </p>

            <div className="space-y-2">
              {WARNING_SIGNS.map((sign) => {
                const isChecked = !!selectedSigns[sign.id];
                return (
                  <div
                    key={sign.id}
                    onClick={() => handleToggleSign(sign.id)}
                    className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-center justify-between ${
                      isChecked
                        ? 'bg-neonCyan/20 border-neonCyan text-white'
                        : 'bg-blackNavy/60 border-gray-800 text-gray-300 hover:border-gray-700'
                    }`}
                  >
                    <span>{sign.label}</span>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="w-4 h-4 accent-[#00F5FF] pointer-events-none"
                    />
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={handleEvaluateSigns}
                className="px-5 py-2.5 rounded-xl font-bold text-xs font-mono bg-gradient-to-r from-neonCyan to-cyberGold text-blackNavy hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] cursor-pointer"
              >
                CHECK ANSWERS WITH VIGI
              </button>

              {hasEvaluated && (
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Evaluated!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
