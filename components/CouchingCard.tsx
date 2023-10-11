import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { textColor } from "../global";
import { FontAwesome } from "@expo/vector-icons";
import { CoouchingCardProps } from "../types/data";

const CouchingCard: React.FC<CoouchingCardProps> = ({ imageSource, title, user, kcal, id, onPress }) => {
    
  return (
    <Pressable style={styles.card} onPress={() => onPress(id)}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                    name="account-clock"
                    size={20}
                    color={textColor}
                    style={{paddingRight: 2}}
                />
                <Text style={{fontSize: 11}}>{user}</Text>
                </View>
                <View style={[styles.iconContainer , {marginLeft: 10}]}>
                <FontAwesome
                    name="flash"
                    size={15}
                    color={textColor}
                    style={{paddingRight: 5}}
                />
                <Text style={{fontSize: 11}}>{kcal}</Text>
                </View>
                </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 8,
    width: 200, 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    height: 230,
  },
  image: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    padding: 16,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(55,57,54,0.1)',
    flexDirection: 'row',
    alignContent: 'center',
    padding: 6
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
  },
});

export default CouchingCard;
