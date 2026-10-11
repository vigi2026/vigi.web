import { useState, useEffect, useCallback, useRef } from 'react';

export type PresenterStatus = 'IDLE' | 'SPEAKING' | 'PAUSED' | 'LISTENING' | 'READY';

export function useSpeech() {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [status, setStatus] = useState<PresenterStatus>('READY');
  const [currentText, setCurrentText] = useState<string>('');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [voicesLoaded, setVoicesLoaded] = useState<boolean>(false);
  const recognitionRef = useRef<any>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const isSynthesisSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const isRecognitionSupported = typeof window !== 'undefined' && 
    ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

  // Initialize voices
  useEffect(() => {
    if (!isSynthesisSupported) return;

    const updateVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        setVoicesLoaded(true);
      }
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSynthesisSupported]);

  // Clean stop function
  const stop = useCallback(() => {
    if (isSynthesisSupported) {
      window.speechSynthesis.cancel();
    }
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        // ignore
      }
    }
    setIsSpeaking(false);
    setIsPaused(false);
    setIsListening(false);
    setStatus('IDLE');
  }, [isSynthesisSupported]);

  // Speak function
  const speak = useCallback((text: string, onFinish?: () => void) => {
    if (!text || !text.trim()) return;
    setCurrentText(text);

    if (!isSynthesisSupported || isMuted) {
      // Just simulate display without audio if unsupported or muted
      setIsSpeaking(false);
      setIsPaused(false);
      setStatus('READY');
      if (onFinish) {
        // call after reading duration estimate
        const words = text.split(' ').length;
        const duration = Math.min(Math.max(words * 250, 1500), 5000);
        setTimeout(onFinish, duration);
      }
      return;
    }

    // Cancel current speech before speaking new text
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    // Pick best English voice if available
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => 
      (v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Zira') || v.name.includes('Female')))
    ) || voices.find(v => v.lang.startsWith('en')) || voices[0];

    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    utterance.rate = 1.0;
    utterance.pitch = 1.05;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
      setStatus('SPEAKING');
    };

    utterance.onpause = () => {
      setIsPaused(true);
      setStatus('PAUSED');
    };

    utterance.onresume = () => {
      setIsPaused(false);
      setIsSpeaking(true);
      setStatus('SPEAKING');
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      setStatus('READY');
      if (onFinish) onFinish();
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis notice:', e);
      setIsSpeaking(false);
      setIsPaused(false);
      setStatus('READY');
      if (onFinish) onFinish();
    };

    window.speechSynthesis.speak(utterance);
  }, [isSynthesisSupported, isMuted]);

  // Pause
  const pause = useCallback(() => {
    if (isSynthesisSupported && isSpeaking) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      setStatus('PAUSED');
    }
  }, [isSynthesisSupported, isSpeaking]);

  // Resume
  const resume = useCallback(() => {
    if (isSynthesisSupported && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setStatus('SPEAKING');
    }
  }, [isSynthesisSupported, isPaused]);

  // Start voice recognition
  const startListening = useCallback((onResult: (text: string) => void) => {
    if (!isRecognitionSupported) {
      alert("Speech recognition is not supported in this browser. Please use the quick command buttons below!");
      return;
    }

    stop();

    try {
      const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const rec = new SpeechRec();
      recognitionRef.current = rec;
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = 'en-US';

      rec.onstart = () => {
        setIsListening(true);
        setStatus('LISTENING');
      };

      rec.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setIsListening(false);
        setStatus('READY');
        onResult(transcript);
      };

      rec.onerror = (event: any) => {
        console.warn('Speech recognition event:', event.error);
        setIsListening(false);
        setStatus('READY');
      };

      rec.onend = () => {
        setIsListening(false);
        if (status === 'LISTENING') setStatus('READY');
      };

      rec.start();
    } catch (err) {
      console.error('Failed to start speech recognition', err);
      setIsListening(false);
      setStatus('READY');
    }
  }, [isRecognitionSupported, stop, status]);

  const toggleMute = useCallback(() => {
    if (!isMuted) {
      stop();
    }
    setIsMuted(prev => !prev);
  }, [isMuted, stop]);

  return {
    isSpeaking,
    isPaused,
    isListening,
    status,
    currentText,
    isMuted,
    isSynthesisSupported,
    isRecognitionSupported,
    voicesLoaded,
    speak,
    pause,
    resume,
    stop,
    toggleMute,
    startListening,
    setCurrentText
  };
}
