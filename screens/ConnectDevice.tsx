import React from "react";
import { View, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { backgroundColor, cardBackground } from '../global';
import CustomHeader from "../components/CustomHeader";
import { primaryColor } from '../global';
import DeviceCard from "../components/DeviceCard";

export default function ConnectDevice({ navigation }: NativeStackHeaderProps) {
    return (
        <View style={styles.container}>
            <CustomHeader title="Connect the Devices" onBack={() => navigation.goBack()} />
            <View style={styles.contentContainer}>
            <DeviceCard
                title="Cycling"
                cardColor={cardBackground}
                imageSource={require('../assets/exercise.png')}
                onPress={() => {
                }}
            />
            <DeviceCard
                title="Apple Watch"
                cardColor={cardBackground}
                imageSource={require('../assets/connect-4.png')}
                onPress={() => {
                }}
            />
            <DeviceCard
                title="Standard Heart Rate Device"
                cardColor={cardBackground}
                imageSource={require('../assets/connect-5.png')}
                onPress={() => {
                }}
            />
            </View>
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
    duration: {
        fontSize: 15
    },
    difficulty: {
        fontSize: 15
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 10
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        color: primaryColor,
        fontWeight: 'bold',
        paddingTop: 1
    }
});
