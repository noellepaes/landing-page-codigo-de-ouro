import React from 'react';
import { Button } from '../Button';
import './CTAButton.css';

export type CTASize = 'sm' | 'md' | 'lg' | 'xl';

export interface CTAButtonProps {
  label: string;
  size?: CTASize;
  className?: string;
  onClick?: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  label,
  size = 'lg',
  className = '',
  onClick,
}) => {
  const isXl = size === 'xl';
  const extraClass = isXl ? 'cta-button--xl' : '';

  // Map xl to lg for base button, apply extra class to scale up
  const baseSize = isXl ? 'lg' : size;

  return (
    <Button
      variant="primary"
      size={baseSize as 'sm' | 'md' | 'lg'}
      onClick={onClick}
      className={["cta-button", extraClass, className].filter(Boolean).join(' ')}
    >
      {label}
    </Button>
  );
}; 