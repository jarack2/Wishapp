import React, { useContext, useState } from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';
import DatePicker from 'react-native-datepicker';

import { TextInput, Header } from '../components';

import firebase from '../../firebaseConfig';
import 'firebase/firestore';
import { UserContext } from '../providers/UserProvider';

const AddWish = (props) => {
  const [date, setDate] = useState('11-13-2020');
  const [title, setTitle] = useState();
  const [descript, setDescript] = useState();
  const user = useContext(UserContext); // holds the current user

  const confirmWishHandler = (title, descript, user) => {
    var title2 = title.toString();
    firebase.db
      .collection('wishes')
      .doc(user.uid)
      .collection('wishList')
      .doc()
      .set({
        title: title,
        wish: descript,
      });
    props.navigation.navigate('WishScreen');
  };

  return (
    <Header title="Add Wish">
      <TextInput
        placeholder="Title"
        placeholderTextColor="#838383"
        onChangeText={(text) => setTitle({ text })}
      />
      <TextInput
        placeholder="Describe your wish"
        placeholderTextColor="#838383"
        onChangeText={(text) => setDescript({ text })}
      />
      <DatePicker
        style={styles.datePickerStyle}
        date={date} // Initial date from state
        mode="date" // The enum of date, datetime and time
        placeholder="select the deadline for your wish"
        format="DD-MM-YYYY"
        minDate="11-30-2020"
        maxDate="12-31-2025"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
        }}
        onDateChange={(date) => {
          setDate(date);
        }}
      />
      <TouchableHighlight
        overlayColor="#FFFFFF"
        style={styles.buttons}
        onPress={() => confirmWishHandler(title, descript, user)}
      >
        <Text style={styles.buttonLabels}>Confirm Wish</Text>
      </TouchableHighlight>
    </Header>
  );
};

const styles = StyleSheet.create({
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
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});

export default AddWish;
