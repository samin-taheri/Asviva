import { View,Text, StyleSheet } from "react-native";
import { backgroundColor } from '../global';
import CustomHeader from "../components/CustomHeader";

export default function StartCreating({navigation}: any) {

    return(
        <View style={styles.container}>
        <CustomHeader title="Questionnaire" onBack={() => navigation.goBack()}/>  
        <View style={styles.contentContainer}>
            <Text style={styles.text}>Questionnaire</Text>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
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