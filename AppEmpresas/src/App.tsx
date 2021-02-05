import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux'
import { store } from './redux/redux-store';

const App = () => {
  return (
    <>
      <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello</Text>

      </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
