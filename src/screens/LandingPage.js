import React, { useContext, useEffect, useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  ImageBackground,
  Dimensions,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { CardList } from '../components';
import {
  ProgressChart,
} from "react-native-chart-kit";
import { ScreenStackHeaderRightView } from 'react-native-screens';





import firebase from '../../firebaseConfig';
import 'firebase/firestore';
import { UserContext } from "../providers/UserProvider";

// if (firebase.auth().currentUser) {
//   return "successfully logged in";
// }
// const [message, setMessage] = useState();
// {message ? <Text style={styles.buttonLabels}>{message}</Text> : null}


const uid = firebase.auth().currentUser;
console.log(uid);

const data = {
  labels: ["wishes"], // optional
  data: [0.4]
};

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;



const chartConfig = {
  backgroundGradientFrom: "#2196F3",
  backgroundGradientFromOpacity: .4,
  backgroundGradientTo: "#2196F3",
  backgroundGradientToOpacity: .4,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelOffset: 0,
  style: {
    borderRadius: 10
  },
};
var wishListData = null;
const LandingPage = (props) => {
  const [wishList, setWishList] = useState([]);
  const user = useContext(UserContext); // holds the current user  
  let wishes =  [];  

  firebase.db.collection('wishes').doc(user.uid).collection('wishList').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
         let wishDoc = doc.data();
         wishes.push({name: wishDoc.title.text, icon: 'sc-telegram', iconType:'evilicon' });
         console.log(wishDoc);
     });
    if(wishListData == null){
      setWishList(wishes);
      wishListData = wishes;
    }
    else{
      const wishListChanged = (newWishes) => {
        if (newWishes.length !== wishListData.length) {
          return true;
        }
      };      
    if (wishListChanged(wishes)) {
        wishListData = wishes;
        setWishList(wishes);
      }
    }
});
  
  firebase.db.collection('users').doc(user.uid).set({
    username: user.email,
  });
  



  return (
    <>           
           {/* Main Content */}
     <ImageBackground
      source={require('../assets/background.png')}
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      
      
          
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}

      >
        <Image
          source={require('../assets/avatar_default.png')}
          style={{ width: screenHeight/4, height: screenHeight/4, borderRadius: 400 / 2, marginHorizontal: 10}}
        ></Image>

      </View>

        <ProgressChart
          data={data}
          width={screenWidth}
          height={screenHeight/2}
          strokeWidth={10}
          radius={50}
          chartConfig={chartConfig}
          hideLegend={false}
        />
        <View style={styles.container}>
          <CardList cards={wishList} />
        </View> 
            
        </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  ListContainer: {
    flex: 1,
    paddingTop: 22,
    flexDirection: 'column',
    alignItems: 'center',
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
  container: {
    flex: 20,
    flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  centeredContainer:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  scrollView: {
    marginHorizontal: 15,
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 40,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
  },

  topBar: {
    flexDirection: 'row-reverse',
    flex: 1,
    resizeMode: 'stretch',
    width: 25,
    height: 25,
    borderRadius: 400 / 2,
    marginHorizontal: 10,
    padding: 10,
   
  },

});
// Comment #2
export default LandingPage;
