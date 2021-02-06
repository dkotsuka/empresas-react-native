import React from 'react';
import {
  NavigationComponentProps,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import {Root} from '../../components/root.component';

interface EnterpriseDetailsPageProps extends NavigationComponentProps {
  enterpriseName: string;
}

const EnterpriseDetailsPage: NavigationFunctionComponent<EnterpriseDetailsPageProps> = (props) => {
  return <Root></Root>;
};

EnterpriseDetailsPage.options = (props) => ({
  topBar: {
    title: {
      text: props.enterpriseName,
    },
  },
});

export default EnterpriseDetailsPage;
