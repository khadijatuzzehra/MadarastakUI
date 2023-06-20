/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Import All screens required for StackNavigator from screens folder
import FirstScreen from './Apps/screens/FirstScreen';
import Language from './Apps/screens/Language';
import ArabicLang from './Apps/screens/ArabicLang';
import Login from './Apps/screens/Login';
import ArabicLogin from './Apps/screens/ArabicLogin';
import TabStack from './Apps/screens/TabStack';

const Stack = createStackNavigator();

function App() {
  return (
    //Navigator and Navigation Handled
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="ArabicLang" component={ArabicLang} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ArabicLogin" component={ArabicLogin} />
        <Stack.Screen name="TabStack" component={TabStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
