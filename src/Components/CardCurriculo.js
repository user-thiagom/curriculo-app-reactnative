import React, {useState} from 'react'
import { Pressable, StyleSheet, View,  } from 'react-native'
import { Card, Modal, Paragraph, Portal, Provider, Text, Title } from 'react-native-paper'
import { useQuery } from 'react-query'

export default ({dados, funcOnPress}) => {

    const pressionado = ()=>{
        funcOnPress(dados.id)
    }


    return (
        <View style={styles.container}>            
            <Pressable onPress={pressionado} style={styles.pressable}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.text}>{dados.nome}</Title>
                        <Text style={styles.text}>{dados.profissao}</Text>
                        <Text style={styles.text}>{dados.email}</Text>
                        <Text style={styles.text}>{dados.telefone}</Text>
                        <Paragraph style={styles.text}>{dados.resumo}</Paragraph>
                    </Card.Content>
                </Card>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#1E1E1E',
        width: '98%',
        borderRadius: 20,
        marginBottom: 10,
    },
    text:{
        color: '#fff',
        textAlign: 'center'
    },
    container: {
        backgroundColor: '#000',
        alignItems: 'center'
    },
    pressable: {
        width: '98%',
        backgroundColor: '#000',
        alignItems: 'center'
    }
})
