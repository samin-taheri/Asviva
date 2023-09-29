import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

interface TransparentCardProps {
  title: string;
  content: string;
}

const TransparentCard: React.FC<TransparentCardProps> = ({ title, content }) => {
  return (
    <View style={styles.cardContainer}>
      <LinearGradient
        colors={['rgba(117, 69, 111, 0.9)', 'rgba(153, 87, 152, 0.1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  gradient: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.7)", 
    borderRadius: 10,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
  },
});

export default TransparentCard;
