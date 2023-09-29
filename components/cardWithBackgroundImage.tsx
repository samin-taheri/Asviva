import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

interface CardWithBackgroundImageProps {
  backgroundImageSource: { uri: string };
  title: string;
  description: string;
}

const CardWithBackgroundImage: React.FC<CardWithBackgroundImageProps> = ({
  backgroundImageSource,
  title,
  description,
}) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={backgroundImageSource}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    backgroundColor: "#fff",
    margin: 16,
  },
  backgroundImage: {
    width: "100%",
    aspectRatio: 16 / 9, // You can adjust the aspect ratio as needed
  },
  backgroundImageStyle: {
    resizeMode: "cover",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#fff",
  },
});

export default CardWithBackgroundImage;
