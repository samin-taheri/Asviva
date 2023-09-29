import React from "react";
import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";
import Card from "./Card";
import Lable from "./Lable";

interface WorkoutCardProps {
  imageSource: ImageSourcePropType;
  title: string;
  description: string;
  cardColor: string
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ imageSource, title, description, cardColor }) => {
  return (
    <Card style={{ backgroundColor: cardColor }}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});

export default WorkoutCard;
