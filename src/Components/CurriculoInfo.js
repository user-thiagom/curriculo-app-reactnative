import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { ActivityIndicator, Avatar, Divider, Headline, Modal, Portal, Provider, Text, Title } from 'react-native-paper'
import { useQuery } from 'react-query'
import CardGenerico from './CardGenerico';

const CurriculoInfo = ({id}) => {
    const stringFetch = "https://curriculo-api-sin.herokuapp.com/curriculo/" + id
    const curriculo = useQuery('curriculo', ()=>{
        return fetch(stringFetch).then((res)=>res.json())
    })

    if (curriculo.isLoading) {
        return <ActivityIndicator animating={true}/>
    }

    if (curriculo.isError) {
        return <Text>Erro {curriculo.error}</Text>
    }

    if (curriculo.isSuccess) {
        console.warn(curriculo.data)
    }

    return (
        <View style={styles.container}>
            <Avatar.Text size={100} label={curriculo.data.nome.substr(0,2)}/>
            <Title style={[styles.text,styles.textTitulo]}>{curriculo.data.nome}</Title>
            <Text style={[styles.text,styles.textSub]}>{curriculo.data.profissao}</Text>
            <Text style={styles.text}>{curriculo.data.localizacao.pais}, {curriculo.data.localizacao.uf}, {curriculo.data.localizacao.cidade}</Text>
            <Text style={styles.text}>{curriculo.data.email}</Text>
            <Text style={styles.text}>{curriculo.data.telefone}</Text>
            <View style={styles.divider}/>
            
            <View style={styles.card}>
                <Text style={[styles.text, styles.textSub]}>Resumo</Text>
                <Text style={styles.text}>{curriculo.data.resumo}</Text>
            </View>
            
            <View style={styles.card}>
                <Text style={[styles.text, styles.textSub]}>Experiencias</Text>
                {curriculo.data.experiencias.map(x=>{
                    <CardGenerico dados={x} type='e'/>
                })}
            </View>
        </View>
    )
}

export default CurriculoInfo

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1E1E1E',
        width: '98%',
        alignItems:'center',
        marginTop: 5
    },
    text: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center'
    },
    textTitulo: {
        fontSize: 22
    },
    textSub: {
        fontSize: 20
    },
    divider: {
        height: 5,
        width: 120,
        backgroundColor:'#fff',
        borderRadius: 20,
        marginVertical: 10
    },
    card: {
        backgroundColor: '#161515',
        width: '98%',
        alignItems: 'center',
        borderRadius: 20,
    }
})