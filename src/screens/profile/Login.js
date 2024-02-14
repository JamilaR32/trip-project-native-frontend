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
import { TouchableOpacity } from "react-native-gesture-handler";

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
        gap: 5,
        backgroundColor: "#F5EEF8",
      }}
    >
      <Text>Username</Text>
      <TextInput
        placeholder="Enter your username"
        onChangeText={(text) => {
          setUserInfo({ ...userInfo, username: text });
        }}
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
        placeholder="Enter your password"
        onChangeText={(text) => {
          setUserInfo({ ...userInfo, password: text });
        }}
      />
      <View>
        <Button
          title="Login"
          onPress={() => {
            mutate();
          }}
        />
      </View>

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
