import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Curriculos from './../Views/Curriculos';
import CriarCurriculo from './../Views/CriarCurriculo';

const Tab = createMaterialBottomTabNavigator()

export default props => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Curriculos" component={Curriculos}/>
            <Tab.Screen name="Criar Curriculo" component={CriarCurriculo}/>
        </Tab.Navigator>
    )
}


