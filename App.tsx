import React, {useState, useEffect} from 'react';
import {LoadingSpinner} from './src/components/LoadingSpinner';
import {Users} from './src/pages/Users';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return loading ? <LoadingSpinner /> : <Users />;
}
