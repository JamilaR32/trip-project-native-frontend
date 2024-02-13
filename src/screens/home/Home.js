import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import UserContext from "../../context/UserContext";
import { useQuery } from "@tanstack/react-query";
import { getAllTrips } from "../../api/trips";
import TripItem from "../../components/TripItem";

const Home = () => {
  // const [user, setUser] = useState(UserContext);
  const { data: trips } = useQuery({
    queryKey: ["trips"],
    queryFn: () => getAllTrips(),
  });
  const allTrips = trips?.map((trip) => {
    return (
      <View key={trip._id}>
        <TripItem
          title={trip.title}
          destination={trip.destination}
          user={trip.user}
          image={trip.image}
        />
      </View>
    );
  });
  console.log(trips);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView>{allTrips}</ScrollView>
    </View>
  );
};

export default Home;
