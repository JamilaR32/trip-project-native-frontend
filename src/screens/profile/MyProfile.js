import { View, Text } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { me } from "../../api/auth";

const MyProfile = () => {
  const { data } = useQuery({
    queryKey: ["me"],
    queryFn: () => {
      me();
    },
  });
  return (
    <View>
      <Text>MyProfile</Text>
    </View>
  );
};

export default MyProfile;
