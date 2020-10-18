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
        <Text style={StyleSheet.text}>
          Spicy jalapeno bacon ipsum dolor amet turducken swine turkey, andouille corned beef jerky venison beef ribs jowl ball tip chislic. Drumstick pork loin biltong meatball cupim ribeye. Filet mignon short ribs biltong, t-bone corned beef pork meatloaf ham hock turducken swine sausage cow kevin. Alcatra landjaeger strip steak, sirloin pastrami venison pig pork chop t-bone ball tip kielbasa. Ribeye picanha short loin, buffalo frankfurter alcatra tail sausage shoulder chislic landjaeger swine ham. Brisket pork boudin shank pancetta andouille capicola.
          Ham hock jerky meatloaf chicken turkey turducken, pancetta biltong beef ribs pork belly hamburger buffalo. Ham prosciutto meatball, hamburger pig fatback picanha cow tail buffalo corned beef. Buffalo filet mignon turkey, landjaeger chuck burgdoggen pork loin short ribs tail spare ribs. Tongue ham sirloin, boudin strip steak sausage flank salami. Corned beef shank alcatra turkey buffalo swine picanha salami.
          Meatloaf ground round rump hamburger, bresaola ham landjaeger kevin bacon shankle short loin pastrami. Venison alcatra pastrami pig. Leberkas capicola pancetta, flank pork chop tail beef landjaeger. Chicken salami short loin, filet mignon prosciutto alcatra pastrami ball tip corned beef. Picanha pancetta spare ribs, landjaeger tongue pork loin hamburger tenderloin sausage shankle.
          Pork venison beef ribeye turkey shankle. Drumstick chuck spare ribs ham. Alcatra pancetta tail chislic capicola frankfurter, kielbasa ham. Tongue flank alcatra capicola frankfurter ball tip shank meatloaf. Kevin cow doner pork loin. Buffalo shoulder sirloin picanha. Jerky andouille meatball salami chicken strip steak corned beef kevin pastrami shankle pork belly drumstick.
          Meatball tail kevin, ground round drumstick kielbasa pig porchetta cow cupim strip steak tongue. Salami biltong beef ribs drumstick. Bresaola pork doner short ribs turducken. Frankfurter pork beef tenderloin meatball, chislic shoulder chuck buffalo picanha short loin brisket salami. Jerky pork chop chislic flank, shoulder bresaola jowl pork belly andouille hamburger tongue shankle brisket ball tip. Jowl boudin tail jerky pork chop, meatloaf chicken landjaeger beef ribeye tri-tip rump ham hock.
          
            
        </Text>
        </ScrollView>
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
