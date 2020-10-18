import React, { useEffect, useState } from 'react';
import { Button, Text, View, ImageBackground, StyleSheet, TouchableHighlight } from 'react-native';
import { TextInput, BackButton } from '../components';

import firebase from '../../firebaseConfig';
import 'firebase/firestore';
 
const createUser = (email, password) => {  
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch((error) => { 
    alert("There was an error: " + error.message);
    console.log(error.code + ": " + error.message);
  });
  
  if (firebase.auth().currentUser) return true;
  else return false;
}

const SignupScreen = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, seterrorMessage] = useState();
  
  useEffect(() => {
    if (firebase.auth().currentUser) {
      firebase.auth().signOut().catch((error) => {
        alert("There was an error: " + error.message);
        console.log(error.code + ": " + error.message);
      });
    }
  });
  
  return (
    <>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.image}
      >
        <BackButton 
         onPress={() => props.navigation.navigate('Home')}
       />
        <Text style={styles.title}>WishApp</Text>
        {errorMessage ?
          <Text style={styles.error}>{errorMessage}</Text> : null}
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
           <TextInput
            placeholder="Email..."
            placeholderTextColor="#dfdfdf"
            onChangeText={(newEmail) => setEmail(newEmail)}
          />
          <TextInput
            secureTextEntry
            placeholder="Password..."
            placeholderTextColor="#dfdfdf"
            onChangeText={(newPassword) => setPassword(newPassword)}
          />
          <TouchableHighlight
            style={styles.buttons}
            color="#2196F3"
            onPress={() => {
              if (createUser(email, password)) {
                props.navigation.navigate('Wishful');            
              }
              else {
                seterrorMessage("There was an error creating your account. Please try again.");
              }
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
    margin: '48px',
    textAlign: 'center',
  },
  success: {
    fontWeight: 100,
    textAlign: 'center',
    fontSize: 24,
    color: "green",
  },
  error: {
    fontWeight: 100,
    textAlign: 'center',
    fontSize: 24,
    color: "red",
  },
});

export default SignupScreen;
