import { View, StyleSheet } from "react-native";
import { backgroundColor } from '../global';
import ForgotPasswordComponent from "../components/ForgotPasswordComponent";

export default function ForgotPAssword({navigation}: any) {
    
    return(
        <View style={styles.container}>
        <View style={styles.contentContainer}>
            <ForgotPasswordComponent onForgotPassword={()=> navigation.navigate('Login')} back={()=> navigation.goBack()}/>
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