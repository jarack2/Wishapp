import React from 'react';
import { View, SafeAreaView, Platform, StyleSheet } from 'react-native';

const SafeView = ({ children, viewStyles, ...props }) => {
  const platform = Platform.OS;
  let result;
  if (platform == 'ios') {
    result = (
      <SafeAreaView style={[viewStyles, styles.all]} {...props}>
        {children}
      </SafeAreaView>
    );
  } else if (platform == 'android') {
    result = (
      <View style={[viewStyles, styles.android, styles.all]} {...props}>
        {children}
      </View>
    );
  } else {
    result = (
      <View style={[viewStyles, styles.all]} {...props}>
        {children}
      </View>
    );
  }
  return result;
};

const styles = StyleSheet.create({
  android: {
    marginTop: 20,
  },
  all: {
    flex: 1,
  },
});

export default SafeView;
