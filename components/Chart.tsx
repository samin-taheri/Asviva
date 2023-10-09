import React from "react";
import { View, StyleSheet, Text, Pressable, Platform } from "react-native";
import { ChartProps } from "../types/data";
import { LineChart } from "react-native-chart-kit";
import Card from "./Card";
import StatsCard from "./StatsCard";
import { primaryColor } from '../global';
import Lable from "./Lable";
import { Feather } from "@expo/vector-icons";

const data = {
    labels: ["0", "09.21", "09.22", "09.23", "09.24", "Today"],
    datasets: [
      {
        data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ],
        color: (opacity = 1) => primaryColor, 
        strokeWidth: 1
      }
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: 'white', 
    backgroundGradientTo: 'white',
    decimalPlaces: 0, 
    color: (opacity = 0.2) => `rgba(0, 0, 0, ${opacity})`, 
  };
  
const Chart: React.FC<ChartProps> = ({ onPress }) => {
  return (
    <View>
        <View style={{flexDirection:  'row', justifyContent: 'space-between'}}>
        <Lable title="Today's Workout"/>
        {/* <Pressable onPress={onPress} style={{flexDirection: 'row', paddingTop: 10, paddingRight: 15}}>
        <Text style={{paddingTop: 3, color: '#636363', fontSize: 14}}>Details</Text>
        <Feather name="chevron-right" size={16} color="#636363" style={Platform.OS === 'ios' ? {paddingTop: 4}:{paddingTop: 5}}/>
        </Pressable> */}
    </View>
        <Card>
        <View style={{flexDirection: 'column', alignSelf: 'center'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 10}}>
        <StatsCard title="Workouts" value="0 min" />
        <StatsCard title="Calories" value="0 kcal"/>
        <StatsCard title="Clock In" value="0 day"/>
        </View>
        <LineChart
        style={{padding: 7, marginLeft: -22}}
        data={data}
        width={350}
        height={200}
        chartConfig={chartConfig}
        />
        </View>
    </Card>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Chart;
