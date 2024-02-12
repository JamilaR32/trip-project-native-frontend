import { View, Text } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const MyProfile = () => {
  const { data } = useQuery({
    queryKey: [],
    queryFn: "",
  });
  return (
    <View>
      <Text>MyProfile</Text>
    </View>
  );
};

export default MyProfile;
