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
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigation";
import { register } from "../../api/auth";
import { useMutation } from "@tanstack/react-query";

const Register = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});

  const { mutate } = useMutation({
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      navigation.navigate(ROUTES.AUTH_NAVIGATION.LOGIN);
    },
  });
  const handleFormSubmit = (e) => {
    //e.preventDefault();
    mutate();
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Button
        title="Go to imagepicker"
        onPress={() => {
          navigation.navigate(ROUTES.HOME_NAVIGATION.IMAGEPICKER);
        }}
      /> */}

      <Text>Bio</Text>
      <TextInput
        placeholder="Enter your bio"
        onChangeText={(text) => {
          setUserInfo({ ...userInfo, bio: text });
        }}
      />
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
      {/* <Button title="Register" /> */}
      <View>
        <Pressable
          onPress={() => {
            mutate();
          }}
        >
          <Text>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
