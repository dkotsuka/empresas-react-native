import React from 'react'
import styled from 'styled-components/native'
import { Card } from '../../components/card.component'
import { MappedEnterprise } from '../../services/enterprise.mapper'

interface EnterpriseItemProps {
    item: MappedEnterprise,
    onPress?: () => void
}

export const EnterpriseItem: React.FC<EnterpriseItemProps> = (props) => {
    return <Card onPress={props.onPress}>
        <Picture source={{uri: props.item.photo}} resizeMode="cover"/>
        <TitleContainer>
            <Title>{props.item.name}</Title>
            <SubTitleContainer>
                <Address>{props.item.city}, {props.item.country}</Address>
                <SharePrice>Preço: U${props.item.sharedPrice}</SharePrice>
            </SubTitleContainer>
        </TitleContainer>
    </Card>
}

const TitleContainer = styled.View`
    margin-top: -58px;
    padding-left: 8px;
    padding-vertical: 4px;
    background-color: rgba(0,0,0,0.4);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`

const SubTitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-right: 8px;
`

const Title = styled.Text`
    height: 30px;
    line-height: 30px;
    font-size: 24px;
    color: white;
`

const Address = styled.Text`
    font-size: 16px;
    line-height: 20px;
    height: 20px;
    color: white;
`

const SharePrice = styled.Text`
    font-size: 18px;
    line-height: 20px;
    height: 20px;
    font-weight: bold;
    color: cornsilk;
`

const Picture = styled.Image`
    height: 200px;
    border-radius: 8px;
`