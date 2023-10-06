import { View, StyleSheet, Text, ImageSourcePropType, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { tableBackgroundColor } from '../global';
import { useRoute } from '@react-navigation/native';
import { Feather } from "@expo/vector-icons";
import ColoredCards2 from "../components/ColoredCards2";
import Card from "../components/Card";
import Graph from "../components/Graph";
import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";

interface DataItem {
  id: string;
  title: string;
  user: string;
  intro: string;
  imageSource: ImageSourcePropType;
}

const newData: DataItem[] = [
    { id: '1',user: '0', title: 'Sightseeing road (Norway)', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/challenge-1.jpg') },
    { id: '2',user: '1',  title: '(Xiamen) Skybike path', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/challenge-3.jpg') },
    { id: '3',user: '0', title: 'Otar River (Norway)', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/challenge-4.jpg') },
    { id: '4',user: '0', title: 'The Alps', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/challenge-5.jpg') },
    { id: '5',user: '0', title: '(Austria) Alpine garden', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/challenge-6.jpg') },
    { id: '6',user: '0', title: '(Three dimensional) space tunnel', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/challenge-7.jpg') },
    { id: '7',user: '0', title: '(3D) Pink Blue tunnel', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/challenge-8.jpg') },
    { id: '8',user: '0', title: '(3D) Love tunnel', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/challenge-10.jpg') },
    { id: '9',user: '0', title: '(3D) Purple and Yellow tunnel', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/challenge-11.jpg') },
    { id: '10',user: '0', title: '(Three dimensional) time travel', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../assets/challenge-12.jpg') },
  ];

export default function ChallengeDetails({navigation}: any) {
  const route = useRoute();
  const { id } = route.params as { id: string }; 
  const selectedItem = newData.find(item => item.id === id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 10);
      } else {
        clearInterval(interval);
      }
    }, 1000); 
    return () => clearInterval(interval);
  }, [progress]);
  
  if (selectedItem) {
    return(
        <View style={styles.container}>
             <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Feather name="arrow-left" size={30} color="#000" />
            </TouchableOpacity>
            <View style={styles.imageContainer}>
          <ImageBackground source={selectedItem.imageSource} style={styles.image}>
          <View style={[styles.cardContent, { backgroundColor: 'rgba(255, 255, 255, 0.77)' }]}>
              <Text style={styles.title}>{selectedItem.title}</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container2}>
          <ColoredCards2  
            color='#3d3d4e'
            title="Distance"
            description="10.35"
            cardColor='rgba(255, 233, 225, 0.8)'
            imageSource={require('../assets/distance.png')}
            />
            <ColoredCards2  
            color='#3d3d4e'
            title="Climb"
            description="0.1 m"
            cardColor='rgba(240, 215, 237, 0.8)'
            imageSource={require('../assets/climb.png')}
            />
            <ColoredCards2  
            color='#3d3d4e'
            title="Difficulty"
            description="1 star"
            cardColor='rgba(234, 239, 232, 0.8)'
            imageSource={require('../assets/difficulty.png')}
            />
           </View>
           <ProgressBar/>
           <View style={{padding: 8}}>
           <Card>
            <View style={styles.textContainer}>
              <View style={styles.iconContainer}>
                <Text style={styles.introTitle}>Route Intro</Text>
              </View>
              <Text style={styles.title2}>{selectedItem.intro}</Text>
            </View>
           </Card>
           </View>
           <View style={{marginBottom: 30}}>
           <Graph title={'Route Info'} width={340} height={170}/>
           </View>
          </ScrollView>
          </ImageBackground>
          </View>
        </View>
    )
  }
  return null; 
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
      top: '5%',
      left: '2%',
      zIndex: 1,
      padding: 16,
    },
    imageContainer: {
      position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    cardContent: {
      padding: 10,
      width: '93%',
      marginLeft: '3.5%',
      marginTop: '26%',
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




