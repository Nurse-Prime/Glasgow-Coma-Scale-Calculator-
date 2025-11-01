import React from 'react';
import CheckCircleIcon from './icons/CheckCircleIcon';


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