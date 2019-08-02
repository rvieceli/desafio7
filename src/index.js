import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotronConfig';
import { StatusBar } from 'react-native';

import Routes from './routes';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes />
    </Provider>
  );
}
