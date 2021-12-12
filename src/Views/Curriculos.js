import React, {useEffect, useState} from 'react'
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import { ActivityIndicator, Modal, Portal, Provider } from 'react-native-paper';
import { useQuery } from 'react-query'
import CardCurriculo from '../Components/CardCurriculo'
import CurriculoInfo from '../Components/CurriculoInfo';
import { carregarCurriculos, carregarCurriculoPorId } from '../Api';

const Curriculos = () => {
    const curriculo = useQuery('curriculos', carregarCurriculos)
    const [visible,setVisible] = useState(false)
    const [id,setId] = useState(0)
    

    const showInfo = (props) => {
        setId(props)
        setVisible(true)
    }

    const hideInfo = () => setVisible(false);

    
    if (curriculo.isLoading) {
        return <ActivityIndicator animating={true}/>
    }

    if (curriculo.isError) {
        return (
            <View>
                <Text>{curriculo.error}</Text>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideInfo} contentContainerStyle={styles.curriculoInfo}>
                        <CurriculoInfo id={id}/>
                    </Modal>
                </Portal>
            

            {curriculo.data.map(
                cur => <CardCurriculo dados={cur} key={cur.id} funcOnPress={showInfo}/>
            )}
            </Provider>
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
    curriculoInfo: {
        backgroundColor: '#1E1E1E',
        height: "100%",
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})