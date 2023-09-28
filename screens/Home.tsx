import { View, ScrollView, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import WeaklyGoals from "../components/WeaklyGoals";
import PhysicalFitness from "../components/PhysicalFitness";
import Chart from "../components/Chart";
import { backgroundColor } from '../global';
import TotalWorkout from "../components/TotalWorkout";

export default function Home({navigation}: NativeStackHeaderProps) {

    return(
        <ScrollView>
        <View style={styles.container}>
            <WeaklyGoals onPress={()=> navigation.navigate("StartCreating")}/>
            <TotalWorkout/>
            <PhysicalFitness/>
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
    }
});