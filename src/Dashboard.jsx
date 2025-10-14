import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

export default function Dashboard() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('crypto_prices').select('*');
      if (!error) setCryptos(data);
    }
    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px', justifyContent: 'center' }}>
      {cryptos.map(c => (
        <div key={c.id} style={{ flex: '1 1 200px', padding: '20px', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2>{c.symbol}</h2>
          <p>Price: ${c.price}</p>
          <p>Change: {c.change}%</p>
          <p>Prediction: N/A</p>
        </div>
      ))}
    </div>
  );
}
