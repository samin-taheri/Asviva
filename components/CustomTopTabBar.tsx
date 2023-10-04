import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { primaryColor } from '../global';

interface CustomTopTabBarProps {
  tabs: string[];
  activeTab: number;
  onTabPress: (index: number) => void;
}

const CustomTopTabBar: React.FC<CustomTopTabBarProps> = ({
  tabs,
  activeTab,
  onTabPress,
}) => {
  return (
    <View style={styles.tabBar}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tabItem,
            activeTab === index && styles.activeTab,
          ]}
          onPress={() => onTabPress(index)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === index && styles.activeTabText,
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff', 
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 2, 
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2, 
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: primaryColor, 
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000', 
  },
  activeTabText: {
    color: primaryColor, 
  },
});

export default CustomTopTabBar;
