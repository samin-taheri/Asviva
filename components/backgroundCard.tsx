import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';
import Lable from './Lable';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { firstCard, primaryColor, secondCard, textColor } from '../global';
import { Feather } from "@expo/vector-icons";
import { BackgroundCardProps } from '../types/data';

{/* <View style={{ backgroundColor: secondCard, width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginRight: 10 }}>
<MaterialCommunityIcons name="dumbbell" size={25} color='white' />
</View> */}
const BackgroundCard: React.FC<BackgroundCardProps> = ({ backgroundImage }) => {
  return (
    <View>
    <Lable title="Physical Fitness Test" />
    <View style={{ padding: 8}}>
      <View style={styles.cardContainer}>
        <ImageBackground source={{ uri: backgroundImage }} style={styles.cardBackground}>
          <View style={[styles.cardContent, { backgroundColor: 'rgba(255, 255, 255, 0.77)' }]}>
            <Text style={styles.title}>FTP test for course integrity</Text>
            <Pressable style={styles.buttonContainer}>
              <Text style={styles.button}>Start</Text>
              <Feather name="chevron-right" size={20} color='white' style={{ marginRight: 15 }} />
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    overflow: 'hidden',
    borderRadius: 12,
  },
  cardBackground: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  cardContent: {
    padding: 14,
    width: 370,
    marginLeft: '3%',
    marginTop: '30%',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    paddingRight: 60,
    paddingTop: 7
  },
  buttonContainer: {
    backgroundColor: secondCard,
    width: 80,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'

  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 1,
    paddingLeft: 20
  }
});

export default BackgroundCard;
