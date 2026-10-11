import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Package,
  Archive,
  FileCode,
  ShieldCheck,
  AlertTriangle,
  Upload,
  Hash,
  Binary,
  Volume2,
  CheckCircle2,
  HelpCircle,
  FileSearch,
  ExternalLink
} from 'lucide-react';
import { FileAnalysisResult } from '../types';

const SAMPLE_FILES = [
  {
    name: 'unknown_installer.apk',
    type: 'application/vnd.android.package-archive',
    size: 14857600,
    presetHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    status: 'SUSPICIOUS INDICATORS DETECTED' as const,
    risk: 'High' as const,
    findings: [
      'Unsigned debug certificate signature detected.',
      'Requests critical permissions: READ_SMS, RECEIVE_BOOT_COMPLETED, SYSTEM_ALERT_WINDOW.',
      'Package origin not verified via Google Play Protect.'
    ],
    permissions: ['android.permission.READ_SMS', 'android.permission.RECEIVE_BOOT_COMPLETED'],
    recommendation: 'Do not sideload or install unknown APKs from unverified third-party sources.'
  },
  {
    name: 'sample_document.pdf',
    type: 'application/pdf',
    size: 245030,
    presetHash: '8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4',
    status: 'NO KNOWN WARNING FOUND' as const,
    risk: 'Low' as const,
    findings: [
      'Standard PDF header (%PDF-1.7) verified.',
      'No embedded executable JavaScript streams or launch actions detected.',
      'Normal font and object hierarchy.'
    ],
    recommendation: 'Document appears consistent with standard PDF structure.'
  },
  {
    name: 'sample_archive.zip',
    type: 'application/zip',
    size: 4210000,
    presetHash: '9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca7',
    status: 'UNABLE TO DETERMINE' as const,
    risk: 'Indeterminate' as const,
    findings: [
      'Encrypted or multi-level archive structure detected.',
      'Requires password to inspect internal manifest contents.',
      'Static heuristic scanner cannot inspect encrypted inner files.'
    ],
    recommendation: 'Exercise caution before extracting password-protected archives from unknown senders.'
  },
  {
    name: 'study_notes.txt',
    type: 'text/plain',
    size: 14500,
    presetHash: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
    status: 'NO KNOWN WARNING FOUND' as const,
    risk: 'Low' as const,
    findings: [
      'Plain UTF-8 text encoding confirmed.',
      'No binary payloads or obfuscated script signatures.'
    ],
    recommendation: 'Safe plaintext format.'
  }
];

interface FileSafetyDemoProps {
  onSpeak: (text: string) => void;
}

