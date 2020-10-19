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
} from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

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
  return (
    <>
           {/* Main Content */}
      <SafeAreaView style={styles.container}>
      </SafeAreaView>

    </>
  );
};

const styles = StyleSheet.create({
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

export default LandingPage;
