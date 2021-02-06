import React from 'react'
import styled from 'styled-components/native'
interface ButtonProps {
    text: string
    onPress?: () => void
    isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = (props) => {
    return <Container onPress={props.onPress} disabled={props.isLoading}>
        {props.isLoading ?
            <ButtonText>loading</ButtonText>
            : <ButtonText>{props.text}</ButtonText>
        }
    </Container>
}

const Container = styled.TouchableOpacity`
    background-color: ${({disabled}) => disabled ? "lightgray" : "gray"};
    height: 48px;
    align-items: center;
    justify-content: center;
    margin: 8px;
    border-radius: 8px;
`

const ButtonText = styled.Text`
    font-size: 20px;
    color: white;
`