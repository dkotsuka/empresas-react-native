import React, {useEffect, useState} from 'react';
import {
  Navigation,
  NavigationComponentProps,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import {useDispatch, useSelector} from 'react-redux';
import {PageNames} from '..';
import { Button } from '../../components/button.component';
import {Root} from '../../components/root.component';
import { Row } from '../../components/row.component';
import {AppReduxState} from '../../redux/components/redux-store';
import { actionLogout } from '../../redux/reducers/auth-actions';
import { GreetingsText, InfoText, MainPageContainer } from './main-page.styles';


interface MainPageProps extends NavigationComponentProps {}

const MainPage: NavigationFunctionComponent<MainPageProps> = (
  props,
) => {
  const { uid } = useSelector( (state: AppReduxState) => state.user );
  const dispatch = useDispatch()

  const onPressLogin = () => {
    Navigation.showModal({component: {name: PageNames.AUTH}});
  }

  const onPressLogout = () => {
    dispatch(actionLogout())
  }

  const onPressEnterpriseList = () => {
    Navigation.push(props.componentId, {component: {name: PageNames.ENTERPRISE_LIST}})
  }

  return (
    <Root>
      <MainPageContainer>
        {uid && <>
            <GreetingsText>{`Olá, ${uid.split("@")[0]}!`}</GreetingsText>
            <InfoText>{`Logado como ${uid}`}</InfoText>
            <Button text="Ver empresas" onPress={onPressEnterpriseList}/>
            <Button text="Logout" onPress={onPressLogout} secondary/>
        </>}

        {!uid && <>
            <GreetingsText>{"Bem vindo\nao AppEmpresas!"}</GreetingsText>
            <InfoText>Para prosseguir, é necessário realizar o login.</InfoText>
            <Row>
                <Button text="Login" fill onPress={onPressLogin}/>
            </Row>
        </>}
          
      </MainPageContainer>
    </Root>
  );
};

MainPage.options = {
    topBar: {
        visible: false,
      },
};

export default MainPage;
