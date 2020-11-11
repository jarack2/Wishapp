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



const WishScreen = (props) => {
  const [wishList, setWishList] = useState();
  const user = useContext(UserContext); // holds the current user  
  let wishes = [];  
  firebase.db.collection('wishes').doc(user.uid).collection('wishList').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
         let wishDoc = doc.data();
         wishes.push({key: wishDoc.title.text, msg: wishDoc.wish.text });        
     });
    setWishList(wishes);
});
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
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.ListContainer}>
            <FlatList
              data={wishList}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
          </View>
          <TouchableHighlight
            overlayColor="#FFFFFF"
            style={styles.buttons}
            onPress={() => props.navigation.navigate('AddWish')}
          >
            <Text style={styles.buttonLabels}>Add a Wish!</Text>
          </TouchableHighlight>
        </ScrollView>
        </SafeAreaView>

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
    backgroundColor: "powderblue"
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
    fontWeight: 100,
    textAlign: 'center',
    fontSize: 24,
  }
});

export default WishScreen;
