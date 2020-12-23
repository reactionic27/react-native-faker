import React, {useState, useEffect} from 'react';
import {LoadingSpinner} from './components/LoadingSpinner';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return loading ? <LoadingSpinner /> : null;
}
