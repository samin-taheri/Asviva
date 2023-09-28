import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LableProps } from "../types/data";

const Lable: React.FC<LableProps> = ({ title }) => {
  return (
    <View>
        <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
      title: {
        fontSize: 15,
        fontWeight: "bold",
        paddingBottom: 9,
        paddingTop: 12,
        paddingLeft: 10
      }
});

export default Lable;
