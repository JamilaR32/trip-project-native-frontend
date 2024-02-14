import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import UserContext from "../../context/UserContext";
import { useQuery } from "@tanstack/react-query";
import { getAllTrips } from "../../api/trips";
import TripItem from "../../components/TripItem";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigation";

const Home = () => {
  // const [user, setUser] = useState(UserContext);
  const navigation = useNavigation();
  const { data: trips } = useQuery({
    queryKey: ["trips"],
    queryFn: () => getAllTrips(),
  });
  const allTrips = trips?.map((trip) => {
    return (
      <TripItem
        key={trip._id}
        title={trip.title}
        destination={trip.destination}
        user={trip.user}
        image={trip.image}
        _id={trip._id}
      />
    );
  });
  // console.log(trips);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "green",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          // flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: 10,
        }}
      >
        {allTrips}
      </ScrollView>
    </View>
  );
};

export default Home;
