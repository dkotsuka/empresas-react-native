import {Navigation} from 'react-native-navigation';
import {ReduxWrapper} from '../redux/components/redux-wrapper.component';
import AuthPage from './auth/auth.page';
import EnterpriseDetailsPage from './enterprise-details/enterprise-details.page';
import EnterpriseListPage from './enterprise-list/enterprise-list.page';
import MainPage from './main/main.page';

export const PageNames = {
  MAIN: 'MAIN',
  AUTH: 'AUTH',
  ENTERPRISE_LIST: 'ENTERPRISE_LIST',
  ENTERPRISE_DETAILS: 'ENTERPRISE_DETAILS',
};
export function registerPages() {
  Navigation.registerComponent(
    PageNames.MAIN,
    () => ReduxWrapper(MainPage),
    () => MainPage,
  );
  Navigation.registerComponent(
    PageNames.AUTH,
    () => ReduxWrapper(AuthPage),
    () => AuthPage,
  );
  Navigation.registerComponent(
    PageNames.ENTERPRISE_LIST,
    () => ReduxWrapper(EnterpriseListPage),
    () => EnterpriseListPage,
  );
  Navigation.registerComponent(
    PageNames.ENTERPRISE_DETAILS,
    () => ReduxWrapper(EnterpriseDetailsPage),
    () => EnterpriseDetailsPage,
  );
}
