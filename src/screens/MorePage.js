import React, { useContext, useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { CardList, Header } from '../components';

import firebase from '../../firebaseConfig';
import 'firebase/firestore';
import { UserContext } from '../providers/UserProvider';

const log = () => console.log('this menu is poopy');

const signOut = (props) => {
  firebase.auth().signOut();
  // props.navigation.navigate('home');
};
const options = [
  {
    name: 'Sign Out',
    icon: 'unlock',
    iconType: 'evilicon',
    iconColor: 'white',
    iconSize: 32,

    action: () => signOut(),
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

const MorePage = (props) => {
  props.navigation.navigate('home');
  return (
    <Header title="more">
      <CardList cards={options} />
    </Header>
  );
};

export default MorePage;
