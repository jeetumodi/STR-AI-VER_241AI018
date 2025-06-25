import './App.css';
import Radiodark from './components/Radio.tsx';
import Buttondark from './components/Button.tsx';
import { Logo } from './components/Logo.tsx';
import CustomSignInButton from './components/CustomSignInButton.tsx';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Home } from './components/Home.tsx';
import { Course } from './components/Cousre.tsx';
import { Blogs } from './components/Blogs.tsx';
import { Practice } from './components/Practice.tsx';
import { Interview } from './components/Interview.tsx';
import { Routes, Route } from 'react-router-dom';
import SyncUserWithSupabase from './components/SyncUserWithSupabase.tsx';

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <SignedOut>
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 h-[70px] backdrop-blur-sm">
          <Logo />
          <div className="flex items-center gap-4">
            <Radiodark />
          </div>
          <CustomSignInButton>
            <Buttondark />
          </CustomSignInButton>
        </header>
      </SignedOut>

      <SignedIn>
        <SyncUserWithSupabase />
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 h-[70px] backdrop-blur-sm">
          <Logo />
          <div className="flex items-center gap-4">
            <Radiodark />
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
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
