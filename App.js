/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import Todo from './src';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>Hhahaha</Text>
        <Todo />
      </View>
    </Provider>
  );
};

export default App;
