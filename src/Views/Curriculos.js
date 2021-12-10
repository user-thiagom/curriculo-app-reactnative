import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Card, Paragraph, Title } from 'react-native-paper'

const Curriculos = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>Tela dos Curriculos</Text>
            <Card style={styles.card}>
                <Card.Content>
                    <Title style={styles.text}>Oi casada</Title>
                    <Paragraph>kkkk casadas...</Paragraph>
                </Card.Content>
            </Card>
        </ScrollView>
    )
}

export default Curriculos

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        
    },
    text: {
        color:"#fff"
    },
    card: {
        backgroundColor: '#1E1E1E',
        width: '95%',
        
    }
})