import { View, StyleSheet, Text } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { backgroundColor } from '../global';
import CustomHeader from "../components/CustomHeader";
import LoginComponent from "../components/LoginComponent";

export default function Login({navigation}: NativeStackHeaderProps) {
    const handleLogin = (username: string, password: string) => {
        console.log(`Logging in with username: ${username} and password: ${password}`);
      };
    
      const handleRegister = () => {
        console.log('Navigating to registration page');
      };
    
    return(
        <View style={styles.container}>
        {/* <CustomHeader title="Login" onBack={() => navigation.goBack()}/>   */}
        <View style={styles.contentContainer}>
        <LoginComponent onLogin={handleLogin} onRegister={handleRegister} />
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