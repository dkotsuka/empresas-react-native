import React from "react"
import styled from "styled-components/native"

interface ToggleButton {
    onPress: () => void
    isActive?: boolean
    text: string
}

export const ToggleButton: React.FC<ToggleButton> = (props) => {
    const { onPress, isActive, text } = props
    return <ToggleButtonContainer onPress={onPress} isActive={isActive}>
        <ToggleButtonText isActive={isActive}>{text}</ToggleButtonText>
    </ToggleButtonContainer>
}

interface StyledProps {
    isActive?: boolean
}
const ToggleButtonContainer = styled.TouchableOpacity`
    border-color: gray;
    background-color: ${({isActive}: StyledProps) => isActive ? "gray" : "white"};
    border-width: 1px;
    padding-horizontal: 16px;
    border-radius: 16px;
    height: 32px;
    align-items: center;
    justify-content: center;
    margin: 4px;
`

const ToggleButtonText = styled.Text`
    color: ${({isActive}: StyledProps) => isActive ? "white" : "gray"};
`