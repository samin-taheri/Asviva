import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image, Pressable } from 'react-native';
import { CustomHeaderProps } from '../types/data';
import { Feather, MaterialIcons } from "@expo/vector-icons";

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, onBack, onLogo, navigation }) => {
    return (
        <View style={styles.container}>
            {onBack && (
                <TouchableOpacity onPress={onBack} style={{ paddingTop: '9%', paddingLeft: '5%' }}>
                    <Feather name="arrow-left" size={30} />
                </TouchableOpacity>
            )}
            <View style={styles.titleContainer}>
                <Text style={[styles.title, onBack ? styles.withPadding : null]}>{title}</Text>
            </View>
            {onLogo && (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: '10%' }}>
                <View style={{}}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={{ width: 110, height: 25 }}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: '21%'}}>
                    <Pressable style={{ borderRadius: 8, backgroundColor: '#e8e8e8', padding: 6, flexDirection: 'row', height: 29 }} onPress={() => navigation.navigate('ConnectDevice')}>
                        <Feather name="radio" size={18} color='#000' style={{ paddingRight: 4 }} />
                        <Text style={{ fontSize: 12, paddingRight: 3 }}>Tap to Connect</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Profile')} style={{ marginLeft: 8, marginRight: 10 }}>
                        <MaterialIcons name="account-circle" size={37} color="#dadada" />
                    </Pressable>
                </View>
            </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600',
        paddingTop: '9%',
    },
    withPadding: {
        paddingRight: '10%', 
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? 90 : 86,
    },
});

export default CustomHeader;
