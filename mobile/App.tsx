import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import MainApp from './src/App'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <MainApp />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
