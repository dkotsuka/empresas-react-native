import React from 'react'
import styled from 'styled-components/native'

interface TextInputProps {
    label?: string
    placeholder?: string
    onChangeText?: (text:string) => void
    value?: string
    isPassword?: boolean
}

export const TextInput: React.FC<TextInputProps> = (props) => {
    return <Container>
        {props.label && 
            <LabelContainer>
                <LabelBackground>
                    <Label>{props.label}</Label>
                </LabelBackground>
            </LabelContainer>
        }
        
        <Input value={props.value} 
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            secureTextEntry={props.isPassword}
            autoCapitalize="none"/>
    </Container>
}

const Label = styled.Text`
    font-size: 14px;
    margin-top: -7px;
    font-weight: bold;
    color: gray;
`
const LabelContainer = styled.View`
    flex-direction: row;
`

const LabelBackground = styled.View`
    background-color: white;
    margin-top: -5px;
    margin-bottom: -11px;
    padding-horizontal: 4px;
    margin-left: 16px;
`

const Input = styled.TextInput`
    margin: 8px;
    height: 24px;
    line-height: 24px;
    font-size: 18px;
`

const Container = styled.View`
    background-color: white;
    border-radius: 8px;
    border-color: grey;
    border-width: 1px;
    margin: 8px;
    padding: 4px;
`