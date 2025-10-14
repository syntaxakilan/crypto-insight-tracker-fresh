import React, { useEffect } from 'react';
import Dashboard from './Dashboard';
import './index.css';

function App() {
  useEffect(() => {
    // Farcaster SDK integration (optional)
    try {
      if (window.sdk?.actions?.ready) window.sdk.actions.ready();
    } catch(e) {}
  }, []);

  return (
    <div className="app">
      <h1 className="text-3xl font-bold text-center mb-6">Crypto Insight Tracker</h1>
      <Dashboard />
    </div>
  );
}

export default App;
