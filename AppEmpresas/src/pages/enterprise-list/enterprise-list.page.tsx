import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { Navigation, NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation'
import { useSelector } from 'react-redux'
import { PageNames } from '..'
import { Root } from '../../components/root.component'
import { AppReduxState } from '../../redux/components/redux-store'
import { MappedEnterprise } from '../../services/enterprise.mapper'
import { enterpriseService } from '../../services/enterprise.service'

interface EnterpriseListPageProps extends NavigationComponentProps {

}

const EnterpriseListPage: NavigationFunctionComponent<EnterpriseListPageProps> = (props) => {
    const {token, client, uid} = useSelector((state: AppReduxState) => state.user)
    const [list, setList] = useState<MappedEnterprise[]>([])

    useEffect(() => {
        if(!token) {
            Navigation.showModal({component: {name: PageNames.AUTH}})
        } else {
            getData()
        }
    }, [])

    const getData = async () => {
        if( token && client && uid) {
            const { enterprises, types } = await enterpriseService.setCredentials(token, client, uid).list()
            setList(enterprises)
        }
    }

    
    return <Root>
        {list.map(enterprise => <Text>{enterprise.name}</Text>)}
    </Root>
}

EnterpriseListPage.options = {
    topBar: {
        title: {
            text: "Lista de Empresas"
        }
    }
}

export default EnterpriseListPage