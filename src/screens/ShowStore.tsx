import { SafeAreaView, ScrollView, View, StyleSheet, Image, Dimensions, Text, TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Header from "../components/Header";
import Servises from "../components/Servises";
import Booking from "../components/Booking";
import { SvgLike, SvgPhone, SvgLocation } from "../assets/Icons"


const { width } = Dimensions.get('window');

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const images = [
    {
        image: require('../assets/images/storeImg.png')
    },
    {
        image: require('../assets/images/storeImg.png')
    },
    {
        image: require('../assets/images/storeImg.png')
    },
    {
        image: require('../assets/images/storeImg.png')
    },
    {
        image: require('../assets/images/storeImg.png')
    },
]

export default function ShowStore({navigation}: RouterProps) {
    return (
        <SafeAreaView style={styles.container}>
            <Header back navigation={navigation} bgColor="#fff" actionBgColor="rgba(0, 0, 0, 0.1)" />
            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
                <View style={styles.storeCard}>
                    <SwiperFlatList 
                    data={images}
                    renderItem={({ item, index }) => (
                        <View style={{width: width - 20}}>
                            <Image source={item.image} style={{ width: '100%', borderRadius: 8}}/>
                                <Text style={styles.itemNumber}>{index + 1}/{images.length}</Text>
                        </View>
                    )}
                    />
                    <View style={styles.storeInfo}>
                        <View>
                            <Text style={styles.storeName}>SB Han Thuyen</Text>
                            <Text style={styles.storeOpenDay}>Open: 07:00 - 22:00</Text>
                        </View>
                        <TouchableOpacity><SvgLike /></TouchableOpacity>
                    </View>
                </View>
                <Servises/>
                <Booking/>
                <View style={styles.storeContact}>
                    <View style={styles.contactRow}>
                        <SvgPhone />
                        <View style={styles.contactTextBox}>
                            <Text style={styles.contactText}>Phone number</Text>
                            <Text style={styles.contactTitle}>0909090909</Text>
                        </View>
                    </View>
                    <View style={[styles.contactRow, {borderTopWidth: 1, borderTopColor: '#eee'}]}>
                        <SvgLocation fill="#1A94FF"/>
                        <View style={styles.contactTextBox}>
                            <Text style={styles.contactText}>Address</Text>
                            <Text style={styles.contactTitle}>13 Han Thuyen, D.1, HCM city</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F9',
    },
    body: {
        paddingHorizontal: 10,
    },
    itemNumber: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        color: '#fff',
        paddingVertical: 3,
        paddingHorizontal: 8,
        fontSize: 14,
        fontWeight: '400',
        borderRadius: 10,
        right: 5,
        bottom: 5,
    },
    storeCard: {
        paddingBottom: 16,
        borderRadius: 12,
        backgroundColor: '#fff',
        marginBottom: 12,
    },
    storeInfo: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 12,
    },
    storeName: {
        fontSize: 16,
        color: '#27272A',
        fontWeight: '500',
    },
    storeOpenDay: {
        fontSize: 14,
        color: '#27272A',
    },
    storeContact: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 40,
    },
    contactRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: 8,
    },
    contactTextBox: {
        marginLeft: 8,
    },
    contactText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#27272A',
    },
    contactTitle: {
        fontSize: 14,
        color: '#27272A',
        fontWeight: '700',
    }
})