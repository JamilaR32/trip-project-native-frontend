import { View, Text, Button } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import { deleteToken } from "../../api/storage";
import ROUTES from "../../navigation";

const MyProfile = () => {
  const navigation = useNavigation();
  const { data } = useQuery({
    queryKey: [],
    queryFn: "",
  });
  return (
    <View>
      <Button
        title="logout"
        onPress={() => {
          deleteToken();
          navigation.navigate(ROUTES.AUTH_NAVIGATION.LOGIN);
        }}
      />
    </View>
  );
};

export default MyProfile;
