import React, { useContext } from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';

import { CardList, Header, Modal} from '../components';

import firebase from '../../firebaseConfig';
import 'firebase/firestore';
import { UserContext } from '../providers/UserProvider';

const log = () => console.log('this menu is poopy');
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const signOut = async (navigation) => {
  await firebase
    .auth()
    .signOut()
    .then(() => {
      navigation.navigate('Home');
    });
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
  let modal = true;
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
      <CardList cards={settings} titleStyles={{ marginLeft: '40%' }} />
 
      { modal ? <Modal/> : undefined }

    </Header>
  );
};

const styles = StyleSheet.create({
  userView: {
    padding: 20,
    alignItems: 'flex-end',
  },
  image: {
    width: screenHeight / 12,
    height: screenHeight / 12,
    borderRadius: 200 / 2,
    marginRight: 48,
  },
  container: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

export default MorePage;
