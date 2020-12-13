import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  Modal as XModal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import { BackButton, Header } from '../components';

const Modal = ({ children, title, visible, setVisible }) => {
  return (
    <View style={styles.centeredView}>
      <XModal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <Header titleStyles={{ textAlign: 'center' }} title={title}>
          <BackButton
            onPress={() => {
              setVisible(!visible);
            }}
          />
          {children}
          <View style={styles.centeredView}>
            <TouchableHighlight
              style={styles.closeButton}
              onPress={() => {
                setVisible(!visible);
              }}
            >
              <Text style={styles.textStyle}>Close Modal</Text>
            </TouchableHighlight>
          </View>
        </Header>
      </XModal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    maxWidth: 128,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Modal;
