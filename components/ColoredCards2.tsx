import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'; 
import { ColoredCards2Props } from '../types/data';

const windowWidth = Dimensions.get('window').width; 

const ColoredCards2: React.FC<ColoredCards2Props> = ({ title, description, imageSource, cardColor, color }) => {
  const cardWidth = (windowWidth - 53) / 3; 

  return (
        <View style={[styles.card, { backgroundColor: cardColor, width: cardWidth }]}>
            <View style={{ width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginRight: 10 }}>
            <Image source={imageSource} style={styles.image} /> 
            </View>
            <Text style={[styles.title, {color: color}]}>{title}</Text>
            <Text style={[styles.description, {color: color}]}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column', 
    alignItems: 'center',
    padding: 8,
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
    fontSize: 13,
    fontWeight: '600',
    paddingTop: 30,
    textAlign: 'center'
  },
  description: {
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
