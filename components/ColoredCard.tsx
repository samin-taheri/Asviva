import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface ColoredCardProps {
  icon: string;
  title: string;
  description: string;
  cardColor: string;
}

const windowWidth = Dimensions.get('window').width; 

const ColoredCard: React.FC<ColoredCardProps> = ({ icon, title, description, cardColor }) => {
  const cardWidth = (windowWidth - 53) / 3; 

  return (
    <View style={[styles.card, { backgroundColor: cardColor, width: cardWidth }]}>
            <Feather name={icon as any} size={24} color="white" style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column', 
    alignItems: 'flex-start',
    padding: 10,
    borderRadius: 12,
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  description: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 4
  },
});

export default ColoredCard;
