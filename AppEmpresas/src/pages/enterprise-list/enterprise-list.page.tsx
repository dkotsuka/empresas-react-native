import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {
  Navigation,
  NavigationComponentProps,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import {useSelector} from 'react-redux';
import {PageNames} from '..';
import {Root} from '../../components/root.component';
import {AppReduxState} from '../../redux/components/redux-store';
import {MappedEnterprise} from '../../services/enterprise.mapper';
import {enterpriseService} from '../../services/enterprise.service';
import {EnterpriseItem} from './enterprise-item.component';
import {EnterpriseList} from './enterprise-list.styles';

interface EnterpriseListPageProps extends NavigationComponentProps {}

const EnterpriseListPage: NavigationFunctionComponent<EnterpriseListPageProps> = (
  props,
) => {
  const {token, client, uid} = useSelector( (state: AppReduxState) => state.user );
  const [list, setList] = useState<MappedEnterprise[]>([]);

  useEffect(() => {
    if (!token) {
      Navigation.showModal({component: {name: PageNames.AUTH}});
    } else {
      getData();
    }
  }, [uid]);

  const getData = async () => {
    if (token && client && uid) {
      const {enterprises, types} = await enterpriseService
        .setCredentials(token, client, uid)
        .list();
      setList(enterprises);
    }
  };

  const onItemPress = (item: MappedEnterprise) => {
    console.log(item.id)
    Navigation.push(props.componentId, {
        component: {
            name: PageNames.ENTERPRISE_DETAILS,
            passProps: { id: item.id , enterpriseName: item.name}
        }
    })
  }

  return (
    <Root>
      <EnterpriseList
        data={list}
        renderItem={({item}) => (
            <EnterpriseItem item={item}
                onPress={() => onItemPress(item)}/>
        )}
      />
    </Root>
  );
};

EnterpriseListPage.options = {
  topBar: {
    title: {
      text: 'Lista de Empresas',
    },
  },
};

export default EnterpriseListPage;
