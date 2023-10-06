import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import More from "../screens/More";
import SportsCenter from "../screens/SportsCenter";
import Profile from "../screens/Profile";
import Details from "../screens/Details";
import { primaryColor } from '../global';
import StartCreating from "../screens/StartCreating";
import { Text, View, Image, Pressable } from "react-native";
import ConnectDevice from "../screens/ConnectDevice";
import Cycle from "../screens/Cycle";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import ForgotPAssword from "../screens/ForgotPassword";
import SplashScreen from "../screens/SplashScreen";
import LoadingScreen from "../screens/LoadingScreen";
import CouchingDetails from "../screens/CouchingDetails";
import ChallengeDetails from "../screens/ChallengeDetails";
import PowerDetails from "../screens/PowerDetails";
import PowerSubDetails from "../screens/PowerSubDetails";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator();
function RootNavigator() {
  
  return (
    <Stack.Navigator 
    initialRouteName="Splash"
    >
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="StartCreating"
        component={StartCreating}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false,
        headerTitle: 'Record of Workouts' }}
      />
       <Stack.Screen
        name="ConnectDevice"
        component={ConnectDevice}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{ headerShown: false}}
      />
       <Stack.Screen
        name="ForgorPassword"
        component={ForgotPAssword}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false}}
      />
       <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{ headerShown: false}}
      />
       <Stack.Screen
        name="CouchingDetails"
        component={CouchingDetails}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="ChallengeDetails"
        component={ChallengeDetails}
        options={{ headerShown: false}}
      />
        <Stack.Screen
        name="PowerDetails"
        component={PowerDetails}
        options={{ headerShown: false}}
      />
        <Stack.Screen
        name="PowerSubDetails"
        component={PowerSubDetails}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  );
}
const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="home" size={30} color={focused ? primaryColor : color} />
          ),
          tabBarIconStyle: {marginTop: 5},
          tabBarLabel: "",
          headerLeft: () => (
            <Pressable style={{ paddingLeft: 16 }} onPress={()=> navigation.navigate('Profile')}>
              <MaterialIcons name="account-circle" size={37} color="#dadada" />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable style={{ right: 15, borderRadius: 8, backgroundColor: '#e8e8e8', padding: 6, flexDirection: 'row' }} onPress={()=> navigation.navigate('ConnectDevice')}>
              <Feather name="radio" size={18} color='#000'  style={{paddingRight: 4, bottom: 0.5}}/>
              <Text style={{fontSize: 12, paddingRight: 3}}>Tap to Connect</Text>
            </Pressable>
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../assets/logo.png')}
                style={{ width: 85, height: 25 }}
              />
            </View>
          ),
          headerTitleStyle: {fontSize: 18, fontWeight: '600'}
        })
      }
      />
      <BottomTab.Screen
        name="SportsCenter"
        component={SportsCenter}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo name="network" size={30} color={focused ? primaryColor : color} />
          ),
          tabBarIconStyle: {marginTop: 5},
          tabBarLabel: "",
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name="Cycle"
        component={Cycle}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="circle-double" size={35} color={focused ? primaryColor : color} />
          ),
          tabBarIconStyle: {marginTop:2},
          tabBarLabel: "",
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo name="grid" size={35} color={focused ? primaryColor : color} />
          ),
          tabBarIconStyle: {marginTop: 5},
          tabBarLabel: "",
          headerShown: false
        }}
      />
    </BottomTab.Navigator>
  );
}
