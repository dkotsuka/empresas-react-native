import React from 'react'
import { Text } from 'react-native'
import { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation'
import { Root } from '../../components/root.component'

interface AuthPageProps extends NavigationComponentProps {

}

const AuthPage: NavigationFunctionComponent<AuthPageProps> = (props) => {
    
    return <Root>
        <Text>AUTH PAGE</Text>
    </Root>
}

AuthPage.options = {
    topBar: {
        visible: false
    }
}

export default AuthPage