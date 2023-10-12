import { View, StyleSheet, Text, ScrollView } from "react-native";
import { backgroundColor } from '../global';
import CustomHeader from "../components/CustomHeader";
import HorizontalCoachingCard from "../components/HorizontalCoachingCard";
import HorizontalChallengeCard from "../components/HorizontalChallengeCard";
import HorizontalPowerCard from "../components/HorizontalPowerCard";

export default function Cycle({navigation}: any) {

    return(
        <View style={styles.container}>
        <CustomHeader navigation={navigation} onLogo={true}/>  
        <ScrollView style={styles.contentContainer}>
            <HorizontalChallengeCard onPress={(id) => navigation.navigate( 'ChallengeDetails', {id})}/>
            <HorizontalCoachingCard onPress={(id) => navigation.navigate( 'CouchingDetails', {id})}/>
            <HorizontalPowerCard onPress={(id) => navigation.navigate( 'PowerSubDetails', {id})}/>
        </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
    },
    contentContainer: {
        flex: 1,
        padding: 8
    }
});