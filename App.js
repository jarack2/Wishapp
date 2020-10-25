import React from 'react';
import { StyleSheet } from 'react-native';

import SignUpScreen from './src/screens/SignupScreen';
import Login from './src/screens/Login';
import HomeScreen from './src/screens/HomeScreen';
import LandingPage from './src/screens/LandingPage';
import WishScreen from './src/screens/WishScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import UserProvider from "./src/providers/UserProvider";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();


function TabNav() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="LandingPage" component={LandingPage} options={{tabBarLabel: 'Home'}}/>
        <Tab.Screen name="WishScreen" component={WishScreen} options={{tabBarLabel: 'Wishes'}}/>
      </Tab.Navigator>
  );
}

export default function App() {
  
  return (
    <UserProvider>
    <NavigationContainer>
      <AuthStack.Navigator>        
        <AuthStack.Screen name="Home" component={HomeScreen} options={{title: "Home", headerShown: false}}/>
        <AuthStack.Screen name="Sign Up" component={SignUpScreen} options={{title: "Sign Up", headerShown: false}}/>
        <AuthStack.Screen name="Login" component={Login} options={{title: "Login", headerShown: false}} />        
        <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <AuthStack.Screen name="Wishful" component={TabNav} options={{title: "Tab Nav", headerShown: false}} />
      </AuthStack.Navigator>
    </NavigationContainer>   
    </UserProvider>
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
