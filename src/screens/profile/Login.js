import React, { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
} from "react-native";
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
      navigation.navigate(ROUTES.PROFILE_NAVIGATION.PROFILE);
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        placeholder="Enter your username"
        onChangeText={(text) => setUserInfo({ ...userInfo, username: text })}
        style={styles.input}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Enter your password"
        secureTextEntry={true} // Hides password text
        onChangeText={(text) => setUserInfo({ ...userInfo, password: text })}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => mutate()} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text>Don't have an account?</Text>
        <Pressable
          onPress={() => navigation.navigate(ROUTES.AUTH_NAVIGATION.REGISTER)}
        >
          <Text style={styles.link}>Join Us</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5EEF8",
  },
  input: {
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 20,
    width: "80%",
    padding: 10,
    marginVertical: 10, // Adds space above and below the input
    backgroundColor: "#D7BDE2",
  },
  buttonContainer: {
    marginTop: 20,
    width: "80%",
    borderRadius: 20,
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: "10%", // Adjust based on your layout preference
  },
  footer: {
    flexDirection: "row",
    marginTop: 20,
  },
  link: {
    color: "#FF33CE",
    marginLeft: 5,
  },
  loginButton: {
    backgroundColor: "#8E44AD",
    padding: 10,
    borderRadius: 20,
    //width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Login;
