import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Order from '../screens/Order';
import Profile from '../screens/Profile';
import Store from '../screens/Store';
import ShowStore from '../screens/ShowStore';
import OrderHistory from '../screens/OrderHistory';
import OrderInfo from '../screens/OrderInfo';


import BottomTabNavigator from './TabNavigator';


const Stack = createStackNavigator();

export default function MainStackNavigator () {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
            <Stack.Screen name="Profile" component={Profile} />
            {/* <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="About" component={About} /> 
        <Stack.Screen name="Teleprograms" component={TelePrograms} /> */}
            <Stack.Screen name="Store" component={Store} />
            {/* <Stack.Screen name="Channel" component={Channel} /> */}
            <Stack.Screen name="ShowStore" component={ShowStore} />
            <Stack.Screen name="Order" component={Order} />
            <Stack.Screen name='OrderHistory' component={OrderHistory} />
            <Stack.Screen name='OrderInfo' component={OrderInfo} />
        </Stack.Navigator>
    );
}
