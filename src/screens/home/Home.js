import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import UserContext from "../../context/UserContext";
import { useQuery } from "@tanstack/react-query";
import { getAllTrips } from "../../api/trips";

const Home = () => {
  const [user, setUser] = useState(UserContext);
  const { data } = useQuery({
    queryKey: ["trips"],
    queryFn: () => getAllTrips(),
  });
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
