import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, SafeAreaView, ImageSourcePropType, Pressable } from 'react-native';
import { cardBackground2, primaryColor } from '../global';

interface DataItem {
  id: string;
  title: string;
  desc: string;
  imageSource: ImageSourcePropType;
}

const PowerCourseComponent: React.FC = ({ }) => {
  const data: DataItem[] = [
    { id: '1',desc: 'Take your first step and master riding skills', title: 'Beginner', imageSource: require('../assets/power-bike.jpeg') },
    { id: '2',desc: 'Burn more calories within limited time', title: 'Fat burning', imageSource: require('../assets/power-bike.jpeg') },
    { id: '3',desc: 'Buil better mental and physical ability', title: 'Endurance',  imageSource: require('../assets/power-bike.jpeg') },
    { id: '4',desc: 'More explosive power and better muscle lnes', title: 'Muscle Strength', imageSource: require('../assets/power-bike.jpeg') },
  ];
  
  const renderItem = ({ item }: { item: DataItem }) => {
    return (
      <View style={styles.item}>
        <Pressable style={styles.cardContainer}>
          <View style={[styles.cardContent, { backgroundColor: 'white' }]}>
            <View style={{ flexDirection: 'column', flex: 1, paddingLeft: 8 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>
            <Image source={item.imageSource} style={styles.cardImage} />
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
  },
  item: {
    padding: 8,
  },
  cardContainer: {
    overflow: 'hidden',
    borderRadius: 12,
  },
  cardContent: {
    padding: 14,
    width: '96%',
    marginLeft: '2%',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  icon: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: 'gray',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: 'rgba(55, 57, 54, 0.2)',
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 5,
    padding: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  desc: {
    fontSize: 14,
    textAlign: 'left',
    paddingTop: 5
  },
  buttonContainer: {
    backgroundColor: primaryColor,
    width: 80,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 5,
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 1,
    paddingLeft: 20,
  },
  appleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: cardBackground2,
    borderRadius: 30,
    height: 40,
    width: 40,
  },
});

export default PowerCourseComponent;
