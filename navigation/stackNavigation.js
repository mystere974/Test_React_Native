import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
    screenOptions={{
      headerShown:false
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
