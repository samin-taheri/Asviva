import { View,Text, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { backgroundColor } from '../global';
import CustomHeader from "../components/CustomHeader";
import HorizontalCardMap from "../components/HorizontalCardMap";

export default function SportsCenter({navigation}: NativeStackHeaderProps) {

    return(
        <View style={styles.container}>
            <CustomHeader title="Sports Center" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor
    }
});