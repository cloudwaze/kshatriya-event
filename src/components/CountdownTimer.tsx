'use client';

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Calculate initial time
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Clean up
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {timeBlocks.map((block, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg p-2 md:p-4 flex flex-col items-center justify-center">
            <div className="text-2xl md:text-4xl font-bold">{block.value}</div>
            <div className="text-xs md:text-sm font-medium uppercase">{block.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 