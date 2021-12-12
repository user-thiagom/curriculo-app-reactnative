import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Card, TextInput, Title } from 'react-native-paper'
import { FormContext } from '../Providers/form'

const ExpProfissionalCard = () => {
    const {experiencias,setExperiencias} = React.useContext(FormContext)

    function changeEmpresa(text) {
        const copyContext = Object.assign({},experiencias)
        copyContext.nomeDaEmpresa = text
        setExperiencias(copyContext)
    }

    function changeCargo(text) {
        const copyContext = Object.assign({},experiencias)
        copyContext.cargo = text
        setExperiencias(copyContext)
    }

    function changeAnoI(text) {
        const copyContext = Object.assign({},experiencias)
        copyContext.anoComeco = text
        setExperiencias(copyContext)
    }

    function changeAnoF(text) {
        const copyContext = Object.assign({},experiencias)
        copyContext.anoFim = text
        setExperiencias(copyContext)
    }

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Title style={styles.title}>Experiências Profissional</Title>
                <Card.Content style={styles.content}>
                    <Title style={styles.text}>Empresa</Title>
                    <TextInput value={experiencias.nomeDaEmpresa} onChangeText={changeEmpresa} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>

                    <Title style={styles.text}>Cargo</Title>
                    <TextInput value={experiencias.cargo} onChangeText={changeCargo} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>

                    <Title style={styles.text}>Ano de Inicio</Title>
                    <TextInput value={experiencias.anoComeco} onChangeText={changeAnoI} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>

                    <Title style={styles.text}>Ano de Fim</Title>
                    <TextInput value={experiencias.anoFim} onChangeText={changeAnoF} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>
                </Card.Content>
            </Card>
        </View>
    )
}

export default ExpProfissionalCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        alignItems: 'center',
        marginBottom: 10
    },
    card: {
        backgroundColor: '#1E1E1E',
        width: '98%',
        borderRadius: 20,
        alignContent: 'center'
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