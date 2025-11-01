import React from 'react';

interface ToastProps {
  message: string;
  show: boolean;
}

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>
);


const Toast: React.FC<ToastProps> = ({ message, show }) => {
  return (
    <div
      aria-live="assertive"
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl bg-yellow-400 text-zinc-900 font-semibold shadow-lg transition-all duration-300 ease-in-out flex items-center gap-3
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
        <CheckCircleIcon className="w-5 h-5" />
        {message}
    </div>
  );
};

export default Toast;