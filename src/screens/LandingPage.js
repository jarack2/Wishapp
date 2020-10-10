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
          flexDirection: 'row-reverse',
        }}
      >
        <ImageBackground
          source={require('../assets/avatar_default.png')}
          style={{ width: 40, height: 40, borderRadius: 400 / 2 }}
        ></ImageBackground>
        <View
          style={{ width: 40, height: 40, backgroundColor: 'powderblue' }}
        />
      </View>

      {/* Main Content */}
      <View
        style={{
          flex: 20,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{ width: 40, height: 40, backgroundColor: 'powderblue' }}
        />
        <View
          style={{ width: 40, height: 40, backgroundColor: 'powderblue' }}
        />
        <View
          style={{ width: 40, height: 40, backgroundColor: 'powderblue' }}
        />
      </View>

      {/* Footer Navigation */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{ width: 40, height: 40, backgroundColor: 'powderblue' }}
        />
        <View
          style={{ width: 40, height: 40, backgroundColor: 'powderblue' }}
        />
        <View
          style={{ width: 40, height: 40, backgroundColor: 'powderblue' }}
        />
      </View>
    </>
  );
};

// const styles = StyleSheet.create({});

export default LandingPage;
