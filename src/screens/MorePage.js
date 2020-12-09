import React from 'react';

import { CardList, Header } from '../components';

import firebase from '../../firebaseConfig';
import 'firebase/firestore';

const log = () => console.log('this menu is poopy');

const signOut = (navigation) => {
  firebase.auth().signOut();
  navigation.navigate('Home');
};
const options = (navigation) => {
  return [
    {
      name: 'Sign Out',
      icon: 'unlock',
      iconType: 'evilicon',
      iconColor: 'white',
      iconSize: 32,
      action: () => signOut(navigation),
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
};

const MorePage = ({ navigation }) => {
  const settings = options(navigation);
  return (
    <Header title="More">
      <CardList cards={settings} titleStyles={{marginLeft: '40%'}}/>
    </Header>
  );
};

export default MorePage;
