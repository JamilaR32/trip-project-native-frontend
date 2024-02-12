import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/home/Home";
import ROUTES from "..";

const Stack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.HOME_NAVIGATION.HOME} component={Home} />

      <Stack.Screen
        name={ROUTES.HOME_NAVIGATION.IMAGEPICKER}
        component={ImagePicker}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
