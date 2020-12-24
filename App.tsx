import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import {fromJS} from 'immutable';
import {LoadingSpinner} from './src/components/LoadingSpinner';
import {Users} from './src/pages/Users';
import configureStore from './src/redux/store';

const initialState = fromJS({});
const store = configureStore(initialState);

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
