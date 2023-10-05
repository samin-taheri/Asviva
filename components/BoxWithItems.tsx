import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { tableBackgroundColor } from '../global';

interface ListItem {
  id: number;
  text1: string;
  text2: string;
  text3: string;
  backgroundColor: string;
}

const data: ListItem[] = [
  { id: 1, text1: '15 sec', text2: '25% FTP', text3: '18W', backgroundColor: tableBackgroundColor},
  { id: 2, text1: '18 sec', text2: '35% FTP', text3: '35W', backgroundColor: tableBackgroundColor},
  { id: 3, text1: '12 sec', text2: '50% FTP', text3: '21W', backgroundColor: tableBackgroundColor},
  { id: 4, text1: '16 sec', text2: '25% FTP', text3: '149W', backgroundColor: tableBackgroundColor},
  { id: 5, text1: '15 sec', text2: '30% FTP', text3: '53W', backgroundColor: tableBackgroundColor},
  { id: 6, text1: '14 sec', text2: '40% FTP', text3: '18W', backgroundColor: tableBackgroundColor},
  { id: 7, text1: '17 sec', text2: '44% FTP', text3: '19W', backgroundColor: tableBackgroundColor},
  { id: 8, text1: '15 sec', text2: '25% FTP', text3: '18W', backgroundColor: tableBackgroundColor},
  { id: 9, text1: '18 sec', text2: '35% FTP', text3: '35W', backgroundColor: tableBackgroundColor},
  { id: 10, text1: '12 sec', text2: '50% FTP', text3: '21W', backgroundColor: tableBackgroundColor},
  { id: 11, text1: '16 sec', text2: '25% FTP', text3: '149W', backgroundColor: tableBackgroundColor},
  { id: 12, text1: '15 sec', text2: '30% FTP', text3: '53W', backgroundColor: tableBackgroundColor},
  { id: 13, text1: '14 sec', text2: '40% FTP', text3: '18W', backgroundColor: tableBackgroundColor},
  { id: 14, text1: '17 sec', text2: '44% FTP', text3: '19W', backgroundColor: tableBackgroundColor},
  { id: 15, text1: '15 sec', text2: '25% FTP', text3: '18W', backgroundColor: tableBackgroundColor},
];

const CardWithItems: React.FC = () => {
  const renderCard = ({ item }: { item: ListItem }) => {
    return (
        <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.row}>
            <Text style={styles.text}>{item.text1}</Text>
            <Text style={styles.text}>{item.text2}</Text>
            <Text style={styles.text}>{item.text3}</Text>
            </View>
        </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
       {data.map((item) => (
        <View key={item.id.toString()}>{renderCard({ item })}</View>
        ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    marginTop: 10,
  },
  card: {
    width: '92%',
    height: 40,
    marginVertical: 2,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    marginLeft: '4.5%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default CardWithItems;
