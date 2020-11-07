import React, { useContext, useEffect, useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import { CardList } from '../components';

import firebase from '../../firebaseConfig';
import 'firebase/firestore';
import { UserContext } from '../providers/UserProvider';

const log = () => console.log('this menu is poopy');
const signout = () => {
  firebase.auth().signOut();
};

const options = [
  {
    name: 'Sign Out',
    icon: 'account-circle',
    iconType: 'font-awesome5',
    iconColor: 'red',
    action: () => log(),
  },
  {
    name: 'Your Account',
    icon: 'account-circle',
    iconType: 'font-awesome5',
    action: () => log(),
  },
  {
    name: 'Notifications',
    icon: 'bell',
    iconType: 'evilicon',
    action: () => log(),
  },
  {
    name: 'Feedback',
    icon: 'sc-telegram',
    iconType: 'evilicon',
    action: () => log(),
  },
  {
    name: 'Dark Mode',
    icon: 'ios-american-football',
    iconType: 'ionicon',
    action: () => log(),
  },
  {
    name: 'Terms of Service',
    icon: 'heartbeat',
    iconType: 'font-awesome',
    action: () => log(),
  },
];

const MorePage = () => {
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.image}
    >
      <CardList cards={options} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default MorePage;
