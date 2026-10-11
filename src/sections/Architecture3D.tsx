import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Cpu,
  Database,
  Smartphone,
  Cloud,
  Volume2,
  CheckCircle2,
  ArrowDown,
  Info,
  Sparkles
} from 'lucide-react';
import { ARCHITECTURE_LAYERS } from '../data/codeExamples';

interface Architecture3DProps {
  onSpeak: (text: string) => void;
}

export function Architecture3D({ onSpeak }: Architecture3DProps) {
  const [activeLayerId, setActiveLayerId] = useState<number>(1);

  const selectedLayer = ARCHITECTURE_LAYERS.find(l => l.id === activeLayerId) || ARCHITECTURE_LAYERS[0];

  const handleSelectLayer = (layer: typeof ARCHITECTURE_LAYERS[0]) => {
    setActiveLayerId(layer.id);
    onSpeak(layer.speech);
  };

  const handleExplainAllLayers = () => {
    onSpeak(
      "The VIGI LOCK system is structured into five distinct architectural layers: Layer 1 is the User Interface; Layer 2 is the Application Logic; Layer 3 is on-device Room Storage; Layer 4 coordinates native Android System Services; and Layer 5 specifies optional external Threat Intelligence endpoints."
    );
  };

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 md:px-8 relative cyber-grid-bg text-left">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-neonCyan/30 text-xs font-mono text-neonCyan">
            <span>SECTION 17 • MODULAR 5-LAYER STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Interactive System Architecture
          </h2>
          <p className="text-base text-gray-300 font-sans">
            A cohesive 5-tier architecture establishing clear separation of concerns between presentation, business rules, local persistence, and system daemons.
          </p>

          <button
            onClick={handleExplainAllLayers}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-deepNavy border border-neonCyan/30 text-neonCyan hover:bg-neonCyan/15 transition-all cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>NARRATE COMPLETE ARCHITECTURE</span>
          </button>
        </div>

        {/* Layer Selection & Dynamic Layer Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Stack of 5 Interactive Layer Panels (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
              CLICK ANY ARCHITECTURAL LAYER TO INSPECT:
            </span>

            <div className="space-y-3">
              {ARCHITECTURE_LAYERS.map((layer) => {
                const isSelected = activeLayerId === layer.id;
                const isOptional = layer.id === 5;

                return (
                  <motion.div
                    key={layer.id}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => handleSelectLayer(layer)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? isOptional
                          ? 'bg-amber-950/40 border-cyberGold shadow-[0_0_30px_rgba(255,181,46,0.3)] ring-2 ring-cyberGold/40'
                          : 'bg-deepNavy/95 border-neonCyan shadow-[0_0_30px_rgba(0,245,255,0.3)] ring-2 ring-neonCyan/40'
                        : 'bg-deepNavy/70 border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-xl font-mono text-xs font-bold flex items-center justify-center border ${
                          isSelected
                            ? isOptional ? 'bg-cyberGold text-blackNavy border-cyberGold' : 'bg-neonCyan text-blackNavy border-neonCyan'
                            : 'bg-blackNavy text-gray-400 border-gray-800'
                        }`}>
                          L{layer.id}
                        </span>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold font-display text-white">
                            {layer.name}
                          </h4>
                          <span className="text-[11px] font-mono text-gray-400">
                            {layer.components.length} Core Modules
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {isOptional && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyberGold/20 text-cyberGold border border-cyberGold/40 font-bold">
                            OPTIONAL INTEGRATION
                          </span>
                        )}
                        <span className={`text-xs font-mono ${isSelected ? 'text-neonCyan' : 'text-gray-500'}`}>
                          {isSelected ? '● ACTIVE' : 'Select →'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Active Layer Deep Dive Card (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl glass-panel-glow border border-neonCyan/35 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <span className="text-xs font-mono font-bold text-neonCyan uppercase">
                LAYER SPECIFICATION
              </span>
              <button
                onClick={() => onSpeak(selectedLayer.speech)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono bg-deepNavy border border-neonCyan/40 text-neonCyan hover:bg-neonCyan/20 cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>LISTEN</span>
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold font-display text-white">
                {selectedLayer.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                {selectedLayer.description}
              </p>
            </div>

            {/* Subcomponents List */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono font-bold text-cyberGold uppercase block">
                Subcomponents & Services:
              </span>
              <div className="space-y-1.5">
                {selectedLayer.components.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-blackNavy/80 border border-gray-800 text-xs text-gray-200 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-neonCyan flex-shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Associated Technologies */}
            <div className="pt-2">
              <span className="text-xs font-mono font-bold text-gray-400 uppercase block mb-1.5">
                Associated Technologies:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedLayer.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-deepNavy border border-neonCyan/25 text-neonCyan"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
