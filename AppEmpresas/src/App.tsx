import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux'
import { Root } from './components/root.component';
import { store } from './redux/components/redux-store';

const App = () => {
  return (
    <>
      <Provider store={store}>
      <Root>
        <Text>Hello</Text>
      </Root>
      </Provider>
    </>
  );
};

export default App;
