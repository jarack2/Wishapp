import React, { useState } from 'react';
import { 
  ActivityIndicator,
  ImageBackground,
  StyleSheet, 
  Text,
  TouchableHighlight,
  TouchableOpacity, 
  View
} from 'react-native';

import {
  TextInput, 
  BackButton
} from '../components';

import firebase from '../../firebaseConfig';
import 'firebase/firestore';

const getUserData = (email, password) => {  
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch((error) => {
    alert("There was an error: " + error.message);
    console.log(error.code + ": " + error.message);
  });
}

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, seterrorMessage] = useState();
  const [spinner, setSpinner] = useState(false);
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.image}
      >
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        <BackButton 
         onPress={() => props.navigation.navigate('Home')}
        />
        <Text style={styles.title}>WishApp</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
           {spinner ? <ActivityIndicator size="large" color="#00ff00" style={styles.spinner}/> : undefined}
        <TextInput
         placeholder="Email"
         placeholderTextColor="#838383"
         onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#838383"
          onChangeText={(text) => setPassword(text)}
        />
       <View style={styles.forgotPassword}>
         <TouchableOpacity onPress={() => props.navigation.navigate('ForgotPassword')}>
         <Text style={styles.label}>Forgot your password?</Text>
         </TouchableOpacity>
        </View>

          <TouchableHighlight
            overlayColor="#FFFFFF"
            style={styles.buttons}
            onPress={() => {
              getUserData(email, password);
              setSpinner(true);
              firebase.auth().onAuthStateChanged(user => {
                if (user) {
                  props.navigation.navigate('Wishful');
                } else {
                  // seterrorMessage("An error has occurred. Please try again.");
                  // setSpinner(false);
                }
              });         
            }} 
          >
            <Text style={styles.buttonLabels}>Login</Text>
          </TouchableHighlight>
          {/* <TouchableHighlight onPress={() => firebase.auth().signOut()}>
          <Text style={styles.buttonLabels}>Logout</Text> 
          </TouchableHighlight> */}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 48,
    color: 'white',
    textAlign: 'center', 
    marginVertical: 80,
    borderColor: 'red'
  },
  label: {
    color: 'red',
  },
  forgotPassword: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 24,
  },
  buttons: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonLabels: {
    color: 'white',
    fontWeight: '100',
    textAlign: 'center',
    fontSize: 24,
  },
  container: {
    flex: 1
  },
  error: {
    color: 'white',
    backgroundColor: 'red',
    fontWeight: '100',
    textAlign: 'center',
    fontSize: 24,
  },
});
    
export default Login;