import * as React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import DailyPicScreen from './screens/DailyPicScreen';
import HomeScreen from './screens/HomeScreen';
import SpaceCraftsScreen from './screens/SpaceCraftsScreen';
import StarMapScreen from './screens/StarMapScreen';
import {StatusBar} from 'expo-status-bar';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
function App(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = 'Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name = 'Home' component = {HomeScreen}/>
          <Stack.Screen name = 'DailyPic' component = {DailyPicScreen}/>
          <Stack.Screen name = 'SpaceCrafts' component = {SpaceCraftsScreen}/>
          <Stack.Screen name = 'StarMap' component = {StarMapScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}
export default App;