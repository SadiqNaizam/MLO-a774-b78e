import React from 'react';
import StyledBackground from '../components/layout/StyledBackground';
import LoginCard from '../components/Login/LoginCard';

/**
 * IndexPage serves as the main login page for the application.
 * It implements a responsive two-column layout based on the project requirements:
 * - The left column displays a styled background with company branding. This column is
 *   visible on medium screens (md breakpoint) and larger.
 * - The right column contains the LoginCard component, centered both vertically and horizontally.
 *   This column is always visible and takes full width on smaller screens.
 *
 * The overall layout uses a CSS Grid with a minimum height of the screen.
 * On medium screens and up, it's a two-column grid.
 * On smaller screens, it implicitly becomes a single-column layout where the
 * StyledBackground's container is hidden, allowing the LoginCard's container to take full width.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      {/* Left Column: Styled Background */}
      {/* This container for StyledBackground is part of the grid.
          It's hidden by default and becomes visible (block display) at the 'md' breakpoint and above.
          StyledBackground component itself handles its internal styling, including 100% height/width of this container. */}
      <div className="hidden md:block">
        <StyledBackground />
      </div>

      {/* Right Column: Login Card */}
      {/* This container for LoginCard is the second item in the grid.
          - On small screens (single column layout because the first column is hidden), it takes up the full screen width.
          - On 'md' screens and up (two-column layout), it takes the second column.
          It uses flexbox to center the LoginCard within it.
          'bg-background' ensures consistency with the app's theme.
          Padding (p-4, sm:p-6, md:p-8) provides spacing around the LoginCard, especially important on smaller screens. */}
      <div className="flex w-full items-center justify-center bg-background p-4 sm:p-6 md:p-8">
        {/* LoginCard component handles its own max-width and internal styling. */}
        <LoginCard />
      </div>
    </div>
  );
};

export default IndexPage;
