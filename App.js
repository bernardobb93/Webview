import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
    <WebView 
    source={{ html: `
    <html>
    <head>
    <meta name="viewport" content="width=device-width", initial-scale=1.0, maximum-scale=1.0>
    </head>
      <body>
      <style>
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }
      .btn{
        heidht:20px;
        width:100%;
        background-color:#069;
        text-align:center;
        color:white;
      }
      
      </style>
      <div id="btn" class="btn">Clique aqui</div>
      <script>
      var el=document.getElementById('btn');
      el.addEventListener('click',()=>{
        alert('Clicou!');
      });
      </script>
      </body>
    </html>
    ` }}
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
