import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
    <WebView 
    source={{ uri: 'https://github.com/bernardobb93'}}
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
