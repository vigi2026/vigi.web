import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Volume2,
  Mic,
  Cpu,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Info
} from 'lucide-react';
import { JAVA_TTS_CODE } from '../data/codeExamples';

interface TextToSpeechCodeExampleProps {
  onSpeak: (text: string) => void;
}

export function TextToSpeechCodeExample({ onSpeak }: TextToSpeechCodeExampleProps) {
  const SAMPLE_REMINDER = "VIGI LOCK reminder: It is time to study Java.";

  const handleDemonstrateVoice = () => {
    onSpeak(SAMPLE_REMINDER);
  };

  const handleExplainTts = () => {
    onSpeak(
      "The Android TextToSpeech engine requires four essential steps: importing the TextToSpeech package, passing an OnInitListener callback to confirm successful initialization, checking language availability, and executing speak with QUEUE_FLUSH. When the Activity finishes, shutdown must be called to release audio resources."
    );
  };

  return (
    <section id="tts-code" className="py-20 px-4 sm:px-6 md:px-8 relative bg-blackNavy/60 border-t border-b border-neonCyan/10 text-left">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-neonCyan/30 text-xs font-mono text-neonCyan">
            <span>SECTION 16 • ANDROID AUDIO SYNTHESIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Android Text-To-Speech Implementation
          </h2>
          <p className="text-base text-gray-300 font-sans">
            Educational walkthrough of Android's native text-to-speech engine lifecycle, locale configuration, and spoken reminder synthesis.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={handleDemonstrateVoice}
              className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-neonCyan to-electricBlue text-blackNavy hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Volume2 className="w-4 h-4 text-blackNavy" />
              <span>DEMONSTRATE WEBSITE VOICE</span>
            </button>
            <button
              onClick={handleExplainTts}
              className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-deepNavy border border-neonCyan/40 text-neonCyan hover:bg-neonCyan/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Info className="w-4 h-4" />
              <span>EXPLAIN TTS LIFECYCLE</span>
            </button>
          </div>
        </div>

        {/* Code & Architectural Stages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Java Code View (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl glass-panel-glow border border-neonCyan/30 overflow-hidden shadow-2xl">
            <div className="px-5 py-3.5 bg-blackNavy/90 border-b border-gray-800 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-300 flex items-center gap-1.5">
                <Code className="w-4 h-4 text-neonCyan" />
                VigiTextToSpeechManager.java
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neonCyan/10 text-neonCyan">
                TEXTTOSPEECH API
              </span>
            </div>

            <div className="p-5 bg-[#030a16] font-mono text-xs leading-relaxed overflow-x-auto text-gray-300 max-h-[460px] overflow-y-auto">
              <pre>
                <code>{JAVA_TTS_CODE}</code>
              </pre>
            </div>
          </div>

          {/* Lifecycle Step Breakdown (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
              LIFECYCLE IMPLEMENTATION PHASES:
            </h4>

            {[
              {
                step: "01",
                title: "Engine Initialization",
                desc: "Invokes new TextToSpeech(context, listener) asynchronously to link with the Android system speech daemon."
              },
              {
                step: "02",
                title: "onInit() Callback Verification",
                desc: "Verifies TextToSpeech.SUCCESS status and checks locale support (Locale.US) before accepting voice synthesis requests."
              },
              {
                step: "03",
                title: "Utterance Queuing (QUEUE_FLUSH)",
                desc: "Calls speak() with QUEUE_FLUSH to immediately interrupt background silence and vocalize time-sensitive study reminders."
              },
              {
                step: "04",
                title: "Resource Teardown in onDestroy()",
                desc: "Invokes textToSpeech.shutdown() during Activity cleanup to release audio drivers and avoid memory leaks."
              }
            ].map((phase, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl glass-panel border border-gray-800 hover:border-neonCyan/40 transition-all space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-neonCyan/10 text-neonCyan">
                    STEP {phase.step}
                  </span>
                  <h5 className="text-xs font-bold text-white font-display">
                    {phase.title}
                  </h5>
                </div>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}

            {/* Platform Clarification Notice */}
            <div className="p-3.5 rounded-2xl bg-blackNavy/80 border border-cyberGold/30 text-xs font-mono text-gray-400 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-cyberGold flex-shrink-0 mt-0.5" />
              <p>
                Crucial Viva Distinction: The button above demonstrates speech synthesis inside this web browser using the W3C Web Speech API, whereas the Java code represents the native Android OS implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
