import { FlatList, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SvgLocation, SvgStoreDashed, SvgClock } from "../assets/Icons";
import { NavigationProp } from "@react-navigation/native";

type Props = {
    data: any[];
    navigation?: NavigationProp<any, any>;
}

export default function OrderCard({ data, navigation }: Props) {


    const statusInfo = (string: string) => {
        if(string === 'Preparing') {
            return styles.Preparing
        }
        else if(string === 'Delivery failed') {
            return styles.DeliveryFailed
        }
        else if(string === 'Delivered') {
            return styles.Delivered
        } 
        else if(string === 'Order received') {
            return styles.OrderReceived
        }
        else {
            return styles.Delivered
        }
    }

    return (
        <FlatList 
        data={data}
        renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => navigation?.navigate('OrderInfo')}>
            <View style={styles.cardHeader}>
                <Text 
                style={[
                    styles.status, 
                    statusInfo(item.status)
                ]
                }>{item.status}</Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>
            <View>
                <View style={styles.addressRow}>
                    <SvgStoreDashed fill="#1A94FF" />
                    <Text style={styles.addressText}>{item.storeAddress}</Text>
                </View>
                <View style={[styles.addressRow, {borderTopWidth: 1, borderTopColor: '#eee', paddingLeft: 5}]}>
                    {item.type === 'Pickup' ? <SvgClock /> : <SvgLocation />}
                    <Text style={styles.addressText}>{item.acceptance ? item.acceptance : item.address}</Text>
                </View>
            </View>
            <View style={styles.orderProduct}>
                <Text style={styles.productName}>{item.product}</Text>
                <Text style={styles.price}>{item.price} ₫</Text>
            </View>
        </TouchableOpacity>
        )}
    />
    )
}


const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginVertical: 6,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    status: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        fontSize: 14,
        fontWeight: '500',
        borderRadius: 8,
    },
    Delevering: {
        backgroundColor: '#F0F8FF',
        color: '#1A94FF',
    },
    Preparing: {
        backgroundColor: '#FFF5EB',
        color: '#FC820A',
    },
    Delivered: {
        backgroundColor: '#EFFFF4',
        color: '#00AB56',
    },
    DeliveryFailed: {
        backgroundColor: '#FFF0F1',
        color: '#FF424E',
    },
    OrderReceived: {
        backgroundColor: '#FFF5EB',
        color: '#FC820A',
    },
    date: {
        fontSize: 12,
        color: '#808089',
    },
    addressRow: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingHorizontal: 4,
        paddingVertical: 10,
    },
    addressText: {
        fontSize: 14,
        color: '#27272A',
        marginLeft: 8,
    },
    orderProduct: {
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
    },
    productName: {
        fontSize: 14,
        color: '#28282B'
    },
    price: {
        fontSize: 14,
        color: '#28282B',
        fontWeight: '700',
    }
})