import { Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllTrips } from "../api/trips";

const TripItem = (title, destination, image, user) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "white",
          height: 200,
          width: "60%",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            height: "70%",
            width: "100%",
            backgroundColor: "yellow",
          }}
        >
          {descrition}
        </View>
        <View
          style={{
            height: "30%",
            width: "100%",
            backgroundColor: "pink",
          }}
        >
          {user}
        </View>
      </View>
    </View>
  );
};

export default TripItem;
