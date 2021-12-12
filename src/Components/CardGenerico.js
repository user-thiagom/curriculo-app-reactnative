import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CardGenerico = ({type, dados}) => {
    return (
        <View style={styles.container}>
            <Text>Olá</Text>
        </View>
    )
}

export default CardGenerico

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#354'
    },
    text: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center'
    }
})