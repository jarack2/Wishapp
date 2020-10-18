import React, { useState, useEffect } from 'react';
import { 
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
  
  if (firebase.auth().currentUser) return true;
  else return false;
}

const Login = (props) => {
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
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.image}
      >
       {/* <BackButton 
         onPress={() => props.navigation.navigate('Home')}
       /> */}
        <Text style={styles.title}>WishApp</Text>
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
         
          <TextInput
           placeholder="Email"
           placeholderTextColor="#dfdfdf"
           onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#dfdfdf"
            onChangeText={(text) => setPassword(text)}
          />
          {/* <Modal></Modal> */}
          <View style={styles.forgotPassword}>
           <TouchableOpacity
             onPress={() => navigation.navigate('')}
           >
            <Text style={styles.label}>Forgot your password?</Text>
           </TouchableOpacity>
          </View>

          <TouchableHighlight
            overlayColor="#FFFFFF"
            style={styles.buttons}
            onPress={() => {
              if (getUserData(email, password)) {
                props.navigation.navigate('Wishful');            
              }
              else {
                seterrorMessage("There was an error logging in. Please try Again.");
              }
            }} 
          >
            <Text style={styles.buttonLabels}>Login</Text>
          </TouchableHighlight>
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
    fontSize: '48px',
    color: 'white',
    margin: '48px',
    textAlign: 'center', 
    marginVertical: '50px'
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
    fontWeight: 100,
    textAlign: 'center',
    fontSize: 24,
  },
  container: {
    flex: 1
  },
  error: {
    color: 'red',
    fontWeight: 100,
    textAlign: 'center',
    fontSize: 24,
  },
});

export default Login;