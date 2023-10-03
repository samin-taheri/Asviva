import { View, StyleSheet } from "react-native";
import { backgroundColor } from '../global';
import LoginComponent from "../components/LoginComponent";

export default function Login({navigation}: any) {
    const handleLogin = (username: string, password: string) => {
        console.log(`Logging in with username: ${username} and password: ${password}`);
      };
    
      const handleRegister = () => {
        console.log('Navigating to registration page');
      };
    
    return(
        <View style={styles.container}>
        <View style={styles.contentContainer}>
        <LoginComponent onLogin={handleLogin} onRegister={handleRegister} navigate={()=> navigation.navigate('Root')} forgotPassword={()=> navigation.navigate('ForgorPassword')} signUp={()=> navigation.navigate('Signup')}/>
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