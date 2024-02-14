import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TripItem from "../../components/TripItem";
import { useQuery } from "@tanstack/react-query";
import { getTripById } from "../../api/trips";

import { useRoute } from "@react-navigation/native";
const TripDetails = () => {
  const params = useRoute();
  const { _id } = params.params;
  const { data: trip } = useQuery({
    queryKey: ["trip", _id],
    queryFn: () => getTripById(_id),
  });
  // const tripById = data?.map((trip) => {
  //   return (
  //     <TripItem
  //       key={trip._id}
  //       title={trip.title}
  //       destination={trip.destination}
  //       image={trip.image}
  //     />
  //   );
  // });
  return (
    <View
      style={{
        // flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: "50%",
          borderRadius: 20,
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TripItem
          key={trip?._id}
          title={trip?.title}
          destination={trip?.destination}
          image={trip?.image}
        />
        {/* {tripById} */}
      </View>
    </View>
  );
};

export default TripDetails;

const styles = StyleSheet.create({});
