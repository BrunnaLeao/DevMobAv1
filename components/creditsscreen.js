import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function creditsscreen() {
  return (
    <View style={styles.container}>

      

      <Text style={styles.titulo}>Créditos:</Text>
      <Text style={styles.explicacao}>Brunna Vila Chã Leão {'\n'}Matricula: 0050016542</Text>
      <Text style={styles.explicacao}>&</Text>
      <Text style={styles.explicacao}>Walace Lima {'\n '}Matricula: 0050016474 </Text>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    alignItems: 'center',
    fontSize: 20,
    color: '#1AA7EC',
    marginBottom: 20,
    
  },

  explicacao:{
    alignItems: 'center',
    fontSize: 15,
    marginBottom: 50,
    color: '#797EF6'
    
  },

 
});
