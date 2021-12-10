import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Navigation from './src/Navigation'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.appbar} statusBarHeight={0}>
        <Appbar.Content title="CurriculoPlus +"/>
      </Appbar.Header>

      <Navigation/>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  appbar: {
    backgroundColor: '#000'
  }
});
