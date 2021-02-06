import React from 'react'
import { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation'
import { Root } from '../../components/root.component'

interface EnterprizeListPageProps extends NavigationComponentProps {

}

const EnterprizeListPage: NavigationFunctionComponent<EnterprizeListPageProps> = (props) => {
    return <Root></Root>
}

EnterprizeListPage.options = {
    topBar: {
        title: {
            text: "Lista de Empresas"
        }
    }
}

export default EnterprizeListPage