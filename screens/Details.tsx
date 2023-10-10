import { View, StyleSheet, Text, Image } from "react-native";
import { backgroundColor, cardBackground, cardBackground2, primaryColor } from '../global';
import CustomHeader from "../components/CustomHeader";
import ColoredCards2 from "../components/ColoredCards2";
import { Ionicons } from "@expo/vector-icons";
import BarChartComponent from "../components/MyBarChart";
import Lable from "../components/Lable";

export default function Details({navigation}: any) {

    return(
        <View style={styles.container}>
        <CustomHeader title="Records of Workouts" onBack={() => navigation.goBack()}/>  
        <View style={styles.contentContainer}>
        <Lable title="Records of Workouts" /> 
        <BarChartComponent />
        <View style={styles.container2}>
            <ColoredCards2  
            title="Total Duration"
            color={primaryColor}
            description="0 min"
            cardColor={cardBackground2}
            imageSource={require('../assets/times.png')}
            />
             <ColoredCards2  
            title="Exercise Times"
            color={primaryColor}
            description="0"
            cardColor={cardBackground2}
            imageSource={require('../assets/bike.png')}
            />
             <ColoredCards2  
            title="Total  Calories"
            color={primaryColor}
            description="0 kcal"
            cardColor={cardBackground2}
            imageSource={require('../assets/calories.png')}
            />
            </View>
            <View style={styles.card}>
            <View style={styles.iconContainer}>
            <Ionicons
                name="bicycle"
                size={40}
                color={primaryColor}
                />
            </View>
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.title}>Cycling Milage</Text>
                <Text style={styles.description}>0 km</Text>
                </View>
            </View>
            </View>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingRight: '10%',
        color: primaryColor
      },
    icon2: {
        backgroundColor: cardBackground,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginLeft: 8,
      },
    contentContainer: {
        flex: 1,
        padding: 8
    },
    image: {
        width: 140,
        height: 140,
        resizeMode: 'cover',
        borderRadius: 12,
      },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 3,
        borderRadius: 12,
        margin: 8,
        backgroundColor: cardBackground2
      },
      iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        width: 60,
        height: 60,
        borderRadius: 12,
        marginLeft: 10
      },
      title: {
        fontSize: 13,
        fontWeight: 'bold',
        paddingLeft: 0,
        color: primaryColor
      },
});