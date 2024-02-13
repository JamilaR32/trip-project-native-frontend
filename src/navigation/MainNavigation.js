import { Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "./home/HomeNavigation";
import AuthNavigation from "./AuthNavigation";
import ROUTES from ".";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name={ROUTES.HOME_NAVIGATION.INDEX}
        component={HomeNavigation}
      />
      <Tab.Screen
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name={ROUTES.AUTH_NAVIGATION.INDEX}
        component={AuthNavigation}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
