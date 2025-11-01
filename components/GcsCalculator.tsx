import React, { useState, useMemo } from 'react';
import { GcsScores, GcsComponent } from '../types';
import { EYE_RESPONSE_OPTIONS, VERBAL_RESPONSE_OPTIONS, MOTOR_RESPONSE_OPTIONS, getInterpretation } from '../constants';
import ScoreDisplay from './ScoreDisplay';
import ResponseSection from './ResponseSection';
import ActionButton from './ActionButton';
import Toast from './Toast';

const GcsCalculator: React.FC = () => {
  const [scores, setScores] = useState<GcsScores>({
    eyes: null,
    verbal: null,
    motor: null,
  });
  const [showToast, setShowToast] = useState(false);

  const handleScoreChange = (component: GcsComponent, score: number) => {
    setScores(prevScores => ({
      ...prevScores,
      [component]: score,
    }));
  };

  const totalScore = useMemo(() => {
    const { eyes, verbal, motor } = scores;
    if (eyes !== null && verbal !== null && motor !== null) {
      return eyes + verbal + motor;
    }
    return null;
  }, [scores]);
  
  const interpretation = useMemo(() => getInterpretation(totalScore), [totalScore]);

  const handleReset = () => {
    setScores({ eyes: null, verbal: null, motor: null });
  };

  const handleCopy = () => {
    if (totalScore === null) return;

    const copyText = `GCS ${totalScore}: E${scores.eyes} V${scores.verbal} M${scores.motor}`;
    navigator.clipboard.writeText(copyText)
      .then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy score to clipboard.');
      });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ResponseSection
          title="Eye Response"
          componentName="eyes"
          options={EYE_RESPONSE_OPTIONS}
          selectedValue={scores.eyes}
          onChange={handleScoreChange}
        />
        <ResponseSection
          title="Verbal Response"
          componentName="verbal"
          options={VERBAL_RESPONSE_OPTIONS}
          selectedValue={scores.verbal}
          onChange={handleScoreChange}
        />
        <ResponseSection
          title="Motor Response"
          componentName="motor"
          options={MOTOR_RESPONSE_OPTIONS}
          selectedValue={scores.motor}
          onChange={handleScoreChange}
        />
      </div>

      <ScoreDisplay totalScore={totalScore} scores={scores} interpretation={interpretation} />

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <ActionButton onClick={handleReset} variant="secondary">
          Reset
        </ActionButton>
        <ActionButton onClick={handleCopy} variant="primary" disabled={totalScore === null}>
          Copy Score
        </ActionButton>
      </div>
      <Toast message="Score copied to clipboard!" show={showToast} />
    </div>
  );
};

export default GcsCalculator;