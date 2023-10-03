import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { backgroundColor, cardBackground, primaryColor } from '../global';
import CustomHeader from "../components/CustomHeader";
import DetailsSection from '../components/DetailsSection';

export default function More({ navigation }: any) {
    return (
        <ScrollView 
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <CustomHeader title="Details" />
            <View style={styles.contentContainer}>
            <DetailsSection
                title="Nickname: kdck_KHjLdm"
                iconName="account-tie"
                imageSource={require('../assets/profile-15.png')}
                onPress={() => {
                }}
            />
             <View style={styles.line} />
            <DetailsSection
                title="My Game"
                iconName="account-tie"
                imageSource={require('../assets/9.png')}
                onPress={() => {
                }}
            />
            <DetailsSection
                title="Records of Workouts"
                iconName="account-tie"
                imageSource={require('../assets/10.png')}
                onPress={() => {
                }}
            />
            <DetailsSection
                title="Sports Weekly"
                iconName="account-tie"
                imageSource={require('../assets/11.png')}
                onPress={() => {
                }}
            />
            <DetailsSection
                title="Physical Fitness Test"
                iconName="account-tie"
                imageSource={require('../assets/12.png')}
                onPress={() => {
                }}
            />
            <DetailsSection
                title="Manage Devices"
                iconName="account-tie"
                imageSource={require('../assets/13.png')}
                onPress={() => {
                }}
            />
            <DetailsSection
                title="Help and Feedback"
                iconName="account-tie"
                imageSource={require('../assets/14.png')}
                onPress={() => {
                }}
            />
            <DetailsSection
                title="Settings"
                iconName="account-tie"
                imageSource={require('../assets/15.png')}
                onPress={()=> navigation.navigate("Login")}
            />
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
    },
    contentContainer: {
        flex: 1,
        padding: 8
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'left',
        padding: 12,
        paddingRight: '12%',
        color: 'black',
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    line: {
        width: '92%', 
        height: 1, 
        backgroundColor: '#e5e5e5', 
        margin: 15,
    },
    duration: {
        fontSize: 15
    },
    difficulty: {
        fontSize: 15
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      },
      image: {
        width: 130,
        height: 120,
        borderRadius: 8,
        marginLeft: 16,
      },
      title: {
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 10,
      },
      description: {
        fontSize: 14,
        color: 'white',
        fontWeight: '600'
      },
      button: {
        backgroundColor: primaryColor,
        width: 115,
        height: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
      },
      icon: {
        backgroundColor: cardBackground,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 0,
        marginLeft: '24%'
      },
});
