import { Objective, TeamMember } from '../types';

export const PROJECT_INFO = {
  name: "VIGI LOCK — SMART CYBER SECURITY AND STUDENT ASSISTANT",
  shortName: "VIGI LOCK",
  tagline: "One intelligent companion for digital awareness and student productivity.",
  type: "Proposed Android Application",
  course: "Bachelor of Computer Applications (BCA)",
  semester: "VI Semester",
  academicYear: "2026–2027",
  department: "Department of Computer Applications",
  guide: {
    name: "JYOTHI N",
    designation: "Assistant Professor",
    department: "Department of Computer Applications"
  },
  institutionDefault: "[INSTITUTION NAME — EDITABLE]",
  welcomeMessage: "Welcome to VIGI LOCK, your digital safety and study companion.",
  welcomeSpeech: "Hello! Welcome to VIGI LOCK. I am VIGI, your virtual project presenter. Today, I will introduce our smart cybersecurity and student assistant project. I will explain how the proposed Android application helps users understand potential digital risks, review suspicious links and supported files, organize study schedules, manage reminders, and explore voice assistance. You can listen to the complete presentation or explore each section at your own pace. Let's begin!"
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "VISHWANATHA B N",
    regNo: "U13BH24S0331",
    role: "Team Member 1",
    initials: "VB"
  },
  {
    name: "SIDDARTH N",
    regNo: "U13BH24S0332",
    role: "Team Member 2",
    initials: "SN"
  },
  {
    name: "PARVATHI M J",
    regNo: "U13BH24S0333",
    role: "Team Member 3",
    initials: "PM"
  },
  {
    name: "PRUTHVI S",
    regNo: "U13BH24S0334",
    role: "Team Member 4",
    initials: "PS"
  }
];

export const OBJECTIVES: Objective[] = [
  {
    id: 1,
    title: "Modern Android Application",
    shortDesc: "Develop an intuitive, native mobile application using modern Android architecture and Material Design.",
    fullDesc: "Create an accessible smartphone platform that seamlessly integrates cybersecurity awareness tools and student productivity features in one unified app.",
    icon: "Smartphone",
    narration: "Objective 1: Develop a modern Android application with a responsive, user-friendly interface tailored for college students."
  },
  {
    id: 2,
    title: "Inspect URLs & Supported Files",
    shortDesc: "Review entered links and selected files for common suspicious patterns and risk indicators.",
    fullDesc: "Implement heuristic validation to check URL format, suspicious keyword patterns, protocol security, and basic file structure.",
    icon: "ShieldAlert",
    narration: "Objective 2: Review supported URLs and files to detect suspicious indicators before opening them."
  },
  {
    id: 3,
    title: "Explain Risks Simply",
    shortDesc: "Translate cryptic security warnings and threat details into plain, actionable English.",
    fullDesc: "Demystify complex cybersecurity concepts so that everyday smartphone users can understand why a link or file is potentially hazardous.",
    icon: "HelpCircle",
    narration: "Objective 3: Explain potential digital risks in simple language without confusing technical jargon."
  },
  {
    id: 4,
    title: "Encourage Safe Habits",
    shortDesc: "Guide users toward safer online browsing, cautious downloading, and secure credential handling.",
    fullDesc: "Provide contextual safety tips, phishing red flag checklists, and safe handling guidelines rather than just raw pass-or-fail alerts.",
    icon: "CheckCircle2",
    narration: "Objective 4: Encourage safe browsing habits and cautious file handling in daily smartphone usage."
  },
  {
    id: 5,
    title: "Daily Study Timetable",
    shortDesc: "Provide structured study schedule creation and customizable daily academic routines.",
    fullDesc: "Enable students to map out subject hours, revision slots, lecture timings, and practical programming practice sessions.",
    icon: "Calendar",
    narration: "Objective 5: Support daily study timetable creation to establish structured learning routines."
  },
  {
    id: 6,
    title: "Timely Study Reminders",
    shortDesc: "Implement reliable scheduled notifications for impending deadlines and study slots.",
    fullDesc: "Utilize Android AlarmManager and WorkManager APIs to trigger prompt reminders even when the application is backgrounded.",
    icon: "Bell",
    narration: "Objective 6: Provide reliable study reminders to prevent missed deadlines and skipped study sessions."
  },
  {
    id: 7,
    title: "Voice Assistance Interaction",
    shortDesc: "Support voice queries and spoken responses for hands-free convenience where implemented.",
    fullDesc: "Leverage speech-to-text recognition and text-to-speech engines to read reminders aloud and answer core safety questions.",
    icon: "Mic",
    narration: "Objective 7: Support voice interaction for hands-free queries, reminder reading, and quick navigation."
  },
  {
    id: 8,
    title: "Track Goals & Progress",
    shortDesc: "Monitor study session completion, revision consistency, and daily academic goals.",
    fullDesc: "Give learners visual feedback on their productivity trends without fabricating unrealistic perfection scores.",
    icon: "TrendingUp",
    narration: "Objective 8: Track study goals and daily task completion with intuitive visual progress meters."
  },
  {
    id: 9,
    title: "Protect User Privacy & Data",
    shortDesc: "Store student timetables and scan preferences securely on the local device using Room.",
    fullDesc: "Prioritize on-device data sovereignty; avoid sending private user browsing history to external servers without explicit consent.",
    icon: "Lock",
    narration: "Objective 9: Protect user data by prioritizing secure local storage and maintaining user privacy."
  },
  {
    id: 10,
    title: "Unified Safety & Productivity",
    shortDesc: "Combine cybersecurity education and student productivity into one cohesive companion.",
    fullDesc: "Solve the dual challenge faced by modern students: staying safe in a hyper-connected digital world while keeping academic schedules on track.",
    icon: "Layers",
    narration: "Objective 10: Harmoniously combine cybersecurity awareness and student productivity in a single Android app."
  }
];

