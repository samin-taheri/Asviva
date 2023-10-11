import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {BarChart} from "react-native-chart-kit";
import Card from "./Card";
import { tableBackgroundColor, textColor } from '../global';
import { GraphProps } from "../types/data";
  
const Graph: React.FC<GraphProps> = ({ onPress, title, width, height, barPercentage, color }) => {
  return (
    <View style={{padding: 8}}>
        <Card>
              <View style={{flexDirection: 'column'}}>
                {title ?
              <View style={styles.iconContainer}>
                <Text style={styles.introTitle}>{title}</Text>
              </View>
              : null }
             
              <BarChart
                data={{
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
                      strokeWidth: 1
                    }
                  ],
                }}
                width={width}
                height={height}
                yAxisLabel=""
                yAxisSuffix=""
                chartConfig={{
                  backgroundGradientFrom: 'white', 
                  backgroundGradientTo: 'white',
                  decimalPlaces: 0, 
                  color: (opacity = 0.1) => color || textColor,
                  barPercentage: barPercentage
                }}
                style={{left: -2}}
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
