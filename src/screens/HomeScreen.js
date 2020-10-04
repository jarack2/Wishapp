import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, View, ImageBackground } from 'react-native';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';



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
              <View style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end" }}>
                
                <TouchableWithoutFeedback>
                      <Text style={[styles.text, { marginBottom: 20 }]}>Login</Text>
                </TouchableWithoutFeedback>
                  
                <TouchableWithoutFeedback>
                      <Text style={styles.text}>Sign Up</Text>
                </TouchableWithoutFeedback>
              </View>
              <View style={{ flex:2 }}></View>

            
            
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
    },
    text: {
        fontSize: 24,
                          backgroundColor: "purple",
                          textAlign: "center",
                          padding: 10,
                          color: "white",
                          fontWeight: 100,
                          borderRadius: 20,
                          marginHorizontal: 20,
    }
});

export default SignupScreen;
