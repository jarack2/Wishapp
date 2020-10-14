import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import SignUpScreen from './src/screens/SignupScreen';
import Login from './src/screens/Login';
import HomeScreen from './src/screens/HomeScreen';
import LandingPage from './src/screens/LandingPage';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Sign Up" component={SignUpScreen} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="LandingPage" component={LandingPage} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <AuthStack.Navigator>
        <AuthStack.Screen name="TabNav" component={TabNav} />
        <AuthStack.Screen name="Home" component={HomeScreen} />
        <AuthStack.Screen name="Sign Up" component={SignUpScreen} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="LandingPage" component={LandingPage} />
      </AuthStack.Navigator> */}
      <TabNav />
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
