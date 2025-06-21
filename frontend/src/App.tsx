import './App.css';
import Radio from './components/radio.tsx';
import Switch from './components/switch.tsx';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


function App() {
  return (
    <div className="App">
      <SignedOut>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <header
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.5rem 1.5rem',
              height: '70px',
              boxSizing: 'border-box',
            }}
          >
            <Switch />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Radio />
            </div>
            <SignInButton mode="modal" />
          </header>
        </div>
      </SignedOut>

      <SignedIn>
        <header
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.5rem 1.5rem',
            height: '70px',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Switch />
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Radio />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', height: '40px', width: '40px' }}>

            <UserButton />
          </div>
        </header>
      </SignedIn>

      <div style={{ paddingTop: '80px' }}>
        {/* Rest of the content */}
      </div>
    </div>
  );
}

export default App;
