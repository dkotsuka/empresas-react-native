import React from 'react'
import { Navigation, NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation'
import { useSelector } from 'react-redux'
import { PageNames } from '..'
import { Root } from '../../components/root.component'
import { AppReduxState } from '../../redux/components/redux-store'

interface EnterprizeListPageProps extends NavigationComponentProps {

}

const EnterprizeListPage: NavigationFunctionComponent<EnterprizeListPageProps> = (props) => {
    const user = useSelector((state: AppReduxState) => state.user)

    if(!user.token) {
        Navigation.showModal({component: {name: PageNames.AUTH}})
    }
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