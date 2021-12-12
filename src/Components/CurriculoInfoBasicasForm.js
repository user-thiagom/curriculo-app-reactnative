import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, TextInput, Title } from 'react-native-paper'
import { FormContext } from '../Providers/form'

const CurriculoInfoBasicasForm = props => {
    const {curriculoInfoBasica, setCurriculoInfoBasica,localizacao,setLocalizacao,} = React.useContext(FormContext)

    function changeNome(text) {
        const copyContext = Object.assign({},curriculoInfoBasica)
        copyContext.nome = text
        setCurriculoInfoBasica(copyContext)
    }

    function changeProfissao(text) {
        const copyContext = Object.assign({},curriculoInfoBasica)
        copyContext.profissao = text
        setCurriculoInfoBasica(copyContext)
    }

    function changeTelefone(text) {
        const copyContext = Object.assign({},curriculoInfoBasica)
        copyContext.telefone = text
        setCurriculoInfoBasica(copyContext)
    }

    function changeEmail(text) {
        const copyContext = Object.assign({},curriculoInfoBasica)
        copyContext.email = text
        setCurriculoInfoBasica(copyContext)
    }

    function changeLinkedin(text) {
        const copyContext = Object.assign({},curriculoInfoBasica)
        copyContext.linkedin = text
        setCurriculoInfoBasica(copyContext)
    }

    function changeGithub(text) {
        const copyContext = Object.assign({},curriculoInfoBasica)
        copyContext.github = text
        setCurriculoInfoBasica(copyContext)
    }

    function changePais(text) {
        const copyContext = Object.assign({},localizacao)
        copyContext.pais = text
        setLocalizacao(copyContext)
    }

    function changeUf(text) {
        const copyContext = Object.assign({},localizacao)
        copyContext.uf = text
        setLocalizacao(copyContext)
    }

    function changeCidade(text) {
        const copyContext = Object.assign({},localizacao)
        copyContext.cidade = text
        setLocalizacao(copyContext)
    }

    function changeResumo(text) {
        const copyContext = Object.assign({},curriculoInfoBasica)
        copyContext.resumo = text
        setCurriculoInfoBasica(copyContext)
    }

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Title style={styles.text}>Nome</Title>
                    <TextInput value={curriculoInfoBasica.nome} onChangeText={changeNome} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>

                    <Title style={styles.text}>Profissão</Title>
                    <TextInput value={curriculoInfoBasica.profissao} onChangeText={changeProfissao} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>

                    <Title style={styles.text}>Telefone</Title>
                    <TextInput value={curriculoInfoBasica.telefone} onChangeText={changeTelefone} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>

                    <Title style={styles.text}>Email</Title>
                    <TextInput value={curriculoInfoBasica.email} onChangeText={changeEmail} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>

                    <Title style={styles.text}>Linkedin</Title>
                    <TextInput value={curriculoInfoBasica.linkedin} onChangeText={changeLinkedin} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>

                    <Title style={styles.text}>Github</Title>
                    <TextInput value={curriculoInfoBasica.github} onChangeText={changeGithub} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>

                    <Title style={styles.text}>País</Title>
                    <TextInput value={localizacao.pais} onChangeText={changePais} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>

                    <Title style={styles.text}>UF</Title>
                    <TextInput value={localizacao.uf} onChangeText={changeUf} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>

                    <Title style={styles.text}>Cidade</Title>
                    <TextInput value={localizacao.cidade} onChangeText={changeCidade} style={styles.input} underlineColor='purple' activeUnderlineColor='red'/>
                </Card.Content>

                <Card.Content style={styles.content}>
                    <Title style={styles.text}>Resumo</Title>
                    <TextInput value={curriculoInfoBasica.resumo} onChangeText={changeResumo} style={styles.inputResumo} underlineColor='purple' activeUnderlineColor='red' />
                </Card.Content>
            </Card>
        </View>
    )
}

export default CurriculoInfoBasicasForm

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000',
        alignItems: 'center'
    },
    card: {
        backgroundColor: '#000',
        width: '98%',
        alignContent: 'center'
    },
    input: {
        width: '70%',
        height: 50,
        marginBottom: 10
    },
    inputResumo: {
        width: '70%',
        height: 150,
    },
    content: {
        backgroundColor: '#1E1E1E',
        width: '100%',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 10
    },
    text: {
        color:'#fff',
        marginBottom: 5,
        fontSize: 15
    }
})