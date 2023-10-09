import { View, StyleSheet, Text, ScrollView } from "react-native";
import { backgroundColor } from '../global';
import CustomHeader from "../components/CustomHeader";

export default function Goals({navigation}: any) {

    return(
        <View style={styles.container}>
        <CustomHeader title="Goals"/>  
       
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