import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  const baseClasses = `
    backdrop-blur-md bg-transparent
    border border-gray-200/50 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)]
    ${hover ? 'hover:bg-white/5 hover:border-gray-300/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300' : ''}
    ${className}
  `;

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
};

const GlassComponents = { GlassCard };
export default GlassComponents;