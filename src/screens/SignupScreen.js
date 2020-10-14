import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';
import BackButton from '../components/BackButton';
import TextInput from '../components/TextInput';


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
            placeholder="Password"
            placeholderTextColor="#dfdfdf"
            style={styles.textInput}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableHighlight
            style={styles.buttons}
            onPress={() => props.navigation.navigate('Sign Up')}
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
});

export default SignupScreen;
