import { View,Text, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { backgroundColor } from '../global';
import CustomHeader from "../components/CustomHeader";
import HorizontalCardMap from "../components/HorizontalCardMap";

export default function SportsCenter({navigation}: NativeStackHeaderProps) {
    const cards = [
        { id: 1, title: 'Card 1', description: 'Description for Card 1' },
        { id: 2, title: 'Card 2', description: 'Description for Card 2' },
        { id: 3, title: 'Card 3', description: 'Description for Card 3' },
        // Add more cards as needed
      ];
    return(
        <View style={styles.container}>
            <CustomHeader title="Sports Center" />
            <View style={styles.contentContainer}>
            <HorizontalCardMap cards={cards} />
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
        padding:12
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