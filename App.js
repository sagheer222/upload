import React, {useState, createContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
const Stack = createStackNavigator();
export let Pasha = createContext(null)
const App = () => {
 
  return (
    <Pasha.Provider value={{name:"pasha",id:1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="ScreenOne" component={ScreenOne} />
          <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        </Stack.Navigator>
      </NavigationContainer>
      </Pasha.Provider>
  );
};

export default App;
