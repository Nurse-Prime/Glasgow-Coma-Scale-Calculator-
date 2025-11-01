
export type GcsComponent = 'eyes' | 'verbal' | 'motor';

export interface ResponseOption {
  score: number;
  description: string;
  detail?: string;
}

export interface GcsScores {
  eyes: number | null;
  verbal: number | null;
  motor: number | null;
}

export enum SeverityLevel {
  Severe = 'Severe',
  Moderate = 'Moderate',
  Minor = 'Minor',
  Unscored = 'Unscored'
}

export interface Interpretation {
  level: SeverityLevel;
  color: string;
  textColor: string;
  explanation: string;
}