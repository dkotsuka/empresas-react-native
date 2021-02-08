import React from 'react'
import styled from 'styled-components/native'

interface EmptyEnterpriseListProps {
    isLoading: boolean
}

export const EmptyEnterpriseList: React.FC<EmptyEnterpriseListProps> = ({ isLoading }) => {
    return <Container>
        {isLoading ? 
            <TextH2>Carregando...</TextH2>
            : <>
                <TextH1>Oops..</TextH1>
                <TextH2>Não encontramos nenhum resultado para sua busca.</TextH2>
            </>
        }
    </Container>
}

const Container = styled.View`
    margin-vertical: 150px;
    margin-horizontal: 16px;
`

const TextH1 = styled.Text`
    font-size: 64px;
    font-weight: bold;
    text-align: center;
`
const TextH2 = styled.Text`
    margin-top: 30px;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: gray;
`