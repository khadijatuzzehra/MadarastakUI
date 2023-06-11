/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from './Apps/screens/FirstScreen';
import Language from './Apps/screens/Language';
import ArabicLang from './Apps/screens/ArabicLang';
import Login from './Apps/screens/Login';
import TabStack from './Apps/screens/TabStack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="ArabicLang" component={ArabicLang} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabStack" component={TabStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});

export default App;
