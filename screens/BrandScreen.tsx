import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { backgroundColor } from '../global';
import CustomHeader from "../components/CustomHeader";
import { primaryColor } from '../global';
import Lable from "../components/Lable";
import BrandCard from "../components/BrandCard";

export default function BrandScreen({ navigation }: any) {

    return (
        <ScrollView style={styles.container}>
            <CustomHeader title="Brands" onBack={() => navigation.navigate('Root')} />
            <View style={styles.contentContainer}>
            <Lable title="The brand of your equipment" />
            <View style={{flexDirection: 'row'}}>
            <BrandCard imageSource={{uri: 'https://static.kinomap.com/manufacturer/asviva.png'}}/>
            <BrandCard imageSource={{uri: 'https://static.kinomap.com/manufacturer/adidas.png'}}/>
            </View>
            <View style={{flexDirection: 'row'}}>
            <BrandCard imageSource={{uri: 'https://static.kinomap.com/manufacturer/alinco.png'}}/>
            <BrandCard imageSource={{uri: 'https://static.kinomap.com/manufacturer/abilica.png'}}/>
            </View>
            <View style={{flexDirection: 'row'}}>
            <BrandCard imageSource={{uri: 'https://static.kinomap.com/manufacturer/anyrun.png'}}/>
            <BrandCard imageSource={{uri: 'https://static.kinomap.com/manufacturer/attacus.png'}}/>
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
