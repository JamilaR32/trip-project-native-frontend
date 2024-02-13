import { StyleSheet, Text, View } from "react-native";
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
      <View>
        <TripItem
          title={trip.title}
          destination={trip.destination}
          user={trip.user}
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
      {allTrips}
    </View>
  );
};

export default Home;
