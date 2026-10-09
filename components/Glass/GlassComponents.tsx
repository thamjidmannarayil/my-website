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
    liquid-glass
    ${hover ? 'liquid-glass--interactive' : ''}
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
