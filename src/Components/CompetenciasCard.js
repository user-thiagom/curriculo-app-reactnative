import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Card, TextInput, Title } from 'react-native-paper'
import { FormContext } from '../Providers/form'

const CompetenciasCard = () => {
    const {competencias,setCompetencias} = React.useContext(FormContext)

    function changeCompetencia(text) {
        const copyContext = Object.assign({},competencias)
        copyContext.competencia = text
        setFormacoes(setCompetencias)
    }

    function changeDescricao(text) {
        const copyContext = Object.assign({},competencias)
        copyContext.descricao = text
        setFormacoes(setCompetencias)
    }

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Title style={styles.title}>Competências</Title>
                <Card.Content style={styles.content}>
                    <Title style={styles.text}>Competência</Title>
                    <TextInput value={competencias.competencia} onChangeText={changeCompetencia} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>

                    <Title style={styles.text}>Descrição</Title>
                    <TextInput value={competencias.descricao} onChangeText={changeDescricao} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>
                </Card.Content>
            </Card>
        </View>
    )
}

export default CompetenciasCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        alignItems: 'center'
    },
    card: {
        backgroundColor: '#1E1E1E',
        width: '98%',
        borderRadius: 20,
        alignContent: 'center',
        marginBottom: 10
    },
    input: {
        width: '70%',
        height: 50,
        marginBottom: 10
    },
    content: {
        backgroundColor: '#1E1E1E',
        width: '100%',
        alignItems: 'center',
        borderRadius: 20,
    },
    text: {
        color:'#fff',
        marginBottom: 5,
        fontSize: 15
    },
    title:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    }
})