import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import {LoadingSpinner} from './src/components/LoadingSpinner';
import {Users} from './src/screens/Users';
import configureStore from './src/redux/store';

const store = configureStore();

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return loading ? (
    <LoadingSpinner />
  ) : (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}
