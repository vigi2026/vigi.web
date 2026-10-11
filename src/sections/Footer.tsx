import React from 'react';
import { Shield, Sparkles, Heart } from 'lucide-react';
import { PROJECT_INFO, TEAM_MEMBERS } from '../data/projectData';
import { VIGI_LOGO } from '../utils/assets';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="py-14 px-4 sm:px-6 md:px-8 border-t border-neonCyan/20 bg-blackNavy relative text-left">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-deepNavy border border-neonCyan/40 p-1 flex items-center justify-center">
                <img
                  src={VIGI_LOGO}
                  alt="VIGI LOCK Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-white font-display">
                  VIGI <span className="text-neonCyan">LOCK</span>
                </h3>
                <p className="text-[11px] text-gray-400 font-mono">
                  Smart Cyber Security and Student Assistant
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400 max-w-md font-sans leading-relaxed">
              Official BCA VI Semester final-year project presentation website developed for academic viva evaluation. Features 3D graphics, interactive heuristics, and personalized AI virtual presenter VIGI.
            </p>

            <div className="text-[11px] font-mono text-neonCyan pt-1">
              BCA VI Semester • Academic Year 2026–2027
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              PROJECT SECTIONS
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400 font-mono">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-neonCyan cursor-pointer">
                  → Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('introduction')} className="hover:text-neonCyan cursor-pointer">
                  → Project Modules
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cybersecurity')} className="hover:text-neonCyan cursor-pointer">
                  → Cybersecurity Engine
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('live-demo')} className="hover:text-neonCyan cursor-pointer">
                  → Interactive URL Demo
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('student-assistant')} className="hover:text-neonCyan cursor-pointer">
                  → Student Timetable
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('architecture')} className="hover:text-neonCyan cursor-pointer">
                  → 5-Layer Architecture
                </button>
              </li>
            </ul>
          </div>

          {/* Team & Guide Info */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-cyberGold uppercase tracking-wider">
              PROJECT CREDITS
            </h4>
            <p className="text-xs text-gray-300 font-sans">
              <strong>Guide:</strong> {PROJECT_INFO.guide.name} ({PROJECT_INFO.guide.designation})
            </p>
            <div className="text-[11px] text-gray-400 font-mono space-y-0.5 pt-1">
              {TEAM_MEMBERS.map((m, i) => (
                <div key={i} className="truncate">
                  {m.name} ({m.regNo})
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-gray-500">
          <p>
            © 2026–2027 VIGI LOCK • Department of Computer Applications. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1 text-gray-400">
            <span>Powered by React, Three.js & Web Speech API</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
