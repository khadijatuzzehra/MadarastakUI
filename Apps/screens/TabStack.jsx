import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens import for tab navigations
import EnglishHomeScreen from './EnglishHomeScreen';
import ArabicHomeScreen from './ArabicHomeScreen';
import EnglishProfileScreen from './EnglishProfileScreen';
import ArabicProfileScreen from './ArabicProfileScreen';
import FillScreen from './FillScreen';
import FillScreen2 from './FillScreen2';

const Tab = createBottomTabNavigator();

const TabStack = ({route}) => {
  //Receiving arguments from navigation
  const {language} = route.params;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          //Conditional statements for icons
          if (route.name === 'Home') {
            return focused ? (
              <Icon name="home" size={30} color="#226CA3" />
            ) : (
              <Icon name="home-outline" size={30} color="gray" />
            );
          } else if (route.name === 'FillScreen') {
            return focused ? (
              <Icon name="apps" size={30} color="#226CA3" />
            ) : (
              <Icon name="apps-outline" size={30} color="gray" />
            );
          } else if (route.name === 'FillScreen2') {
            return focused ? (
              <Icon name="notifications" size={30} color="#226CA3" />
            ) : (
              <Icon name="notifications-outline" size={30} color="gray" />
            );
          } else if (route.name === 'Profile') {
            return focused ? (
              <Icon name="person-circle" size={30} color="#226CA3" />
            ) : (
              <Icon name="person-circle-outline" size={30} color="gray" />
            );
          }
          // You can return any component that you like here!
          return (
            <Icon
              name={iconName}
              size={size}
              color={color}
              style={{margin: 10}}
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
          paddingBottom: 8,
        },
      })}>
      {/* Conditional Navigation based on language settings */}
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
          tabBarLabel: '',
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
          tabBarLabel: '',
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
          tabBarLabel: '',
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
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
