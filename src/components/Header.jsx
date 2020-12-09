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
          <Text style={styles.title}>{title}</Text>
          {children}
        </ScrollView>
      ) : (
        <View>
          <Text style={styles.title}>{title}</Text>
          {children}
        </View>
      )}
    </SafeView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollView: {
    marginHorizontal: 15,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 32,
    color: 'white',
    marginLeft: 12,
  },
});

export default Header;