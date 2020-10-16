import React, { useEffect, useState } from 'react';
import { Button, Text, View, ImageBackground, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import BackButton from '../components/BackButton';
// import TextInput from '../components/TextInput';
import { uuid } from 'uuidv4';

import firebase from '../../firebaseConfig';
import 'firebase/firestore';

// const checkAndSetEmail = () => console.log("poop"); // email validation
// const checkAndSetPassword = () => console.log("poop"); // password validation

 
const writeUserData = (userId, name, email, password, imageUrl) => {
  firebase.db.collection('users').doc(userId).set({
    name: name,
    email: email,
    password: password,
    profile_picture : imageUrl
  });
}

const SignupScreen = (props) => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

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
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
         
          <TextInput
            placeholder="Name..."
            placeholderTextColor="#dfdfdf"
            style={styles.textInput}
            onChangeText={(text) => setName(text)}
          />
           <TextInput
            placeholder="Email..."
            placeholderTextColor="#dfdfdf"
            style={styles.textInput}
            onChangeText={(newEmail) => setEmail(newEmail)}
          />
          <TextInput
            secureTextEntry
            placeholder="Password..."
            placeholderTextColor="#dfdfdf"
            style={styles.textInput}
            onChangeText={(newPassword) => setPassword(newPassword)}
          />
          <Button
            style={styles.button}
            title="Sign Up"
            onPress={() => writeUserData(uuid(), name, email, password, null)}
            color="#2196F3"
          />
          {/* <TouchableHighlight
            style={styles.buttons}
            color="#2196F3"
            onPress={() => writeUserData(uuid(), name, email, password, null)}
          >
            <Text style={styles.buttonLabels}>Sign Up</Text>
          </TouchableHighlight> */}
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
});

export default SignupScreen;
