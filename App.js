import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingsScreen';
import Tabs from './navigation/tabs';

const Tab = createBottomTabNavigator();

function app() {
  return (
    <NavigationContainer>
    <Tabs />
    </NavigationContainer>
  );
}

export default app;