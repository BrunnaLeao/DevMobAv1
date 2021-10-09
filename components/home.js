import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';





export default function homescreen({navigation}) {
  return (
    <View style={styles.container}>

      

      <Text style={styles.titulo}>Roll the Dice!</Text>
      <Text style={styles.explicacao}>Tente sua sorte para ganhar de mim!{'\n'} clique no botão para rolar um dado{'\n'} quem tirar o maior número é o vencedor!</Text>



      <TouchableOpacity style={styles.playbutton} onPress={()=> navigation.navigate('Play')}>
        <Text style={styles.starttext}>Play</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.creditsbutton} onPress={() => navigation.navigate('Credits')}>
        <Text style={styles.starttext}>Credits</Text>
      </TouchableOpacity>

      
      

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

  starttext: {
    alignItems: 'center',
    fontSize: 30,
    color: '#4ADEDE',
  },

  playbutton: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    borderRadius: 20,
    height: 80,
    width: 160,
    padding: 20,
    borderColor: '#1E2F97',
    borderWidth: 1,
    marginBottom: 10,
  },

  creditsbutton: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    borderRadius: 20,
    height: 80,
    width: 160,
    padding: 20,
    borderColor: '#1E2F97',
    borderWidth: 1,
  },
});
