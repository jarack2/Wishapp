import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import SignUpScreen from './src/screens/SignupScreen';
import Login from './src/screens/Login';
import HomeScreen from './src/screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator></AuthStack.Navigator>
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
