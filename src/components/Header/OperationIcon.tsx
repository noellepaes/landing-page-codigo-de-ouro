import React from 'react';

interface OperationIconProps {
  className?: string;
  size?: number;
}

export const OperationIcon: React.FC<OperationIconProps> = ({ 
  className = '', 
  size = 32 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
    >
      {/* Triangle outline with golden gradient */}
      <path 
        d="M16 4L26 22H6L16 4Z" 
        stroke="url(#gradient)" 
        strokeWidth="1.5" 
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Inner triangle lines */}
      <path 
        d="M16 8L22 18H10L16 8Z" 
        stroke="url(#gradient)" 
        strokeWidth="1" 
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
      
      {/* Center dot */}
      <circle 
        cx="16" 
        cy="15" 
        r="1.5" 
        fill="url(#gradient)"
      />
      
      {/* Small accent lines */}
      <path 
        d="M12 20L14 18" 
        stroke="url(#gradient)" 
        strokeWidth="0.8" 
        strokeLinecap="round"
        opacity="0.8"
      />
      <path 
        d="M18 18L20 20" 
        stroke="url(#gradient)" 
        strokeWidth="0.8" 
        strokeLinecap="round"
        opacity="0.8"
      />
      
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>
    </svg>
  );
}; 