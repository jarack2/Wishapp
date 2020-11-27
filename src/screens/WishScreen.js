import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import firebase from '../../firebaseConfig';
import 'firebase/firestore';
import { UserContext } from '../providers/UserProvider';
import { CardList, Header } from '../components';

const WishScreen = (props) => {
  const [wishList, setWishList] = useState();
  const user = useContext(UserContext); // holds the current user

  let iconStyles = {
    icon: 'star',
    iconColor: 'white',
    iconSize: 32,
    iconType: 'font-awesome5',
  };

  let wishes = [
    {
      name: 'To have a million dollers!',
      ...iconStyles,
    },
    {
      name: 'To Run a marathon!',
      ...iconStyles,
    },
    {
      name: 'To graduate!',
      ...iconStyles,
    },
  ];

  //   THIS CODE IS CAUSING THE DATABASE TO BE PINGED REPEATEDLY. DO NOT UNCOMMENT UNLESS ACTIVELY WORKING TOWARD BUG FIX
  //   firebase.db.collection('wishes').doc(user.uid).collection('wishList').get().then((snapshot) => {
  //     snapshot.docs.forEach(doc => {
  //          let wishDoc = doc.data();
  //          wishes.push({key: wishDoc.title.text, msg: wishDoc.wish.text });
  //          console.log("Firebas.db.collection line 25");
  //      });
  //     setWishList(wishes);
  // });

  return (
    <>
      <Header title="Wishes" scrollable>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <CardList cards={wishes} />
          </ScrollView>
        </SafeAreaView>
      </Header>
    </>
  );
};
const styles = StyleSheet.create({
  ListContainer: {
    flex: 1,
    paddingTop: 22,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  container: {
    flex: 20,
    flexDirection: 'column',
  },
  scrollView: {
    marginHorizontal: 15,
  },
  text: {
    fontSize: 40,
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
    fontWeight: '100',
    textAlign: 'center',
    fontSize: 24,
  },
});

export default WishScreen;
