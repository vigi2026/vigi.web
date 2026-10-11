import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  RotateCcw,
  ShieldCheck,
  AlertTriangle,
  Info,
  CheckCircle2,
  Volume2,
  Lock,
  Unlock,
  Globe,
  HelpCircle,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { analyzeDemoUrl } from '../utils/urlDemoRules';
import { ScanResult } from '../types';

interface UrlDemonstrationProps {
  onSpeak: (text: string) => void;
}

export function UrlDemonstration({ onSpeak }: UrlDemonstrationProps) {
  const [urlInput, setUrlInput] = useState<string>("https://account-security-check.example.test");
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [scanResult, setScanResult] = useState<ScanResult | null>(() =>
    analyzeDemoUrl("https://account-security-check.example.test")
  );

  const handleValidate = () => {
    if (!urlInput.trim()) return;

    setIsScanning(true);
    setScanProgress(15);

    const step1 = setTimeout(() => setScanProgress(45), 200);
    const step2 = setTimeout(() => setScanProgress(80), 450);
    const step3 = setTimeout(() => {
      setScanProgress(100);
      setScanResult(analyzeDemoUrl(urlInput));
      setIsScanning(false);
    }, 700);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
    };
  };

  const handleClear = () => {
    setUrlInput("");
    setScanResult(null);
  };

  const handleQuickPreset = (presetUrl: string) => {
    setUrlInput(presetUrl);
    setScanResult(analyzeDemoUrl(presetUrl));
  };

  const handleExplainResult = () => {
    if (!scanResult) return;
    const speech = `Scan result for ${scanResult.domain || 'the entered link'}: Classified as ${scanResult.category}. Risk score is ${scanResult.score} out of 100. ${
      scanResult.reasons.length > 0 ? scanResult.reasons[0] : 'No obvious red flags detected.'
    } Recommendations: ${scanResult.recommendations[0] || 'Remain cautious.'}`;
    onSpeak(speech);
  };

  const getResultBadgeColor = (category: ScanResult['category']) => {
    switch (category) {
      case 'VALID FORMAT — NO OBVIOUS RULE TRIGGERED':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      case 'REVIEW RECOMMENDED':
        return 'bg-red-500/20 text-red-400 border-red-500/40';
      case 'SUSPICIOUS INDICATORS DETECTED':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
      case 'INVALID URL FORMAT':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/40';
      default:
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
    }
  };

  return (
    <section id="live-demo" className="py-20 px-4 sm:px-6 md:px-8 relative cyber-grid-bg">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-neonCyan/30 text-xs font-mono text-neonCyan">
            <span>SECTION 06 • EDUCATIONAL LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Interactive URL Inspection Demo
          </h2>
          <p className="text-base text-gray-300 font-sans">
            Test how VIGI LOCK performs client-side heuristic inspection without sending your private browsing data across the web.
          </p>

          <div className="inline-block px-3 py-1 rounded-full bg-cyberGold/15 border border-cyberGold/40 text-xs font-mono text-cyberGold">
            DEMONSTRATION MODE • LOCAL CLIENT-SIDE HEURISTICS ONLY
          </div>
        </div>

        {/* Interactive URL Scanner Card */}
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-9 border border-neonCyan/35 text-left space-y-6 shadow-[0_0_50px_rgba(0,168,255,0.2)]">
          {/* Preset Buttons Bar */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
              Quick Test Presets:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleQuickPreset("https://account-security-check.example.test")}
                className="px-3 py-1.5 rounded-xl text-xs font-mono bg-red-950/40 text-red-300 border border-red-500/40 hover:bg-red-900/40 transition-all cursor-pointer"
              >
                Suspicious Keyword
              </button>
              <button
                onClick={() => handleQuickPreset("http://192.168.1.100:8080/portal/update.apk")}
                className="px-3 py-1.5 rounded-xl text-xs font-mono bg-amber-950/40 text-amber-300 border border-amber-500/40 hover:bg-amber-900/40 transition-all cursor-pointer"
              >
                Naked IP & Port
              </button>
              <button
                onClick={() => handleQuickPreset("https://www.bca-university-portal.edu.in/syllabus")}
                className="px-3 py-1.5 rounded-xl text-xs font-mono bg-emerald-950/40 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900/40 transition-all cursor-pointer"
              >
                Clean Educational URL
              </button>
              <button
                onClick={() => handleQuickPreset("http://login.google.account-security.biz/signin")}
                className="px-3 py-1.5 rounded-xl text-xs font-mono bg-purple-950/40 text-purple-300 border border-purple-500/40 hover:bg-purple-900/40 transition-all cursor-pointer"
              >
                Brand Spoofing
              </button>
            </div>
          </div>

          {/* URL Input Form */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neonCyan" />
              <input
                type="text"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://example.com/login"
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-blackNavy/90 border border-neonCyan/30 focus:border-neonCyan focus:ring-2 focus:ring-neonCyan/30 text-white font-mono text-xs sm:text-sm placeholder:text-gray-600 outline-none transition-all"
                onKeyDown={(e) => e.key === 'Enter' && handleValidate()}
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {/* Validate Button */}
              <button
                onClick={handleValidate}
                disabled={isScanning}
                className="flex-1 sm:flex-none px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm font-mono bg-gradient-to-r from-neonCyan to-electricBlue text-blackNavy hover:shadow-[0_0_20px_rgba(0,245,255,0.6)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Search className="w-4 h-4 text-blackNavy" />
                <span>{isScanning ? 'SCANNING...' : 'VALIDATE URL'}</span>
              </button>

              {/* Clear Button */}
              <button
                onClick={handleClear}
                className="p-3.5 rounded-2xl bg-deepNavy border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-all cursor-pointer"
                title="Clear input"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scanning Progress Bar */}
          {isScanning && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono text-neonCyan">
                <span>PARSING HEURISTIC TOKENS...</span>
                <span>{scanProgress}%</span>
              </div>
              <div className="h-2 w-full bg-blackNavy rounded-full overflow-hidden border border-neonCyan/20">
                <motion.div
                  className="h-full bg-gradient-to-r from-neonCyan via-electricBlue to-cyberGold"
                  animate={{ width: `${scanProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Result Panel */}
          {scanResult && !isScanning && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 sm:p-7 rounded-2xl bg-blackNavy/90 border border-neonCyan/25 space-y-5"
            >
              {/* Result Category Banner */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-800">
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1">
                    RESULT CATEGORY
                  </span>
                  <div className={`inline-block px-3.5 py-1.5 rounded-xl border font-mono font-bold text-xs sm:text-sm ${getResultBadgeColor(scanResult.category)}`}>
                    {scanResult.category}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-gray-400 uppercase block">Risk Score</span>
                    <span className={`text-base sm:text-lg font-mono font-extrabold ${
                      scanResult.score > 35 ? 'text-red-400' : scanResult.score > 0 ? 'text-amber-400' : 'text-emerald-400'
                    }`}>
                      {scanResult.score} / 100
                    </span>
                  </div>

                  <button
                    onClick={handleExplainResult}
                    className="px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-deepNavy border border-neonCyan/40 text-neonCyan hover:bg-neonCyan/20 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-neonCyan" />
                    <span>LET VIGI EXPLAIN</span>
                  </button>
                </div>
              </div>

              {/* Host & Protocol Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-deepNavy/70 border border-gray-800">
                  <span className="text-gray-400 block text-[10px]">HOST / DOMAIN</span>
                  <span className="text-white font-bold break-all">{scanResult.domain || 'N/A'}</span>
                </div>
                <div className="p-3 rounded-xl bg-deepNavy/70 border border-gray-800 flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 block text-[10px]">PROTOCOL</span>
                    <span className="text-white font-bold">{scanResult.protocol.toUpperCase()}</span>
                  </div>
                  {scanResult.isSecureProtocol ? (
                    <Lock className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Unlock className="w-4 h-4 text-amber-400" />
                  )}
                </div>
                <div className="p-3 rounded-xl bg-deepNavy/70 border border-gray-800">
                  <span className="text-gray-400 block text-[10px]">EVALUATION BASIS</span>
                  <span className="text-neonCyan">RFC Parsing & Keywords</span>
                </div>
              </div>

              {/* Exact Detected Indicators */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-gray-300 uppercase flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-cyberGold" />
                  <span>Exact Diagnostic Indicators Triggered:</span>
                </h4>
                <div className="space-y-1.5">
                  {scanResult.reasons.map((reason, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-deepNavy border border-gray-800/80 text-xs text-gray-300 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neonCyan mt-1.5 flex-shrink-0" />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety Recommendations */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono font-bold text-gray-300 uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Educational Safety Recommendations:</span>
                </h4>
                <div className="space-y-1">
                  {scanResult.recommendations.map((rec, idx) => (
                    <p key={idx} className="text-xs text-gray-300 pl-4 border-l-2 border-emerald-500/50">
                      {rec}
                    </p>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-3 rounded-xl bg-deepNavy/50 border border-gray-800 text-[11px] font-mono text-gray-400">
                Notice: These checks are demonstrable educational heuristics. They do not send entered URLs to external servers and do not replace production threat intelligence engines.
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
