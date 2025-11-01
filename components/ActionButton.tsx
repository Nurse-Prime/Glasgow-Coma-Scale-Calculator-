import React from 'react';

// Icon for the 'Copy Score' button (primary variant)
const CopyIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
    </svg>
);

// Icon for the 'Reset' button (secondary variant)
const ResetIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
    </svg>
);


interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({ variant, children, ...props }) => {
  const baseClasses = 'w-full text-lg font-bold py-4 px-6 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-900 focus-visible:ring-yellow-400 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 active:scale-95';

  const variantClasses = {
    primary: 'bg-yellow-400 text-zinc-900 hover:bg-yellow-500 disabled:hover:bg-yellow-400',
    secondary: 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700 disabled:hover:bg-zinc-800',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {variant === 'primary' && <CopyIcon />}
      {variant === 'secondary' && <ResetIcon />}
      <span>{children}</span>
    </button>
  );
};

export default ActionButton;