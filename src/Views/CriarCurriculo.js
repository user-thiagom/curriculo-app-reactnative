import React from 'react'
import { Alert, ScrollView, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useQuery } from 'react-query'
import CurriculoInfoBasicasForm from '../Components/CurriculoInfoBasicasForm'
import ExpProfissionalCard from '../Components/ExpProfissionalCard'
import FormacoesCard from '../Components/FormacoesCard'
import { FormContext } from '../Providers/form'
import CompetenciasCard from './../Components/CompetenciasCard';

const CriarCurriculo = () => {
    const {curriculoInfoBasica,localizacao,experiencias,formacoes, competencias} = React.useContext(FormContext)
    console.log(curriculoInfoBasica)
    const str = "https://curriculo-api-sin.herokuapp.com/localizacao?curriculo="

    const criar = async ()=>{
        fetch("https://curriculo-api-sin.herokuapp.com/curriculo", {
                method: 'POST',
                body: JSON.stringify(curriculoInfoBasica),
                headers: {"Content-type": "application/json"}
            }).then(res=>res.json()).then(json=>str + json)

        fetch(str, {
                method: 'POST',
                body: JSON.stringify(localizacao),
                headers: {"Content-type": "application/json"}
            }).then(res=>res.json())

    }

    return (
        <ScrollView style={styles.container}>
            <CurriculoInfoBasicasForm/>
            <ExpProfissionalCard/>
            <FormacoesCard/>
            <CompetenciasCard/>
            <View style={styles.buttonView}>
                    <Button mode='contained' color='red' labelStyle={{color: 'white'}} style={styles.button} onPress={criar}>
                    Criar Curriculo
                    </Button>
            </View>
        </ScrollView>
    )
}

export default CriarCurriculo

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000'
    },
    button: {
        width: '50%',
        borderRadius: 20,
    },
    buttonView:{
        alignItems: 'center',
        marginTop:10,
        marginBottom: 10
    }

})