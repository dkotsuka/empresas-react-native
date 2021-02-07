import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Icons } from '../assets'
import { IconButton } from './icon-button.component'

interface SearchBarProps {
    onSubmit: (text: string) => void
    placeholder: string
}

export const SearchBar: React.FC<SearchBarProps> = (props) => {
    const { placeholder, onSubmit } = props
    const [searchText, setText] = useState("")

    const onChangeText = (text: string) => setText(text)
    const onPress = () => onSubmit(searchText)

    return <Container>
        <TextInput value={searchText} placeholder={placeholder} onChangeText={onChangeText}/>
        <IconButton icon={Icons.search()} size={24} onPress={onPress}/>
    </Container>
}

const Container = styled.View`
    padding: 12px;
    background-color: white;
    flex-direction: row;
    align-items: center;
`

const TextInput = styled.TextInput`
    flex: 1;
    border-width: 1px;
    border-color: gray;
    border-radius: 4px;
    margin-right: 12px;
    padding-left: 8px;
    height: 30px;
    line-height: 20px;
    font-size: 16px;
`