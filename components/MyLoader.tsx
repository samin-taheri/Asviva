import React   from 'react'

import { Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import { primaryColor } from '../global';

export interface MyLoaderProps {
    title?: string;
}
const Myloader: React.FC<MyLoaderProps> = ({title}) => {
    return (
            <SafeAreaView style={styles.contentContainer}>
                <Image source={require("../assets/loader.gif")} style={styles.image} />
                <Text style={styles.text}>{title}</Text>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      color: primaryColor,
      fontWeight: '600',
    },
    container: {
      flex: 1,
   },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 120,
      height: 120,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      width: '90%',
      height: '10%',
      alignItems: 'center',
      paddingLeft: '10%',
    },
    button: {
      backgroundColor: primaryColor,
      paddingVertical: 15,
      width: '100%',
      alignItems: 'center',
      borderRadius: 12,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: '600',
    },
  });
  

export default Myloader;