import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageSourcePropType, Image, ViewStyle } from 'react-native';

interface BrandCardProps {
  imageSource: ImageSourcePropType;
  style?: ViewStyle;
}

const BrandCard: React.FC<BrandCardProps> = ({ imageSource, style}) => {
  return (
    <View>
      <View style={[styles.cardContainer, style]}>
        <Image source={imageSource} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    elevation: 3,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 8,
    fontSize: 14,
  },
  image: {
    width: 120,
    height: 60,
  },
});

export default BrandCard;
