import React from 'react';

interface BackgroundContainerProps {
  children: React.ReactNode;
}

export const BackgroundContainer: React.FC<BackgroundContainerProps> = ({
  children,
}) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-[#241843] transition-colors duration-500">
      {/* Background Exact Purple-to-Magenta Gradient from design */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Exact smooth dark violet to rich magenta gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#241843_0%,#351F58_32%,#562978_68%,#9C246C_100%)]" />

        {/* Soft atmospheric ambient glow */}
        <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-[#3B2264]/40 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[0%] w-[650px] h-[650px] bg-[#A82574]/25 rounded-full blur-[140px]" />
      </div>

      {/* Main Foreground Interactive Content */}
      <div className="relative z-10 w-full flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
};

