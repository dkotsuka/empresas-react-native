import {Navigation} from 'react-native-navigation';
import {ReduxWrapper} from '../redux/components/redux-wrapper.component';
import AuthPage from './auth/auth.page';
import EnterprizeDetailsPage from './enterprize-details/enterprize-details.page';
import EnterprizeListPage from './enterprize-list/enterprize-list.page';

export const PageNames = {
  AUTH: 'AUTH',
  ENTERPRIZE_LIST: 'ENTERPRIZE_LIST',
  ENTERPRIZE_DETAILS: 'ENTERPRIZE_DETAILS',
};

export function registerPages() {
  Navigation.registerComponent(
    PageNames.AUTH,
    () => ReduxWrapper(AuthPage),
    () => AuthPage,
  );
  Navigation.registerComponent(
    PageNames.ENTERPRIZE_LIST,
    () => ReduxWrapper(EnterprizeListPage),
    () => EnterprizeListPage,
  );
  Navigation.registerComponent(
    PageNames.ENTERPRIZE_DETAILS,
    () => ReduxWrapper(EnterprizeDetailsPage),
    () => EnterprizeDetailsPage,
  );
}
