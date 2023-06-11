import React from 'react';
import {Text} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import EnglishHomeScreen from './EnglishHomeScreen';
// import ArabicHomeScreen from './ArabicHomeScreen';

// const Tab = createBottomTabNavigator();

const TabStack = ({route}) => {
  const {language} = route.params;

  return (
    // <Tab.Navigator>
    //   <Tab.Screen
    //     name="Home"
    //     component={language === 'en' ? EnglishHomeScreen : ArabicHomeScreen}
    //   />
    //   {/* Add more screens as needed */}
    // </Tab.Navigator>
    <Text style={{color: 'red'}}>Time to add things</Text>
  );
};

export default TabStack;
