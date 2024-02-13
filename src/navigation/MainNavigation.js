import { Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "./home/HomeNavigation";
import AuthNavigation from "./AuthNavigation";
import ROUTES from ".";
import { FontAwesome } from "@expo/vector-icons";

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
          tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,
        }}
        name={ROUTES.HOME_NAVIGATION.INDEX}
        component={HomeNavigation}
      />
      <Tab.Screen
        options={{
          title: "Profile",
        }}
        name={ROUTES.AUTH_NAVIGATION.INDEX}
        component={AuthNavigation}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
