import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { useTheme } from './Hooks/useTheme.tsx';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import BrowserRouter

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

// Root component to use the theme
const Root = () => {
  const theme = useTheme();

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
      appearance={{
        variables: {
          colorPrimary: theme === 'dark' ? 'grey' : '#213547',
          colorTextSecondary: theme === 'dark' ? 'grey' : '#213547',
          colorBackground: theme === 'dark' ? '#1a1a1a' : '#ffffff',
          colorText: theme === 'dark' ? 'grey' : '#213547',
          colorInputBackground: theme === 'dark' ? '#2c2c2c' : '#f5f5f5',
          colorInputText: theme === 'dark' ? '#fff' : '#000',
          fontFamily: `'Inter', sans-serif`,
          borderRadius: '8px',
        },
      }}
    >
      <BrowserRouter> {/* ✅ Add this wrapper */}
        <App />
      </BrowserRouter>
    </ClerkProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
