import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, SafeAreaView, ImageSourcePropType, Pressable, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { cardBackground2, primaryColor, textColor } from '../global';
import { CouchingCourseComponentProps } from '../types/data';

interface DataItem {
  id: string;
  title: string;
  user: string;
  kcal: string;
  imageSource: ImageSourcePropType;
}
const CouchingCourseComponent: React.FC<CouchingCourseComponentProps> = ({onPress }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    // Simulate a half-second delay before loading the data
    setTimeout(() => {
      const newData: DataItem[] = [
          { id: '1',user: '19 min', kcal: '91 kcal', title: 'Hit Whole Body Fat Burning', imageSource: require('../assets/couching-1.jpg') },
          { id: '2',user: '37 min', kcal: '235 kcal', title: 'Fat Burning Cardio Workout New', imageSource: require('../assets/couching-3.jpg') },
          { id: '3',user: '24 min', kcal: '134 kcal', title: 'Sweat Fat Burning', imageSource: require('../assets/couching-5.jpg') },
          { id: '4',user: '17 min', kcal: '89 kcal', title: 'HIT Training New', imageSource: require('../assets/couching-6.jpg') },
          { id: '5',user: '30 min', kcal: '170 kcal', title: 'Rhythmic Fat Riding', imageSource: require('../assets/couching-4.jpg') },
          { id: '6',user: '22 min', kcal: '132 kcal', title: 'Cardşopulmonary Strength Training New', imageSource: require('../assets/couching-8.jpg') },
          { id: '7',user: '29 min', kcal: '185 kcal', title: 'Comprehensive Fat Burning', imageSource: require('../assets/couching-9.jpg') },
          { id: '8',user: '27 min', kcal: '186 kcal', title: 'Strength Training New', imageSource: require('../assets/couching-10.jpg') },
          { id: '9',user: '25 min', kcal: '129 kcal', title: 'Speed & Endurance Training', imageSource: require('../assets/couching-11.jpg') },
          { id: '10',user: '22 min', kcal: '138 kcal', title: 'Endurance Training New', imageSource: require('../assets/couching-3.jpg') },
      ];
      setData(newData);
      setLoading(false);
    }, 500);
  }, []);
  
  const renderItem = ({ item }: { item: DataItem }) => {
    return (
      <View style={styles.item}>
        <Pressable style={styles.cardContainer} onPress={() => onPress(item?.id)}>
          <ImageBackground source={item.imageSource} style={styles.cardBackground}>
            <View style={[styles.cardContent, { backgroundColor: 'rgba(255, 255, 255, 0.77)' }]}>
              <View style={{flexDirection: 'column'}}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                    name="account-supervisor"
                    size={20}
                    color={textColor}
                />
                <Text style={{fontSize: 11}}>{item.user}</Text>
                </View>
                <View style={[styles.iconContainer , {marginLeft: 10}]}>
                <FontAwesome
                    name="flash"
                    size={20}
                    color={textColor}
                    style={{paddingRight: 5}}
                />
                <Text style={{fontSize: 11}}>{item.kcal}</Text>
                </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </Pressable>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={primaryColor} />
      </View>
    );
  }

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
    marginLeft: 8,
    marginRight: 8
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '13%',
  },
  item: {
    padding: 8, 
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    overflow: 'hidden',
    borderRadius: 12,
  },
  cardBackground: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  cardContent: {
    padding: 14,
    width: '93%',
    marginLeft: '3.5%',
    marginTop: '17%',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  icon: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: 'gray'
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: 'rgba(55,57,54,0.2)',
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 5,
    padding: 5
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    paddingRight: 30,
    textAlign: 'left'
  },
  buttonContainer: {
    backgroundColor: primaryColor,
    width: 80,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 5
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 1,
    paddingLeft: 20
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

export default CouchingCourseComponent;
