import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';

import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const image = { url: '../assets/background.png' };

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
           placeholder="Email"
           placeholderTextColor="#dfdfdf"
           style={styles.textInput}
           onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#dfdfdf"
            style={styles.textInput}
            onChangeText={(text) => setPassword(text)}
          />
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
            onPress={() => props.navigation.navigate('Login')}
          >
            <Text style={styles.buttonLabels}>Login</Text>
          </TouchableHighlight>
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
});

export default Login;