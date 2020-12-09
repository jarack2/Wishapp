import React from 'react';
import { View, SafeAreaView, Platform, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const statusbar = getStatusBarHeight();

const SafeView = ({ children, viewStyles, ...props }) => {
  console.log(getStatusBarHeight() + ' is the status bar height');
  return (
    <View style={[viewStyles, styles.all]} {...props}>
      {children}
    </View>
  );
};

// TODO: Check if the current code works on different platforms. If it does, then we can just use it.
// if not, replace with code below.

// const platform = Platform.OS;
// let result;
// if (platform == 'ios') {
//   result = (
//     <SafeAreaView style={[viewStyles, styles.all]} {...props}>
//       {children}
//     </SafeAreaView>
//   );
// } else if (platform == 'android') {
//   result = (
//     <View style={[viewStyles, styles.android, styles.all]} {...props}>
//       {children}
//     </View>
//   );
// } else {
//   result = (
//     <View style={[viewStyles, styles.all]} {...props}>
//       {children}
//     </View>
//   );
// }
// return result;

const styles = StyleSheet.create({
  // android: {
  //   marginTop: statusbar,
  // },
  all: {
    flex: 1,
    marginTop: statusbar,
  },
});

export default SafeView;
