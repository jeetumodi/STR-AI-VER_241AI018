// components/CustomSignInButton.tsx
import React from 'react';
import { useClerk } from '@clerk/clerk-react';

const CustomSignInButton = ({ children }: { children: React.ReactNode }) => {
  const { openSignIn } = useClerk();

  const handleClick = () => {
    if (openSignIn) {
      openSignIn();
    } else {
      console.warn('Sign-in modal not available yet.');
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
};

export default CustomSignInButton;
