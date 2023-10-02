
import { View,Text, StyleSheet, Image, Pressable } from "react-native";
import Lable from "./Lable";
import Card from "./Card";
import { WeaklyGoalsProps } from "../types/data";
import { primaryColor } from '../global';

const WeaklyGoals: React.FC<WeaklyGoalsProps> = ({ onPress }) => {
    return (
        <View>
            <Lable title="Weekly Goals" />
            <Card>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Personalized healthy exercise goal customization</Text>
                    <Pressable onPress={onPress} style={styles.button}>
                    <Text style={styles.description}>Start Creating</Text>
                    </Pressable>
                </View>
                <Image source={require("../assets/exersize.png")} style={styles.image} />
            </Card>
        </View>
    );
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
        marginBottom: 25
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
      }
})
export default WeaklyGoals;
