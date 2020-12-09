
import React, { useContext, useEffect, useState } from 'react';
import { ImageBackground, StyleSheet,View,Image,Dimensions,Text } from 'react-native';

import { CardList } from '../components';

import firebase from '../../firebaseConfig';
import 'firebase/firestore';
import { UserContext } from '../providers/UserProvider';

const log = () => console.log('this menu is poopy');
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


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

const MorePage = () => {
  return (
    <Header title="More">
       <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'right',
        alignItems: 'stretch',
        
      }}>
         <View style={{flex: 1,padding :20 ,flexDirection: 'row',justifyContent: 'right',alignItems: 'rigth',}}>
         <View style={{flex: 1,padding :20 ,flexDirection: 'column',justifyContent: 'right',alignItems: 'right',}}>
              <Text> Email: </Text>
              <Text> Username: </Text>
              </View>
              <Image
                source={require('../assets/avatar_default.png')}
                style={{ width: screenHeight/8, height: screenHeight/8, borderRadius: 200 / 2, marginHorizontal: 10}}
              />
          </View>
      </View>
      <CardList cards={settings} titleStyles={{marginLeft: '40%'}}/>
    </Header>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    alignItems: 'center'
  },
});

export default MorePage;
