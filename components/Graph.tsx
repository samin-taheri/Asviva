import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {LineChart} from "react-native-chart-kit";
import Card from "./Card";
import { tableBackgroundColor, textColor } from '../global';
import { GraphProps } from "../types/data";

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
        color: (opacity = 1) => textColor, 
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
  
const Graph: React.FC<GraphProps> = ({ onPress, title, width, height }) => {
  return (
    <View style={{padding: 8}}>
        <Card>
              <View style={{flexDirection: 'column'}}>
                {title ?
              <View style={styles.iconContainer}>
                <Text style={styles.introTitle}>{title}</Text>
              </View>
              : null }
                <LineChart
                style={{padding: 0, marginLeft: -10}}
                data={data}
                width={width}
                height={height}
                chartConfig={chartConfig}
                />
                </View>
            </Card>
    </View>
  );
};

const styles = StyleSheet.create({
    introTitle: {
        fontSize: 14,
        fontWeight: "bold",
        padding: 10,
        textAlign: 'left',
      },
      textContainer: {
        flex: 1,
      },
      iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: tableBackgroundColor,
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 5,
        width: 120,
        marginBottom: 10
      },
});

export default Graph;
