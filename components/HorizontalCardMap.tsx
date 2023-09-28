import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';

interface Card {
  id: number;
  title: string;
  description: string;
}

interface HorizontalCardMapProps {
  cards: Card[];
}

const HorizontalCardMap: React.FC<HorizontalCardMapProps> = ({ cards }) => {
  return (
      <FlatList
        showsHorizontalScrollIndicator
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150, 
    height: 160,
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
});

export default HorizontalCardMap;
