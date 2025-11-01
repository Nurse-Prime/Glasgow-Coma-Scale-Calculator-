import React from 'react';

const imageDataUri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEXzUDL1WyvzTDLzSy7yRSjzhwf0XDXySCn2ZC/6kSz5gzH3dTD4bzH7pFn8wZr94dfyQyXyPiL0Wi5sB5vMAAADWklEQVR4nO2di3KjMBAFQwZExkVR7v+Kda5AQTs3SQPZeM9d9fCBBJJeQC/iZAYAAAAAAAAAAAAAAAAAAAAAAAAA/5F5t1+1v/M/zL55v69bPn/oV+2L+fE937FffsB/aP/GGw3/T+n/rA9/2v4+338Y/c8/Fv4k/J8G/yfh/+vwrwm/K+HfRPivoX8a/J8G/2vwXwn/N+H/FvxfRf8a/V8J/zb874B/Dvzng38f+J8N/s+Efxn874D/LPhfB/+74H8P/I+A/wnwbwb/s+AfB/8T4L8N/m+B/33wPwz+B8D/GPyHwP8c+A+B/w74DwT/IfAfC/8h8B8K/2Hgf2z4D4L/4fC/DP4vg/+F4H8b/E+A/xvwfwD+t8H/Bvxfgf8F8H8N/l+A/zPwnwj/E+GfCP+T4Z8G/7Pgnwb/s+CfBv+z4D8G/mfBPwb+Z8E/Bv5nwT8G/mfBPwb+Z8E/Bv5nwT8G/mfB/w74HwT/Q+A/FP6HwH8o/IeB/5HwPwb+R8L/GPifAP8G4H8F/HeB/wbwfwn8b4L/BfB/Gfxvgn8J/DeCfxP8m8H/JPi3wX8K/FeF/zL4nxX/M+Cff/X/fB3+d8H/9/nB5+HffgEAoCT/g7db/7e7/8L/v36b/Qv98W59d/s5/s2363/p/vE9t5/g3/6s/5H/T4P/Gfwvgv8Z/K+C/x3874D/DPjHwf8c+A+B/zHwHwj/Q+A/DP4vgP+Z8D8C/sfC/wD4Hwv/Q+B/JfwPhD8B/ofAfw78x8B/DvxnwP8M+K+A/x3wvwn+d8D/LPhfB/+b4H8b/FeA/03wvwP+N8B/APxPgP8c+A8D/3nwPwz+h8B/LPwPgf+x8B8G/0fhPwz8j4D/EfAfBf8j4H8E/I+A/wHwPwD+x8L/APgfC/9D4H8k/A+B/xDwHwb/Q+A/BP5nwf8A+J8A/3HgPwb+Z8H/GPifBf8D4H8A/GeB/yHwHwP/I+A/Bv5HwH8E/I+E/xDwPwj+Q+A/CPxPgP8A+J8A/ynwnwD/WeA/Bfxngf8M+M8C/xnwXwH/WeDfBP9Z8L8N/rPgvwn+s+C/CfxngX8a/GeBfzT4zwL/aPCfBf7R4D8L/OHBPwv8c+A/C/zhwH8W+M+A/yzwXwH/WfAfA/9Z4D8D/rPAfwb8F8F/BvzXwH8V/DfBfxX8t8B/Ffy3wH8F/LfBfxX818B/FfzHwH8V/MeB/ynwHwX/k+E/CvynwX8U/E+F/ynwXz38nwX/v+7/gH/7/9kPAAAAAAAAAAAAAADAsz9Sza/cR0vBbwAAAABJRU5ErkJggg==';

const BrainWarningIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src={imageDataUri} alt="Brain with a warning sign icon" className={className} />
);

export default BrainWarningIcon;
