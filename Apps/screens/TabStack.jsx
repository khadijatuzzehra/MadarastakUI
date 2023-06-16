import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import Home from '../../assets/Icons/home.svg';
// import HomeOutline from '../../assets/Icons/home-outline.svg';
// import Apps from '../../assets/Icons/apps.svg';
// import AppsOutline from '../../assets/Icons/apps-outline.svg';
// import Alert from '../../assets/Icons/notifications.svg';
// import AlertOutline from '../../assets/Icons/notifications-outline.svg';
// import Pf from '../../assets/Icons/person-circle.svg';
// import PfOutline from '../../assets/Icons/person-circle-outline.svg';

import EnglishHomeScreen from './EnglishHomeScreen';
import ArabicHomeScreen from './ArabicHomeScreen';
import EnglishProfileScreen from './EnglishProfileScreen';
import ArabicProfileScreen from './ArabicProfileScreen';
import FillScreen from './FillScreen';
import FillScreen2 from './FillScreen2';

const Tab = createBottomTabNavigator();

const TabStack = ({route}) => {
  const {language} = route.params;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            console.log('hello');
            return focused ? (
              <Icon name="home" size={55} color="#226CA3" />
            ) : (
              <Icon name="home-outline" size={55} color="gray" />
            );
          } else if (route.name === 'FillScreen') {
            return focused ? (
              <Icon name="apps" size={55} color="#226CA3" />
            ) : (
              <Icon name="apps-outline" size={55} color="gray" />
            );
          } else if (route.name === 'FillScreen2') {
            return focused ? (
              <Icon name="notifications" size={55} color="#226CA3" />
            ) : (
              <Icon name="notifications-outline" size={55} color="gray" />
            );
          } else if (route.name === 'Profile') {
            return focused ? (
              <Icon name="person-circle" size={55} color="#226CA3" />
            ) : (
              <Icon name="person-circle-outline" size={55} color="gray" />
            );
          }
          // You can return any component that you like here!
          return (
            <Icon
              name={iconName}
              size={size}
              color={color}
              style={{margin: 20}}
            />
          );
        },

        tabBarActiveTintColor: '#226CA3',
        tabBarInactiveTintColor: 'gray',

        tabBarStyle: {
          height: 70,

          paddingVertical: 8,
          backgroundColor: 'white',
        },
        tabBarLabelStyle: {
          paddingBottom: 20,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={
          language === 'English' ? EnglishHomeScreen : ArabicHomeScreen
        }
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="FillScreen"
        component={FillScreen}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          title: 'FillScreen',
        }}
      />
      <Tab.Screen
        name="FillScreen2"
        component={FillScreen2}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          title: 'FillScreen2',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={
          language === 'English' ? EnglishProfileScreen : ArabicProfileScreen
        }
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
