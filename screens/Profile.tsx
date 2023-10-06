import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { backgroundColor } from '../global';
import CustomHeader from "../components/CustomHeader";
import ProfileCard from "../components/ProfileCard";
import BottomSelectorModal from "../components/BottomSelectorModal";
import NumberSelectorModal from "../components/NumberSelectorComponent";

export default function Profile({navigation}: any) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisibl2] = useState(false);
  const [isModalVisible3, setIsModalVisibl3] = useState(false);
  const [isModalVisible4, setIsModalVisibl4] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null); 
  const [selectedHeight, setselectedHeight] = useState<number | null>(null);
  const [selectedWeight, setselectedWeight] = useState<number | null>(null);
  const [selectedBirthday, setselectedBirthday] = useState<number | null>(null);

    const handleGenderSelect = (option: string) => {
        setSelectedOption(option);
        toggleModal(); 
      };
      
    const toggleModal= () => {
        setIsModalVisible(!isModalVisible);
      };
      const toggleModal2 = () => {
        setIsModalVisibl2(!isModalVisible2);
      };
    
      const handleHeightSelect = (number: number | null) => {
        setselectedHeight(number);
        toggleModal2();
      };

      const toggleModal3 = () => {
        setIsModalVisibl3(!isModalVisible3);
      };
    
      const handleWeightSelect = (number: number | null) => {
        setselectedWeight(number);
        toggleModal3();
      };
    
      const toggleModal4 = () => {
        setIsModalVisibl4(!isModalVisible4);
      };
    
      const handleBirthdaySelect = (number: number | null) => {
        setselectedBirthday(number);
        toggleModal4();
      };

    return(
        <View style={styles.container}>
        <CustomHeader title="Profile" onBack={() => navigation.goBack()}/>  
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
        <ProfileCard
                title="Change Avatar"
                iconName="account-convert"
                selectedOption="Please Select" 
                imageSource={require('../assets/profile-19.png')}
                onPress={() => {}}
            />
            <ProfileCard
                title="Nickname"
                iconName="account-tie"
                selectedOption="Please Select" 
                imageSource={require('../assets/profile-13.png')}
                onPress={() => {
                }}
            />
            <View style={styles.line} />
            <ProfileCard
                title="Country / Region"
                iconName="earth"
                selectedOption="Please Select" 
                imageSource={require('../assets/profile-3.png')}
                onPress={() => {
                }}
            />
            <View style={styles.line} />
            <ProfileCard
                title="Gender"
                iconName="gender-male-female"
                imageSource={require('../assets/profile-11.png')}
                selectedOption={selectedOption || "Please Select"} 
                onPress={toggleModal}
            />
            <ProfileCard
                title="Height"
                iconName="human-male-height"
                imageSource={require('../assets/profile-5.png')}
                onPress={toggleModal2}
                selectedOption={selectedHeight !== null ? `Selected: ${selectedHeight}` : "Please Select"}
            />
            <ProfileCard
                title="Weight"
                iconName="weight"
                imageSource={require('../assets/profile-20.png')}
                onPress={toggleModal3}
                selectedOption={selectedWeight !== null ? `Selected: ${selectedWeight}` : "Please Select"}
            />
            <ProfileCard
                title="Birthday"
                iconName="cake-variant"
                imageSource={require('../assets/profile-9.png')}
                onPress={toggleModal4}
                selectedOption={selectedBirthday !== null ? `Selected: ${selectedBirthday}` : "Please Select"}
                />
              <BottomSelectorModal selectedOption={selectedOption} onSelect={handleGenderSelect} title="Select Gender" isVisible={isModalVisible} onClose={toggleModal} />
              <NumberSelectorModal
              isVisible={isModalVisible2}
              onToggle={toggleModal2}
              onSelectNumber={handleHeightSelect}
            />
            <NumberSelectorModal
              isVisible={isModalVisible3}
              onToggle={toggleModal3}
              onSelectNumber={handleWeightSelect}
            />
            <NumberSelectorModal
              isVisible={isModalVisible4}
              onToggle={toggleModal4}
              onSelectNumber={handleBirthdaySelect}
            />
            </View>
        </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor
    },
    contentContainer: {
        flex: 1,
        padding: 8,
        paddingTop: 20
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'left',
        padding: 12,
        paddingRight: '12%',
        color: 'black',
    },
    line: {
        width: '92%', 
        height: 1, 
        backgroundColor: '#e5e5e5', 
        margin: 15,
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100, 
      },
      modal: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      datePickerContainer: {
        backgroundColor: 'white',
        padding: 16,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      selectedDateText: {
        marginTop: 16,
        fontSize: 18,
      },
});