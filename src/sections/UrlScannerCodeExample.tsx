import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Play,
  Terminal,
  ArrowRight,
  ShieldAlert,
  Volume2,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { JAVA_URL_CHECKER_CODE } from '../data/codeExamples';

interface UrlScannerCodeExampleProps {
  onSpeak: (text: string) => void;
}

export function UrlScannerCodeExample({ onSpeak }: UrlScannerCodeExampleProps) {
  const [testInput, setTestInput] = useState<string>("https://security-update-bank.example.test");
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const runSimulation = () => {
    setIsRunning(true);
    setConsoleOutput(["[JVM Runner] Compiling BasicUrlChecker.java..."]);

    setTimeout(() => {
      setConsoleOutput(prev => [...prev, `[Input] Target URL: "${testInput}"`]);
    }, 200);

    setTimeout(() => {
      setConsoleOutput(prev => [...prev, "[Step 1] Attempting URI parse & scheme extraction..."]);
    }, 450);

    setTimeout(() => {
      let isSus = false;
      let msg = "";
      if (testInput.includes("security-update") || testInput.includes("bank") || testInput.includes("verify")) {
        isSus = true;
        msg = "FLAGGED: Matched suspicious keyword in heuristic list.";
      } else {
        msg = "CLEAN: Standard structure, no obvious rule triggered.";
      }

      setConsoleOutput(prev => [
        ...prev,
        `[Step 2] Applying heuristic rule matrix...`,
        `[Result] Status: ${isSus ? 'SUSPICIOUS INDICATOR DETECTED' : 'NO OBVIOUS RULE TRIGGERED'}`,
        `[Diagnostic] ${msg}`,
        `[Execution Complete] Return code 0.`
      ]);
      setIsRunning(false);
    }, 800);
  };

  const handleExplain = () => {
    onSpeak(
      "The BasicUrlChecker Java class takes a URL string, parses it using java.net.URI, verifies the scheme is HTTP or HTTPS, confirms the hostname exists, and checks against a list of common deceptive keywords. This illustrates algorithmic input validation for students."
    );
  };

  return (
    <section id="url-code" className="py-20 px-4 sm:px-6 md:px-8 relative cyber-grid-bg text-left">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-neonCyan/30 text-xs font-mono text-neonCyan">
            <span>SECTION 15 • JAVA LOGIC & FLOWCHART</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Basic URL Checking Algorithm
          </h2>
          <p className="text-base text-gray-300 font-sans">
            Demonstrating step-by-step heuristic verification in native Java code with an educational execution console.
          </p>

          <button
            onClick={handleExplain}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-deepNavy border border-neonCyan/30 text-neonCyan hover:bg-neonCyan/15 transition-all cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>NARRATE URL SCANNER ALGORITHM</span>
          </button>
        </div>

        {/* Visual Flowchart */}
        <div className="p-6 rounded-3xl glass-panel border border-neonCyan/25">
          <h3 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-4">
            ALGORITHMIC EXECUTION PIPELINE
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
            <div className="p-3.5 rounded-2xl bg-blackNavy border border-neonCyan/40 text-neonCyan font-bold w-full sm:w-auto text-center">
              INPUT URL
            </div>
            <ArrowRight className="w-4 h-4 text-neonCyan rotate-90 sm:rotate-0 flex-shrink-0" />
            <div className="p-3.5 rounded-2xl bg-blackNavy border border-electricBlue/40 text-electricBlue font-bold w-full sm:w-auto text-center">
              VALIDATE FORMAT
            </div>
            <ArrowRight className="w-4 h-4 text-electricBlue rotate-90 sm:rotate-0 flex-shrink-0" />
            <div className="p-3.5 rounded-2xl bg-blackNavy border border-cyberGold/40 text-cyberGold font-bold w-full sm:w-auto text-center">
              APPLY BASIC CHECKS
            </div>
            <ArrowRight className="w-4 h-4 text-cyberGold rotate-90 sm:rotate-0 flex-shrink-0" />
            <div className="p-3.5 rounded-2xl bg-blackNavy border border-emerald-500/40 text-emerald-400 font-bold w-full sm:w-auto text-center">
              DISPLAY RESULT
            </div>
          </div>
        </div>

        {/* Code & Interactive JVM Runner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Java Code Area (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl glass-panel-glow border border-neonCyan/30 overflow-hidden shadow-2xl">
            <div className="px-5 py-3.5 bg-blackNavy/90 border-b border-gray-800 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-300 flex items-center gap-1.5">
                <Code className="w-4 h-4 text-neonCyan" />
                BasicUrlChecker.java
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neonCyan/10 text-neonCyan">
                HEURISTIC LOGIC
              </span>
            </div>

            <div className="p-5 bg-[#030a16] font-mono text-xs leading-relaxed overflow-x-auto text-gray-300 max-h-[440px] overflow-y-auto">
              <pre>
                <code>{JAVA_URL_CHECKER_CODE}</code>
              </pre>
            </div>
          </div>

          {/* Terminal Console Runner (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl glass-panel border border-neonCyan/30 p-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-gray-800">
              <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-neonCyan" />
                Sample JVM Execution Console
              </span>
              <span className="text-[10px] font-mono text-emerald-400">READY</span>
            </div>

            {/* Test Input */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-gray-400">DEMO TEST INPUT:</label>
              <input
                type="text"
                value={testInput}
                onChange={(e) => setTestInput(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-blackNavy border border-gray-700 text-xs font-mono text-white focus:border-neonCyan outline-none"
              />
            </div>

            {/* Run Button */}
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className="w-full py-2.5 px-4 rounded-xl font-bold font-mono text-xs bg-gradient-to-r from-neonCyan to-electricBlue text-blackNavy hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isRunning ? 'EXECUTING IN JVM...' : 'RUN SAMPLE PROGRAM'}</span>
            </button>

            {/* Console Log Area */}
            <div className="p-3.5 rounded-2xl bg-blackNavy/90 border border-gray-800 font-mono text-[11px] text-gray-300 min-h-[170px] space-y-1 overflow-y-auto">
              {consoleOutput.length === 0 ? (
                <span className="text-gray-500 italic block">
                  Click [RUN SAMPLE PROGRAM] to simulate bytecode execution...
                </span>
              ) : (
                consoleOutput.map((line, i) => (
                  <p key={i} className={line.includes('FLAGGED') ? 'text-amber-400' : line.includes('Result') ? 'text-neonCyan font-bold' : ''}>
                    {line}
                  </p>
                ))
              )}
            </div>

            <p className="text-[11px] text-gray-400 italic font-sans pt-1">
              Note: This sample is an educational heuristic demonstration. It is not an enterprise threat-intelligence lookup service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
