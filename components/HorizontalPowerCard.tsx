import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Lable from "./Lable";
import PowerCard from "./PowerCard";
import { CochingCardProps } from "../types/data";

const cardData = [
  { id: '1', backgroundColor: '#7a5a7c', desc: 'Take your first step and master riding skills', title1: 'Beginner', title2: '15-minute Body Warm Up', kcal: '82 kcal',  imageSource: require('../assets/power-bike.png') },
  { id: '2', backgroundColor: '#5a5a7c', desc: 'Burn more calories within limited time', title1: 'Fat burning',  title2: '20-minute Basic Training', kcal: '128 kcal', imageSource: require('../assets/power-bike.png') },
  { id: '3', backgroundColor: '#5a7a7c', desc: 'Build better mental and physical ability', title1: 'Endurance', title2: '5-minute Basic Exercise for Starters', kcal: '32 kcal',  imageSource: require('../assets/power-bike.png') },
  { id: '4', backgroundColor: '#5a7c5f', desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '10-minute Tempo Adaptation', kcal: '62 kcal', imageSource: require('../assets/power-bike.png') },
  { id: '5', backgroundColor: '#7c765a', desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '15-minute Energy Awakening', kcal: '98 kcal', imageSource: require('../assets/power-bike.png') },
  { id: '6', backgroundColor: '#7c6b5a', desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '20-minute Rhythm Control',  kcal: '139 kcal', imageSource: require('../assets/power-bike.png') },
  { id: '7', backgroundColor: '#7c5d5a', desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '20-minute Aerobic Interval Experience', kcal: '137 kcal', imageSource: require('../assets/power-bike.png') },
  { id: '8', backgroundColor: '#7c5a72', desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '10-minute Daily Health', kcal: '58 kcal', imageSource: require('../assets/power-bike.png') },
];

const HorizontalPowerCard: React.FC<CochingCardProps> = ({onPress}) => {
  // const itemWidth = 200;
  // const separatorWidth = 2;
  // const totalItemWidth = itemWidth + separatorWidth;

  return (
    <View style={styles.container}>
    <Lable title="Power Course" />
      <FlatList
        data={cardData}
        keyExtractor={(item) => item.id}
        horizontal
        // pagingEnabled
        // getItemLayout={(data, index) => ({
        //   length: totalItemWidth,
        //   offset: totalItemWidth * index,
        //   index,
        // })}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <PowerCard
            backgroundColor={item.backgroundColor}
            title={item.title2}
            kcal={item.kcal}
            id={item.id}
            onPress={() => onPress(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30
  },
});

export default HorizontalPowerCard;
