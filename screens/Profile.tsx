import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { backgroundColor } from '../global';
import CustomHeader from "../components/CustomHeader";
import ProfileCard from "../components/ProfileCard";
import BottomSelectorModal from "../components/BottomSelectorModal";

export default function Profile({navigation}: any) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null); 

    const handleGenderSelect = (option: string) => {
        setSelectedOption(option);
        toggleModal(); 
      };
      
    const  toggleModal= () => {
        setIsModalVisible(!isModalVisible);
      };
    
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
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
                selectedOption="Please Select" 
                onPress={() => {
                }}
            />
            <ProfileCard
                title="Weight"
                iconName="weight"
                imageSource={require('../assets/profile-20.png')}
                selectedOption="Please Select" 
                onPress={() => {
                }}
            />
            <ProfileCard
                title="Birthday"
                iconName="cake-variant"
                imageSource={require('../assets/profile-9.png')}
                onPress={showDatePicker}
                selectedOption="Please Select" 
            />
        <BottomSelectorModal selectedOption={selectedOption} onSelect={handleGenderSelect} title="Select Gender" isVisible={isModalVisible} onClose={toggleModal} />
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