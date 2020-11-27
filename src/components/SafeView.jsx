import React from 'react';
import { View, SafeAreaView, Platform, StyleSheet } from 'react-native';

const SafeView = ({ children, style, ...props }) => {
  const platform = Platform.OS;
  let result;
  if (platform == 'ios') {
    result = (
      <SafeAreaView style={style} {...props}>
        {children}
      </SafeAreaView>
    );
  } else {
    // android, web
    result = (
      <View style={[style, styles.android]} {...props}>
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
});

export default SafeView;
