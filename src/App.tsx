import React, { useState, useEffect, useCallback } from 'react';
import { Navbar, NAV_ITEMS } from './components/Navbar';
import { WelcomeModal } from './components/WelcomeModal';
import { PresenterDock } from './components/PresenterDock';
import { ProjectTourModal } from './components/ProjectTourModal';
import { HeroSection } from './sections/HeroSection';
import { Introduction } from './sections/Introduction';
import { ProblemStatement } from './sections/ProblemStatement';
import { Objectives } from './sections/Objectives';
import { SystemOverview } from './sections/SystemOverview';
import { Cybersecurity } from './sections/Cybersecurity';
import { UrlDemonstration } from './sections/UrlDemonstration';
import { PhishingAwareness } from './sections/PhishingAwareness';
import { FileSafetyDemo } from './sections/FileSafetyDemo';
import { StudentDashboard } from './sections/StudentDashboard';
import { StudyTimetable } from './sections/StudyTimetable';
import { VoiceAssistantSection } from './sections/VoiceAssistantSection';
import { TechnologyExplorer } from './sections/TechnologyExplorer';
import { JavaCodeExample } from './sections/JavaCodeExample';
import { XmlCodeExample } from './sections/XmlCodeExample';
import { UrlScannerCodeExample } from './sections/UrlScannerCodeExample';
import { TextToSpeechCodeExample } from './sections/TextToSpeechCodeExample';
import { Architecture3D } from './sections/Architecture3D';
import { Limitations } from './sections/Limitations';
import { TeamSection } from './sections/TeamSection';
import { Conclusion } from './sections/Conclusion';
import { Footer } from './sections/Footer';

import { useSpeech } from './hooks/useSpeech';
import { useProjectTour } from './hooks/useProjectTour';
import { useReducedMotion } from './hooks/useReducedMotion';
import { PROJECT_INFO } from './data/projectData';
import { TourStep } from './types';

