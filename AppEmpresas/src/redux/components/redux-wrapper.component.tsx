import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux-store';

export function ReduxWrapper(Component: React.FC) {
  return function inject(props: any) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );

    return <EnhancedComponent />;
  };
}
