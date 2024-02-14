import { instance } from ".";
//imports
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import {} from `react-native-vector`
//imports
//work
function Sample() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "pink" }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image
            style={styles.profileAvatar}
            source={{ uri: `databaseroutes` }}
            alt="Your picture"
          />
          <Text style={styles.profileName}>user1</Text>
          <Text style={styles.profileBio}>user1bio</Text>

          <TouchableOpacity
            onPress={() => {
              //onPressHandling
            }}
          >
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Edit Profile</Text>
              {/* <FeatherIcon name="edit" color="blue" size={16}/> */}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
    flex: 1,
  },
  profile: {
    padding: 16,
    flexDirection: `column`,
    alignItems: `center`,
    backgroundColor: `yellow`,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: `black`,
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontsize: 20,
    fontWeight: `600`,
    color: `brown`,
  },
  profileBio: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: `400`,
    color: `blue`,
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
    backgroundColor: `green`,
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: `600`,
    color: `red`,
  },
});
//work
const getAllTrips = async () => {
  const res = await instance.get("/api/trips");
  return res.data;
};

const getTripById = async (tripId) => {
  const res = await instance.get(`/api/trips/${tripId}`);
  return res.data;
};

export { getAllTrips, getTripById };
