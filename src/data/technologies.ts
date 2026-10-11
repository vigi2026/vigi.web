import { Technology } from '../types';

export const TECHNOLOGIES: Technology[] = [
  // Android Application Technologies
  {
    id: 'java',
    name: 'Java',
    category: 'Programming Language',
    purpose: 'Core application logic, object-oriented Android architecture, and system integration.',
    exampleUsage: 'public class MainActivity extends Activity { ... } handling activities, services, and listeners.',
    status: 'PROPOSED FOR ANDROID APP',
    platform: 'android',
    iconName: 'Code',
    speechText: 'Java serves as the primary programming language for the proposed Android application logic, handling user interactions, validation routines, and lifecycle management.'
  },
  {
    id: 'xml',
    name: 'XML (Extensible Markup Language)',
    category: 'Markup Language',
    purpose: 'Declaring Android user interface layouts, vector drawables, animation files, and resource values.',
    exampleUsage: '<LinearLayout android:layout_width="match_parent" ...> defining view hierarchies and styling.',
    status: 'PROPOSED FOR ANDROID APP',
    platform: 'android',
    iconName: 'FileCode',
    speechText: 'XML is utilized in Android development to define declarative UI screens, view dimensions, colors, strings, and responsive layouts.'
  },
  {
    id: 'android-studio',
    name: 'Android Studio (Hedgehog / Iguana)',
    category: 'Development Environment (IDE)',
    purpose: 'Official Google IDE for writing, compiling, debugging, profiling, and testing Android applications.',
    exampleUsage: 'Gradle build system, Android Virtual Device (AVD) emulator, and Logcat diagnostic inspection.',
    status: 'PROPOSED FOR ANDROID APP',
    platform: 'android',
    iconName: 'Monitor',
    speechText: 'Android Studio provides the unified development environment, Android SDK tools, layout previewer, and runtime debugger for the project.'
  },
  {
    id: 'room-sqlite',
    name: 'Room Persistence Library & SQLite',
    category: 'Database Technology',
    purpose: 'Robust abstraction layer over SQLite for structured, type-safe local device data storage.',
    exampleUsage: '@Entity data class StudyTask; @Dao interface TaskDao { @Query("SELECT * FROM tasks") ... }',
    status: 'PROPOSED FOR ANDROID APP',
    platform: 'android',
    iconName: 'Database',
    speechText: 'Room and SQLite provide on-device persistent storage for timetable schedules, user reminders, and scan history with compile-time SQL verification.'
  },
  {
    id: 'android-sdk',
    name: 'Android SDK & AndroidX Jetpack',
    category: 'Framework & Libraries',
    purpose: 'Core mobile operating system APIs, backward-compatible components, and lifecycle architecture.',
    exampleUsage: 'androidx.appcompat.app.AppCompatActivity and LifecycleObserver for robust state preservation.',
    status: 'PROPOSED FOR ANDROID APP',
    platform: 'android',
    iconName: 'Boxes',
    speechText: 'Android SDK and AndroidX provide modern Jetpack architecture components ensuring stable execution across different Android OS versions.'
  },
  {
    id: 'material-components',
    name: 'Material Design Components (MDC)',
    category: 'UI / UX Library',
    purpose: 'Delivering modern, accessible, and intuitive UI components adhering to Google Material Design guidelines.',
    exampleUsage: 'com.google.android.material.card.MaterialCardView, TextInputLayout, and FloatingActionButton.',
    status: 'PROPOSED FOR ANDROID APP',
    platform: 'android',
    iconName: 'LayoutGrid',
    speechText: 'Material Components provide elevated cards, responsive form fields, smooth ripples, and accessible themes conforming to modern Android standards.'
  },
  {
    id: 'speech-apis',
    name: 'SpeechRecognizer & TextToSpeech',
    category: 'Android System Voice APIs',
    purpose: 'Native speech-to-text recognition for spoken commands and text-to-speech voice synthesis for reminders.',
    exampleUsage: 'android.speech.tts.TextToSpeech.speak(message, TextToSpeech.QUEUE_FLUSH, null, utteranceId)',
    status: 'PROPOSED FOR ANDROID APP',
    platform: 'android',
    iconName: 'Mic',
    speechText: 'Android SpeechRecognizer and TextToSpeech enable bidirectional hands-free interaction, allowing the app to understand voice requests and vocalize study alerts.'
  },
  {
    id: 'alarm-work-manager',
    name: 'AlarmManager & WorkManager',
    category: 'Job Scheduling & Background Work',
    purpose: 'Precise time-based alarm triggering and deferrable, guaranteed background work execution.',
    exampleUsage: 'AlarmManager.setExactAndAllowWhileIdle() for alarms, and PeriodicWorkRequest for periodic tasks.',
    status: 'PROPOSED FOR ANDROID APP',
    platform: 'android',
    iconName: 'Clock',
    speechText: 'AlarmManager triggers exact time-critical study reminders, while WorkManager coordinates deferrable background data cleanup even if the app process terminates.'
  },
  {
    id: 'notification-manager',
    name: 'NotificationManager & Channels',
    category: 'System Service API',
    purpose: 'Displaying actionable notification alerts in the Android system shade with customized priority and channels.',
    exampleUsage: 'NotificationManagerCompat.from(context).notify(NOTIFICATION_ID, builder.build())',
    status: 'PROPOSED FOR ANDROID APP',
    platform: 'android',
    iconName: 'BellRing',
    speechText: 'NotificationManager posts rich alerts into the Android status bar, categorizing study reminders and security alerts into distinct notification channels.'
  },
  {
    id: 'rest-json',
    name: 'REST API & JSON Parsing',
    category: 'Data Communication',
    purpose: 'Standardized communication format for exchanging structured data with external security intelligence endpoints.',
    exampleUsage: 'Retrofit / HttpURLConnection sending JSON payloads with OkHttp interceptors.',
    status: 'OPTIONAL INTEGRATION',
    platform: 'android',
    iconName: 'Cpu',
    speechText: 'REST APIs and JSON format enable optional integration with external threat intelligence databases if network lookup capability is configured.'
  },
  {
    id: 'https-protocol',
    name: 'HTTPS & TLS Security Protocols',
    category: 'Communication Protocol',
    purpose: 'Securing all client-server data communications in transit through encrypted cryptographic sessions.',
    exampleUsage: 'Network Security Config enforcing cleartextTrafficPermitted="false" on Android 9+.',
    status: 'PROPOSED FOR ANDROID APP',
    platform: 'both',
    iconName: 'ShieldCheck',
    speechText: 'HTTPS encrypts data in transit using TLS. VIGI emphasizes that HTTPS protects transport encryption but does not automatically certify that an unfamiliar site is benign.'
  },
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'Version Control & Code Repository',
    purpose: 'Version control, atomic commit histories, branching workflows, and collaborative team backup.',
    exampleUsage: 'Feature branches, pull request code reviews, and remote GitHub repository hosting.',
    status: 'USED IN WEBSITE',
    platform: 'both',
    iconName: 'GitBranch',
    speechText: 'Git and GitHub provide distributed revision tracking, allowing the student project team to coordinate updates and safeguard source code history.'
  },

  // Website Presentation Technologies
  {
    id: 'react',
    name: 'React 18',
    category: 'Frontend Library',
    purpose: 'Component-driven interactive web architecture and reactive state synchronization.',
    exampleUsage: 'Reusable functional components, hooks, and virtual DOM rendering.',
    status: 'USED IN WEBSITE',
    platform: 'website',
    iconName: 'Layers',
    speechText: 'React powers the interactive presentation website with modular components, smooth state updates, and synchronized controls.'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Programming Language',
    purpose: 'Strong static type checking, interface contracts, and prevention of runtime bugs.',
    exampleUsage: 'Explicit type interfaces for project data, tour steps, scan results, and student tasks.',
    status: 'USED IN WEBSITE',
    platform: 'website',
    iconName: 'FileCheck',
    speechText: 'TypeScript provides compile-time safety and self-documenting data structures across the presentation website codebase.'
  },
  {
    id: 'vite',
    name: 'Vite Build Engine',
    category: 'Web Tooling & Bundler',
    purpose: 'Blazing fast Hot Module Replacement (HMR) and optimized ES module production bundling.',
    exampleUsage: 'Instant local development server and optimized Rollup asset chunking.',
    status: 'USED IN WEBSITE',
    platform: 'website',
    iconName: 'Zap',
    speechText: 'Vite delivers lightning-fast development build performance and optimal modern production bundles.'
  },
  {
    id: 'threejs',
    name: 'Three.js',
    category: '3D Graphics Engine',
    purpose: 'WebGL-based rendering of 3D cybernetic shields, holographic particles, lighting, and camera animations.',
    exampleUsage: 'PerspectiveCamera, DirectionalLight, PointLight, MeshStandardMaterial, and particle geometries.',
    status: 'USED IN WEBSITE',
    platform: 'website',
    iconName: 'Box',
    speechText: 'Three.js renders the futuristic 3D cybersecurity shield, digital padlock, and floating particle fields directly inside the browser canvas.'
  },
  {
    id: 'react-three-fiber',
    name: 'React Three Fiber (R3F) & Drei',
    category: '3D Component Abstraction',
    purpose: 'Declarative 3D scene construction combining React state with Three.js rendering pipelines.',
    exampleUsage: '<Canvas><ambientLight /><ShieldMesh /></Canvas> with Drei OrbitControls and Float effects.',
    status: 'USED IN WEBSITE',
    platform: 'website',
    iconName: 'Boxes',
    speechText: 'React Three Fiber and Drei allow declarative, reactive 3D scene construction seamlessly connected with UI interactions.'
  },
  {
    id: 'tailwind-css',
    name: 'Tailwind CSS',
    category: 'Styling Framework',
    purpose: 'High-performance utility-first styling, glassmorphism filters, and tailored cyber color palettes.',
    exampleUsage: 'Custom color tokens (#00A8FF, #00F5FF, #FFB52E, #041020) and backdrop-blur utilities.',
    status: 'USED IN WEBSITE',
    platform: 'website',
    iconName: 'Palette',
    speechText: 'Tailwind CSS crafts the futuristic neon-on-navy aesthetic with precise glassmorphism panels and responsive breakpoints.'
  },
  {
    id: 'framer-motion',
    name: 'Motion for React (Framer Motion)',
    category: 'Animation Library',
    purpose: 'Fluid physics-based transitions, scroll triggers, layout animations, and modal reveals.',
    exampleUsage: '<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} />',
    status: 'USED IN WEBSITE',
    platform: 'website',
    iconName: 'Activity',
    speechText: 'Motion for React powers cinematic entry reveals, smooth card transitions, and animated presentation progress.'
  },
  {
    id: 'web-speech-api',
    name: 'Web Speech API (SpeechSynthesis & SpeechRecognition)',
    category: 'Browser Voice APIs',
    purpose: 'Browser-native text-to-speech for virtual presenter VIGI and voice recognition for interactive commands.',
    exampleUsage: 'window.speechSynthesis.speak(utterance) and webkitSpeechRecognition for voice input.',
    status: 'USED IN WEBSITE',
    platform: 'website',
    iconName: 'Volume2',
    speechText: 'The Web Speech API powers VIGI’s spoken narrations in the browser without requiring external heavy audio libraries.'
  }
];
