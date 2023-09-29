import React from 'react';
import { StyleSheet, View } from 'react-native';
import WorkoutCard from './WorkoutCard';
import { firstCard, secondCard, thirdCard } from '../global';
import Lable from './Lable';

const Workout: React.FC = () => {
  return (
    <View>
        <Lable title="Total Workout"/>
        <View style={{flexDirection: 'column'}}>
        <WorkoutCard
                cardColor={'white'}
                imageSource={require("../assets/5.jpg")}
                title="Sample Card"
                description="This is a sample card with an image on the left and content on the right."
            />
             <WorkoutCard
                cardColor={'white'}
                imageSource={require("../assets/5.jpg")}
                title="Sample Card"
                description="This is a sample card with an image on the left and content on the right."
            />
            <WorkoutCard
                cardColor={'white'}
                imageSource={require("../assets/5.jpg")}
                title="Sample Card"
                description="This is a sample card with an image on the left and content on the right."
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

export default Workout;
