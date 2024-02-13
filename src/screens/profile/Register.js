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
import { TouchableOpacity } from "react-native-gesture-handler";

const Register = () => {
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
      <Button
        title="Go to imagepicker"
        onPress={() => {
          navigation.navigate(ROUTES.HOME_NAVIGATION.IMAGEPICKER);
        }}
      />

      <Text>Bio</Text>
      <TextInput
        placeholder="Enter your bio"
        style={{
          borderColor: "black",
          borderCurve: "circular",
          borderWidth: 0.5,
          borderRadius: 20,
          width: "60%",
          backgroundColor: "#D7BDE2",
        }}
      />
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
        placeholder="Enter your password"
        style={{
          borderColor: "black",
          borderCurve: "circular",
          borderWidth: 0.5,
          borderRadius: 20,
          width: "60%",
          backgroundColor: "#D7BDE2",
        }}
      />
      <Button color="#6C3483" title="Register" />
      <View
        style={{
          flexDirection: "row",
          gap: 5,
        }}
      >
        <Text>Already a user?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(ROUTES.AUTH_NAVIGATION.LOGIN);
          }}
        >
          <Text
            style={{
              color: "#FF33CE",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
