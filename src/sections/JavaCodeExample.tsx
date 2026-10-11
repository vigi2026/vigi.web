import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  Volume2,
  FileCode,
  CheckCircle2,
  Sparkles,
  Info
} from 'lucide-react';
import { JAVA_MAIN_ACTIVITY_CODE, JAVA_EXPLANATIONS } from '../data/codeExamples';
import { SmartphonePreview } from '../components/SmartphonePreview';

interface JavaCodeExampleProps {
  onSpeak: (text: string) => void;
}

export function JavaCodeExample({ onSpeak }: JavaCodeExampleProps) {
  const [selectedToken, setSelectedToken] = useState<string>('onCreate()');
  const [highlightedPreviewElement, setHighlightedPreviewElement] = useState<'messageText' | 'demoButton' | 'LinearLayout' | null>('demoButton');

  const handleExplainProgram = () => {
    onSpeak(
      "In this educational Android Java example, MainActivity extends Activity. The onCreate method initializes the screen by calling setContentView with activity_main.xml. Next, findViewById retrieves references to the TextView and Button. When the user taps the button, setOnClickListener triggers and updates the message text dynamically."
    );
  };

  const handleExplainToken = (token: string, explanation: string) => {
    setSelectedToken(token);
    if (token.includes('TextView') || token === 'setText()') {
      setHighlightedPreviewElement('messageText');
    } else if (token.includes('Button') || token === 'setOnClickListener()') {
      setHighlightedPreviewElement('demoButton');
    } else {
      setHighlightedPreviewElement('LinearLayout');
    }
    onSpeak(`${token}: ${explanation}`);
  };

  return (
    <section id="programs" className="py-20 px-4 sm:px-6 md:px-8 relative cyber-grid-bg">
      <div className="max-w-7xl mx-auto space-y-12 text-left">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-neonCyan/30 text-xs font-mono text-neonCyan">
            <span>SECTION 13 • EDUCATIONAL JAVA PROGRAM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Interactive Java Code Example
          </h2>
          <p className="text-base text-gray-300 font-sans">
            Inspect the fundamental Android Activity lifecycle, layout inflation, and reactive event listeners with synchronized smartphone preview simulation.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={handleExplainProgram}
              className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-deepNavy border border-neonCyan/40 text-neonCyan hover:bg-neonCyan/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Info className="w-4 h-4" />
              <span>EXPLAIN THIS JAVA PROGRAM</span>
            </button>
            <button
              onClick={handleExplainProgram}
              className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-neonCyan to-electricBlue text-blackNavy hover:shadow-[0_0_15px_rgba(0,245,255,0.5)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
              <span>READ EXPLANATION ALOUD</span>
            </button>
          </div>
        </div>

        {/* 2-Column Layout: Code Editor on Left, Live Smartphone Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Code Editor (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="rounded-3xl glass-panel-glow border border-neonCyan/30 overflow-hidden shadow-2xl">
              {/* Window Title Bar */}
              <div className="px-5 py-3.5 bg-blackNavy/90 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-gray-300 ml-2 flex items-center gap-1.5">
                    <FileCode className="w-3.5 h-3.5 text-neonCyan" />
                    MainActivity.java • Android Studio
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neonCyan/10 text-neonCyan">
                  JAVA 17
                </span>
              </div>

              {/* Code Syntax Area */}
              <div className="p-5 bg-[#030a16] font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-gray-300">
                <pre>
                  <code>
                    <span className="text-purple-400">package</span> com.example.vigilock;{'\n\n'}
                    <span className="text-purple-400">import</span> android.app.Activity;{'\n'}
                    <span className="text-purple-400">import</span> android.os.Bundle;{'\n'}
                    <span className="text-purple-400">import</span> android.widget.Button;{'\n'}
                    <span className="text-purple-400">import</span> android.widget.TextView;{'\n\n'}
                    <span className="text-blue-400">public class</span> <span className="text-cyberGold font-bold">MainActivity</span> <span className="text-blue-400">extends</span> Activity {'{\n\n'}
                    {'    '}<span className="text-gray-500">@Override</span>{'\n'}
                    {'    '}<span className="text-blue-400">protected void</span> <span className="text-emerald-400 font-bold underline decoration-neonCyan cursor-pointer" onClick={() => handleExplainToken('onCreate()', JAVA_EXPLANATIONS[0].explanation)}>onCreate</span>(Bundle savedInstanceState) {'{\n'}
                    {'        '}<span className="text-purple-400">super</span>.<span className="text-emerald-400">onCreate</span>(savedInstanceState);{'\n'}
                    {'        '}<span className="text-emerald-400 underline decoration-neonCyan cursor-pointer" onClick={() => handleExplainToken('setContentView()', JAVA_EXPLANATIONS[1].explanation)}>setContentView</span>(R.layout.activity_main);{'\n\n'}
                    {'        '}TextView message = <span className="text-emerald-400 underline decoration-neonCyan cursor-pointer" onClick={() => handleExplainToken('findViewById()', JAVA_EXPLANATIONS[2].explanation)}>findViewById</span>(R.id.messageText);{'\n'}
                    {'        '}Button button = <span className="text-emerald-400 underline decoration-neonCyan cursor-pointer" onClick={() => handleExplainToken('findViewById()', JAVA_EXPLANATIONS[2].explanation)}>findViewById</span>(R.id.demoButton);{'\n\n'}
                    {'        '}button.<span className="text-cyan-400 underline decoration-neonCyan cursor-pointer" onClick={() => handleExplainToken('setOnClickListener()', JAVA_EXPLANATIONS[3].explanation)}>setOnClickListener</span>(v -&gt;{'\n'}
                    {'            '}message.<span className="text-cyan-400 underline decoration-neonCyan cursor-pointer" onClick={() => handleExplainToken('setText()', JAVA_EXPLANATIONS[4].explanation)}>setText</span>(<span className="text-amber-300">"Welcome to VIGI LOCK!"</span>){'\n'}
                    {'        '});{'\n'}
                    {'    }\n'}
                    {'}'}
                  </code>
                </pre>
              </div>
            </div>

            {/* Clickable Method Explanations Pills */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                Click any key symbol to inspect and listen:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {JAVA_EXPLANATIONS.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleExplainToken(item.token, item.explanation)}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                      selectedToken === item.token
                        ? 'bg-neonCyan/15 border-neonCyan text-white shadow-[0_0_15px_rgba(0,245,255,0.3)]'
                        : 'bg-deepNavy/80 border-gray-800 text-gray-300 hover:border-gray-700'
                    }`}
                  >
                    <span className="font-mono text-xs text-neonCyan font-bold block mb-0.5">
                      {item.token}
                    </span>
                    <span className="text-[11px] text-gray-400 block font-sans">
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Method Details */}
            {selectedToken && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-blackNavy/80 border border-neonCyan/30 text-xs text-gray-300 space-y-1"
              >
                <span className="font-mono text-neonCyan font-bold">
                  {selectedToken} Explanation:
                </span>
                <p>
                  {JAVA_EXPLANATIONS.find(x => x.token === selectedToken)?.explanation}
                </p>
              </motion.div>
            )}
          </div>

          {/* Right: Working Smartphone Preview (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col items-center">
            <div className="text-center w-full">
              <span className="text-xs font-mono text-cyberGold font-bold uppercase tracking-wider block mb-1">
                LIVE SMARTPHONE PREVIEW
              </span>
              <p className="text-xs text-gray-400">
                Tap the button inside the phone screen to see the Java listener execute!
              </p>
            </div>

            <SmartphonePreview
              highlightedElement={highlightedPreviewElement}
              onElementClick={(el) => setHighlightedPreviewElement(el)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
