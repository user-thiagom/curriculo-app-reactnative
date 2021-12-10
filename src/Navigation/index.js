import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Tab from './Tab'

const index = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Tab/>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default index
