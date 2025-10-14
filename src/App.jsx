import React, { useEffect } from 'react';
import Dashboard from './Dashboard';

export default function App() {
  useEffect(() => {
    try {
      if (window.sdk?.actions?.ready) window.sdk.actions.ready();
    } catch(e) {}
  }, []);

  return (
    <div className="app min-h-screen p-4">
      <Dashboard />
    </div>
  );
}