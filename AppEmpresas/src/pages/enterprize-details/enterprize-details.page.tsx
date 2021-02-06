import React from 'react';
import {
  NavigationComponentProps,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import {Root} from '../../components/root.component';

interface EnterprizeDetailsPageProps extends NavigationComponentProps {
  enterprizeName: string;
}

const EnterprizeDetailsPage: NavigationFunctionComponent<EnterprizeDetailsPageProps> = (props) => {
  return <Root></Root>;
};

EnterprizeDetailsPage.options = (props) => ({
  topBar: {
    title: {
      text: props.enterprizeName,
    },
  },
});

export default EnterprizeDetailsPage;
