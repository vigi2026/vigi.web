import { TourStep } from '../types';

export const PRESENTATION_TOUR_STEPS: TourStep[] = [
  {
    id: 1,
    sectionId: 'home',
    title: '1. Project Introduction',
    subtitle: 'VIGI LOCK — Smart Cyber Security & Student Assistant',
    narration: "Welcome to VIGI LOCK. I am VIGI, your virtual project presenter. VIGI LOCK is a proposed Android application developed for our BCA VI Semester final-year project, Academic Year 2026–2027. It bridges two critical everyday challenges: digital cybersecurity awareness and student academic productivity.",
    visualHighlight: 'hero-card'
  },
  {
    id: 2,
    sectionId: 'problems',
    title: '2. Problem Statement',
    subtitle: 'Dual Vulnerabilities in Modern Student Life',
    narration: "Many smartphone users receive deceptive links and unexpected files without understanding the warning signs. At the same time, college students struggle to organize revision slots and meet assignment deadlines. VIGI LOCK proposes a single, unified companion to address both needs.",
    visualHighlight: 'problem-split'
  },
  {
    id: 3,
    sectionId: 'objectives',
    title: '3. Project Objectives',
    subtitle: 'Ten Clear Academic Milestones',
    narration: "Our ten objectives outline a systematic journey: from developing a modern Android application with Material Design, to inspecting supported links, simplifying security warnings, managing daily study schedules, and protecting user privacy.",
    visualHighlight: 'objectives-grid'
  },
  {
    id: 4,
    sectionId: 'introduction',
    title: '4. Main Application Modules',
    subtitle: 'Cybersecurity Assistant & Student Study Assistant',
    narration: "The application is built around two complementary modules: Module 1, the Cybersecurity Assistant for link and file safety review; and Module 2, the Student Study Assistant for timetable planning, reminders, and progress tracking.",
    visualHighlight: 'modules-container'
  },
  {
    id: 5,
    sectionId: 'cybersecurity',
    title: '5. Cybersecurity Assistant Workflow',
    subtitle: 'Heuristic Review & Transparent Evidence',
    narration: "When a user inputs a URL or selects a file, VIGI LOCK performs structured syntactic and heuristic checks. It categorizes the finding into transparent result states—from No Warning Found in Available Checks to Suspicious Indicators Detected—clearly explaining the underlying reasons.",
    visualHighlight: 'cyber-workflow'
  },
  {
    id: 6,
    sectionId: 'phishing',
    title: '6. Phishing Awareness & Education',
    subtitle: 'Recognizing Digital Red Flags',
    narration: "Phishing remains the most prevalent vector for digital fraud. We educate students on fake urgency, spoofed domains, and credential theft traps. Importantly, we teach that HTTPS encrypts communication in transit, but does not prove a site is legitimate.",
    visualHighlight: 'phishing-panel'
  },
  {
    id: 7,
    sectionId: 'file-safety',
    title: '7. File & APK Safety Inspection',
    subtitle: 'Pre-Execution Verification',
    narration: "Unverified APKs and unexpected attachments can compromise a device. Our proposed inspection workflow analyzes file types, calculates cryptographic SHA-256 hashes, and examines requested Android permissions before installation.",
    visualHighlight: 'file-safety-panel'
  },
  {
    id: 8,
    sectionId: 'student-assistant',
    title: '8. Student Assistant Dashboard',
    subtitle: 'Structured Study Routines & Task Management',
    narration: "The Student Assistant dashboard organizes daily academic commitments. It features an interactive daily timetable, subject tracking, assignment deadlines, and visual completion rings that encourage disciplined study habits.",
    visualHighlight: 'student-dashboard'
  },
  {
    id: 9,
    sectionId: 'reminders',
    title: '9. Study Timetable & Reminders',
    subtitle: 'Reliable Scheduling with AlarmManager & Room',
    narration: "To ensure students never miss an exam or study slot, the proposed Android application employs AlarmManager for exact time triggers, WorkManager for background maintenance, NotificationManager for status alerts, and Room for local database persistence.",
    visualHighlight: 'reminder-form'
  },
  {
    id: 10,
    sectionId: 'voice-assistant',
    title: '10. VIGI Voice Assistant',
    subtitle: 'Hands-Free Spoken Interaction',
    narration: "The voice module enables spoken queries such as asking for timetable slots or requesting security explanations. On Android, this leverages native SpeechRecognizer and TextToSpeech APIs, while this website demonstrates the concept using the browser Web Speech API.",
    visualHighlight: 'voice-assistant-panel'
  },
  {
    id: 11,
    sectionId: 'technologies',
    title: '11. Programming Languages & Tools',
    subtitle: 'Robust Android & Web Toolchains',
    narration: "The proposed Android app leverages Java, XML, Android Studio, Room, and Jetpack libraries. This presentation website is built with React 18, TypeScript, Three.js, Tailwind CSS, and Motion for React. Each technology is strictly categorized by its implementation status.",
    visualHighlight: 'tech-explorer'
  },
  {
    id: 12,
    sectionId: 'java-code',
    title: '12. Interactive Java Code Example',
    subtitle: 'Android Activity Lifecycle & Event Handling',
    narration: "Here we examine an educational Java example of MainActivity.java. It demonstrates the onCreate lifecycle callback, inflating XML layouts with setContentView, binding widgets via findViewById, and handling button tap events to update UI text dynamically.",
    visualHighlight: 'java-editor'
  },
  {
    id: 13,
    sectionId: 'xml-layout',
    title: '13. Interactive XML Layout Example',
    subtitle: 'Declarative View Hierarchy',
    narration: "Complementing the Java logic, the XML layout defines a vertical LinearLayout containing a TextView and an interactive Button. Notice how selecting XML elements highlights the corresponding component inside the simulated smartphone preview.",
    visualHighlight: 'xml-editor'
  },
  {
    id: 14,
    sectionId: 'url-code',
    title: '14. URL Checking Program Logic',
    subtitle: 'Heuristic Validation Algorithm',
    narration: "This sample program illustrates how a URL is parsed into protocol, host, and path components. It checks for valid formatting, tests against misleading brand strings, and outputs a diagnostic risk assessment based on demonstrable educational rules.",
    visualHighlight: 'url-code-panel'
  },
  {
    id: 15,
    sectionId: 'tts-code',
    title: '15. Android Text-To-Speech Implementation',
    subtitle: 'Synthesizing Spoken Audio',
    narration: "Here is the educational implementation of Android TextToSpeech. It illustrates engine initialization, OnInitListener completion handling, language availability verification, utterance queuing, and proper lifecycle cleanup in onDestroy.",
    visualHighlight: 'tts-code-panel'
  },
  {
    id: 16,
    sectionId: 'architecture',
    title: '16. System Architecture Layers',
    subtitle: '5-Layer Modular Architecture',
    narration: "Our system architecture is structured across five clean layers: User Interface, Application Logic, Local Storage with Room, Android System Services, and Optional External Threat APIs. Selecting any layer reveals its functional role and related technologies.",
    visualHighlight: 'architecture-layers'
  },
  {
    id: 17,
    sectionId: 'url-demo',
    title: '17. Interactive Live Demonstration',
    subtitle: 'Test Educational Link Inspection',
    narration: "You can try the educational link checker right now. Type a custom URL or test our sample link: account-security-check.example.test. The engine evaluates protocol security, IP patterns, and suspicious keywords without sending private data to external servers.",
    visualHighlight: 'live-url-demo'
  },
  {
    id: 18,
    sectionId: 'team',
    title: '18. Project Team & Mentorship',
    subtitle: 'BCA VI Semester Student Investigators & Faculty Guide',
    narration: "This project is developed by Vishwanatha B N, Siddarth N, Parvathi M J, and Pruthvi S from the Department of Computer Applications, under the esteemed guidance of Assistant Professor Jyothi N.",
    visualHighlight: 'team-cards'
  },
  {
    id: 19,
    sectionId: 'limitations',
    title: '19. Limitations & Future Enhancements',
    subtitle: 'Honest Academic Evaluation & Roadmap',
    narration: "We maintain clear academic integrity: basic heuristic rules cannot catch all zero-day threats, and Android notifications require appropriate user permissions. In future phases, we plan to integrate reputable threat intelligence feeds, encrypted backups, and multilingual voice models.",
    visualHighlight: 'limitations-panel'
  },
  {
    id: 20,
    sectionId: 'conclusion',
    title: '20. Conclusion & Final Viva Summary',
    subtitle: 'Digital Safety and Study Companion',
    narration: "In conclusion, VIGI LOCK provides an accessible, educational framework for modern students to stay vigilant online while remaining disciplined in their academic journey. Thank you for viewing our BCA final-year project presentation!",
    visualHighlight: 'conclusion-panel'
  }
];
