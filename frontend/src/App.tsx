import React from 'react'
import './App.css'
import Login from './loging.tsx'
import Radio from './components/radio.tsx'
import { SignedIn } from '@clerk/clerk-react'

function App() {
  return (
    <div
      className="App"
      style={{
        padding: '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
      }}
    >
      {/* Radio at the top - shown only if signed in */}
      <SignedIn>
        <Radio />
      </SignedIn>

      {/* Login/logout always shown */}
      <Login />
    </div>
  )
}

export default App
