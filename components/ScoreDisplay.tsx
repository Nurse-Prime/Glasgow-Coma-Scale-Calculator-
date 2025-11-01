import React from 'react';
import { GcsScores, Interpretation } from '../types';
import BrainWarningIcon from './BrainWarningIcon';

// Fix: Define the ScoreDisplayProps interface.
interface ScoreDisplayProps {
  totalScore: number | null;
  scores: GcsScores;
  interpretation: Interpretation;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ totalScore, scores, interpretation }) => {
  const breakdown = `E${scores.eyes ?? 'X'} V${scores.verbal ?? 'X'} M${scores.motor ?? 'X'}`;

  return (
    <div
      className="bg-zinc-800/75 backdrop-blur-sm border border-zinc-700/50 shadow-2xl shadow-black/25 rounded-xl p-6 text-center transition-all duration-300 flex flex-col items-center space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0 md:text-left md:p-8"
      aria-live="polite"
      aria-atomic="true"
    >
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <div className="w-16 h-16 rounded-full bg-zinc-900/75 flex items-center justify-center shadow-lg flex-shrink-0">
                <BrainWarningIcon className="w-12 h-12" />
            </div>
            
            <div className="flex flex-col items-center md:items-start">
                <p className="text-2xl font-bold text-zinc-100">Glasgow Score</p>
                <p key={totalScore} className="text-7xl font-bold text-white tracking-tighter leading-none mt-1 animate-score-pop">
                    {totalScore !== null ? totalScore : '--'}
                </p>
            </div>
        </div>

        <div className="flex flex-col items-center gap-3 pt-2 md:items-end md:pt-0">
          <div className="flex items-center justify-center gap-4">
            <span
              key={interpretation.level}
              className={`px-3 py-1 text-sm font-semibold rounded-full ${interpretation.color} ${interpretation.textColor} transition-colors duration-300 order-1 md:order-2 animate-score-pop`}
            >
              {interpretation.level}
            </span>
            <p className="text-zinc-400 text-lg font-mono order-2 md:order-1">{breakdown}</p>
          </div>

          <p className="text-zinc-400 text-sm max-w-sm md:text-right">
              {interpretation.explanation}
          </p>
        </div>
    </div>
  );
};

export default ScoreDisplay;