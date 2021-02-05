import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'

export const Root: React.FC = (props) => {
    return <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            {props.children}
        </SafeAreaView>
    </>
}