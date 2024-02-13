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
import { TouchableOpacity } from "react-native-gesture-handler";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        backgroundColor: "#F5EEF8",
      }}
    >
      <Text>Username</Text>
      <TextInput
        placeholder="Enter your username"
        style={{
          borderColor: "black",
          borderCurve: "circular",
          borderWidth: 0.5,
          borderRadius: 20,
          width: "60%",
          backgroundColor: "#D7BDE2",
        }}
      />
      <Text>Password</Text>
      <TextInput
        style={{
          borderColor: "black",
          borderCurve: "circular",
          borderWidth: 0.5,
          borderRadius: 20,
          width: "60%",
          backgroundColor: "#D7BDE2",
        }}
        placeholder="Enter your password"
      />
      <Button color="#6C3483" title="Login" />
      <View
        style={{
          flexDirection: "row",
          gap: 5,
        }}
      >
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(ROUTES.AUTH_NAVIGATION.REGISTER);
          }}
        >
          <Text
            style={{
              color: "#FF33CE",
            }}
          >
            JoinUs
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
