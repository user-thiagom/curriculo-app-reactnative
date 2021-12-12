import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Card, TextInput, Title } from 'react-native-paper'
import { FormContext } from '../Providers/form'

const FormacoesCard = () => {
    const {formacoes,setFormacoes} = React.useContext(FormContext)

    function changeInstituicao(text) {
        const copyContext = Object.assign({},formacoes)
        copyContext.instituicao = text
        setFormacoes(copyContext)
    }

    function changeCurso(text) {
        const copyContext = Object.assign({},formacoes)
        copyContext.curso = text
        setFormacoes(copyContext)
    }

    function changeAnoI(text) {
        const copyContext = Object.assign({},formacoes)
        copyContext.anoInicio = text
        setFormacoes(copyContext)
    }

    function changeAnoF(text) {
        const copyContext = Object.assign({},formacoes)
        copyContext.anoFim = text
        setFormacoes(copyContext)
    }

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Title style={styles.title}>Formações Acadêmicas</Title>
                <Card.Content style={styles.content}>
                    <Title style={styles.text}>Instituição</Title>
                    <TextInput value={formacoes.instituicao} onChangeText={changeInstituicao} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>

                    <Title style={styles.text}>Curso</Title>
                    <TextInput value={formacoes.curso} onChangeText={changeCurso} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>

                    <Title style={styles.text}>Ano de Inicio</Title>
                    <TextInput value={formacoes.anoInicio} onChangeText={changeAnoI} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>

                    <Title style={styles.text}>Ano de Fim</Title>
                    <TextInput value={formacoes.anoFim} onChangeText={changeAnoF} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>
                </Card.Content>
            </Card>
        </View>
    )
}

export default FormacoesCard

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