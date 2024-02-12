import { Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "./home/HomeNavigation";


const Tab = createBottomTabNavigator()
const MainNavigation = () => {
  return (
   <Tab.Navigator>
    <Tab.Screen component={HomeNavigation}/>
    <Tab.Screen component={}/>
   </Tab.Navigator>
  );
};

export default MainNavigation;
