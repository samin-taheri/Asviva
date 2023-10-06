import React from "react";
import { View, Text, StyleSheet, ImageBackground, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

interface ChallengeCardProps {
  imageSource: { uri: string };
  title: string;
  user: string;
  loc: string;
  id: string;
  onPress: (id: string) => void;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  imageSource,
  title,
  user,
  loc,
  id,
  onPress
}) => {
  return (
    <Pressable style={styles.card} onPress={() => onPress(id)}>
    <ImageBackground source={imageSource} style={styles.cardBackground}>
      <View style={styles.card}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="account-supervisor"
                size={20}
                color='#fff'
              />
              <Text style={{ fontSize: 11, color: '#fff' }}>{user}</Text>
            </View>
            <View style={[styles.iconContainer, { marginLeft: 10 }]}>
              <Entypo
                name="location-pin"
                size={20}
                color='#fff'
              />
              <Text style={{ fontSize: 11, color: '#fff' }}>{loc}</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardBackground: {
    width: 200,
    height: 230,
    borderRadius: 12,
    overflow: 'hidden',
    margin: 8,
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0)', 
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  textContainer: {
    justifyContent: "flex-end",
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'row',
    alignContent: 'center',
    padding: 4
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff', 
    paddingTop: 130
  },
  description: {
    fontSize: 14,
    color: '#fff', 
  },
});

export default ChallengeCard;
