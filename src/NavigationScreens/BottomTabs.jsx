import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

// Screens
import HomeScreen from '../Componants/HomeScreen';
import ScanScreen from '../Componants/ScanScreen/Scan';
import SavedScreen from '../Componants/SavedDocsScreen';
import ServicesScreen from '../Componants/ServicesScreen';
import SettingsScreen from '../Componants/SettingsScreen';
import CreatePinScreen from '../Componants/Auth/CreatePinScreen.js'
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === 'Home') {
            icon = require('../Assets/HomeIcons.png');
          } else if (route.name === 'Scan') {
            icon = require('../Assets/camraIcons.png');
          } else if (route.name === 'Saved') {
            icon = require('../Assets/savedDocs.png');
          } else if (route.name === 'Services') {
            icon = require('../Assets/services2.png');
          } else if (route.name === 'Settings') {
            icon = require('../Assets/setting3.png');
          }

          return (
            <Image
              source={icon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#4CAF50' : 'gray',
              }}
              resizeMode="contain"
            />
          );
        },

        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Login" component={CreatePinScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;