import { View, StyleSheet, Text } from "react-native";
import { backgroundColor } from '../global';
import CustomHeader from "../components/CustomHeader";

export default function Cycle({navigation}: any) {

    return(
        <View style={styles.container}>
        <CustomHeader title="Cycle"/>  
        <View style={styles.contentContainer}>
            <Text style={styles.text}>Cycle</Text>
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