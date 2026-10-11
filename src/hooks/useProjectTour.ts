import { useState, useCallback, useEffect } from 'react';
import { PRESENTATION_TOUR_STEPS } from '../data/presentationScript';
import { TourStep } from '../types';

export function useProjectTour(onStepChange?: (step: TourStep) => void) {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isTourActive, setIsTourActive] = useState<boolean>(false);
  const [isTourPaused, setIsTourPaused] = useState<boolean>(false);

  const totalSteps = PRESENTATION_TOUR_STEPS.length;
  const currentStep = PRESENTATION_TOUR_STEPS[currentStepIndex];

  // Helper to scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  const goToStep = useCallback((index: number) => {
    if (index >= 0 && index < totalSteps) {
      setCurrentStepIndex(index);
      const step = PRESENTATION_TOUR_STEPS[index];
      scrollToSection(step.sectionId);
      if (onStepChange) {
        onStepChange(step);
      }
    }
  }, [totalSteps, scrollToSection, onStepChange]);

  const startTour = useCallback((startIndex = 0) => {
    setIsTourActive(true);
    setIsTourPaused(false);
    goToStep(startIndex);
  }, [goToStep]);

  const stopTour = useCallback(() => {
    setIsTourActive(false);
    setIsTourPaused(false);
  }, []);

  const nextStep = useCallback(() => {
    if (currentStepIndex < totalSteps - 1) {
      goToStep(currentStepIndex + 1);
    } else {
      stopTour();
    }
  }, [currentStepIndex, totalSteps, goToStep, stopTour]);

  const prevStep = useCallback(() => {
    if (currentStepIndex > 0) {
      goToStep(currentStepIndex - 1);
    }
  }, [currentStepIndex, goToStep]);

  const pauseTour = useCallback(() => {
    setIsTourPaused(true);
  }, []);

  const resumeTour = useCallback(() => {
    setIsTourPaused(false);
  }, []);

  const restartTour = useCallback(() => {
    startTour(0);
  }, [startTour]);

  return {
    isTourActive,
    isTourPaused,
    currentStepIndex,
    currentStep,
    totalSteps,
    startTour,
    stopTour,
    nextStep,
    prevStep,
    pauseTour,
    resumeTour,
    restartTour,
    goToStep
  };
}
