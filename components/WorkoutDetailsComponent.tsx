import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { cardBackground, textColor } from '../global';
import { WorkoutDetailsProps } from "../types/data";
import Lable from "./Lable";

const WorkoutDetailsComponent: React.FC<WorkoutDetailsProps> = ({
  title,
  onPress,
}) => {
  return (
    <View>
    <Lable title="Workout Details" /> 
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/records-3.png')} style={styles.image} />
      </View>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <View style={{ flexDirection: 'row', marginTop: '2%',paddingLeft: '4%' }}>
        <Ionicons
          name="bicycle"
          size={23}
          color={textColor}
        />
        <Text style={styles.title2}>Cycling Milage</Text>
        </View>
      </View>
      <Pressable style={[styles.icon]} onPress={onPress}>
        <Feather
          name="arrow-right"
          size={25}
          color={textColor}
        />
      </Pressable>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
    margin: 6,
    backgroundColor: 'white'
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: cardBackground,
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  title2: {
    fontSize: 12,
    paddingTop: 5,
    paddingLeft: 7,
    fontWeight: '600',
    color: textColor
  },
  chevron: {},
  buttonContainer: {
    flexDirection: 'row',
    paddingLeft: '30%',
  },
  button: {
    color: '#787878',
    fontSize: 13,
    paddingLeft: 10,
    paddingTop: 8
  },
  icon: {
    backgroundColor: cardBackground,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: 10,
  },
  icon2: {
    backgroundColor: cardBackground,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginLeft: 8,
  },
  image: {
    width: 140,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 12,
  },
});

export default WorkoutDetailsComponent;
