import { View, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { backgroundColor } from '../global';
import SignUpComponent from "../components/SignUpComponent";

export default function SignUp({navigation}: NativeStackHeaderProps) {
    
    return(
        <View style={styles.container}>
        <View style={styles.contentContainer}>
        <SignUpComponent navigate={()=> navigation.navigate('Root')} signUp={()=> navigation.navigate('Login')} back={()=> navigation.goBack()}/>
        </View>
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