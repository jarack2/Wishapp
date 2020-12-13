import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  View,
  Text
} from 'react-native';
import firebase from '../../firebaseConfig';
import 'firebase/firestore';
import { UserContext } from '../providers/UserProvider';
import { CardList, Header, Modal } from '../components';

var wishListData = null;

const WishScreen = (props) => {
  const [wishList, setWishList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [fullWish, setFullWish] = useState("");
  const [date, setDate] = useState(new Date());
  const user = useContext(UserContext); // holds the current user
  let wishes = [];

  firebase.db
    .collection('wishes')
    .doc(user.uid)
    .collection('wishList')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        let wishDoc = doc.data();
        wishes.push({
          name: wishDoc.title.text,
          icon: 'sc-telegram',
          iconType: 'evilicon',
          action: () => openModal(wishDoc.title.text),
        });
      });
      if (wishListData == null) {
        setWishList(wishes);
        wishListData = wishes;
      } else {
        const wishListChanged = (newWishes) => {
          if (newWishes.length !== wishListData.length) {
            return true;
          }
        };
        if (wishListChanged(wishes)) {
          wishListData = wishes;
          setWishList(wishes);
        }
      }
    });

    const openModal = (title) =>  {
      setVisible(true);
      firebase.db
      .collection('wishes')
      .doc(user.uid)
      .collection('wishList')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          let wishDoc = doc.data();
          if(wishDoc.title.text === title){
            setFullWish(wishDoc.wish.text);                        
            setDate(wishDoc.date.toDate());          
          }                      
        });
      }
      )};
      
  return (
    <Header title="Wishes" scrollable>
      {/* Main Content */}
      <CardList cards={wishList} />
      <Modal title={'Wish'} visible={visible} setVisible={setVisible}>
        <View>
          <Text>
            {fullWish}
          </Text>
          <Text>
            {date.toString()}
          </Text>
        </View>
      </Modal>
    </Header>
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
