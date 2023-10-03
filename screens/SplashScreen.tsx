import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { primaryColor } from '../global';

export default function SplashScreen({ navigation }: NativeStackHeaderProps) {

  const navigateToHome = () => {
    navigation.replace('Root');
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        activeDotColor={primaryColor}
        dotColor='#a7a5a5' 
      >
        <View style={styles.slide}>
          <Image
            source={require('../assets/splash-1.jpeg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/splash-2.jpeg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/splash-3.jpeg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </Swiper>
      <TouchableOpacity onPress={navigateToHome} style={styles.button}>
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '20%',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: primaryColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
