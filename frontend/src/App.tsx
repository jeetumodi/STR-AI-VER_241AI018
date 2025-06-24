import './App.css';
import Radiolight from './components/Radio-light-ui.tsx';
import Radiodark from './components/Radio-dark-ui.tsx';
import Buttonlight from './components/Button-light-ui.tsx';
import Buttondark from './components/Button-dark-ui.tsx';
import Switch from './components/Switch.tsx';
import CustomSignInButton from './components/CustomSignInButton.tsx';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { useTheme } from './Hooks/useTheme.tsx';
import { Home } from './components/Home.tsx';
import { Course } from './components/Cousre.tsx';
import { Blogs } from './components/Blogs.tsx';
import { Practice } from './components/Practice.tsx';
import { Interview } from './components/Interview.tsx';
import { Routes, Route } from 'react-router-dom'; // ✅ correct import

function App() {
  const theme = useTheme();
  const RadioComponent = theme === 'dark' ? Radiodark : Radiolight;
  const ButtonComponent = theme === 'dark' ? Buttondark : Buttonlight;

  return (
    <div className="App">
      {/* HEADER */}
      <SignedOut>
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 h-[70px] backdrop-blur-sm">
          <Switch />
          <div className="flex items-center gap-4">
            <RadioComponent />
          </div>
          <CustomSignInButton>
            <ButtonComponent />
          </CustomSignInButton>
        </header>
      </SignedOut>

      <SignedIn>
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 h-[70px] backdrop-blur-sm">
          <Switch />
          <div className="flex items-center gap-4">
            <RadioComponent />
          </div>
          <UserButton appearance={{ elements: { userButtonAvatarBox: 'rounded-full' } }} />
        </header>
      </SignedIn>

      {/* ROUTES */}
      <div className="pt-[80px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
