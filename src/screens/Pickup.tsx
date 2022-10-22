import { View } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import OrderCard from "../components/OrderCard";

interface RouterProps {
    navigation: NavigationProp<any, any>;
}
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
    }
]

export default function Pickup({navigation}: RouterProps) {
    return (
        <View style={{flex: 1, paddingHorizontal: 10}}>
            <OrderCard data={pickup} navigation={navigation} />
        </View>
    )
}