import React from 'react'
import {
  Platform,
  SafeAreaView,
  Button,
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screen/Main';
import Details from '../screen/Details';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
  
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
  
  );
}
export default AppNavigation;