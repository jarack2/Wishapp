import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
  Platform,
  RefreshControl,
  Switch,
  Button,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const image = { url: '../assets/background.png' };
export default class settings extends Component {
  
  _onPressButton() {
    alert('You tapped the button!')
  }
  render(){
    return (
      <>
       <ImageBackground
        source={require('../assets/background.png')}
        style={styles.image}
      >
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        
      }}>
         <Text style={styles.title}>Settings</Text>

<View style={{flex: 1,padding :20 ,flexDirection: 'row',justifyContent: 'left',alignItems: 'left',}}>
<Image
   source={require('../assets/avatar_default.png')}
   style={{ width: screenHeight/8, height: screenHeight/8, borderRadius: 200 / 2, marginHorizontal: 10}}
 ></Image>
   <View style={{flex: 1,padding :20 ,flexDirection: 'column',justifyContent: 'left',alignItems: 'left',}}>
    <Text> Email: </Text>
    <Text> Username: </Text>
  </View>
 </View>
 
   <Button
     onPress={this._onPressButton}
     title="Enable Dark Mode"
   />
   <Button
     onPress={this._onPressButton}
     title="Press Me"
     color="#841584"
   />
   <Button
     onPress={this._onPressButton}
     title="This looks great!"
   />
   <Button
     onPress={this._onPressButton}
     title="OK!"
     color="#841584"
   />
   <Button
     onPress={this._onPressButton}
     title="OK!"
     color="#841584"
   />
 <View style={{width: 50, height: 350}} />
      
      <Text style={styles.title}>bottom</Text>

      </View>
      </ImageBackground>
      </>
    );
  }
}
  
  const styles = StyleSheet.create({
  
      title: {
        fontSize: 48,
        color: 'white',
        textAlign: 'center',
      },
      container: {
        //paddingTop: 60,
        alignItems: 'center'
      },
      button: {
        //marginBottom: 1030,
       // height : 100,
        alignItems: 'center',
        backgroundColor: '#2196F3'
      },
      image: {
        flex: 1,
        resizeMode: 'cover',
      },
      buttonText: {
        textAlign: 'center',
        //padding: 20,
        color: 'white'
      }
  });