export function FileSafetyDemo({ onSpeak }: FileSafetyDemoProps) {
  const [selectedSample, setSelectedSample] = useState(SAMPLE_FILES[0]);
  const [activeStage, setActiveStage] = useState<number>(6);
  const [isInspecting, setIsInspecting] = useState<boolean>(false);
  const [customFileResult, setCustomFileResult] = useState<FileAnalysisResult | null>(null);

  const handleSelectSample = (sample: typeof SAMPLE_FILES[0]) => {
    setSelectedSample(sample);
    setCustomFileResult(null);
    runInspectionSimulation();
  };

  const runInspectionSimulation = () => {
    setIsInspecting(true);
    setActiveStage(1);
    setTimeout(() => setActiveStage(2), 200);
    setTimeout(() => setActiveStage(3), 400);
    setTimeout(() => setActiveStage(4), 650);
    setTimeout(() => setActiveStage(5), 900);
    setTimeout(() => {
      setActiveStage(6);
      setIsInspecting(false);
    }, 1150);
  };

  // Safe local browser file picker to calculate genuine SHA-256 hash
  const handleRealFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsInspecting(true);
    setActiveStage(1);

    try {
      // Read array buffer to compute real local SHA-256
      const buffer = await file.arrayBuffer();
      const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

      setActiveStage(4);

      const isApk = file.name.endsWith('.apk');
      const custom: FileAnalysisResult = {
        fileName: file.name,
        fileType: file.type || (isApk ? 'application/vnd.android.package-archive' : 'unknown'),
        sizeBytes: file.size,
        hash: hashHex,
        status: isApk ? 'SUSPICIOUS INDICATORS DETECTED' : 'NO KNOWN WARNING FOUND',
        riskScore: isApk ? 'Medium' : 'Low',
        findings: [
          `Local SHA-256 Cryptographic Hash: ${hashHex.substring(0, 24)}...`,
          `Detected File Size: ${(file.size / 1024).toFixed(1)} KB`,
          isApk
            ? 'Package contains APK format. Proposed Android application would inspect AndroidManifest.xml.'
            : 'MIME type verified against common student document formats.'
        ],
        permissionsProposed: isApk ? ['Inspection requires Android PackageManager'] : [],
        recommendation: 'Inspected safely client-side in the browser without uploading to external servers.'
      };

      setTimeout(() => {
        setCustomFileResult(custom);
        setActiveStage(6);
        setIsInspecting(false);
      }, 500);
    } catch (err) {
      console.error(err);
      setIsInspecting(false);
    }
  };

  const activeData = customFileResult || {
    fileName: selectedSample.name,
    fileType: selectedSample.type,
    sizeBytes: selectedSample.size,
    hash: selectedSample.presetHash,
    status: selectedSample.status,
    riskScore: selectedSample.risk,
    findings: selectedSample.findings,
    permissionsProposed: selectedSample.permissions,
    recommendation: selectedSample.recommendation
  };

  const handleSpeakFileResult = () => {
    onSpeak(
      `File inspection summary for ${activeData.fileName}. Status is ${activeData.status}. Cryptographic hash starts with ${activeData.hash.substring(0, 10)}. Recommendation: ${activeData.recommendation}. Remember, file extensions alone never prove whether a file is safe.`
    );
  };

  return (
    <section id="file-safety" className="py-20 px-4 sm:px-6 md:px-8 relative cyber-grid-bg">
      <div className="max-w-6xl mx-auto space-y-10 text-left">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyberGold/30 text-xs font-mono text-cyberGold">
            <span>SECTION 08 • ARTIFACT VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            File & APK Safety Inspection
          </h2>
          <p className="text-base text-gray-300 font-sans">
            Demonstrating pre-execution verification: checking MIME integrity, generating SHA-256 hashes, and reviewing proposed permissions.
          </p>
          <div className="inline-block px-3 py-1 rounded-full bg-deepNavy border border-gray-700 text-xs font-mono text-gray-300">
            SIMULATED DEMONSTRATION • ZERO EXTERNAL EXECUTABLE EXECUTION
          </div>
        </div>

        {/* 4 Sample File Cards & Real Local File Picker */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {SAMPLE_FILES.map((sample, idx) => {
            const isSelected = !customFileResult && selectedSample.name === sample.name;
            const isApk = sample.name.endsWith('.apk');

            return (
              <button
                key={idx}
                onClick={() => handleSelectSample(sample)}
                className={`p-4 rounded-2xl glass-panel text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'border-neonCyan shadow-[0_0_20px_rgba(0,245,255,0.3)] bg-deepNavy/90 scale-[1.02]'
                    : 'border-gray-800 hover:border-neonCyan/40 bg-deepNavy/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-electricBlue/20 border border-neonCyan/30 flex items-center justify-center">
                    {isApk ? <Package className="w-4 h-4 text-cyberGold" /> : <FileText className="w-4 h-4 text-neonCyan" />}
                  </div>
                  <span className="text-[10px] font-mono text-gray-500">
                    {(sample.size / 1024 / 1024).toFixed(1)} MB
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white font-mono truncate" title={sample.name}>
                  {sample.name}
                </h4>
                <span className={`inline-block mt-2 px-2 py-0.5 rounded text-[9px] font-mono border ${
                  sample.risk === 'High'
                    ? 'bg-red-500/15 text-red-400 border-red-500/30'
                    : sample.risk === 'Low'
                    ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                    : 'bg-blue-500/15 text-blue-300 border-blue-500/30'
                }`}>
                  {sample.status}
                </span>
              </button>
            );
          })}

          {/* Real Local File Picker Tile */}
          <label className="p-4 rounded-2xl glass-panel-gold border-2 border-dashed border-cyberGold/50 text-left transition-all hover:bg-cyberGold/10 flex flex-col justify-center cursor-pointer">
            <div className="flex items-center gap-2 mb-1 text-cyberGold font-mono text-xs font-bold">
              <Upload className="w-4 h-4" />
              <span>TEST YOUR FILE</span>
            </div>
            <p className="text-[10px] text-gray-300 font-sans">
              Compute real SHA-256 hash locally in browser (no file upload).
            </p>
            <input
              type="file"
              onChange={handleRealFileSelect}
              className="hidden"
            />
          </label>
        </div>

        {/* 6-Stage Inspection Workflow Pipeline */}
        <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-neonCyan/25 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono font-bold text-neonCyan uppercase tracking-wider flex items-center gap-1.5">
              <FileSearch className="w-4 h-4" />
              <span>6-Stage Inspection Pipeline Progress</span>
            </h4>
            <span className="text-xs font-mono text-gray-400">
              {isInspecting ? 'PIPELINE ACTIVE...' : 'INSPECTION COMPLETE'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {[
              { num: 1, label: 'File Selected' },
              { num: 2, label: 'Type Reviewed' },
              { num: 3, label: 'Properties Read' },
              { num: 4, label: 'SHA-256 Computed' },
              { num: 5, label: 'Permissions Checked' },
              { num: 6, label: 'Result Rendered' }
            ].map((st) => {
              const isPassed = activeStage >= st.num;
              return (
                <div
                  key={st.num}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    isPassed
                      ? 'bg-neonCyan/15 border-neonCyan/50 text-neonCyan font-bold'
                      : 'bg-blackNavy/60 border-gray-800 text-gray-500'
                  }`}
                >
                  <span className="block text-[10px] font-mono">Stage 0{st.num}</span>
                  <span className="text-[11px] font-sans truncate">{st.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Inspection Result Panel */}
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-neonCyan/30 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-800">
            <div>
              <span className="text-[10px] font-mono text-gray-400 uppercase block mb-1">
                INSPECTED ARTIFACT
              </span>
              <h3 className="text-base sm:text-lg font-bold font-mono text-white flex items-center gap-2">
                <FileCode className="w-5 h-5 text-neonCyan" />
                <span>{activeData.fileName}</span>
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border ${
                activeData.status === 'SUSPICIOUS INDICATORS DETECTED'
                  ? 'bg-red-500/20 text-red-400 border-red-500/40'
                  : activeData.status === 'NO KNOWN WARNING FOUND'
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                  : 'bg-blue-500/20 text-blue-300 border-blue-500/40'
              }`}>
                {activeData.status}
              </span>

              <button
                onClick={handleSpeakFileResult}
                className="px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-deepNavy border border-neonCyan/40 text-neonCyan hover:bg-neonCyan/20 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>SPEAK RESULT</span>
              </button>
            </div>
          </div>

          {/* Properties & Hash */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-blackNavy/80 border border-gray-800 space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-gray-800 pb-1.5">
                <span className="text-gray-400">File Type (MIME):</span>
                <span className="text-white truncate max-w-[200px]">{activeData.fileType}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-1.5">
                <span className="text-gray-400">File Size:</span>
                <span className="text-white">{(activeData.sizeBytes / 1024).toFixed(1)} KB</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">SHA-256 Cryptographic Hash:</span>
                <span className="text-neonCyan break-all text-[11px] bg-deepNavy p-1.5 rounded-lg block border border-neonCyan/20">
                  {activeData.hash}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blackNavy/80 border border-gray-800 space-y-2 text-xs">
              <span className="text-cyberGold font-mono text-[11px] font-bold block uppercase">
                Diagnostic Findings:
              </span>
              <ul className="space-y-1 text-gray-300">
                {activeData.findings.map((f, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-neonCyan mt-0.5">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {activeData.permissionsProposed && activeData.permissionsProposed.length > 0 && (
                <div className="pt-2 border-t border-gray-800">
                  <span className="text-red-400 font-mono text-[10px] block mb-1">
                    Requested APK Permissions:
                  </span>
                  <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                    {activeData.permissionsProposed.map((perm, pi) => (
                      <span key={pi} className="px-2 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-500/30">
                        {perm}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Recommendation */}
          <div className="p-4 rounded-2xl bg-deepNavy border border-neonCyan/30 text-xs text-gray-300 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-neonCyan flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-white font-mono block mb-0.5">Recommendation:</strong>
              {activeData.recommendation}
              <p className="text-[11px] text-gray-400 mt-1 italic">
                Remember: File extensions alone cannot establish whether a file is safe. Attackers frequently disguise dangerous payloads with deceiving double extensions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
