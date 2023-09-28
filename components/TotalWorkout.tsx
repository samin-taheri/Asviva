import React from 'react';
import { StyleSheet, View } from 'react-native';
import ColoredCard from './ColoredCard'; 
import Lable from './Lable';

const TotalWorkout: React.FC = () => {
  return (
    <View>
        <View style={{flexDirection: 'column'}}>
        <Lable title="Total Workout"/>
        </View>
            <View style={styles.container}>
        <ColoredCard
            icon="clock"
            title="Total Duration"
            description="0 min"
            cardColor="#93bffc" 
        />
        <ColoredCard
            icon="zap"
            title="Exercise Times"
            description="0"
            cardColor="#2383e8"
        />
        <ColoredCard
            icon="pie-chart"
            title="Total Calorie"
            description="0 kcal"
            cardColor="#0056b3" 
        />
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8
      },
});

export default TotalWorkout;
