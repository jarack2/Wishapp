import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import SignupScreen from './src/screens/SignupScreen';
import Login from './src/screens/Login';
import HomeScreen from './src/screens/HomeScreen';

//import { NavigationContainer } from '@react-navigation/native'
//import { createStackNavigator } from '@react-navigation/stack'

//import { SignIn } from './src/screens/Screens'

//const AuthStack = createStackNavigator();


// export default () => (
//   <NavigationContainer>
//     <AuthStack.Navigator>
//       <AuthStack.Screen name="SignIn" component={SignIn} />
//     </AuthStack.Navigator>
//   </NavigationContainer>
// );

export default function App() {
  
  //return <SignupScreen />;
  //return <Login />;
  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
