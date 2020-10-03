import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, View, ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';

const SignupScreen = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const image = { url: '../assets/background.png' };

  return (
    <>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.image}
      >
        <Text style={{ fontSize: '48px', color: 'white' }}>Sign up Here</Text>
        <TextInput
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          style={styles.textInput}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          secureTextEntry
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          style={styles.textInput}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          title="Sign Up"
          onPress={() => console.log('poop')}
          color="#2196F3"
        />
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
  textInput: {
    alignItems: 'center',
  },
});

export default SignupScreen;
