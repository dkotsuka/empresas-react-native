import styled from 'styled-components/native'

export const DetailsPageContainer = styled.ScrollView`
    background-color: white;
`

const BaseText = styled.Text`
    margin-horizontal: 16px;
    margin-bottom: 8px;
`

export const DetailsPageTitle = styled(BaseText)`
    font-size: 24px;
    margin-top: 16px;
    font-weight: bold;
`

export const DetailsPageDescription = styled(BaseText)`
    font-size: 16px;
`

export const DetailsPageAddress = styled(BaseText)`
    font-size: 16px;
    margin-top: -4px;
    color: gray;
`

export const DetailsPageLabel = styled(BaseText)`
    font-size: 14px;
    font-weight: bold;
    margin-top: 16px;
    color: gray;
`

export const DetailsPageSecondaryLabel = styled.Text`
    margin-left: 16px;
    font-size: 16px;
    color: gray;
`

export const DetailsPageImage = styled.Image`
    height: 250px;
`

export const DetailsPageButtonContainer = styled.View`
    margin-horizontal: 16px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`