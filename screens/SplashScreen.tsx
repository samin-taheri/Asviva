import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { primaryColor } from '../global';
import { Feather } from "@expo/vector-icons";

export default function SplashScreen({ navigation }: any) {

  const navigateToHome = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
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
            <Text style={styles.title}>Welcome to AsVIVA</Text>
            <Text style={styles.title3}>Track Your Fitness Health Data!</Text>
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/splash-2.jpeg')}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.title3}>Quality, service and expert advice. This is fitness shopping made in Germany! </Text>
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/splash-3.jpeg')}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.title3}>Buy fitness equipment at AsVIVA. Exercise bikes, cross trainers, treadmills, indoor bikes and much more...</Text>
          </View>
        </Swiper>
        <TouchableOpacity style={styles.buttonContainer} onPress={navigateToHome}>
          <Text style={styles.buttonText}>Get Started</Text>
          <Feather name="chevron-right" size={20} color='white' style={{ paddingLeft: '5%' }} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: '20%'
  },
  buttonContainer: {
    backgroundColor: primaryColor,
    width: 150,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center', 
    marginBottom: 50, 
    marginTop: 20
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '24%',
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
    textAlign: 'center',
    paddingTop: 10,
  },
  title3: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: 10,
  },
  title2: {
    fontSize: 19,
    fontWeight: '500',
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
