import React, { useEffect, useState } from 'react';
import {
  Navigation,
  NavigationComponentProps,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import { useSelector } from 'react-redux';
import { PageNames } from '..';
import { Icons } from '../../assets';
import { Divider } from '../../components/divider.component';
import { IconButton } from '../../components/icon-button.component';
import {Root} from '../../components/root.component';
import { Row } from '../../components/row.component';
import { AppReduxState } from '../../redux/components/redux-store';
import { MappedEnterpriseDetails } from '../../services/enterprise.mapper';
import { enterpriseService } from '../../services/enterprise.service';
import { DetailsPageAddress, DetailsPageButtonContainer, DetailsPageContainer, DetailsPageDescription, DetailsPageImage, DetailsPageLabel, DetailsPageSecondaryLabel, DetailsPageTitle } from './enterprise-details.styles';

interface EnterpriseDetailsPageProps extends NavigationComponentProps {
  enterpriseName: string;
  id: number;
}

const EnterpriseDetailsPage: NavigationFunctionComponent<EnterpriseDetailsPageProps> = (props) => {
  const { token, client, uid } = useSelector(({user}: AppReduxState) => user)
  const [data, setData] = useState<MappedEnterpriseDetails>()
  useEffect(() => {
    if (!token) {
      Navigation.showModal({component: {name: PageNames.AUTH}});
    } else {
      getData();
    }
  }, [uid])

  const getData = async () => {
    if (token && client && uid) {
      const data = await enterpriseService.setCredentials(token, client, uid).getOne(props.id);
      if(data) setData(data);
    }
  };

  const openExternal = (code: string) => {

  }

  return <Root>
    <DetailsPageContainer>
      <DetailsPageImage source={{uri: data?.photo}} resizeMode="cover"/>
      <DetailsPageTitle>{data?.name}</DetailsPageTitle>
      <DetailsPageAddress>{data?.city}, {data?.country}</DetailsPageAddress>
      <Divider />
      <DetailsPageLabel>Mercado de ações</DetailsPageLabel>
      <Row>
        <DetailsPageSecondaryLabel>Preço da ação:</DetailsPageSecondaryLabel>
        <DetailsPageDescription>U${data?.sharedPrice}</DetailsPageDescription>
      </Row>
      <Row>
        <DetailsPageSecondaryLabel>Quantidade:</DetailsPageSecondaryLabel>
        <DetailsPageDescription>{data?.shares}</DetailsPageDescription>
      </Row>
      <Divider />
      <DetailsPageLabel>Descrição</DetailsPageLabel>
      <DetailsPageDescription>{data?.description}</DetailsPageDescription>
      <DetailsPageLabel>Categoria</DetailsPageLabel>
      <DetailsPageDescription>{data?.typeName}</DetailsPageDescription>
      <Divider />
      <DetailsPageLabel>Contatos</DetailsPageLabel>
      <DetailsPageButtonContainer>
        <IconButton icon={Icons.twitter()} onPress={() => openExternal("twitter")} disabled={!data?.twitter}/>
        <IconButton icon={Icons.facebook()} onPress={() => openExternal("facebook")} disabled={!data?.facebook}/>
        <IconButton icon={Icons.linkedin()} onPress={() => openExternal("linkedin")} disabled={!data?.linkedin}/>
        <IconButton icon={Icons.phone()} onPress={() => openExternal("phone")} disabled={!data?.phone}/>
        <IconButton icon={Icons.mail()} onPress={() => openExternal("mail")} disabled={!data?.email}/>
      </DetailsPageButtonContainer>
    </DetailsPageContainer>
  </Root>;
};

EnterpriseDetailsPage.options = (props) => ({
  topBar: {
    title: {
      text: "Detalhes",
    },
  },
});

export default EnterpriseDetailsPage;
