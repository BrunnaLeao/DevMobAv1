import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import home from './components/home';
import creditsscreen from './components/creditsscreen';
import playscreen from './components/playscreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
        name = "Main"
        component={home}
        options = {{Title: "welcome"}}>
        </Stack.Screen>

        <Stack.Screen 
        name = "Credits" 
        component = {creditsscreen} />

        <Stack.Screen
        name = "Play"
        component = {playscreen} />

       

      </Stack.Navigator>

     
    </NavigationContainer>
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
