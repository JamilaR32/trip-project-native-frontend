//\\ بسم الله الرحمن الرحيم //\\

import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigation";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Username</Text>
      <TextInput placeholder="Enter your username" />
      <Text>Password</Text>
      <TextInput placeholder="Enter your password" />
      <Button title="Login" />
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate(ROUTES.AUTH_NAVIGATION.REGISTER);
          }}
        >
          <Text>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
