import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'; 
import { firstCard, primaryColor, secondCard } from '../global';
import { ImageSourcePropType } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

interface ColoredCards2Props {
  title: string;
  description: string;
  cardColor?: string;
  imageSource: ImageSourcePropType
}

const windowWidth = Dimensions.get('window').width; 

const ColoredCards2: React.FC<ColoredCards2Props> = ({ title, description, imageSource, cardColor }) => {
  const cardWidth = (windowWidth - 53) / 3; 

  return (
        <View style={[styles.card, { backgroundColor: cardColor, width: cardWidth }]}>
            <View style={{ width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginRight: 10 }}>
            <Image source={imageSource} style={styles.image} /> 
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column', 
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,

  },
  icon: {
    marginBottom: 10,
  },
  gradient: {
    flex: 1,
    width: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: primaryColor,
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 30
  },
  description: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 4
  },
  image: {
    width: 160,
    height: 160,
    resizeMode: 'cover',
    borderRadius: 12,
    marginTop: 20
  },
});

export default ColoredCards2;
