import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';
import Lable from './Lable';
import { Entypo } from "@expo/vector-icons";
import { primaryColor } from '../global';
import { Feather } from "@expo/vector-icons";
import { BackgroundCardProps } from '../types/data';

const BackgroundCard: React.FC<BackgroundCardProps> = ({ title, backgroundImage, onPress }) => {
  return (
    <View>
    <Lable title="Physical Fitness Test" />
    <View style={{ padding: 8}}>
      <View style={styles.cardContainer}>
        <ImageBackground source={backgroundImage} style={styles.cardBackground}>
          <View style={[styles.cardContent, { backgroundColor: 'rgba(255, 255, 255, 0.77)' }]}>
          <Entypo name="dot-single" size={30} color={primaryColor} />
            <Text style={styles.title}>{title}</Text>
            <Pressable style={styles.buttonContainer} onPress={onPress}>
              <Text style={styles.button}>Start</Text>
              <Feather name="chevron-right" size={20} color='white' style={{ marginRight: 15 }} />
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    overflow: 'hidden',
    borderRadius: 12,
  },
  cardBackground: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  cardContent: {
    padding: 14,
    width: '93%',
    marginLeft: '3.5%',
    marginTop: '27%',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    paddingRight: '32%',
  },
  buttonContainer: {
    backgroundColor: primaryColor,
    width: 80,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 1,
    paddingLeft: 20
  }
});

export default BackgroundCard;
