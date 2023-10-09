import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { backgroundColor, primaryColor } from '../global';
import CustomHeader from "../components/CustomHeader";
import LearningPath from "../components/DottedLineWithCircles";

export default function Goals({navigation}: any) {
    
    return(
        <View style={styles.container}>
        <CustomHeader title="Goals" onBack={() => navigation.navigate('Root')}/> 
        <View style={styles.contentContainer}> 
            <View style={{padding: 30}}>
                <Text style={styles.title}>This week's goals have been generated for you</Text>
                <Text style={styles.subtitle}>This week's goals have been generated for you</Text>
                <LearningPath />
            </View>
            <View style={styles.buttonContainer}> 
                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Root')}>
                <Text style={styles.buttonText}>Complete</Text>
                </TouchableOpacity>
            </View>
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
    buttonContainer: {
        position: 'absolute',
        bottom: 10,
        width: '90%',
        height: '10%',
        alignItems: 'center',
        paddingLeft: '10%',
      },
      button: {
        backgroundColor: primaryColor,
        paddingVertical: 15,
        width: '100%',
        alignItems: 'center',
        borderRadius: 12,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
      },
    title: {
        fontSize: 20,
        textAlign: 'left',
        fontWeight: '600',

    },
    subtitle: {
        fontSize: 14,
        textAlign: 'left',
        paddingTop: 10
    }
});