import React from 'react';
import { ResponseOption, GcsComponent } from '../types';

interface ResponseSectionProps {
  title: string;
  componentName: GcsComponent;
  options: ResponseOption[];
  selectedValue: number | null;
  onChange: (component: GcsComponent, score: number) => void;
}

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
    </svg>
);


const ResponseSection: React.FC<ResponseSectionProps> = ({ title, componentName, options, selectedValue, onChange }) => {
  return (
    <fieldset className="bg-zinc-800/75 backdrop-blur-sm border border-zinc-700/50 shadow-2xl shadow-black/25 rounded-xl p-4">
      <legend className="text-xl font-bold text-zinc-100 w-full text-center mb-4">{title}</legend>
      <div className="space-y-3">
        {options.map((option) => {
            const isSelected = selectedValue === option.score;
            return (
                <label
                    key={option.score}
                    htmlFor={`${componentName}-${option.score}`}
                    className={`flex items-start justify-between w-full p-4 rounded-lg cursor-pointer transition-all duration-200 
                        focus-within:ring-2 focus-within:ring-offset-4 focus-within:ring-offset-zinc-800 focus-within:ring-yellow-400
                        ${ isSelected ? 'bg-zinc-700/50 scale-[1.02]' : 'bg-zinc-700 hover:bg-zinc-600/50 hover:scale-[1.01]' }
                    `}
                >
                    <div className="flex-1 flex items-start">
                        <span className={`font-bold text-lg mr-4 w-5 text-center flex-shrink-0 transition-colors ${isSelected ? 'text-yellow-400' : 'text-zinc-300'}`}>
                            {option.score}
                        </span>
                        <div className="flex-1">
                            <span className={`transition-colors ${isSelected ? 'text-zinc-100' : 'text-zinc-300'}`}>{option.description}</span>
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
                        <div className={`w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${isSelected ? 'border-yellow-400 bg-yellow-400' : 'border-zinc-500 bg-transparent'}`}>
                            {isSelected && <CheckIcon className="w-4 h-4 text-zinc-900 animate-score-pop" />}
                        </div>
                    </div>
                </label>
            );
        })}
      </div>
    </fieldset>
  );
};

export default ResponseSection;