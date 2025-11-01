import React from 'react';
import logo from '../src/imgs/Glasgow Scale Logo.png';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
    <img src={logo} alt="Glasgow Coma Scale Logo" className={className} />
);

export default Logo;