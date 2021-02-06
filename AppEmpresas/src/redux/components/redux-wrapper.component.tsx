import React from 'react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { Provider} from 'react-redux';
import {store} from './redux-store';

export function ReduxWrapper(Component: NavigationFunctionComponent<any>) {
  return function inject(props: any) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );

    return <EnhancedComponent />;
  };
}
