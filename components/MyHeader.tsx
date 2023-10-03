import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { primaryColor } from '../global';

const { height } = Dimensions.get("screen");

interface MyHeaderProps {
  showLogo?: boolean;
  showLogoWithoutBack?: boolean;
  onPress?: () => void;
  Title?: string;
  children?: React.ReactNode;
}

const MyHeader: React.FC<MyHeaderProps> = (props) => {
  return (
    <>
      <View style={styles.topShadow}>
        {props.showLogo
          ? (
            <View>
              <Animatable.Image
                animation="fadeInDown"
                resizeMode="center"
                style={{ right: '50%' }}
                source={require('../assets/time.png')}
              />
              <TouchableOpacity
                onPress={props.onPress}
                style={{ bottom: 160, left: '5%' }}
              >
                <Ionicons
                  name="arrow-back-outline"
                  color="#fff"
                  size={30}
                />
              </TouchableOpacity>
            </View>
          )
          : (
            props.showLogoWithoutBack
              ? (
                <Animatable.Image
                  animation="fadeInDown"
                  resizeMode="center"
                  style={{ right: '50%' }}
                  source={require('../assets/time.png')}
                />
              )
              : (
                <View>
                 <TouchableOpacity onPress={props.onPress} style={{ paddingTop: '12%', paddingLeft: '5%' }}>
                    <Feather name="arrow-left" size={30} color={'white'}/>
                </TouchableOpacity>
                  <Animatable.Text style={styles.HeaderText} animation="fadeInDown">{props.Title}</Animatable.Text>
                </View>
              )
          )}
        {/* <Image
          style={{ width: '100%', height: '100%', marginLeft: 'auto', top: -40, position: 'absolute', zIndex: -1, resizeMode: 'center' }}
          source={require('../assets/logo.png')}
        /> */}
      </View>
      <Animatable.View style={styles.boxView} animation="fadeInUp">
        {props.children}
      </Animatable.View>
    </>
  );
}

export default MyHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000'
  },
  HeaderText: {
    fontSize: 23,
    color: 'white',
    alignSelf: 'flex-start',
    top: '70%',
    left: '7%'
  },
  HeaderText2: {
    fontSize: 23,
    color: 'white',
    alignSelf: 'flex-start',
    top: '50%',
    left: '5%',
  },
  boxView: {
    top: '40%',
    left: '5%',
    padding: 16,
    position: 'absolute',
    backgroundColor: '#fff',
    margin: 'auto',
    algnSelf: 'center',
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    width: '90%',
    maxHeight: height - (Platform.OS == 'ios' ? 230 : 200),
    paddingTop: '8%',
    paddingBottom: Platform.OS == 'ios' ? '4%' : '4%'
  },
  topShadow: {
    top: 0,
    right: 0,
    left: 0,
    width: '100%',
    height: '60%',
    backgroundColor: primaryColor,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
