import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './navigation/tabs';


function app() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
    
  );
}

export default app;