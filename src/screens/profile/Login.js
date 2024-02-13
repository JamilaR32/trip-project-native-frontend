//\\ بسم الله الرحمن الرحيم //\\

import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigation";
import { login } from "../../api/auth";
import { useMutation } from "@tanstack/react-query";

const Login = () => {
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useState({});

  const { mutate } = useMutation({
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      navigation.navigate(ROUTES.AUTH_NAVIGATION.LOGIN);
    },
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Username</Text>
      <TextInput
        placeholder="Enter your username"
        onChangeText={(text) => {
          setUserInfo({ ...userInfo, username: text });
        }}
      />
      <Text>Password</Text>
      <TextInput
        placeholder="Enter your password"
        onChangeText={(text) => {
          setUserInfo({ ...userInfo, password: text });
        }}
      />
      <View>
        <Pressable
          onPress={() => {
            mutate();
          }}
        >
          <Text>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
