import React, { useEffect, useState } from 'react';
import {
  TouchableWithoutFeedback,
  Touchable,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Button,
  TouchableHighlight,
} from 'react-native';

const HomeScreen = (props) => {
  const image = { url: '../assets/background.png' };

  return (
    <>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.image}
      >
        <Text style={styles.title}>WishApp</Text>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <TouchableHighlight
            style={styles.buttons}
            onPress={() => props.navigation.navigate('Signup')}
          >
            <Text style={styles.buttonLabels}>Sign Up</Text>
          </TouchableHighlight>
          <TouchableHighlight
            overlayColor="#FFFFFF"
            style={styles.buttons}
            onPress={() => props.navigation.navigate('Signup')}
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

export default HomeScreen;
