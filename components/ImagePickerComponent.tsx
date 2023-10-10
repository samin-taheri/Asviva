// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// interface ImagePickerComponentProps {
//   onSelectImage: (uri: string) => void;
// }

// const ImagePickerComponent: React.FC<ImagePickerComponentProps> = ({ onSelectImage }) => {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//         setSelectedImage(result.uri);
//         onSelectImage(result.uri);
//       }
//     }      

//   return (
//     <View>
//       <TouchableOpacity onPress={pickImage} style={styles.container}>
//         <Text style={styles.text}>Choose Image</Text>
//       </TouchableOpacity>
//       {selectedImage && <Image source={{ uri: selectedImage }} style={styles.selectedImage} />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // Container styles
//   },
//   text: {
//     // Text styles
//   },
//   selectedImage: {
//     width: 100, // Adjust the width of the selected image
//     height: 100, // Adjust the height of the selected image
//     resizeMode: 'cover',
//     marginTop: 10, // Adjust the margin between the button and the image
//   },
// });

// export default ImagePickerComponent;
