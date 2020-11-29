import React, { useContext, useEffect, useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import firebase from '../../firebaseConfig';
import 'firebase/firestore';
import { UserContext } from "../providers/UserProvider";
import { CardList } from '../components';

var wishListData = null;

const WishScreen = (props) => {
  const [wishList, setWishList] = useState();
  const user = useContext(UserContext); // holds the current user  
  let wishes =  [];  


  //   THIS CODE IS CAUSING THE DATABASE TO BE PINGED REPEATEDLY. DO NOT UNCOMMENT UNLESS ACTIVELY WORKING TOWARD BUG FIX
  firebase.db.collection('wishes').doc(user.uid).collection('wishList').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
         let wishDoc = doc.data();
         wishes.push({key: wishDoc.title.text, msg: wishDoc.wish.text });
         console.log(wishDoc);
     });
    if(wishListData == null){
      setWishList(wishes);
      wishListData = wishes;
    }
    else{
      const wishListChanged = (newWishes) => {
        if (newWishes.length !== wishListData.length) {
          return true;
        }
        //for (let i = 0; )
      };
      
      if (wishListChanged(wishes)) {
        wishListData = wishes;
        setWishList(wishes);
      }
    }
});



  return (
    <>
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.image}
    >
      {/* Main Content */}
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.ListContainer}>
          {/* <CardList cards={wishList} /> */}
          </View>
        </ScrollView>
        </SafeAreaView>
    </ImageBackground>
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
    //justifyContent: 'center',
    //alignItems: 'center',
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
  }
});

export default WishScreen;
