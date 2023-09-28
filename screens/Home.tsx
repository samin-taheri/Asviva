import { View, ScrollView, StyleSheet, Text } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import WeaklyGoals from "../components/WeaklyGoals";
import Chart from "../components/Chart";
import { backgroundColor } from '../global';
import TotalWorkout from "../components/TotalWorkout";
import BackGroundCard from "../components/backgroundCard";

export default function Home({navigation}: NativeStackHeaderProps) {

    return(
        <ScrollView 
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <WeaklyGoals onPress={()=> navigation.navigate("StartCreating")}/>
            <BackGroundCard title="Card Title" backgroundImage="https://img.freepik.com/free-vector/spring-landscape-scene_52683-56331.jpg?w=1800&t=st=1695926282~exp=1695926882~hmac=2a1ce89f08423b7a43e2974943add56f42ef47732633c51ff9ecd29da238a206" />
            <TotalWorkout/>
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