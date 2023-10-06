import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Lable from './Lable';
import { HorizontalCardMapProps } from '../types/data';

const HorizontalCardMap: React.FC<HorizontalCardMapProps> = ({ cards }) => {
  return (
    <View >
    <Lable title="Power Course"/>
      <FlatList
        showsHorizontalScrollIndicator
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 122, 
    height: 150,
    margin: 7,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
  image: {
    width: '100%',
    height: 85, 
    resizeMode: 'cover', 
    marginBottom: 8, 
  },
});

export default HorizontalCardMap;
