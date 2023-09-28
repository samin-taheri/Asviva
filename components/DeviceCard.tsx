import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { firstCard, secondCard, textColor, thirdCard } from '../global';
import { DeviceCardProps } from "../types/data";

const iconMap: { [key: string]: React.ReactNode } = {
    'bicycle': <Ionicons name="bicycle" size={35} color={'#6ea5e3'} />,
    'watch': <MaterialCommunityIcons name="watch" size={35} color={secondCard} />,
    'heartbeat': <FontAwesome5 name="heartbeat" size={35} color={thirdCard} />,
  };

const DeviceCard: React.FC<DeviceCardProps> = ({
  title,
  cardColor,
  iconName,
  onPress,
  style
}) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={[styles.iconContainer, { backgroundColor: cardColor }]}>
      {iconMap[iconName]}
      
      </View>
      <Text style={styles.title}>{title}</Text>
      <Feather
        name="chevron-right"
        size={20}
        color={textColor}
        style={[styles.chevron, style]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    margin: 8,
    backgroundColor: 'white'
  },
  iconContainer: {
    backgroundColor: thirdCard,
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  chevron: {
    flex: 1,
    alignItems: 'flex-end',
    paddingLeft: '0%',
  },
});

export default DeviceCard;
