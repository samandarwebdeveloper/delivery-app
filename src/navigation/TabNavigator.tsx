import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

import { SvgHome, SvgOrder, SvgStore, SvgProfile } from '../assets/Icons';
import Home from '../screens/Home';
import Store from '../screens/Store';
import Order from '../screens/Order';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function Sidebar() {
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#1A94FF',
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
            backgroundColor: '#fff',
            height: 60,
            paddingBottom: 10,
        },
    }}>
      <Tab.Screen name="Home" options={{
        tabBarIcon: ({ color }) => (
          <View style={{
            width: '100%',
            height: '100%',
            borderTopWidth: 1,
            borderTopColor: `${color}`,
            paddingTop: 10,
            alignItems:'center',
            justifyContent:'center',
            }}>
              <SvgHome width="18px" height="18px" fill={color} />
          </View>
        ),
      }} component={Home} />
      <Tab.Screen name="Store" options={{
        tabBarIcon: ({ color }) => (
          <View style={{
            width: '100%',
            height: '100%',
            borderTopWidth: 1,
            borderTopColor: `${color}`,
            paddingTop: 10,
            alignItems:'center',
            justifyContent:'center',
            }}>
            <SvgStore width="20px" height="20px" fill={color} />
          </View>
        ),
      }} component={Store} />
      <Tab.Screen name="Order" options={{
        tabBarIcon: ({ color }) => (
          <View style={{
            width: '100%',
            height: '100%',
            borderTopWidth: 1,
            borderTopColor: `${color}`,
            paddingTop: 10,
            alignItems:'center',
            justifyContent:'center',
          }}>
              <SvgOrder width="18px" height="18px" fill={color} />
          </View>
        ),
      }} component={Order} />
      <Tab.Screen name="Profile" options={{
        tabBarIcon: ({ color }) => (
          <View style={{
            width: '100%',
            height: '100%',
            borderTopWidth: 1,
            borderTopColor: `${color}`,
            paddingTop: 10,
            alignItems:'center',
            justifyContent:'center',
            }}>
              <SvgProfile width="20px" height="20px" fill={color} />
          </View>
        ),
      }} component={Profile} />
    </Tab.Navigator>
  );
}