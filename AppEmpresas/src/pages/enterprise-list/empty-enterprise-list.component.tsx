import React from 'react'
import styled from 'styled-components/native'

export const EmptyEnterpriseList: React.FC = (props) => {
    return <Container>
        <TextH1>Oops..</TextH1>
        <TextH2>Não encontramos nenhum resultado para sua busca.</TextH2>
    </Container>
}

const Container = styled.View`
    margin-vertical: 50px;
    margin-horizontal: 16px;
`

const TextH1 = styled.Text`
    font-size: 64px;
    font-weight: bold;
`
const TextH2 = styled.Text`
    margin-top: 30px;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: gray;
`