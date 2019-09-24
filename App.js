import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import persist from './src/config/store';
import Main from './src/Main';

const persistStore = persist();

export default class App extends Component{
  render() {
    return(
      <Provider store={persistStore.store}>
        <PersistGate loading={null} persistor={persistStore.persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}