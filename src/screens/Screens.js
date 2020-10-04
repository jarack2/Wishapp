import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
export const AuthContext = React.createContext();

const ScreenContainer = ({ children }) => (
  <View >{children}</View>
);

export const SignIn = ({ navigation }) => {
    return (
      <ScreenContainer>
        <Text>Sign In Screen</Text>
        <Button title="Sign In" onPress={() => console.log("pop")} />
        
      </ScreenContainer>
    );
  };