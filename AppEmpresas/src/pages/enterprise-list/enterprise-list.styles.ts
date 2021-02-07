import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import { MappedEnterprise } from '../../services/enterprise.mapper'

export const EnterpriseList = styled(FlatList as new () => FlatList<MappedEnterprise>)`

`