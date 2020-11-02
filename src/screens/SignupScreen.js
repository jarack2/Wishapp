import React, { useState } from 'react';
import { ActivityIndicator, ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { TextInput, BackButton } from '../components';

import firebase from '../../firebaseConfig';
import 'firebase/firestore';
 
const createUser = (email, password) => {  
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch((error) => { 
    alert("There was an error: " + error.message);
    console.log(error.code + ": " + error.message);
  });
}

const SignupScreen = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, seterrorMessage] = useState();
  const [spinner, setSpinner] = useState(false);
  
  return (
    <>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.image}
      >
        <BackButton 
          onPress={() => props.navigation.navigate('Home')}
       />
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : undefined}
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
            onChangeText={(newEmail) => setEmail(newEmail)}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#838383"
            onChangeText={(newPassword) => setPassword(newPassword)}
          />
          <TouchableHighlight
            style={styles.buttons}
            color="#2196F3"
            onPress={() => {
              createUser(email, password);
              setSpinner(true);
              
              firebase.auth().onAuthStateChanged(user => {
                if (user) {
                  props.navigation.navigate('Wishful');
                } else {
                  seterrorMessage("There was an error creating your account. Please try again.");
                  // setSpinner(false);
                }
              });         
            }} 
          >
            <Text style={styles.buttonLabels}>Sign Up</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
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
    fontWeight: 100,
    textAlign: 'center',
    fontSize: 24,
  },
  title: {
    fontSize: '48px',
    color: 'white',
    marginVertical: '80px',
    textAlign: 'center',
  },
  error: {
    color: 'white',
    backgroundColor: 'red',
    fontWeight: 100,
    textAlign: 'center',
    fontSize: 24,
  },
  spinner: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
});

export default SignupScreen;
