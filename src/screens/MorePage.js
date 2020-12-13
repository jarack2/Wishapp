import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';

import { CardList, Header, Modal } from '../components';

import firebase from '../../firebaseConfig';
import 'firebase/firestore';
import { UserContext } from '../providers/UserProvider';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
let modalName;
let modalContent;
const log = () => console.log('this is a sample feature.');

const signOut = async (navigation) => {
  await firebase
    .auth()
    .signOut()
    .then(() => {
      navigation.navigate('Home');
    });
};

const openModal = (name, content, setVisible) => {
  setVisible(true);
  modalName = name;
  modalContent = content;
};

const options = (navigation, setVisible) => {
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
      action: () =>
        openModal(
          options(navigation, setVisible)[1].name,
          <Text>Fart</Text>,
          setVisible
        ),
    },
    {
      name: 'Notifications',
      icon: 'bell',
      iconType: 'evilicon',
      action: () =>
        openModal(
          options(navigation, setVisible)[2].name,
          <Text>Fart</Text>,
          setVisible
        ),
    },
    {
      name: 'Feedback',
      icon: 'sc-telegram',
      iconType: 'evilicon',
      action: () =>
        openModal(
          options(navigation, setVisible)[3].name,
          <Text>Fart</Text>,
          setVisible
        ),
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
  const [visible, setVisible] = useState(false);

  const settings = options(navigation, setVisible);
  const user = useContext(UserContext); // holds the current user

  return (
    <Header title="More">
      <View style={styles.userView}>
        <Image
          source={require('../assets/avatar_default.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Email: {user.email}</Text>
      </View>
      <CardList cards={settings} titleStyles={{ marginLeft: 0 }} />
      <Modal title={modalName} visible={visible} setVisible={setVisible}>
        {modalContent}
      </Modal>
    </Header>
  );
};

const styles = StyleSheet.create({
  userView: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: screenHeight / 12,
    height: screenHeight / 12,
    borderRadius: 200 / 2,
    marginRight: 48,
    marginLeft: 48,
  },
  container: {
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});

export default MorePage;
