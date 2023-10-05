import React from 'react';
import { StyleSheet, View } from 'react-native';
import Lable from './Lable';
import ColoredCards2 from './ColoredCards2';
import { cardBackground2, primaryColor } from '../global';

const TotalWorkout2: React.FC = () => {
  return (
    <View>
        <View style={{flexDirection: 'column'}}>
        <Lable title="Total Workout"/>
        </View>
            <View style={styles.container}>
            <ColoredCards2  
            title="Total Duration"
            color={primaryColor}
            description="0 min"
            cardColor={cardBackground2}
            imageSource={require('../assets/times.png')}
            />
             <ColoredCards2  
            title="Exercise Times"
            color={primaryColor}
            description="0"
            cardColor={cardBackground2}
            imageSource={require('../assets/bike.png')}
            />
             <ColoredCards2  
            title="Total  Calories"
            color={primaryColor}
            description="0 kcal"
            cardColor={cardBackground2}
            imageSource={require('../assets/calories.png')}
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

export default TotalWorkout2;
