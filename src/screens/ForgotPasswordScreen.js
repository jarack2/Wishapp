import React, { memo, useState } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, TouchableHighlight  } from 'react-native';
import BackButton from '../components/BackButton';
import TextInput from '../components/TextInput';


const ForgotPasswordScreen = ({ props }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const image = { url: '../assets/background.png' };

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    navigation.navigate('Login');
  };

  return (
    <>
    <ImageBackground
        source={require('../assets/background.png')}
        style={styles.image}
      >
     <BackButton 
         onPress={() => props.navigation.navigate('Login')}
       />

  

      <Text style={styles.title}>Reset Password</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#dfdfdf"
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

          <TouchableHighlight
            overlayColor="#FFFFFF"
            style={styles.buttons}
            onPress={() => props.navigation.navigate('Login')}
          >
            <Text style={styles.buttonLabels}>RESET</Text>
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
 
});

export default memo(ForgotPasswordScreen);