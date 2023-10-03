import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { cardBackground2, primaryColor, textColor } from '../global';

interface DataItem {
  id: string;
  title: string;
  backgroundImage: string;
}

interface ChallengeComponentProps {
  backgroundImage: string; 
}

const ChallengeComponent: React.FC = ({ }) => {
  const data: DataItem[] = [
    { id: '1', title: 'Sightseeing road (Norway)', backgroundImage: 'https://img.freepik.com/free-photo/driving-asphalt-vanishing-point-horizon-generated-by-ai_188544-38955.jpg?t=st=1696339233~exp=1696342833~hmac=dd1be534faa48adcaebf071cf25318a67ec7d453fcd35e02045c9820373fd833&w=2000' },
    { id: '2', title: '(Xiamen) Skybike path', backgroundImage: 'https://img.freepik.com/free-photo/driving-asphalt-vanishing-point-horizon-generated-by-ai_188544-38955.jpg?t=st=1696339233~exp=1696342833~hmac=dd1be534faa48adcaebf071cf25318a67ec7d453fcd35e02045c9820373fd833&w=2000' },
    { id: '3', title: 'Otar River (Norway)', backgroundImage: 'https://img.freepik.com/free-photo/driving-asphalt-vanishing-point-horizon-generated-by-ai_188544-38955.jpg?t=st=1696339233~exp=1696342833~hmac=dd1be534faa48adcaebf071cf25318a67ec7d453fcd35e02045c9820373fd833&w=2000' },
    { id: '4', title: 'The Alps', backgroundImage: 'https://img.freepik.com/free-photo/driving-asphalt-vanishing-point-horizon-generated-by-ai_188544-38955.jpg?t=st=1696339233~exp=1696342833~hmac=dd1be534faa48adcaebf071cf25318a67ec7d453fcd35e02045c9820373fd833&w=2000' },
    { id: '5', title: '(Austria) Alpine garden', backgroundImage: 'https://img.freepik.com/free-photo/driving-asphalt-vanishing-point-horizon-generated-by-ai_188544-38955.jpg?t=st=1696339233~exp=1696342833~hmac=dd1be534faa48adcaebf071cf25318a67ec7d453fcd35e02045c9820373fd833&w=2000' },
    { id: '6', title: '(Three dimensional) space tunnel', backgroundImage: 'https://img.freepik.com/free-photo/driving-asphalt-vanishing-point-horizon-generated-by-ai_188544-38955.jpg?t=st=1696339233~exp=1696342833~hmac=dd1be534faa48adcaebf071cf25318a67ec7d453fcd35e02045c9820373fd833&w=2000' },
    { id: '7', title: '(3D) Pink Blue tunnel', backgroundImage: 'https://img.freepik.com/free-photo/driving-asphalt-vanishing-point-horizon-generated-by-ai_188544-38955.jpg?t=st=1696339233~exp=1696342833~hmac=dd1be534faa48adcaebf071cf25318a67ec7d453fcd35e02045c9820373fd833&w=2000' },
    { id: '8', title: '(3D) Love tunnel', backgroundImage: 'https://img.freepik.com/free-photo/driving-asphalt-vanishing-point-horizon-generated-by-ai_188544-38955.jpg?t=st=1696339233~exp=1696342833~hmac=dd1be534faa48adcaebf071cf25318a67ec7d453fcd35e02045c9820373fd833&w=2000' },
    { id: '9', title: '(3D) Purple and Yellow tunnel', backgroundImage: 'https://img.freepik.com/free-photo/driving-asphalt-vanishing-point-horizon-generated-by-ai_188544-38955.jpg?t=st=1696339233~exp=1696342833~hmac=dd1be534faa48adcaebf071cf25318a67ec7d453fcd35e02045c9820373fd833&w=2000' },
    { id: '10', title: '(Three dimensional) time travel', backgroundImage: 'https://img.freepik.com/free-photo/driving-asphalt-vanishing-point-horizon-generated-by-ai_188544-38955.jpg?t=st=1696339233~exp=1696342833~hmac=dd1be534faa48adcaebf071cf25318a67ec7d453fcd35e02045c9820373fd833&w=2000' },
  ];

  const renderItem = ({ item }: { item: DataItem }) => {
    return (
      <View style={styles.item}>
        <View style={styles.cardContainer}>
          <ImageBackground source={{ uri: item.backgroundImage }} style={styles.cardBackground}>
            <View style={[styles.cardContent, { backgroundColor: 'rgba(255, 255, 255, 0.77)' }]}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                    name="download-outline"
                    size={20}
                    color={textColor}
                />
            </View>
            </View>
          </ImageBackground>
        </View>
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
    width: 355,
    marginLeft: '5%',
    marginTop: '19%',
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

export default ChallengeComponent;