export function App() {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState<boolean>(true);
  const [isPresenterDockOpen, setIsPresenterDockOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const {
    isSpeaking,
    isPaused,
    isListening,
    status,
    currentText,
    isMuted,
    isRecognitionSupported,
    speak,
    pause,
    resume,
    stop,
    toggleMute,
    startListening,
    setCurrentText
  } = useSpeech();

  const { isReducedMotion, toggleReducedMotion } = useReducedMotion();

  // Scroll smoothly to section
  const scrollToSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Guided Project Tour callback
  const handleTourStepChange = useCallback((step: TourStep) => {
    setActiveSection(step.sectionId);
    speak(step.narration);
  }, [speak]);

  const {
    isTourActive,
    isTourPaused,
    currentStepIndex,
    currentStep,
    startTour,
    stopTour,
    nextStep,
    prevStep,
    pauseTour,
    resumeTour,
    restartTour,
    goToStep
  } = useProjectTour(handleTourStepChange);

  // Welcome screen enter action
  const handleEnterExperience = (enableVoice: boolean) => {
    setIsWelcomeOpen(false);
    if (enableVoice) {
      if (isMuted) toggleMute();
      speak(PROJECT_INFO.welcomeSpeech);
    } else {
      if (!isMuted) toggleMute();
      setCurrentText(PROJECT_INFO.welcomeSpeech);
    }
  };

  // Scroll spy to update active navbar indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Speech handler for sections
  const handleSectionSpeak = (text: string) => {
    speak(text);
  };

  // Quick prompt select
  const handleSelectTopic = (speechText: string) => {
    speak(speechText);
  };

  // Mic voice command processing
  const handleMicVoiceCommand = () => {
    startListening((recognizedText) => {
      const lower = recognizedText.toLowerCase();
      if (lower.includes('phishing')) {
        scrollToSection('phishing');
        speak("Phishing is an attack where scammers trick users into giving away credentials or clicking malicious links. VIGI LOCK flags suspicious urgency and misleading domains.");
      } else if (lower.includes('timetable') || lower.includes('schedule')) {
        scrollToSection('student-assistant');
        speak("Here is your student timetable. You can review scheduled study blocks, mark assignments done, and track your daily progress.");
      } else if (lower.includes('java')) {
        scrollToSection('programs');
        speak("Java is used for the proposed Android application's backend logic, handling activity lifecycle callbacks and user events.");
      } else if (lower.includes('architecture')) {
        scrollToSection('architecture');
        speak("Our architecture features 5 distinct layers: User Interface, Application Logic, on-device Room Storage, Android Services, and optional External Threat APIs.");
      } else if (lower.includes('tour') || lower.includes('presentation')) {
        startTour(0);
      } else {
        speak(`You said: "${recognizedText}". I am ready to explain any cybersecurity or student assistant feature.`);
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#010611] text-[#F5FAFF] font-sans overflow-x-hidden selection:bg-neonCyan/20 selection:text-neonCyan">
      {/* 1. Cinematic Welcome Modal */}
      <WelcomeModal
        isOpen={isWelcomeOpen}
        onEnter={handleEnterExperience}
      />

      {/* 2. Floating Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        isMuted={isMuted}
        onToggleMute={toggleMute}
        onStartTour={() => {
          startTour(0);
          speak(currentStep?.narration || "Starting guided project tour.");
        }}
        onTogglePresenterDock={() => setIsPresenterDockOpen(!isPresenterDockOpen)}
        isPresenterOpen={isPresenterDockOpen}
        isSpeaking={isSpeaking}
        isReducedMotion={isReducedMotion}
        onToggleReducedMotion={toggleReducedMotion}
      />

      {/* Main Content Sections */}
      <main className="space-y-4">
        {/* Hero Section */}
        <HeroSection
          onExplore={() => scrollToSection('introduction')}
          onStartVoice={() => {
            speak(PROJECT_INFO.welcomeSpeech);
          }}
          onTryLiveDemo={() => scrollToSection('live-demo')}
          onNavigateSection={scrollToSection}
          isReducedMotion={isReducedMotion}
          presenterProps={{
            status,
            isSpeaking,
            isPaused,
            isListening,
            currentText,
            isMuted,
            onPlay: () => speak(currentText || PROJECT_INFO.welcomeSpeech),
            onPause: pause,
            onResume: resume,
            onStop: stop,
            onReplay: () => speak(currentText || PROJECT_INFO.welcomeSpeech),
            onStartTour: () => {
              startTour(0);
              speak(currentStep?.narration || "");
            },
            onStartListening: handleMicVoiceCommand,
            isRecognitionSupported,
            onSelectTopic: handleSelectTopic
          }}
        />

        {/* Section 1: Introduction */}
        <Introduction onSpeak={handleSectionSpeak} />

        {/* Section 2: Problem Statement */}
        <ProblemStatement onSpeak={handleSectionSpeak} />

        {/* Section 3: Objectives */}
        <Objectives onSpeak={handleSectionSpeak} />

        {/* Section 4: System Overview Flowchart */}
        <SystemOverview onSpeak={handleSectionSpeak} />

        {/* Section 5: Cybersecurity Engine & Results */}
        <Cybersecurity onSpeak={handleSectionSpeak} />

        {/* Section 6: Interactive URL Demonstration */}
        <UrlDemonstration onSpeak={handleSectionSpeak} />

        {/* Section 7: Phishing Awareness & Activity */}
        <PhishingAwareness onSpeak={handleSectionSpeak} />

        {/* Section 8: File & APK Safety Inspection */}
        <FileSafetyDemo onSpeak={handleSectionSpeak} />

        {/* Section 9: Student Assistant Dashboard */}
        <StudentDashboard onSpeak={handleSectionSpeak} />

        {/* Section 10: Study Timetable & Reminders */}
        <StudyTimetable onSpeak={handleSectionSpeak} />

        {/* Section 11: VIGI Voice Assistant */}
        <VoiceAssistantSection
          onSpeak={handleSectionSpeak}
          onStartListening={handleMicVoiceCommand}
          isListening={isListening}
          status={status}
          isSpeaking={isSpeaking}
          currentTranscript={currentText}
          isRecognitionSupported={isRecognitionSupported}
        />

        {/* Section 12: Technology Explorer */}
        <TechnologyExplorer onSpeak={handleSectionSpeak} />

        {/* Section 13: Interactive Java Code Example */}
        <JavaCodeExample onSpeak={handleSectionSpeak} />

        {/* Section 14: Interactive XML Layout Example */}
        <XmlCodeExample onSpeak={handleSectionSpeak} />

        {/* Section 15: Basic URL Checking Program & Flowchart */}
        <UrlScannerCodeExample onSpeak={handleSectionSpeak} />

        {/* Section 16: Android Text-To-Speech Implementation */}
        <TextToSpeechCodeExample onSpeak={handleSectionSpeak} />

        {/* Section 17: Interactive 3D System Architecture */}
        <Architecture3D onSpeak={handleSectionSpeak} />

        {/* Section 18: Limitations & Future Enhancements */}
        <Limitations onSpeak={handleSectionSpeak} />

        {/* Section 19: Project Team & Guide */}
        <TeamSection onSpeak={handleSectionSpeak} />

        {/* Section 20: Final Conclusion */}
        <Conclusion
          onRestartTour={() => {
            startTour(0);
            speak(currentStep?.narration || "");
          }}
          onExploreTechnologies={() => scrollToSection('technologies')}
          onViewTeam={() => scrollToSection('team')}
          onReturnHome={() => scrollToSection('home')}
          onSpeak={handleSectionSpeak}
        />
      </main>

      {/* Website Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Persistent Presenter Dock (Right Side Drawer) */}
      <PresenterDock
        isOpen={isPresenterDockOpen}
        onClose={() => setIsPresenterDockOpen(false)}
        status={status}
        isSpeaking={isSpeaking}
        isPaused={isPaused}
        currentText={currentText}
        isMuted={isMuted}
        onPlay={() => speak(currentText || PROJECT_INFO.welcomeSpeech)}
        onPause={pause}
        onResume={resume}
        onStop={stop}
        onReplay={() => speak(currentText || PROJECT_INFO.welcomeSpeech)}
        onStartTour={() => {
          startTour(0);
          speak(currentStep?.narration || "");
        }}
        onSelectTopic={handleSelectTopic}
      />

      {/* Guided 20-Topic Project Tour Modal */}
      <ProjectTourModal
        isActive={isTourActive}
        isPaused={isTourPaused}
        currentStepIndex={currentStepIndex}
        isSpeaking={isSpeaking}
        onNext={() => {
          nextStep();
        }}
        onPrev={() => {
          prevStep();
        }}
        onPause={() => {
          pauseTour();
          pause();
        }}
        onResume={() => {
          resumeTour();
          resume();
        }}
        onStop={() => {
          stopTour();
          stop();
        }}
        onReplay={() => {
          if (currentStep) speak(currentStep.narration);
        }}
        onRestart={() => {
          restartTour();
        }}
        onGoToStep={goToStep}
        isMuted={isMuted}
        onToggleMute={toggleMute}
      />
    </div>
  );
}

export default App;
