import React, { useContext, useState } from 'react';
import { Text, StyleSheet, TouchableHighlight,Platform , View, Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


import { TextInput, Header } from '../components';


import firebase from '../../firebaseConfig';
import 'firebase/firestore';
import { UserContext } from '../providers/UserProvider';
import { withTheme } from 'react-native-elements';

const AddWish = (props) => {
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(true);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }
  const showDatePicker = () => {
    showMode('date');
  }
  const showTimepicker = () => {
    showMode('time');
  }
  const [title, setTitle] = useState();
  const [descript, setDescript] = useState();
  const user = useContext(UserContext); // holds the current user

  const confirmWishHandler = (title, date, descript, user) => {
    var title2 = title.toString();
    firebase.db
      .collection('wishes')
      .doc(user.uid)
      .collection('wishList')
      .doc()
      .set({
        title: title,
        wish: descript,
        date: date
      });
    props.navigation.navigate('WishScreen');
  };

  return (
    <Header title="Add Wish"
      style={styles.HeaderStyle}>
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
      <DateTimePicker
          style={styles.DateTimePicker}
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      
      <TouchableHighlight
        overlayColor="#FFFFFF"
        style={styles.buttons}
        onPress={() => confirmWishHandler(title, date, descript, user)}
        
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

  DateTimePicker: {
    width: 133,
    marginTop: 20,
    marginLeft: 120,
    marginBottom: 40,
    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  HeaderStyle: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default AddWish;
