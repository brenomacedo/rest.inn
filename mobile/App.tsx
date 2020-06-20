import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MainApp from './src/App'

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <MainApp />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
