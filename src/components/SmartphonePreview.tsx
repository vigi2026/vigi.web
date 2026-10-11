import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Battery, Signal, Smartphone, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface SmartphonePreviewProps {
  highlightedElement?: 'messageText' | 'demoButton' | 'LinearLayout' | null;
  onElementClick?: (elementId: 'messageText' | 'demoButton' | 'LinearLayout') => void;
}

export function SmartphonePreview({
  highlightedElement,
  onElementClick
}: SmartphonePreviewProps) {
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [displayText, setDisplayText] = useState<string>("Welcome to VIGI LOCK");

  const handleButtonClick = () => {
    setButtonPressed(true);
    setDisplayText("Welcome to VIGI LOCK!");
    if (onElementClick) {
      onElementClick('demoButton');
    }
  };

  const handleReset = () => {
    setButtonPressed(false);
    setDisplayText("Welcome to VIGI LOCK");
  };

  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[310px] mx-auto select-none">
      {/* Outer Phone Hardware Chasis */}
      <div className="relative rounded-[44px] bg-[#070b14] border-[7px] border-[#1e293b] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,168,255,0.2)] p-3">
        {/* Top Speaker / Camera Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#1e293b] rounded-full z-20 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-[#070b14] mr-2" />
          <div className="w-8 h-1 rounded-full bg-[#334155]" />
        </div>

        {/* Screen Display */}
        <div
          onClick={() => onElementClick && onElementClick('LinearLayout')}
          className={`relative rounded-[32px] bg-[#041020] h-[460px] sm:h-[490px] overflow-hidden flex flex-col justify-between p-5 border transition-all ${
            highlightedElement === 'LinearLayout'
              ? 'border-cyberGold shadow-[0_0_15px_rgba(255,181,46,0.5)] ring-2 ring-cyberGold/50'
              : 'border-neonCyan/20'
          }`}
        >
          {/* Top Status Bar */}
          <div className="flex items-center justify-between text-[11px] font-mono text-gray-300 pt-1 pb-2">
            <span>09:41 AM</span>
            <div className="flex items-center gap-1.5">
              <Signal className="w-3 h-3 text-neonCyan" />
              <Wifi className="w-3 h-3 text-neonCyan" />
              <Battery className="w-3.5 h-3.5 text-cyberGold" />
            </div>
          </div>

          {/* Android App Top App Bar */}
          <div className="py-2.5 px-3 rounded-xl bg-deepNavy/90 border border-neonCyan/30 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2">
              <img
                src="/assets/vigi-lock-logo.png"
                alt="App Icon"
                className="w-5 h-5 object-contain"
              />
              <span className="font-bold text-xs text-white tracking-wide">
                VIGI LOCK Android
              </span>
            </div>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              v1.0-DEMO
            </span>
          </div>

          {/* Central Main Content (Simulating activity_main.xml) */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6 py-6 text-center">
            {/* Shield graphic in app */}
            <div className="w-20 h-20 rounded-2xl p-2 bg-deepNavy border border-neonCyan/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,245,255,0.25)]">
              <img
                src="/assets/vigi-lock-logo.png"
                alt="VIGI LOCK"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Simulated TextView (messageText) */}
            <motion.div
              layout
              onClick={(e) => {
                e.stopPropagation();
                if (onElementClick) onElementClick('messageText');
              }}
              className={`w-full p-3 rounded-xl cursor-pointer transition-all ${
                highlightedElement === 'messageText'
                  ? 'bg-neonCyan/20 border-2 border-neonCyan shadow-[0_0_15px_rgba(0,245,255,0.6)] ring-2 ring-neonCyan/40'
                  : 'bg-blackNavy/60 border border-neonCyan/20 hover:border-neonCyan/40'
              }`}
            >
              <span className="block text-[10px] font-mono text-neonCyan mb-1">
                TextView: @id/messageText
              </span>
              <p className="text-base sm:text-lg font-bold text-white font-display">
                {displayText}
              </p>
              {buttonPressed && (
                <span className="inline-flex items-center gap-1 mt-1 text-[11px] text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3 h-3" />
                  Listener Event Fired!
                </span>
              )}
            </motion.div>

            {/* Simulated Button (demoButton) */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick();
              }}
              className={`w-full py-3 px-4 rounded-xl font-bold text-sm tracking-wide transition-all cursor-pointer ${
                highlightedElement === 'demoButton'
                  ? 'ring-4 ring-cyberGold/70 shadow-[0_0_25px_rgba(255,181,46,0.8)]'
                  : ''
              } ${
                buttonPressed
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-blackNavy shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                  : 'bg-gradient-to-r from-neonCyan to-electricBlue text-blackNavy hover:shadow-[0_0_20px_rgba(0,245,255,0.6)]'
              }`}
            >
              <div className="flex flex-col items-center">
                <span>{buttonPressed ? "Tap Again" : "Tap Here"}</span>
                <span className="text-[9px] font-mono opacity-80">
                  Button: @id/demoButton
                </span>
              </div>
            </motion.button>
          </div>

          {/* Bottom Navigation Simulation */}
          <div className="pt-2 border-t border-gray-800 flex items-center justify-around text-[10px] text-gray-400 font-mono">
            <span className="text-neonCyan font-bold">Home</span>
            <span>Scanner</span>
            <span>Timetable</span>
            <span>Voice</span>
          </div>

          {/* Android Home Bar */}
          <div className="w-24 h-1 bg-gray-600 rounded-full mx-auto mt-2" />
        </div>
      </div>

      {/* Interactive Helper and Reset */}
      <div className="mt-3 flex items-center justify-between text-xs font-mono text-gray-400 px-2">
        <span className="flex items-center gap-1 text-neonCyan">
          <Smartphone className="w-3.5 h-3.5" />
          Interactive Simulator
        </span>
        {buttonPressed && (
          <button
            onClick={handleReset}
            className="text-cyberGold hover:underline cursor-pointer"
          >
            Reset Preview
          </button>
        )}
      </div>
    </div>
  );
}
