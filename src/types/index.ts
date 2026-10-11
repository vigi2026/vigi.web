export interface TeamMember {
  name: string;
  regNo: string;
  role: string;
  initials: string;
}

export interface Technology {
  id: string;
  name: string;
  category: string;
  purpose: string;
  exampleUsage: string;
  status: 'USED IN WEBSITE' | 'PROPOSED FOR ANDROID APP' | 'OPTIONAL INTEGRATION' | 'IMPLEMENTED IN ANDROID APP';
  platform: 'android' | 'website' | 'both';
  iconName: string;
  speechText: string;
}

export interface TourStep {
  id: number;
  sectionId: string;
  title: string;
  subtitle: string;
  narration: string;
  visualHighlight: string;
}

export interface Objective {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  narration: string;
}

export interface StudentTask {
  id: string;
  title: string;
  time: string;
  subject: string;
  completed: boolean;
  priority: 'High' | 'Medium' | 'Low';
  category: 'Revision' | 'Lecture' | 'Coding' | 'Assignment';
}

export interface ReminderItem {
  id: string;
  subject: string;
  title: string;
  date: string;
  time: string;
  description: string;
  completed: boolean;
}

export type ScanResultCategory = 
  | 'NO WARNING FOUND IN AVAILABLE CHECKS'
  | 'SUSPICIOUS INDICATORS DETECTED'
  | 'KNOWN THREAT REPORTED'
  | 'INCONCLUSIVE'
  | 'CHECK UNAVAILABLE'
  | 'VALID FORMAT — NO OBVIOUS RULE TRIGGERED'
  | 'REVIEW RECOMMENDED'
  | 'INVALID URL FORMAT'
  | 'DEMONSTRATION INCONCLUSIVE';

export interface ScanResult {
  category: ScanResultCategory;
  url: string;
  protocol: string;
  domain: string;
  isSecureProtocol: boolean;
  score: number; // 0 (safe) to 100 (high risk)
  reasons: string[];
  recommendations: string[];
  details: {
    hasMisleadingBrand: boolean;
    hasSuspiciousKeyword: boolean;
    isIpAddress: boolean;
    hasMultipleSubdomains: boolean;
    nonStandardPort: boolean;
  };
}

export interface FileAnalysisResult {
  fileName: string;
  fileType: string;
  sizeBytes: number;
  hash: string;
  status: 'NO KNOWN WARNING FOUND' | 'SUSPICIOUS INDICATORS DETECTED' | 'KNOWN THREAT REPORTED BY AN INTEGRATED SOURCE' | 'UNABLE TO DETERMINE';
  riskScore: 'Low' | 'Medium' | 'High' | 'Indeterminate';
  findings: string[];
  permissionsProposed?: string[];
  recommendation: string;
}
