import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput as Input } from 'react-native';

const TextInput = ({ errorText, ...props }) => (
  <View style={styles.container}>
    <Input
      style={styles.input}
      underlineColor="transparent"
      mode="outlined"
      keyboardType= "email-address"
      {...props}
    />
    
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginVertical: 25,
    marginHorizontal: '10%',
    fontSize: 50,
    fontWeight: '100',
    borderStyle: 'solid',
    borderColor: 'white',
    borderRadius: 20,
    color: '#dfdfdf',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  error: {
    fontSize: 14,
    color: "#dfdfdf",
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default TextInput;
