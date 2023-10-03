import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { backgroundColor, primaryColor } from '../global';
import LoadingComponent from '../components/LoadingComponent';

export default function LoadingScreen({ navigation }: NativeStackHeaderProps) {

  return (
    <View style={styles.container}>
      <LoadingComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 18,
    color: primaryColor,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: -100,
  },
  image: {
    width: 200,
    height: 220,
    borderRadius: 8,
    marginLeft: 16,
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
