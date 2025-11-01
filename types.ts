
/**
 * Represents the three components of the Glasgow Coma Scale.
 */
export type GcsComponent = 'eyes' | 'verbal' | 'motor';

/**
 * Represents a single response option for a GCS component.
 */
export interface ResponseOption {
  score: number;
  description: string;
  detail?: string;
}

/**
 * Represents the scores for each component of the GCS.
 */
export interface GcsScores {
  eyes: number | null;
  verbal: number | null;
  motor: number | null;
}

/**
 * Represents the severity levels of a brain injury.
 */
export enum SeverityLevel {
  Severe = 'Severe',
  Moderate = 'Moderate',
  Minor = 'Minor',
  Unscored = 'Unscored'
}

/**
 * Represents the interpretation of a GCS score, including severity level, color coding, and an explanation.
 */
export interface Interpretation {
  level: SeverityLevel;
  color: string;
  textColor: string;
  explanation: string;
}