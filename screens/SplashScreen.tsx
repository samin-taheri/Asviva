import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { primaryColor } from '../global';
import { Feather } from "@expo/vector-icons";

export default function SplashScreen({ navigation }: any) {

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
      <TouchableOpacity  style={styles.buttonContainer} onPress={navigateToHome}>
        <Text style={styles.buttonText}>Skip</Text>
        <Feather name="chevron-right" size={20} color='white' style={{ paddingLeft: 2 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    backgroundColor: primaryColor,
    width:  80,
    height: 35,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
    right: 30,    
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
  },
  buttonText: {
    color: 'white',
    paddingLeft: 10,
    fontWeight: 'bold',
  },
});
