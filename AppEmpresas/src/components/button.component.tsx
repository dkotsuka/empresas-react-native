import React from 'react'
import styled from 'styled-components/native'
interface ButtonProps {
    text: string
    onPress?: () => void
    isLoading?: boolean
    fill?: boolean
    secondary?: boolean
}

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <Container 
        onPress={props.onPress} 
        disabled={props.isLoading} 
        fill={!!props.fill}
        secondary={!!props.secondary}>
            {props.isLoading ?
                <ButtonText secondary={!!props.secondary}>Aguarde...</ButtonText>
                : <ButtonText secondary={!!props.secondary}>{props.text}</ButtonText>
            }
        </Container>
    )
}

interface StyledProps {
    fill?: boolean
    secondary?: boolean
}

const Container = styled.TouchableOpacity`
    ${({fill}: StyledProps) => fill && "flex: 1;"}
    background-color: ${({disabled, secondary}) => secondary? "white" : disabled ? "lightgray" : "gray"};
    border-width: ${({secondary}: StyledProps) => secondary ? 1 : 0 }px;
    border-color: gray;
    height: 48px;
    align-items: center;
    justify-content: center;
    margin: 8px;
    border-radius: 8px;
`

const ButtonText = styled.Text`
    font-size: 20px;
    color: ${({secondary}: StyledProps) => secondary ? "gray" : "white" };
`