import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeView } from '../components';

const Header = ({ children, scrollable, title }) => (
  <ImageBackground
    source={require('../assets/background.png')}
    style={styles.image}
  >
    <SafeView>
      {scrollable ? (
        <ScrollView style={styles.scrollView}>
          <Text>{title}</Text>
          {children}
        </ScrollView>
      ) : (
        <View>
          <Text>{title}</Text>
          {children}
        </View>
      )}
    </SafeView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollView: {
    marginHorizontal: 15,
    backgroundColor: 'transparent',
  },
});

export default Header;
