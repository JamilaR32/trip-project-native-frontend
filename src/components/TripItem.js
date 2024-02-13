import { Image, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllTrips } from "../api/trips";
import { BASE_URL } from "../api";

const TripItem = ({ title, destination, image, user }) => {

  console.log(`${BASE_URL}/${image}`);


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


          <Text>{destination}</Text>
        </View>
        <View
          style={{
            height: "30%",
            width: "100%",
            backgroundColor: "pink",
          }}
        >


          <Text>{user}</Text>

        </View>
      </View>
    </View>
  );
};

export default TripItem;
