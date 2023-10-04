import React from "react";
import { View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { backgroundColor } from '../global';
import CustomHeader from "../components/CustomHeader";
import ChallengeComponent from "../components/ChallengeComponent";
import PowerCourseComponent from "../components/PowerCourseComponent";
import CouchingCourseComponent from "../components/CouchingCourseComponent";

export default function SportsCenter({ navigation }: any) {
      
      const Tab = createMaterialTopTabNavigator();

        return (
          <View style={styles.container}>
            <CustomHeader title="Sports Center" />
            <NavigationContainer independent={true}>
              <Tab.Navigator>
              <Tab.Screen name="Couching" component={CouchingCourseComponent} />
                <Tab.Screen name="Challenge" component={ChallengeComponent} />
                <Tab.Screen name="Power" component={PowerCourseComponent} />
              </Tab.Navigator>
            </NavigationContainer>
          </View>
        );
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: backgroundColor,
        },
        tabContent: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
      });
      