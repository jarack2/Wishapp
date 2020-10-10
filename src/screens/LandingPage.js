import React, { useEffect, useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import { StyleSheet } from 'react-native';

const LandingPage = (props) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <ImageBackground
          source={require('../assets/avatar_default.png')}
          style={
            (styles.image, { width: 40, height: 40, borderRadius: 40 / 2 })
          }
        ></ImageBackground>
      </View>
    </>
  );
};

// const styles = StyleSheet.create({});

export default LandingPage;
