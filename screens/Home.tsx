import { View, ScrollView, StyleSheet, Text } from "react-native";
import WeaklyGoals from "../components/WeaklyGoals";
import Chart from "../components/Chart";
import { backgroundColor } from '../global';
import BackgroundCard from "../components/backgroundCard";
import TotalWorkout2 from "../components/TotalWorkout2";
import WorkoutDetailsComponent from "../components/WorkoutDetailsComponent";
import CustomHeader from "../components/CustomHeader";

export default function Home({navigation}: any) {

    return(
        <ScrollView 
        showsVerticalScrollIndicator={false}>
        <CustomHeader navigation={navigation}  onLogo={true}/>  
        <View style={styles.container}>
            <BackgroundCard title="Find your coach"  backgroundImage={require('../assets/bg-3.jpg')} onPress={()=> navigation.navigate('SportsCenter')}/>
            <TotalWorkout2/>
            <WeaklyGoals onPress={()=> navigation.navigate("StartCreating")}/>
            <WorkoutDetailsComponent onPress={()=> navigation.navigate("Details")} title="Record of Workouts"/>
            <Chart/>
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