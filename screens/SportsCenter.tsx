import { View,Text, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { backgroundColor } from '../global';
import CustomHeader from "../components/CustomHeader";
import HorizontalCardMap from "../components/HorizontalCardMap";

const cards = [
    { id: 1, title: '15-minute Body Warm Up', description: '', image: 'https://img.freepik.com/free-vector/fitness-tracker-concept-illustration_114360-3409.jpg?w=1380&t=st=1695912711~exp=1695913311~hmac=d586317d0755b8e5d9871f6d7c28efac2013e6f83b702a591370d910a42a8656'},
    { id: 2, title: '45-minute Trainging', description: '', image: 'https://img.freepik.com/free-vector/skateboarding-concept-illustration_114360-3908.jpg?w=1380&t=st=1695912863~exp=1695913463~hmac=ab7448df3fb5921353b234261133d93b84fb310cbded5ef4b0f0eaa041f7b615' },
    { id: 3, title: '30-minute Cycling', description: '', image: 'https://img.freepik.com/free-vector/gift-card-concept-illustration_114360-3910.jpg?w=1380&t=st=1695912901~exp=1695913501~hmac=30784ea80a2d4d0d37ff34eb8bd2515cfcc28d130b38aa968a189e9720088156'},
    { id: 4, title: '30-minute Fat Burning', description: '', image: 'https://img.freepik.com/free-vector/quitting-job-concept-illustration_114360-2898.jpg?t=st=1695912901~exp=1695913501~hmac=a3139577c36f8bb15ee48d6a32e3e52b185be182432bb3edd7c2b7fa306a8df1' },
    { id: 5, title: '40-minute Training', description: '', image: 'https://img.freepik.com/free-vector/yoga-office-concept-illustration_114360-7163.jpg?w=1380&t=st=1695912945~exp=1695913545~hmac=480eb5e4e3422bb2f032ad441218d8a63278ce4270705d3c4eb52a12a8db3029' },
  ];
export default function SportsCenter({navigation}: NativeStackHeaderProps) {

    return(
        <View style={styles.container}>
            <CustomHeader title="Sports Center" />
            <HorizontalCardMap cards={cards} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
    }
});