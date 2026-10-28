'use client';

import React, { createContext, useContext } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

/**
 * Base UI-compliant Progress component anatomy:
 * - Progress.Root
 * - Progress.Track
 * - Progress.Indicator
 * 
 * Pairs headless ARIA semantics with hardware-accelerated Framer Motion spring animations.
 * Reference: https://motion.dev/examples/react-base-progress & https://base-ui.com/react/components/progress
 */

interface ProgressContextValue {
  value: number;
  min: number;
  max: number;
  percentage: number;
  orientation: 'horizontal' | 'vertical';
  direction: 'top-to-bottom' | 'bottom-to-top' | 'ltr' | 'rtl';
}

const ProgressContext = createContext<ProgressContextValue>({
  value: 0,
  min: 0,
  max: 100,
  percentage: 0,
  orientation: 'horizontal',
  direction: 'ltr',
});

export interface ProgressRootProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  min?: number;
  max?: number;
  orientation?: 'horizontal' | 'vertical';
  direction?: 'top-to-bottom' | 'bottom-to-top' | 'ltr' | 'rtl';
  getValueLabel?: (value: number, max: number) => string;
  children?: React.ReactNode;
}

export const ProgressRoot: React.FC<ProgressRootProps> = ({
  value = 0,
  min = 0,
  max = 100,
  orientation = 'horizontal',
  direction = orientation === 'vertical' ? 'top-to-bottom' : 'ltr',
  getValueLabel,
  className = '',
  children,
  ...props
}) => {
  const clampedValue = Math.min(Math.max(value, min), max);
  const percentage = Math.round(((clampedValue - min) / (max - min)) * 100);
  const valueLabel = getValueLabel ? getValueLabel(clampedValue, max) : `${percentage}%`;

  return (
    <ProgressContext.Provider
      value={{
        value: clampedValue,
        min,
        max,
        percentage,
        orientation,
        direction,
      }}
    >
      <div
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuetext={valueLabel}
        data-orientation={orientation}
        data-direction={direction}
        className={`relative ${className}`}
        {...props}
      >
        {children}
      </div>
    </ProgressContext.Provider>
  );
};

export interface ProgressTrackProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const ProgressTrack: React.FC<ProgressTrackProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`overflow-hidden relative ${className}`} {...props}>
      {children}
    </div>
  );
};

export interface ProgressIndicatorProps extends HTMLMotionProps<'div'> {
  className?: string;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  className = '',
  style,
  ...props
}) => {
  const { percentage, orientation, direction } = useContext(ProgressContext);

  let dynamicStyle: React.CSSProperties = {};

  if (orientation === 'vertical') {
    if (direction === 'bottom-to-top') {
      dynamicStyle = {
        height: `${percentage}%`,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
      };
    } else {
      dynamicStyle = {
        height: `${percentage}%`,
        top: 0,
        left: 0,
        right: 0,
        position: 'absolute',
      };
    }
  } else {
    if (direction === 'rtl') {
      dynamicStyle = {
        width: `${percentage}%`,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
      };
    } else {
      dynamicStyle = {
        width: `${percentage}%`,
        left: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
      };
    }
  }

  return (
    <motion.div
      className={className}
      style={{ ...dynamicStyle, ...style }}
      layout
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      {...props}
    />
  );
};

export const Progress = {
  Root: ProgressRoot,
  Track: ProgressTrack,
  Indicator: ProgressIndicator,
};
