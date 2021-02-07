import React from 'react'
import { ImageSourcePropType } from 'react-native'
import styled from 'styled-components/native'

interface IconButtonProps {
    icon: ImageSourcePropType
    onPress?: () => void
    size?: number
    disabled?: boolean
}

export const IconButton: React.FC<IconButtonProps> = (props) => {
    const {icon, size, disabled, onPress} = props
    return <Container onPress={onPress} disabled={disabled}>
        <Icon source={icon} size={size} disabled={disabled}/>
    </Container>
}

const Container = styled.TouchableOpacity`

`
interface IconProps {
    size?: number
    disabled?: boolean
}
const Icon = styled.Image`
    height: ${({size}: IconProps) => size ? size : 50}px;
    width: ${({size}: IconProps) => size ? size : 50}px;
    opacity: ${({disabled}: IconProps) => disabled ? 0.2 : 1};
`