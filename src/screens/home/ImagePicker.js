// import { Pressable, StyleSheet, Text, View } from "react-native";
// import React, { useState } from "react";
// import * as ImagePicker from "expo-image-picker"; //imagepickersetup

// const ImagePicker = () => {
//   //setimageusestate
//   const [image, setImage] = useState(null);
//   //setimageusestate
//   //
//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: false,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };
//   //
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>ImagePicker</Text>
//       <View
//         style={{
//           height: 175,
//           width: 175,
//           backgroundColor: "purple",
//         }}
//       >
//         {image && (
//           <Image
//             source={{ uri: image }}
//             style={{ width: "100%", height: "100%" }}
//           />
//         )}
//         <Pressable
//           onPress={pickImage}
//           style={{ width: "100%", height: "100%", backgroundColor: "orange" }}
//         ></Pressable>
//       </View>
//     </View>
//   );
// };

// export default ImagePicker;

// const styles = StyleSheet.create({});
