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

    const brands = [
        { name: 'asviva', uri: 'https://static.kinomap.com/manufacturer/asviva.png' },
        { name: 'adidas', uri: 'https://static.kinomap.com/manufacturer/adidas.png' },
        { name: 'alinco', uri: 'https://static.kinomap.com/manufacturer/alinco.png' },
        { name: 'abilica', uri: 'https://static.kinomap.com/manufacturer/abilica.png' },
        { name: 'anyrun', uri: 'https://static.kinomap.com/manufacturer/anyrun.png' },
        { name: 'attacus', uri: 'https://static.kinomap.com/manufacturer/attacus.png' }
      ];
      
    return (
        <View style={styles.container}>
            <CustomHeader title="Connect the Devices" onBack={() => navigation.navigate('Root')} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentContainer}>
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
             <Pressable style={{flexDirection: 'row', paddingTop: 10, paddingRight: 15}} onPress={()=> navigation.navigate('Brands')}>
                <Text style={{paddingTop: 3, color: '#636363', fontSize: 14}}>View more</Text>
                <Feather name="chevron-right" size={16} color="#636363" style={Platform.OS === 'ios' ? {paddingTop: 4}:{paddingTop: 5}}/>
            </Pressable>
            </View>
            <View style={styles.brandsContainer}>
            {brands.map((brand, index) => (
                <BrandCard key={index} imageSource={{ uri: brand.uri }} />
            ))}
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
        padding: 8
    },
    brandsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
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
