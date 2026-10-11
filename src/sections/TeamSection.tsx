import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Award,
  GraduationCap,
  Building2,
  Edit3,
  Check,
  RotateCcw,
  Volume2
} from 'lucide-react';
import { PROJECT_INFO, TEAM_MEMBERS } from '../data/projectData';

interface TeamSectionProps {
  onSpeak: (text: string) => void;
}

export function TeamSection({ onSpeak }: TeamSectionProps) {
  const [institutionName, setInstitutionName] = useState<string>(() => {
    try {
      return localStorage.getItem('vigi_institution_name') || PROJECT_INFO.institutionDefault;
    } catch {
      return PROJECT_INFO.institutionDefault;
    }
  });

  const [isEditingInstitution, setIsEditingInstitution] = useState(false);
  const [tempInstitution, setTempInstitution] = useState(institutionName);

  const handleSaveInstitution = () => {
    const finalVal = tempInstitution.trim() || PROJECT_INFO.institutionDefault;
    setInstitutionName(finalVal);
    try {
      localStorage.setItem('vigi_institution_name', finalVal);
    } catch (e) {
      console.warn(e);
    }
    setIsEditingInstitution(false);
  };

  const handleSpeakTeam = () => {
    onSpeak(
      `Project Team Members: Vishwanatha B N, Siddarth N, Parvathi M J, and Pruthvi S. Guided by Assistant Professor Jyothi N, Department of Computer Applications, for Bachelor of Computer Applications VI Semester, Academic Year 2026–2027.`
    );
  };

  return (
    <section id="team" className="py-20 px-4 sm:px-6 md:px-8 relative cyber-grid-bg text-left">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-neonCyan/30 text-xs font-mono text-neonCyan">
            <span>SECTION 19 • INVESTIGATION TEAM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Project Investigators & Mentorship
          </h2>
          <p className="text-base text-gray-300 font-sans">
            Final-Year Project Team • Department of Computer Applications • Academic Year 2026–2027
          </p>

          <button
            onClick={handleSpeakTeam}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-deepNavy border border-neonCyan/30 text-neonCyan hover:bg-neonCyan/15 transition-all cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>NARRATE TEAM DETAILS</span>
          </button>
        </div>

        {/* Institution Banner with Inline Edit Support */}
        <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl glass-panel-glow border border-neonCyan/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-electricBlue/20 border border-neonCyan/40 flex items-center justify-center text-neonCyan flex-shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                INSTITUTION / COLLEGE AFFILIATION
              </span>
              {isEditingInstitution ? (
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="text"
                    value={tempInstitution}
                    onChange={(e) => setTempInstitution(e.target.value)}
                    className="px-3 py-1 rounded-lg bg-blackNavy border border-neonCyan text-white text-xs font-mono outline-none"
                    placeholder="Enter Institution Name"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveInstitution}
                    className="p-1 rounded-lg bg-neonCyan text-blackNavy hover:shadow-[0_0_10px_#00F5FF]"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <h4 className="text-sm sm:text-base font-bold text-white font-display">
                  {institutionName}
                </h4>
              )}
            </div>
          </div>

          {!isEditingInstitution && (
            <button
              onClick={() => {
                setTempInstitution(institutionName);
                setIsEditingInstitution(true);
              }}
              className="px-3 py-1.5 rounded-xl text-xs font-mono text-neonCyan bg-deepNavy border border-neonCyan/30 hover:bg-neonCyan/20 flex items-center gap-1.5 cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>EDIT NAME</span>
            </button>
          )}
        </div>

        {/* 4 Holographic Student Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 rounded-3xl glass-panel border border-neonCyan/30 hover:border-neonCyan shadow-lg hover:shadow-[0_0_30px_rgba(0,168,255,0.25)] flex flex-col items-center text-center relative overflow-hidden group transition-all"
            >
              {/* Corner Accent Badge */}
              <div className="absolute top-3 right-3 text-[10px] font-mono text-gray-500">
                0{index + 1}
              </div>

              {/* Holographic Initials Emblem */}
              <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-neonCyan via-holographicPurple to-cyberGold mb-4 shadow-[0_0_20px_rgba(0,245,255,0.3)]">
                <div className="w-full h-full rounded-full bg-deepNavy flex items-center justify-center">
                  <span className="text-xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-cyberGold">
                    {member.initials}
                  </span>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-base font-bold font-display text-white mb-1 group-hover:text-neonCyan transition-colors">
                {member.name}
              </h3>

              {/* Registration Number */}
              <div className="px-3 py-1 rounded-full bg-blackNavy border border-neonCyan/30 text-xs font-mono text-neonCyan my-2">
                {member.regNo}
              </div>

              <span className="text-xs text-gray-400 font-mono mt-1">
                BCA VI Semester
              </span>
            </motion.div>
          ))}
        </div>

        {/* Project Guide Card */}
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl glass-panel-gold border border-cyberGold/40 text-center space-y-4 shadow-[0_0_40px_rgba(255,181,46,0.15)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyberGold/15 border border-cyberGold/30 text-xs font-mono text-cyberGold">
            <Award className="w-4 h-4" />
            <span>PROJECT GUIDE & MENTORSHIP</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              {PROJECT_INFO.guide.name}
            </h3>
            <p className="text-sm text-cyberGold font-mono">
              {PROJECT_INFO.guide.designation}
            </p>
            <p className="text-xs text-gray-300 font-sans">
              {PROJECT_INFO.guide.department}
            </p>
          </div>

          <div className="pt-2 border-t border-gray-800 text-[11px] font-mono text-gray-400">
            Bachelor of Computer Applications (BCA) • VI Semester Project Viva Presentation
          </div>
        </div>
      </div>
    </section>
  );
}
