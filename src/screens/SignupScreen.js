import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, View, ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';

const SignupScreen = (props) => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const image = { url: '../assets/background.png' };

  return (
    <>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.image}
      >
        
        <Text style={{ fontSize: '48px', color: 'white', marginLeft: '10px', marginRight: '10px'}}>WishApp</Text>
        <view style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end" }}>
        </view>
        
        <TextInput
          placeholder="Email..."
          placeholderTextColor="#dfdfdf"
          style={styles.textInput}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Name"
          placeholderTextColor="#dfdfdf"
          style={styles.textInput}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          secureTextEntry
          placeholder="Password..."
          placeholderTextColor="#dfdfdf"
          style={styles.textInput}
          onChangeText={(text) => setPassword(text)}
        />

        <Button style={{ }}
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
    marginLeft: '10px',
    marginRight: '10px',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: '100',
    borderStyle: 'solid',
    borderColor: "white",
    borderRadius: "10px"
  },
  Button: {
    fontSize: '24px',
  }
});

export default SignupScreen;