export const CYBER_PROBLEMS = [
  {
    title: "Deceptive Phishing Messages",
    description: "Urgent SMS or WhatsApp messages claiming bank accounts are locked, enticing users to click immediately.",
    example: "SMS: 'Your Bank account will be terminated in 24 hours. Update KYC at http://secure-kyc-verify.test'",
    vigiSolution: "VIGI Link Analyzer flags deceptive urgency keywords and unusual domains."
  },
  {
    title: "Misleading URLs & Spoofed Hostnames",
    description: "Lookalike domains mimicking legitimate educational portals or institutional login pages.",
    example: "Fake: 'http://bca-university-portal.tk/login' instead of official university portal.",
    vigiSolution: "Educational syntax parser highlights protocol risks and domain inconsistencies."
  },
  {
    title: "Unexpected APK Downloads",
    description: "Unofficial third-party Android packages bundled with adware, excessive permissions, or spyware.",
    example: "Downloading 'exam-cheats.apk' from unknown forums requesting SMS and Camera permissions.",
    vigiSolution: "File Safety Analyzer inspects proposed APK permissions and generates SHA-256 hashes."
  },
  {
    title: "Confusing Security Alerts",
    description: "Operating system or browser warnings filled with cryptic codes that confuse non-technical users.",
    example: "'SSL_ERROR_BAD_CERT_DOMAIN' with no practical explanation of what to do next.",
    vigiSolution: "VIGI Presenter translates technical findings into plain, understandable English."
  }
];

export const STUDENT_PROBLEMS = [
  {
    title: "Missed Deadlines & Assignments",
    description: "Students forget assignment submission dates and practical exam lab record deadlines.",
    example: "Remembering a Java lab assignment only 1 hour before submission time.",
    vigiSolution: "Structured deadline manager with high-priority visual flags and advance alerts."
  },
  {
    title: "Unorganized Daily Schedules",
    description: "Scattered notes and haphazard study times leading to last-minute cramming.",
    example: "Studying random topics without allocating balanced time to all semester subjects.",
    vigiSolution: "Daily study timetable organizing revision, college prep, and coding practice."
  },
  {
    title: "Inconsistent Revision Cycles",
    description: "Covering a topic once and forgetting it before semester exams due to lack of spaced review.",
    example: "Studying Computer Networks in week 1 and not revisiting until final week.",
    vigiSolution: "Dedicated revision task scheduler with daily completion checklist."
  },
  {
    title: "Hands-Busy Productivity Friction",
    description: "Difficulty checking timetables while cooking, travelling, or preparing notes.",
    example: "Needing to unlock the phone and browse through apps just to check the next study slot.",
    vigiSolution: "Voice Assistant support to speak aloud: 'Vigi, what is my next study slot?'"
  }
];
