import React, { useEffect, useState } from "react";
import { Button, TextInput, View } from "react-native";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from "@react-native-community/google-signin";

// const [loggedin, setloggedin] = useState("false");

// useEffect(() =>
//   GoogleSignin.
// )
// state = {
//   email: "",
//   password: "",
// };

const SignupScreen = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View>
      <TextInput
        placeholder="Email..."
        placeholderTextColor="#003f5c"
        onChangeText={(text) => this.setState({ email: text })}
      />
      <TextInput
        secureTextEntry
        placeholder="Password..."
        placeholderTextColor="#003f5c"
        onChangeText={(text) => this.setState({ password: text })}
      />
      <Button
        title="Sign Up"
        onPress={() => navigate("SignupScreen")}
        color="#f194ff"
      />
    </View>
  );
};
export default SignupScreen;
