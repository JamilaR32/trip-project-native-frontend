import { Image, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllTrips } from "../api/trips";
import { BASE_URL } from "../api";

const TripItem = ({ title, destination, image, user }) => {
<<<<<<< HEAD
  console.log(`${BASE_URL}/${image}`);
=======

  console.log(`${BASE_URL}/${image}`);


>>>>>>> e62518f850cd227c53cd9d69aaee2696961c0b59
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
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
            // backgroundColor: "yellow",
          }}
        >
<<<<<<< HEAD
=======

>>>>>>> e62518f850cd227c53cd9d69aaee2696961c0b59
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 100,
              backgroundColor: "black",
            }}
            source={{
              uri: `${BASE_URL}/${image}`,
            }}
          />
<<<<<<< HEAD
=======


>>>>>>> e62518f850cd227c53cd9d69aaee2696961c0b59
          <Text>{destination}</Text>
        </View>
        <View
          style={{
            height: "30%",
            width: "100%",
            backgroundColor: "pink",
          }}
        >
<<<<<<< HEAD
          <Text>{user}</Text>
=======


          <Text>{user}</Text>

>>>>>>> e62518f850cd227c53cd9d69aaee2696961c0b59
        </View>
      </View>
    </View>
  );
};

export default TripItem;
