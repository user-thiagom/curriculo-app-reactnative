import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { QueryClientProvider, QueryClient } from 'react-query';
import Navigation from './src/Navigation'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
        <Appbar.Header style={styles.appbar} statusBarHeight={0}>
          <Appbar.Content title="CurriculoPlus +"/>
        </Appbar.Header>

        <Navigation/>
        <StatusBar/>
        </SafeAreaView>
      </SafeAreaProvider>
    </QueryClientProvider>
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
