import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { backgroundColor } from '../global';
import CustomHeader from "../components/CustomHeader";
import CustomTopTabBar from "../components/CustomTopTabBar";
import CouchingCourseComponent from "../components/CouchingCourseComponent";
import PowerCourseComponent from "../components/PowerCourseComponent";
import ChallengeComponent from "../components/ChallengeComponent";

export default function SportsCenter({ navigation }: any) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabs: string[] = ['Coaching', 'Challenge', 'Power'];

  const handleTabPress = (index: number) => {
    setActiveTab(index);
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="SportsCenter" />
      <CustomTopTabBar
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />
      <View style={styles.tabContent}>
        {activeTab === 0 && <CouchingCourseComponent onPress={(id) => navigation.navigate( 'CouchingDetails', {id})}/> }
        {activeTab === 1 && <ChallengeComponent/>}
        {activeTab === 2 && <PowerCourseComponent/>}
      </View>
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
  },
});
