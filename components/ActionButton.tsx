import React from 'react';
import CopyIcon from './icons/CopyIcon';
import ResetIcon from './icons/ResetIcon';


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