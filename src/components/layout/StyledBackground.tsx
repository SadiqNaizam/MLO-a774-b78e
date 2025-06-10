import React from 'react';
import { cn } from '@/lib/utils';

interface StyledBackgroundProps {
  className?: string;
}

const StyledBackground: React.FC<StyledBackgroundProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'h-screen w-full bg-sidebar relative overflow-hidden p-8',
        className
      )}
    >
      {/* Branding Logo */}
      <div className="relative z-20"> 
        <h1 className="text-3xl font-extrabold text-gray-900">
          ASCENDION
        </h1>
        <p className="text-xs font-medium text-gray-700 mt-1 tracking-wide">
          Engineering the future of business
        </p>
      </div>

      {/* Decorative Abstract Shapes */}
      {/* Main white swoosh-like shape using clip-path */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-10"
      >
        <div
          className="w-full h-full bg-background opacity-100" // Solid white
          style={{
            // clipPath: 'ellipse(Rx Ry at Cx Cy)'
            // Rx, Ry are radii percentages of the element's width/height.
            // Cx, Cy are center position percentages from top-left of the element.
            // This attempts to create a large curved shape originating from the left,
            // similar to the visual reference.
            clipPath: 'ellipse(110% 85% at -40% 65%)',
          }}
        />
      </div>

      {/* Optional: A secondary, more subtle shape for depth/texture */}
      <div
        aria-hidden="true"
        className="absolute z-0 -bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-white/10 rounded-full transform rotate-[20deg] opacity-50 pointer-events-none"
      />
    </div>
  );
};

export default StyledBackground;
