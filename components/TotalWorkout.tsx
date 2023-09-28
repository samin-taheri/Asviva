import React from 'react';
import { StyleSheet, View } from 'react-native';
import ColoredCard from './ColoredCard'; 
import Lable from './Lable';
import { firstCard, secondCard, thirdCard } from '../global';

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
            cardColor={firstCard} 
        />
        <ColoredCard
            icon="zap"
            title="Exercise Times"
            description="0"
            cardColor={secondCard}
        />
        <ColoredCard
            icon="pie-chart"
            title="Total Calorie"
            description="0 kcal"
            cardColor={thirdCard}
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
