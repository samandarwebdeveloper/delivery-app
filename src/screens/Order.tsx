import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import { SvgHistory } from '../assets/Icons';

import Pickup from './Pickup';
import Delivery from './Delevery';
import Header from '../components/Header';


interface RouterProps {
    navigation: NavigationProp<any, any>;
}


const Tab = createMaterialTopTabNavigator();

export default function Order({navigation}: RouterProps) {
  return (
    <SafeAreaView style={{flex: 1}}>
        <Header bgColor="#fff" title='Orders' history={<SvgHistory />} navigation={navigation} />
            <Tab.Navigator 
                screenOptions={{
                tabBarPressColor: "#fff",
                tabBarActiveTintColor: '#1A94FF',
                tabBarInactiveTintColor: '#808089',
                tabBarIndicatorStyle: { backgroundColor: '#1A94FF' },
                tabBarLabelStyle: {
                    fontSize: 13,
                    textTransform: 'none'
                }
                }}
            >
        <Tab.Screen name="Store pickup" component={Pickup} />
        <Tab.Screen name="Delivery" component={Delivery} />
        </Tab.Navigator>
    </SafeAreaView>
    );
}