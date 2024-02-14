import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllTrips } from "../api/trips";
import { BASE_URL } from "../api";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../navigation";

const TripItem = ({ title, destination, image, user, key, _id }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        height: "100%",
        width: "90%",
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <Pressable
        onPress={() => {
          navigation.navigate(ROUTES.HOME_NAVIGATION.TRIP_DETAILS, {
            _id: _id,
          });
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            height: "100%",
            width: "100%",
            backgroundColor: "yellow",
          }}
        >
          <View>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                backgroundColor: "black",
              }}
              source={{
                uri: `${BASE_URL}/${image}`,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              backgroundColor: "pink",
              // overflow: "hidden",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              {title}
            </Text>
            <Text>{destination}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default TripItem;
