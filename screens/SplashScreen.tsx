import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, ViewStyle, Easing } from 'react-native';
import Swiper from 'react-native-swiper';
import { primaryColor } from '../global';
import { Feather } from "@expo/vector-icons";

export default function SplashScreen ({ navigation }: any){
  const zoomAnim = useRef(new Animated.Value(0)).current;

  const navigateToHome = () => {
    navigation.replace('Login');
  };

  useEffect(() => {
    Animated.loop(
      Animated.timing(zoomAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear, 
        useNativeDriver: true,
      })
    ).start();
  }, [zoomAnim]);

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
        <Animated.View style={[styles.logoContainer, { transform: [{scale: zoomAnim.interpolate({inputRange: [0, 0.5, 1], outputRange: [1, 1.1, 1]})}]}]}>
        <Animated.View style={[styles.outerCircle, { transform: [{scale: zoomAnim.interpolate({inputRange: [0, 0.5, 1], outputRange: [1, 1.1, 1]})}]}]}></Animated.View>
        <Animated.View style={[styles.innerCircle, { transform: [{scale: zoomAnim.interpolate({inputRange: [0, 0.5, 1], outputRange: [1, 1.1, 1]})}]}]}></Animated.View>
        <Animated.View style={[styles.innerCircle2, { transform: [{scale: zoomAnim.interpolate({inputRange: [0, 0.5, 1], outputRange: [1, 1.1, 1]})}]}]}></Animated.View>
        <Image
          style={styles.logoContainer}
          source={require('../assets/logo.png')}
        />
        </Animated.View>
           <View style={{paddingTop: '140%'}}>
           <Text style={styles.title}>Welcome to AsVIVA</Text>
            <Text style={styles.title2}>Track Your Fitness Health Data!</Text>
           </View>
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/splash-2.jpg')}
              style={styles.image}
              resizeMode="cover"
            />
            {/* <Text style={styles.title3}>Quality, service and expert advice. This is fitness shopping made in Germany! </Text> */}
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/splash-3.jpg')}
              style={styles.image}
              resizeMode="cover"
            />
            {/* <Text style={styles.title3}>Buy fitness equipment at AsVIVA. Exercise bikes, cross trainers, treadmills, indoor bikes and much more...</Text> */}
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/splash-4.jpg')}
              style={styles.image}
              resizeMode="cover"
            />
            {/* <Text style={styles.title3}>Buy fitness equipment at AsVIVA. Exercise bikes, cross trainers, treadmills, indoor bikes and much more...</Text> */}
          </View>
        </Swiper>
        <TouchableOpacity style={styles.buttonContainer} onPress={navigateToHome}>
          <Text style={styles.buttonText}>Start</Text>
          <Feather name="chevron-right" size={20} color='white' style={{ paddingLeft: '5%' }} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  outerCircle: {
    position: 'absolute',
    width: 300, 
    height: 300,
    borderRadius: 200,
    backgroundColor: 'rgba(202, 202, 202, 0.2)', 
  },
  innerCircle: {
    position: 'absolute',
    width: 250, 
    height: 250, 
    borderRadius: 200, 
    backgroundColor: 'rgba(202, 202, 202, 0.3)',
  },
  innerCircle2: {
    position: 'absolute',
    width: 200, 
    height: 200, 
    borderRadius: 200, 
    backgroundColor: 'rgba(202, 202, 202, 0.4)',
  },
  logoContainer: {
    width: '65%', 
    height: '100%', 
    resizeMode: 'contain',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  logoImage: {
    width: '60%', 
    height: '100%', 
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: '20%'
  },
  buttonContainer: {
    backgroundColor: primaryColor,
    width:  90,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20, 
    marginTop: 20,
    position: 'absolute',
    bottom: 20,
    right: 30,  
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
    height: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
  },
  title3: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    padding: 20
  },
  title2: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    padding: 10
  },
  button: {
  },
  buttonText: {
    color: 'white',
    paddingLeft: 10,
    fontWeight: 'bold',
  },
});
