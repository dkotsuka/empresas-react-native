import React, {useEffect, useState} from 'react';
import {
  Navigation,
  NavigationComponentProps,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import {useDispatch, useSelector} from 'react-redux';
import {PageNames} from '..';
import { FilterSelector } from '../../components/filter.component';
import {Root} from '../../components/root.component';
import { SearchBar } from '../../components/search-bar.component';
import {AppReduxState} from '../../redux/components/redux-store';
import { actionExpiredSession } from '../../redux/reducers/auth-actions';
import {MappedEnterprise, MappedType} from '../../services/enterprise.mapper';
import {enterpriseService} from '../../services/enterprise.service';
import { EmptyEnterpriseList } from './empty-enterprise-list.component';
import {EnterpriseItem} from './enterprise-item.component';
import {EnterpriseList} from './enterprise-list.styles';

interface EnterpriseListPageProps extends NavigationComponentProps {}

const EnterpriseListPage: NavigationFunctionComponent<EnterpriseListPageProps> = (
  props,
) => {
  const {token, client, uid} = useSelector( (state: AppReduxState) => state.user );
  const [list, setList] = useState<MappedEnterprise[]>([]);
  const [filters, setfilters] = useState<MappedType[]>([])
  const [searchText, setSerachText] = useState<string>()
  const [typeFilter, setTypeFilter] = useState<number>()
  const [ isLoading, setLoading ] = useState(true)
  const dipatch = useDispatch()

  useEffect(() => {
    if (!token) {
      Navigation.showModal({component: {name: PageNames.AUTH}});
    } else {
      setLoading(true)
      getData();
    }
  }, [uid, searchText, typeFilter]);

  const getData = async () => {
    if (token && client && uid) {
      const {enterprises, types} = await enterpriseService
        .setCredentials(token, client, uid)
        .list(typeFilter, searchText);
      if(enterprises) {
        setList(enterprises);
        setfilters(types)
      } else {
        dipatch(actionExpiredSession())
      }
    }
    setLoading(false)
  };

  const onSearchSubmit = (text: string) => {
    setSerachText(text)
  }

  const onItemPress = (item: MappedEnterprise) => {
    Navigation.push(props.componentId, {
        component: {
            name: PageNames.ENTERPRISE_DETAILS,
            passProps: { id: item.id , enterpriseName: item.name}
        }
    })
  }

  const renderItem = ({item} : {item: MappedEnterprise}) => (
    <EnterpriseItem item={item} onPress={() => onItemPress(item)}/>
  )

  return (
    <Root>
      <SearchBar onSubmit={onSearchSubmit} placeholder="Buscar por nome"/>
      <FilterSelector filters={filters} onApplyFilter={(id) => setTypeFilter(id)}/>
      <EnterpriseList 
        data={list} 
        renderItem={renderItem}
        ListEmptyComponent={<EmptyEnterpriseList isLoading={isLoading}/>}/>
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
