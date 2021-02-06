import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import styled from 'styled-components/native'

export const Root: React.FC = (props) => {
    return <>
        <StatusBar barStyle='light-content'/>
        <StatusBarBackground>
            <SafeAreaView/>
            <AppBackground>
                {props.children}
            </AppBackground>
        </StatusBarBackground>
    </>
}

const AppBackground = styled.View`
    background-color: whitesmoke;
    flex: 1;
`

const StatusBarBackground = styled.View`
    background-color: gray;
    flex: 1;
`