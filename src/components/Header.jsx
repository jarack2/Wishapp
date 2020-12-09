import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeView } from '../components';
import { LinearGradient } from 'expo-linear-gradient';

const Header = ({ children, scrollable, title }) => (
  <ImageBackground
    source={require('../assets/background.png')}
    style={styles.image}
  >
    <LinearGradient
        colors = {['rgba(255, 153, 102, 0.8)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 100,

        }}
        />
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
