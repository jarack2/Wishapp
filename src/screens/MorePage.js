import React, { useContext, useEffect, useState } from 'react';
import {
  Card,
  Button,
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableHighlight,
} from 'react-native';

import {
  TextInput
} from '../components';

import firebase from '../../firebaseConfig';
import 'firebase/firestore';
import { UserContext } from "../providers/UserProvider";

const MorePage = () => {
  return <Card></Card>;
}

export default MorePage;