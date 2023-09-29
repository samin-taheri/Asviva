import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { cardBackground, primaryColor, secondCard, textColor, thirdCard } from '../global';
import { DeviceCardProps } from "../types/data";

const DeviceCard: React.FC<DeviceCardProps> = ({
  title,
  onPress,
  imageSource
}) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.iconContainer}>
      <Image source={imageSource} style={styles.image} /> 
      </View>
      <View style={{flexDirection: 'column', flex: 1}}>
      <Text style={styles.title}>{title}</Text>
        </View>
        <View style={[ styles.icon]}>
          <Feather
            name="arrow-right"
            size={20}
            color={textColor}
          />
      </View>
    </Pressable>
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
  chevron: {
  },
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
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 10,
  },
  image: {
    width: 160,
    height: 160,
    resizeMode: 'cover',
    borderRadius: 12,
  },
});

export default DeviceCard;
