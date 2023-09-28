import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { CardProps } from "../types/data";

const Card: React.FC<CardProps> = ({ children, style }) => {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        padding: 16,
        margin: 8,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
      },
      content: {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between", 
      },
});

export default Card;
