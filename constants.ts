import { ResponseOption, SeverityLevel, Interpretation } from './types';

export const EYE_RESPONSE_OPTIONS: ResponseOption[] = [
  { score: 4, description: 'Spontaneous', detail: 'Opens eyes on own' },
  { score: 3, description: 'To voice', detail: 'Opens eyes when asked' },
  { score: 2, description: 'To pain', detail: 'Opens eyes to painful stimulus' },
  { score: 1, description: 'None', detail: 'Does not open eyes' },
];

export const VERBAL_RESPONSE_OPTIONS: ResponseOption[] = [
  { score: 5, description: 'Oriented', detail: 'Answers questions appropriately' },
  { score: 4, description: 'Confused', detail: 'Converses but is disoriented' },
  { score: 3, description: 'Inappropriate words', detail: 'Uses words, but not in sentences' },
  { score: 2, description: 'Incomprehensible sounds', detail: 'Moans, groans; no words' },
  { score: 1, description: 'None', detail: 'Makes no sounds' },
];

export const MOTOR_RESPONSE_OPTIONS: ResponseOption[] = [
  { score: 6, description: 'Obeys commands', detail: 'Follows simple commands' },
  { score: 5, description: 'Localizes pain', detail: 'Purposeful movement to pain' },
  { score: 4, description: 'Withdraws from pain', detail: 'Pulls away from painful stimulus' },
  { score: 3, description: 'Flexion to pain', detail: 'Decorticate posturing' },
  { score: 2, description: 'Extension to pain', detail: 'Decerebrate posturing' },
  { score: 1, description: 'None', detail: 'No motor response' },
];

export const SEVERITY_INTERPRETATIONS: { [key in SeverityLevel]: Interpretation } = {
  [SeverityLevel.Severe]: {
    level: SeverityLevel.Severe,
    color: 'bg-red-500',
    textColor: 'text-white',
    explanation: 'Severe brain injury. Patient is in a comatose state. This score indicates a critical condition requiring immediate airway management and intensive care.',
  },
  [SeverityLevel.Moderate]: {
    level: SeverityLevel.Moderate,
    color: 'bg-orange-400',
    textColor: 'text-white',
    explanation: 'Moderate brain injury. The patient is typically lethargic or confused. There is a significant risk of deterioration; urgent neuroimaging and close monitoring are essential.',
  },
  [SeverityLevel.Minor]: {
    level: SeverityLevel.Minor,
    color: 'bg-green-500',
    textColor: 'text-white',
    explanation: 'Minor brain injury, often consistent with concussion. Patient may have experienced a brief loss of consciousness or amnesia. Clinical observation is recommended.',
  },
  [SeverityLevel.Unscored]: {
    level: SeverityLevel.Unscored,
    color: 'bg-zinc-700',
    textColor: 'text-zinc-300',
    explanation: 'Select an option for each category (Eye, Verbal, Motor) to calculate the GCS score and see the clinical interpretation.',
  }
};

export const COPY_SUCCESS_MESSAGE = 'Score copied to clipboard!';

export const getInterpretation = (score: number | null): Interpretation => {
  if (score === null) return SEVERITY_INTERPRETATIONS[SeverityLevel.Unscored];
  if (score >= 3 && score <= 8) return SEVERITY_INTERPRETATIONS[SeverityLevel.Severe];
  if (score >= 9 && score <= 12) return SEVERITY_INTERPRETATIONS[SeverityLevel.Moderate];
  return SEVERITY_INTERPRETATIONS[SeverityLevel.Minor];
};