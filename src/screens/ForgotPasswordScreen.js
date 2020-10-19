import React, { memo, useState } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, TouchableHighlight  } from 'react-native';
import { 
  BackButton, 
  TextInput 
} from '../components';

import firebase from '../../firebaseConfig';
import 'firebase/firestore';

const reset = (email) => {
  let result;
  result = firebase.auth().sendPasswordResetEmail(email).then(() => {
  return "A password reset email has been sent to " + email + ". Please check your email.";
  }).catch((error) => {
    alert("There was an error: " + error.message);
    console.log(error.code + ": " + error.message);
  }) 
  return result;
}

const ForgotPasswordScreen = (props) => {
  const [email, setEmail] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();

  return (
    <>
      <ImageBackground
          source={require('../assets/background.png')}
          style={styles.image}
      >
        {/* <BackButton 
          onPress={() => props.navigation.navigate('Login')}
        /> */}
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        {successMessage ? <Text style={styles.success}>{successMessage}</Text> : null}
        <Text style={styles.title}>WishApp</Text>
        <Text style={styles.subtitle}>Reset Password</Text>
        
        <TextInput
          placeholder="Email"
          placeholderTextColor="#dfdfdf"
          label="E-mail address"
          returnKeyType="done"
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <TouchableHighlight
          overlayColor="#FFFFFF"
          style={styles.buttons}
          onPress={ async () => {
            let result = await reset(email);
            if (result) {
              setSuccessMessage(result);
              setErrorMessage("");           
            }
            else {
              setErrorMessage("An error has occured. Please try again.");
              setSuccessMessage("");
            }
          }}
        >
          <Text style={styles.buttonLabels}>Reset</Text>
        </TouchableHighlight>

        <View style={styles.back}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}
          >
          <Text style={styles.label}>← Back to login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
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
  subtitle: {
    fontSize: '32px',
    color: 'white',
    margin: '12px',
    textAlign: 'center', 
    marginVertical: '12px'
  },
  label: {
    color: 'red',
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
  back: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 24,
  },
  error: {
    color: 'white',
    backgroundColor: 'red',
    fontWeight: 100,
    textAlign: 'center',
    fontSize: 24,
  },
  success: {
    color: 'white',
    backgroundColor: 'green',
    fontWeight: 100,
    textAlign: 'center',
    fontSize: 24,
  }
 
});

export default memo(ForgotPasswordScreen);