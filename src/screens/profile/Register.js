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

const Register = () => {
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
      <Text>Image</Text>
      <Image placeholder="Pick an image"></Image>
      <Text>Bio</Text>
      <TextInput placeholder="Enter your bio" />
      <Text>Username</Text>
      <TextInput placeholder="Enter your username" />
      <Text>Password</Text>
      <TextInput placeholder="Enter your password" />
      <Button title="Register" />
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate(ROUTES.AUTH_NAVIGATION.LOGIN);
          }}
        >
          <Text>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
