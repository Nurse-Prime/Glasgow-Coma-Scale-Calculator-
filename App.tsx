import React from 'react';
import GcsCalculator from './components/GcsCalculator';
import Logo from './components/Logo';

function App() {
  return (
    <div className="bg-slate-950">
      {/* New Animated Gradient Background */}
      <div className="gradient-bg">
        <div className="gradient-blob1"></div>
        <div className="gradient-blob2"></div>
        <div className="gradient-blob3"></div>
      </div>

      <main className="relative z-10 min-h-screen text-zinc-200 font-sans p-4 sm:p-6 lg:p-8">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-6 md:mb-8 flex flex-col items-center space-y-4">
            <Logo className="h-16 w-16" />
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">Glasgow Score</h1>
            <p className="text-zinc-400 text-lg">Clinical GCS Calculator</p>
          </header>
          <GcsCalculator />
        </div>
      </main>
    </div>
  );
}

export default App;