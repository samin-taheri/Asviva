import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "./Card";
import Lable from "./Lable";
import StatsCard from "./StatsCard";

const Total: React.FC = ({ }) => {
  return (
    <View>
    <Lable title="Total Workout"/>
    <Card>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <StatsCard title="Duration" value="0 min"  style={{paddingLeft: 2}}/>
        <StatsCard title="Exercise" value="0" style={{paddingLeft: 12}} />
        <StatsCard title="Calorie" value="0 kcal" style={{paddingLeft: 10}}/>
        </View>
    </Card>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default Total;
