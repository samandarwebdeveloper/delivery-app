import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, View } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import { SvgHistory } from '../assets/Icons';

import Header from '../components/Header';


interface RouterProps {
    navigation: NavigationProp<any, any>;
}


const Tab = createMaterialTopTabNavigator();

import OrderCard from "../components/OrderCard";


const pickup = [
    {
        status: 'Order received',
        date: '20/04/2020, 04:20',
        storeAddress: '13 Han Thuyen, D.1, HCM city',
        address: '285 CMT8, D.10, HCM city',
        product: 'Capuccino (x1), Smoky hamburger (x1)',
        price: '334.000',
        type: 'Pickup',
        acceptance: '10:00, Today',
    },
    {
        status: 'Order received',
        date: '20/04/2020, 04:20',
        storeAddress: '13 Han Thuyen, D.1, HCM city',
        address: '285 CMT8, D.10, HCM city',
        product: 'Capuccino (x1), Smoky hamburger (x1)',
        price: '334.000',
        type: 'Pickup',
        acceptance: '10:00, Today',
    },
    {
        status: 'Order received',
        date: '20/04/2020, 04:20',
        storeAddress: '13 Han Thuyen, D.1, HCM city',
        address: '285 CMT8, D.10, HCM city',
        product: 'Capuccino (x1), Smoky hamburger (x1)',
        price: '334.000',
        type: 'Pickup',
        acceptance: '10:00, Today',
    },
]

const delivery = [
    {
        status: 'Preparing',
        date: '20/04/2020, 04:20',
        storeAddress: '13 Han Thuyen, D.1, HCM city',
        address: '285 CMT8, D.10, HCM city',
        product: 'Capuccino (x1), Smoky hamburger (x1)',
        price: '334.000',
        type: 'Delivery',
    },
    {
        status: 'Preparing',
        date: '20/04/2020, 04:20',
        storeAddress: '13 Han Thuyen, D.1, HCM city',
        address: '285 CMT8, D.10, HCM city',
        product: 'Capuccino (x1), Smoky hamburger (x1)',
        price: '334.000',
        type: 'Delivery',
    },
    {
        status: 'Preparing',
        date: '20/04/2020, 04:20',
        storeAddress: '13 Han Thuyen, D.1, HCM city',
        address: '285 CMT8, D.10, HCM city',
        product: 'Capuccino (x1), Smoky hamburger (x1)',
        price: '334.000',
        type: 'Delivery',
    },
]


function Delivery({navigation} : RouterProps) {
    return (
        <View style={{flex: 1, paddingHorizontal: 10}}>
            <OrderCard data={delivery} navigation={navigation} />
        </View>
    )
}

function Pickup({navigation}: RouterProps) {
    return (
        <View style={{flex: 1, paddingHorizontal: 10}}>
            <OrderCard data={pickup} navigation={navigation} />
        </View>
    )
}

export default function OrderHistory({navigation}: RouterProps) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Header bgColor="#fff" title='Order history' back history={<SvgHistory />} navigation={navigation} />
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
    )
}