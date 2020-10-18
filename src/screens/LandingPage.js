import React, { useEffect, useState } from 'react';
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
} from 'react-native';

import {
  ProgressChart,
} from "react-native-chart-kit";


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
  return (
    <>
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
        <Image
          source={require('../assets/avatar_default.png')}
          style={{ width: screenHeight/4, height: screenHeight/4, borderRadius: 400 / 2, marginHorizontal: 10}}
        ></Image>

      </View>

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
  }
});
// Comment
export default LandingPage;
