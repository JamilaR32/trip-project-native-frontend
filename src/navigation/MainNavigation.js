import { Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "./home/HomeNavigation";
import AuthNavigation from "./AuthNavigation";
import ROUTES from ".";
<<<<<<< HEAD
import { FontAwesome } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
=======

import { FontAwesome } from "@expo/vector-icons";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

>>>>>>> e62518f850cd227c53cd9d69aaee2696961c0b59

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
<<<<<<< HEAD
          tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
=======

          tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,

//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),

>>>>>>> e62518f850cd227c53cd9d69aaee2696961c0b59
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
