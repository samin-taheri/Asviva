
import { View,Text, StyleSheet, Image, Pressable, TouchableOpacity } from "react-native";
import Lable from "./Lable";
import Card from "./Card";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import MyModal from "./MyModal"; 
import { firstCard, primaryColor, secondCard, thirdCard } from '../global';

export default function PhysicalFitness () {
        const [isModalVisible, setModalVisible] = useState(false);
      
        const toggleModal = () => {
          setModalVisible(!isModalVisible);
        };
    return (
        <View>
            <Lable title="Physical Fitness Test"/>
            <Card>
            <View style={styles.textContainer}>
            <View style={{ backgroundColor: '#f3e4f1', width: 35, height: 35, alignItems: 'center',  justifyContent: 'center', borderRadius: 20, marginRight: 10 }}>
                <FontAwesome name="star" size={25} color={firstCard} />
                </View>
                <Text style={styles.title}>FTP test to suit course intensity</Text>
                <Pressable style={styles.buttonContainer} onPress={toggleModal}>
                    <Text style={styles.button}>Start</Text>
                    <Feather name="chevron-right" size={20} color={primaryColor} style={{marginRight: 15}} />
                </Pressable>
            </View>
            <MyModal isVisible={isModalVisible} onClose={toggleModal} />
            </Card>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        borderRadius: 10,
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff'
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
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: '15%',
    },
    button: {
        color: primaryColor,
        fontWeight: 'bold',
        paddingTop: 1
    }
})