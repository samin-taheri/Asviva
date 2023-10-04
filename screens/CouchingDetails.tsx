import { View, StyleSheet, Text, ImageSourcePropType, Image } from "react-native";
import { backgroundColor } from '../global';
import { useRoute } from '@react-navigation/native';
import CustomHeader from "../components/CustomHeader";

interface DataItem {
  id: string;
  title: string;
  user: string;
  kcal: string;
  imageSource: ImageSourcePropType;
}

const data: DataItem[] = [
  { id: '1',user: '19 min', kcal: '91 kcal', title: 'Hit Whole Body Fat Burning', imageSource: require('../assets/couching-1.jpg') },
  { id: '2',user: '37 min', kcal: '235 kcal', title: 'Fat Burning Cardio Workout New', imageSource: require('../assets/couching-3.jpg') },
  { id: '3',user: '24 min', kcal: '134 kcal', title: 'Sweat Fat Burning', imageSource: require('../assets/couching-5.jpg') },
  { id: '4',user: '17 min', kcal: '89 kcal', title: 'HIT Training New', imageSource: require('../assets/couching-6.jpg') },
  { id: '5',user: '30 min', kcal: '170 kcal', title: 'Rhythmic Fat Riding', imageSource: require('../assets/couching-4.jpg') },
  { id: '6',user: '22 min', kcal: '132 kcal', title: 'Cardşopulmonary Strength Training New', imageSource: require('../assets/couching-8.jpg') },
  { id: '7',user: '29 min', kcal: '185 kcal', title: 'Comprehensive Fat Burning', imageSource: require('../assets/couching-9.jpg') },
  { id: '8',user: '27 min', kcal: '186 kcal', title: 'Strength Training New', imageSource: require('../assets/couching-10.jpg') },
  { id: '9',user: '25 min', kcal: '129 kcal', title: 'Speed & Endurance Training', imageSource: require('../assets/couching-11.jpg') },
  { id: '10',user: '22 min', kcal: '138 kcal', title: 'Endurance Training New', imageSource: require('../assets/couching-3.jpg') },
];

export default function CouchingDetails({navigation}: any) {
  const route = useRoute();
  const { id } = route.params as { id: string }; 
  const selectedItem = data.find(item => item.id === id);
  if (selectedItem) {
    return(
        <View style={styles.container}>
          <CustomHeader onBack={() => navigation.goBack()}/>  
          <Image source={selectedItem.imageSource} style={styles.image}/>
          <Text>{selectedItem.title}</Text>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
        alignItems: 'center'
    },
    image: {
      borderRadius: 12,
      marginTop: 20,
      height: 200,
      width: '95%'
    },
});
