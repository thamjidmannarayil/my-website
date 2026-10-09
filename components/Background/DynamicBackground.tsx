import React from 'react';

export default function DynamicBackground() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-500"
      style={{
        background: `
          radial-gradient(circle at 8% 12%, color-mix(in srgb, var(--theme-accent) 14%, transparent) 0%, transparent 38%),
          radial-gradient(circle at 92% 30%, color-mix(in srgb, var(--theme-secondary) 12%, transparent) 0%, transparent 36%),
          radial-gradient(circle at 30% 92%, color-mix(in srgb, var(--theme-text-muted) 10%, transparent) 0%, transparent 42%),
          linear-gradient(to bottom right, var(--theme-primary), var(--theme-tertiary))
        `,
      }}
    >
      {/* Dotted Grid Texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ 
          backgroundImage: 'radial-gradient(var(--theme-text-muted) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.15
        }}>
      </div>
    </div>
  );
}
