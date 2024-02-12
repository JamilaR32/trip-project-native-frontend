//\\ بسم الله الرحمن الرحيم //\\

//
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigation";

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
      <Button
        title="Go to imagepicker"
        onPress={() => {
          navigation.navigate(ROUTES.HOME_NAVIGATION.IMAGEPICKER);
        }}
      />

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
