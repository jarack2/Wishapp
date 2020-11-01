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

import {
  ProgressChart,
} from "react-native-chart-kit";
import { ScreenStackHeaderRightView } from 'react-native-screens';





import { UserContext } from "../providers/UserProvider";

// if (firebase.auth().currentUser) {
//   return "successfully logged in";
// }
// const [message, setMessage] = useState();
// {message ? <Text style={styles.buttonLabels}>{message}</Text> : null}

const data = {
  labels: ["Wish Completion"], // optional
  data: [0.4]
};

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;



const chartConfig = {
  backgroundGradientFrom: "#2196F3",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#2196F3",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelOffset: 0,
  style: {
    borderRadius: 10
  },
};

const LandingPage = (props) => {
  const user = useContext(UserContext); // holds the current user
     

  return (
    <>
      
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <View
        style={{
          flex: 2,
            flexDirection: 'row',
          backgroundColor: 'powderblue',
        }}
        >
          
      </View>
        <View
        style={{
          flex: 4,
            flexDirection: 'row-reverse',
          backgroundColor: 'steelblue',
        }}
      >
        
        <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', padding: 20 }}
          activeOpacity={0.5}>
          <Image source={require('../assets/plus.png')} style={styles.topBar} />
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', padding: 20 }}
            activeOpacity={0.5}
            >
            <Image source={require('../assets/avatar_default.png')} style={styles.topBar} />
            
          </TouchableOpacity>

      </View>
</View>
           {/* Main Content */}
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
        <View
          style={{ width: screenWidth, height: 40, backgroundColor: 'powderblue' }}
        />
        <ProgressChart
          data={data}
          width={screenWidth}
          height={screenHeight/2}
          strokeWidth={10}
          radius={50}
          chartConfig={chartConfig}
          hideLegend={false}
        />
        <View
          style={{ width: 40, height: 40, backgroundColor: 'powderblue' }}
            />
            
         <View style={styles.ListContainer}>
      <FlatList
        data={[
          {key: 'These'},
          {key: 'wishes'},
          {key: 'need'},
          {key: 'to'},
          {key: 'be'},
          {key: 'populated'},
          {key: 'based'},
          {key: 'on'},
          {key: 'wish'},
          {key: 'page'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
    </View>
        </ScrollView>
        </SafeAreaView>

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
  scrollView: {
    marginHorizontal: 15,
    backgroundColor: "powderblue"
  },
  text: {
    fontSize: 40,
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
// Comment #1
export default LandingPage;
