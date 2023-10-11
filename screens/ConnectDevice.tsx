import React from "react";
import { View, StyleSheet, ScrollView, Pressable, Text, Platform } from "react-native";
import { backgroundColor, cardBackground } from '../global';
import CustomHeader from "../components/CustomHeader";
import { primaryColor } from '../global';
import DeviceCard from "../components/DeviceCard";
import Lable from "../components/Lable";
import BrandCard from "../components/BrandCard";
import { Feather } from "@expo/vector-icons";

export default function ConnectDevice({ navigation }: any) {

    return (
        <ScrollView style={styles.container}>
            <CustomHeader title="Connect the Devices" onBack={() => navigation.navigate('Root')} />
            <View style={styles.contentContainer}>
            <Lable title="Devices" />
            <DeviceCard
                title="Cycling"
                cardColor={cardBackground}
                imageSource={require('../assets/exercise.png')}
                onPress={() =>navigation.navigate('Loading')}
            />
            <DeviceCard
                title="Apple Watch"
                cardColor={cardBackground}
                imageSource={require('../assets/connect-4.png')}
                onPress={() =>navigation.navigate('Loading')}
            />
            <DeviceCard
                title="Standard Heart Rate Device"
                cardColor={cardBackground}
                imageSource={require('../assets/connect-5.png')}
                onPress={() =>navigation.navigate('Loading')}
            />
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10}}>
            <Lable title="Brands" />
             <Pressable style={{flexDirection: 'row', paddingTop: 10, paddingRight: 15}}>
                <Text style={{paddingTop: 3, color: '#636363', fontSize: 14}}>View more</Text>
                <Feather name="chevron-right" size={16} color="#636363" style={Platform.OS === 'ios' ? {paddingTop: 4}:{paddingTop: 5}}/>
            </Pressable>
            </View>
            <View style={{flexDirection: 'row'}}>
            <BrandCard imageSource={require('../assets/asviva.png')}/>
            <BrandCard imageSource={require('../assets/adidas.png')} style={{marginLeft: 20}}/>
            </View>
            <View style={{flexDirection: 'row'}}>
            <BrandCard imageSource={require('../assets/abilica.png')}/>
            <BrandCard imageSource={require('../assets/alinco.png')} style={{marginLeft: 20}}/>
            </View>
            <View style={{flexDirection: 'row'}}>
            <BrandCard imageSource={require('../assets/anyrun.png')}/>
            <BrandCard imageSource={require('../assets/attacus.png')} style={{marginLeft: 20}}/>
            </View>
            </View>
        </ScrollView>
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
