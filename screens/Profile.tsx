import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Image, Button } from "react-native";
import { backgroundColor } from '../global';
import CustomHeader from "../components/CustomHeader";
import ProfileCard from "../components/ProfileCard";
import BottomSelectorModal from "../components/BottomSelectorModal";
import TextInputComponent from "../components/TextInputComponent";
import NumberSelectorComponentAndroid from "../components/NumberSelectorComponentAndroid";

export default function Profile({navigation}: any) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisibl2] = useState(false);
  const [isModalVisible3, setIsModalVisibl3] = useState(false);
  const [isModalVisible4, setIsModalVisibl4] = useState(false);
  const [isModalVisible5, setIsModalVisibl5] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null); 
  const [selectedNickname, setselectedNickname] = useState<string | null>(null);
  const [selectedBirthday, setselectedBirthday] = useState<string | null>(null);
  const [selectedWeight, setselectedWeight] = useState<string | null>(null);
  const [selectedHeight, setselectedHeight] = useState<string | null>(null);

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
    
      const handleNicknameSelect = (string: string | null) => {
        setselectedNickname(string);
        toggleModal2();
      };
      const toggleModal3 = () => {
        setIsModalVisibl3(!isModalVisible3);
      };
    
      const handleBirthday = (string: string | null) => {
        setselectedBirthday(string);
        toggleModal3();
      };

      const toggleModal4 = () => {
        setIsModalVisibl4(!isModalVisible4);
      };
    
      const handleWeight = (string: string | null) => {
        setselectedWeight(string);
        toggleModal4();
      };

      const toggleModal5 = () => {
        setIsModalVisibl5(!isModalVisible5);
      };
    
      const handleHeight = (string: string | null) => {
        setselectedHeight(string);
        toggleModal5();
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
                selectedOption={selectedNickname !== null ? `Selected: ${selectedNickname}` : "Please Select"}
                imageSource={require('../assets/profile-13.png')}
                onPress={toggleModal2}
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
                onPress={toggleModal5}
                selectedOption={selectedHeight !== null ? `Selected: ${selectedHeight}` : "Please Select"}
            />
            <ProfileCard
                title="Weight"
                iconName="weight"
                imageSource={require('../assets/profile-20.png')}
                onPress={toggleModal4}
                selectedOption={selectedWeight !== null ? `Selected: ${selectedWeight}` : "Please Select" }
            />
            <ProfileCard
                title="Birthday"
                iconName="cake-variant"
                imageSource={require('../assets/profile-9.png')}
                onPress={toggleModal3}
                selectedOption={selectedBirthday !== null ? `Selected: ${selectedBirthday}` : "Please Select"}
                />
              <BottomSelectorModal selectedOption={selectedOption} onSelect={handleGenderSelect} title="Select Gender" isVisible={isModalVisible} onClose={toggleModal} />
            <TextInputComponent
              isVisible={isModalVisible2}
              onToggle={toggleModal2}
              onSelectNickname={handleNicknameSelect}
            />
            <NumberSelectorComponentAndroid
              isVisible={isModalVisible3}
              onToggle={toggleModal3}
              onSelectNickname={handleBirthday}
              />
               <NumberSelectorComponentAndroid
              isVisible={isModalVisible4}
              onToggle={toggleModal4}
              onSelectNickname={handleWeight}
              />
               <NumberSelectorComponentAndroid
              isVisible={isModalVisible5}
              onToggle={toggleModal5}
              onSelectNickname={handleHeight}
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