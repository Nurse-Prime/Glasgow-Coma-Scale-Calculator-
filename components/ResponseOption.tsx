import React from 'react';
import { GcsComponent, ResponseOption as ResponseOptionType } from '../types';
import CheckIcon from './icons/CheckIcon';

interface ResponseOptionProps {
  option: ResponseOptionType;
  componentName: GcsComponent;
  isSelected: boolean;
  onChange: (component: GcsComponent, score: number) => void;
}

const ResponseOption: React.FC<ResponseOptionProps> = ({ option, componentName, isSelected, onChange }) => {
  const labelClasses = `
    flex items-start justify-between w-full p-4 rounded-lg cursor-pointer transition-all duration-200
    focus-within:ring-2 focus-within:ring-offset-4 focus-within:ring-offset-zinc-800 focus-within:ring-yellow-400
    ${isSelected ? 'bg-zinc-700/50 scale-[1.02]' : 'bg-zinc-700 hover:bg-zinc-600/50 hover:scale-[1.01]'}
  `;

  const scoreClasses = `
    font-bold text-lg mr-4 w-5 text-center flex-shrink-0 transition-colors
    ${isSelected ? 'text-yellow-400' : 'text-zinc-300'}
  `;

  const descriptionClasses = `
    transition-colors
    ${isSelected ? 'text-zinc-100' : 'text-zinc-300'}
  `;

  const radioWrapperClasses = `
    w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center
    ${isSelected ? 'border-yellow-400 bg-yellow-400' : 'border-zinc-500 bg-transparent'}
  `;

  return (
    <label htmlFor={`${componentName}-${option.score}`} className={labelClasses.trim()}>
      <div className="flex-1 flex items-start">
        <span className={scoreClasses.trim()}>{option.score}</span>
        <div className="flex-1">
          <span className={descriptionClasses.trim()}>{option.description}</span>
          {option.detail && <p className="text-sm text-zinc-400 mt-1">{option.detail}</p>}
        </div>
      </div>

      <div className="relative flex items-center justify-center w-6 h-6 ml-4 flex-shrink-0 mt-1">
        <input
          type="radio"
          id={`${componentName}-${option.score}`}
          name={componentName}
          value={option.score}
          checked={isSelected}
          onChange={() => onChange(componentName, option.score)}
          className="opacity-0 absolute h-full w-full cursor-pointer"
        />
        <div className={radioWrapperClasses.trim()}>
          {isSelected && <CheckIcon className="w-4 h-4 text-zinc-900 animate-score-pop" />}
        </div>
      </div>
    </label>
  );
};

export default ResponseOption;
