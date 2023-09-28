import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { firstCard, primaryColor, secondCard, textColor, thirdCard } from '../global';
import { ProfileCardProps } from "../types/data";

const iconMap: { [key: string]: React.ReactNode } = {
    'account-convert': <MaterialCommunityIcons name="account-convert" size={25} color={secondCard} />,
    'account-tie': <MaterialCommunityIcons name="account-tie" size={25} color={secondCard} />,
    'earth': <MaterialCommunityIcons name="earth" size={25} color={secondCard} />,
    'gender-male-female': <MaterialCommunityIcons name="gender-male-female" size={25} color={secondCard} />,
    'human-male-height': <MaterialCommunityIcons name="human-male-height" size={25} color={secondCard} />,
    'weight': <MaterialCommunityIcons name="weight" size={25} color={secondCard} />,
    'cake-variant': <MaterialCommunityIcons name="cake-variant" size={25} color={secondCard} />,
  };

const ProfileCard: React.FC<ProfileCardProps> = ({
  title,
  cardColor,
  iconName,
  onPress,
  style,
  selectedAnswer,
  selectedDate
}) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={[styles.iconContainer, { backgroundColor: cardColor }]}>
      {iconMap[iconName]}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.buttonContainer, style]}>
      {selectedDate ? (
          <Text style={styles.button}>{selectedDate.toDateString()}</Text>
        ) : (
          <Text style={styles.button}>{selectedAnswer}</Text>
        )}
    </View>
      <Feather
        name="chevron-right"
        size={20}
        color={textColor}
        style={styles.chevron}
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
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: thirdCard,
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  chevron: {
    flex: 1,
    alignItems: 'flex-end',
    paddingLeft: '2%',
  },
  buttonContainer: {
      flexDirection: 'row',
      paddingLeft: '30%',
  },
  button: {
      color: primaryColor,
      fontWeight: '600',
      fontSize: 13
  }
});

export default ProfileCard;
