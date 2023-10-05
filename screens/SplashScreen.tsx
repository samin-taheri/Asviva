import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { cardBackground2, primaryColor } from '../global';
import { Feather } from "@expo/vector-icons";

export default function SplashScreen({ navigation }: any) {

  const navigateToHome = () => {
    navigation.replace('Login');
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
            source={require('../assets/splash-9.png')}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.title}>Welcome to AsVIVA</Text>
          <Text style={styles.title3}>Track Your Fitness Health Data!</Text>
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/splash-10.png')}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.title}>Quality, service and expert advice - this is fitness shopping made in Germany! </Text>
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/splash-2.png')}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.title}>Buy fitness equipment at AsVIVA - exercise bikes, cross trainers, treadmills, indoor bikes and much more...</Text>
        </View>
      </Swiper>
      <TouchableOpacity  style={styles.buttonContainer} onPress={navigateToHome}>
        <Text style={styles.buttonText}>Get Started</Text>
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
    width:  120,
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
    height: '40%',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 10,
    textAlign: 'center',
    padding: 15,
  },
  title3: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
  },
  title2: {
    fontSize: 19,
    fontWeight: '700',
    fontStyle: 'italic'
  },
  button: {
  },
  buttonText: {
    color: 'white',
    paddingLeft: 10,
    fontWeight: 'bold',
  },
});
