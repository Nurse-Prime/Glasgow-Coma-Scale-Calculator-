import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
    <img src="/logo.png" alt="Glasgow Coma Scale Logo" className={className} />
);

export default Logo;