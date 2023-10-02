import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';
import Lable from './Lable';
import { Entypo } from "@expo/vector-icons";
import { primaryColor } from '../global';
import { Feather } from "@expo/vector-icons";
import { BackgroundCardProps } from '../types/data';
import MyModal from './MyModal';

{/* <View style={{ backgroundColor: secondCard, width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginRight: 10 }}>
<MaterialCommunityIcons name="dumbbell" size={25} color='white' />
</View> */}
const BackgroundCard: React.FC<BackgroundCardProps> = ({ backgroundImage }) => {
        const [isModalVisible, setModalVisible] = useState(false);
        const toggleModal = () => {
          setModalVisible(!isModalVisible);
        };
  return (
    <View>
    <Lable title="Physical Fitness Test" />
    <View style={{ padding: 8}}>
      <View style={styles.cardContainer}>
        <ImageBackground source={backgroundImage} style={styles.cardBackground}>
          <View style={[styles.cardContent, { backgroundColor: 'rgba(255, 255, 255, 0.77)' }]}>
          <Entypo name="dot-single" size={30} color={primaryColor} />
            <Text style={styles.title}>FTP test for course integrity</Text>
            <Pressable style={styles.buttonContainer} onPress={toggleModal}>
              <Text style={styles.button}>Start</Text>
              <Feather name="chevron-right" size={20} color='white' style={{ marginRight: 15 }} />
            </Pressable>
          </View>
        </ImageBackground>
      </View>
      <MyModal isVisible={isModalVisible} onClose={toggleModal} />
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
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  cardContent: {
    padding: 14,
    width: 370,
    marginLeft: '3%',
    marginTop: '30%',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
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
    paddingRight: 30,
    paddingTop: 7,
  },
  buttonContainer: {
    backgroundColor: primaryColor,
    width: 80,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 5

  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 1,
    paddingLeft: 20
  }
});

export default BackgroundCard;
