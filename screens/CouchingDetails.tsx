import { View, StyleSheet, Text, ImageSourcePropType, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { backgroundColor, tableBackgroundColor, textColor } from '../global';
import { useRoute } from '@react-navigation/native';
import { Feather } from "@expo/vector-icons";
import BoxWithItems from "../components/BoxWithItems";
import ColoredCards2 from "../components/ColoredCards2";
import Card from "../components/Card";
import Graph from "../components/Graph";
import GraphDetails from "../components/GraphDetails";

interface DataItem {
  id: string;
  title: string;
  user: string;
  kcal: string;
  intro: string;
  imageSource: ImageSourcePropType;
}

const data: DataItem[] = [
  { id: '1',user: '19 min', kcal: '91 kcal', title: 'Hit Whole Body Fat Burning', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/couching-1.jpg') },
  { id: '2',user: '37 min', kcal: '235 kcal', title: 'Fat Burning Cardio Workout New', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ',imageSource: require('../assets/couching-3.jpg') },
  { id: '3',user: '24 min', kcal: '134 kcal', title: 'Sweat Fat Burning',intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/couching-5.jpg') },
  { id: '4',user: '17 min', kcal: '89 kcal', title: 'HIT Training New',intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/couching-6.jpg') },
  { id: '5',user: '30 min', kcal: '170 kcal', title: 'Rhythmic Fat Riding', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/couching-4.jpg') },
  { id: '6',user: '22 min', kcal: '132 kcal', title: 'Cardiopulmonary Strength Training New', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/couching-8.jpg') },
  { id: '7',user: '29 min', kcal: '185 kcal', title: 'Comprehensive Fat Burning', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/couching-9.jpg') }, 
  { id: '8',user: '27 min', kcal: '186 kcal', title: 'Strength Training New',intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/couching-10.jpg') },
  { id: '9',user: '25 min', kcal: '129 kcal', title: 'Speed & Endurance Training',intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/couching-11.jpg') },
  { id: '10',user: '22 min', kcal: '138 kcal', title: 'Endurance Training New',intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/couching-3.jpg') },
];

export default function CouchingDetails({navigation}: any) {
  const route = useRoute();
  const { id } = route.params as { id: string }; 
  const selectedItem = data.find(item => item.id === id);
  if (selectedItem) {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
          <ImageBackground source={selectedItem.imageSource} style={styles.image}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Feather name="arrow-left" size={30} color="#fff" />
            </TouchableOpacity>
          <View style={[styles.cardContent, { backgroundColor: 'rgba(255, 255, 255, 0.77)' }]}>
              <Text style={styles.title}>{selectedItem.title}</Text>
          </View>
          </ImageBackground>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container2}>
          <ColoredCards2  
            color='#3d3d4e'
            title="Time"
            description="19.00"
            cardColor='rgba(255, 233, 225, 0.8)'
            imageSource={require('../assets/clock-2.png')}
            />
            <ColoredCards2  
            color='#3d3d4e'
            title="Energy"
            description="91 kcal"
            cardColor='rgba(240, 215, 237, 0.5)'
            imageSource={require('../assets/energy.png')}
            />
            <ColoredCards2  
            color='#3d3d4e'
            title="Difficulty"
            description="3 star"
            cardColor='rgba(234, 239, 232, 0.8)'
            imageSource={require('../assets/difficulty.png')}
            />
           </View>
           <View style={{padding: 8}}>
           <Card>
            <View style={styles.textContainer}>
              <View style={styles.iconContainer}>
                <Text style={styles.introTitle}>Course Intro</Text>
              </View>
              <Text style={styles.title2}>{selectedItem.intro}</Text>
            </View>
           </Card>
           </View>
           <GraphDetails title={'Course Info'} width={320} height={170} barPercentage={0.5} color={textColor} />
          <BoxWithItems />
          </ScrollView>
        </View>
    )
  }
  return null; 
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
    },  
    textContainer: {
      flex: 1,
    },
    container2: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
      marginTop: 10
    },
    backButton: {
      position: 'absolute',
      top: '10%',
      left: '2%',
      zIndex: 1,
      padding: 16,
    },
    imageContainer: {
      position: 'relative',
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    cardContent: {
      padding: 10,
      width: '93%',
      marginLeft: '3.5%',
      marginTop: '37%',
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center', 
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      padding: 10,
      textAlign: 'left',
    },
    introTitle: {
      fontSize: 14,
      fontWeight: "bold",
      padding: 10,
      textAlign: 'left',
    },
    title2: {
      fontSize: 14,
      padding: 10,
      textAlign: 'left',
      paddingTop: 10
    },
    cardContainer: {
      overflow: 'hidden',
      borderRadius: 12,
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      backgroundColor: tableBackgroundColor,
      flexDirection: 'row',
      alignContent: 'center',
      marginTop: 5,
      padding: 0,
      width: 120,
    },
});




