import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { CustomHeaderProps } from '../types/data';
import { Feather } from "@expo/vector-icons";

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, onBack }) => {
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
