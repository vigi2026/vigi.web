import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileCode,
  Layout,
  Type,
  Square,
  Volume2,
  Sparkles,
  Info
} from 'lucide-react';
import { XML_LAYOUT_CODE, XML_EXPLANATIONS } from '../data/codeExamples';

interface XmlCodeExampleProps {
  onSpeak: (text: string) => void;
}

export function XmlCodeExample({ onSpeak }: XmlCodeExampleProps) {
  const [selectedElement, setSelectedElement] = useState<string>('LinearLayout');

  const handleExplainXml = () => {
    onSpeak(
      "The activity_main.xml layout defines a root vertical LinearLayout with 24 density-independent pixels of padding. Inside, it places a bold TextView sized at 22 scalable pixels with ID messageText, followed by a Button with ID demoButton spanning match_parent width."
    );
  };

  const handleSelectElement = (element: string, explanation: string) => {
    setSelectedElement(element);
    onSpeak(`${element}: ${explanation}`);
  };

  return (
    <section id="xml-layout" className="py-20 px-4 sm:px-6 md:px-8 relative bg-blackNavy/60 border-t border-b border-neonCyan/10 text-left">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyberGold/30 text-xs font-mono text-cyberGold">
            <span>SECTION 14 • ANDROID DECLARATIVE UI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Interactive XML Layout Example
          </h2>
          <p className="text-base text-gray-300 font-sans">
            Declarative layout specification configuring visual widget boundaries, accessibility text dimensions, and resource IDs.
          </p>

          <button
            onClick={handleExplainXml}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-deepNavy border border-cyberGold/40 text-cyberGold hover:bg-cyberGold/15 transition-all cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>NARRATE XML LAYOUT STRUCTURE</span>
          </button>
        </div>

        {/* XML Editor Container & Explanation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* XML Editor Box (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl glass-panel-glow border border-cyberGold/30 overflow-hidden shadow-2xl">
            {/* Title Bar */}
            <div className="px-5 py-3.5 bg-blackNavy/90 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-xs font-mono text-gray-300 ml-2 flex items-center gap-1.5">
                  <FileCode className="w-3.5 h-3.5 text-cyberGold" />
                  res/layout/activity_main.xml
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyberGold/10 text-cyberGold">
                XML 1.0
              </span>
            </div>

            {/* XML Syntax View */}
            <div className="p-5 bg-[#030a16] font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-gray-300">
              <pre>
                <code>
                  &lt;<span className="text-neonCyan font-bold cursor-pointer hover:underline" onClick={() => handleSelectElement('LinearLayout', XML_EXPLANATIONS[0].explanation)}>LinearLayout</span>{'\n'}
                  {'    '}<span className="text-cyberGold">xmlns:android</span>=<span className="text-emerald-300">"http://schemas.android.com/apk/res/android"</span>{'\n'}
                  {'    '}<span className="text-cyberGold">android:layout_width</span>=<span className="text-emerald-300">"match_parent"</span>{'\n'}
                  {'    '}<span className="text-cyberGold">android:layout_height</span>=<span className="text-emerald-300">"match_parent"</span>{'\n'}
                  {'    '}<span className="text-cyberGold">android:orientation</span>=<span className="text-emerald-300">"vertical"</span>{'\n'}
                  {'    '}<span className="text-cyberGold cursor-pointer hover:underline" onClick={() => handleSelectElement('android:padding', XML_EXPLANATIONS[4].explanation)}>android:padding</span>=<span className="text-emerald-300">"24dp"</span>&gt;{'\n\n'}

                  {'    '}&lt;<span className="text-cyan-400 font-bold cursor-pointer hover:underline" onClick={() => handleSelectElement('TextView', XML_EXPLANATIONS[1].explanation)}>TextView</span>{'\n'}
                  {'        '}<span className="text-cyberGold cursor-pointer hover:underline" onClick={() => handleSelectElement('android:id', XML_EXPLANATIONS[3].explanation)}>android:id</span>=<span className="text-emerald-300">"@+id/messageText"</span>{'\n'}
                  {'        '}<span className="text-cyberGold">android:layout_width</span>=<span className="text-emerald-300">"match_parent"</span>{'\n'}
                  {'        '}<span className="text-cyberGold">android:layout_height</span>=<span className="text-emerald-300">"wrap_content"</span>{'\n'}
                  {'        '}<span className="text-cyberGold">android:text</span>=<span className="text-emerald-300">"Welcome to VIGI LOCK"</span>{'\n'}
                  {'        '}<span className="text-cyberGold cursor-pointer hover:underline" onClick={() => handleSelectElement('textSize & textStyle', XML_EXPLANATIONS[6].explanation)}>android:textSize</span>=<span className="text-emerald-300">"22sp"</span>{'\n'}
                  {'        '}<span className="text-cyberGold">android:textStyle</span>=<span className="text-emerald-300">"bold"</span> /&gt;{'\n\n'}

                  {'    '}&lt;<span className="text-purple-400 font-bold cursor-pointer hover:underline" onClick={() => handleSelectElement('Button', XML_EXPLANATIONS[2].explanation)}>Button</span>{'\n'}
                  {'        '}<span className="text-cyberGold">android:id</span>=<span className="text-emerald-300">"@+id/demoButton"</span>{'\n'}
                  {'        '}<span className="text-cyberGold">android:layout_width</span>=<span className="text-emerald-300">"match_parent"</span>{'\n'}
                  {'        '}<span className="text-cyberGold">android:layout_height</span>=<span className="text-emerald-300">"wrap_content"</span>{'\n'}
                  {'        '}<span className="text-cyberGold">android:text</span>=<span className="text-emerald-300">"Tap Here"</span> /&gt;{'\n\n'}

                  &lt;/<span className="text-neonCyan font-bold">LinearLayout</span>&gt;
                </code>
              </pre>
            </div>
          </div>

          {/* Right: Interactive Architectural XML Dictionary (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
              SELECT XML PROPERTY TO EXPLAIN:
            </h4>

            <div className="space-y-2.5">
              {XML_EXPLANATIONS.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectElement(item.element, item.explanation)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    selectedElement === item.element
                      ? 'bg-cyberGold/15 border-cyberGold text-white shadow-[0_0_20px_rgba(255,181,46,0.3)]'
                      : 'bg-deepNavy/80 border-gray-800 text-gray-300 hover:border-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs text-cyberGold font-bold">
                      {item.element}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed">
                    {item.explanation}
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
