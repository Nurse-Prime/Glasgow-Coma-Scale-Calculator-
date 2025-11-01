import React from 'react';

const BrainOnScaleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className} 
        viewBox="0 0 24 24" 
        fill="none"
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        {/* Scale Platform */}
        <path d="M3 16h18" />
        
        {/* Brain */}
        <path d="M12 16V8.53a4.5 4.5 0 0 0-3.32-4.24 4.5 4.5 0 0 0-5.43 3A5 5 0 0 0 2 12.5a4.83 4.83 0 0 0 4.23 4.5" />
        <path d="M12 16V8.53a4.5 4.5 0 0 1 3.32-4.24 4.5 4.5 0 0 1 5.43 3A5 5 0 0 1 22 12.5a4.83 4.83 0 0 1-4.23 4.5" />
        <path d="M12 8.5v-2" />
        
        {/* Scale base */}
        <path d="M8 21h8" />
        <path d="M12 16v5" />
    </svg>
);

export default BrainOnScaleIcon;
