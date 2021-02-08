import React, {useState} from 'react';
import {
    Navigation,
  NavigationComponentProps,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import {useDispatch} from 'react-redux';
import {Button} from '../../components/button.component';
import {Root} from '../../components/root.component';
import {TextInput} from '../../components/text-input.component';
import {actionLogin, actionLoginError} from '../../redux/reducers/auth-actions';
import {authenticationService} from '../../services/authentication.service';
import {AuthPageContainer, LogoutMessage} from './auth.page.styles';

interface AuthPageProps extends NavigationComponentProps {}

const AuthPage: NavigationFunctionComponent<AuthPageProps> = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('testeapple@ioasys.com.br');
  const [password, setPassword] = useState('12341234');
  const [loading, setLoading] = useState(false);
  const [ message, setMessage ] = useState<string>()

  const login = async () => {
    setLoading(true);
    const {token, client, uid, message} = await authenticationService.login(
      email,
      password,
    );
    setMessage(message)
    if (token && client && uid) {
      dispatch(actionLogin(token, client, uid));
      setLoading(false);
      Navigation.dismissModal(props.componentId)
    } else {
      dispatch(actionLoginError())
    }
  };

  const onChangeText = (text: string, stateSetter: Function) => {
    stateSetter(text);
  };

  return (
    <Root>
      <AuthPageContainer>
        {message && <LogoutMessage >{message}</LogoutMessage>}
        <TextInput
          value={email}
          placeholder="Digite seu e-mail"
          label="email"
          onChangeText={(text) => onChangeText(text, setEmail)}
        />

        <TextInput
          isPassword
          value={password}
          placeholder="Digite sua senha"
          label="password"
          onChangeText={(text) => onChangeText(text, setPassword)}
        />

        <Button text="Login" isLoading={loading} onPress={login} />
      </AuthPageContainer>
    </Root>
  );
};

AuthPage.options = {
  topBar: {
    visible: false,
  },
};

export default AuthPage;
