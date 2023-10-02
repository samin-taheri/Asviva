import { View, ScrollView, StyleSheet, Text } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import WeaklyGoals from "../components/WeaklyGoals";
import Chart from "../components/Chart";
import { backgroundColor } from '../global';
import BackGroundCard from "../components/backgroundCard";
import TotalWorkout2 from "../components/TotalWorkout2";

export default function Home({navigation}: NativeStackHeaderProps) {

    return(
        <ScrollView 
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <BackGroundCard title="Card Title"  backgroundImage={require('../assets/bg-3.jpg')} />
            <WeaklyGoals onPress={()=> navigation.navigate("StartCreating")}/>
            <TotalWorkout2/>
            <Chart onPress={()=> navigation.navigate("Details")}/>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 8,
        flex: 1,
        backgroundColor: backgroundColor
    },
    contentContainer: {
        flex: 1,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'left',
        padding: 12,
        paddingRight: '12%',
        color: 'black', 
    },
});