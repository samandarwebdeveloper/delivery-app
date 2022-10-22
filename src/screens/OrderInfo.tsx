import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Header from "../components/Header";
import { NavigationProp } from "@react-navigation/native";
import { SvgLocation, SvgStoreDashed, SvgInfo } from "../assets/Icons";

interface RouterProps {
    navigation: NavigationProp<any, any>;
}


export default function OrderInfo({navigation}: RouterProps) {
    return (
        <SafeAreaView>
            <Header back bgColor="#fff" title="Order  247-96024" navigation={navigation} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={{width: '100%'}} source={require('../assets/images/order-info.png')} />
                <View style={{paddingHorizontal: 10}}>
                    <View style={styles.contact}>
                        <Text style={styles.contactText}>Preparing</Text>
                        <TouchableOpacity style={styles.contactBtn}><Text style={styles.contactBtnText}>Contact support</Text></TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.leadText}>General info</Text>
                        <View style={styles.generalInfo}>
                            <View style={[styles.generalInfoRow, {borderBottomWidth: 1, borderBottomColor: '#eee'}]}>
                                <Text style={styles.genarlInfoRowText}>Order ID</Text>
                                <Text style={styles.generalInfoRowNum}>247-96024</Text>
                            </View>
                            <View style={styles.generalInfoRow}>
                                <Text style={styles.genarlInfoRowText}>Order date</Text>
                                <Text style={styles.generalInfoRowNum}>20/04/2020, 04:20</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.leadText}>Shipping details</Text>
                        <View style={styles.shippingBox}>
                            <View style={[styles.shippingRow, {borderBottomWidth: 1, borderBottomColor: '#eee'}]}>
                                <SvgStoreDashed fill="#1A94FF" />
                                <View style={styles.shippingTextBox}>
                                    <Text style={styles.shippingLeadText}>From store</Text>
                                    <Text style={styles.shippingAddress}>13 Han Thuyen, D.1, HCM city</Text>
                                </View>
                            </View>
                            <View style={styles.shippingRow}>
                                <SvgLocation />
                                <View style={styles.shippingTextBox}>
                                    <Text style={styles.shippingLeadText}>To</Text>
                                    <Text style={styles.shippingAddress}>285 CMT8, D.10, HCM city</Text>
                                    <Text style={styles.shippingNik}>Nick • 0969696969</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.leadText}>Product info</Text>
                        <View style={styles.productBox}>
                            <View style={styles.productRow}>
                                <Image source={require('../assets/images/cappucino.png')} />
                                <View style={styles.productTextBox}>
                                    <Text style={styles.leadText}>Capuccino</Text>
                                    <Text style={styles.productInfoText}>Size: Small</Text>
                                    <Text style={styles.productInfoText}>69.000 ₫ x 1</Text>
                                    <Text style={styles.productDisc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus rhoncus lorem risus sollicitudin.</Text>
                                </View>
                            </View>
                            <View style={styles.productRow}>
                                <Image source={require('../assets/images/burger.png')} />
                                <View style={styles.productTextBox}>
                                    <Text style={styles.leadText}>Smoky burger</Text>
                                    <Text style={styles.productInfoText}>Adds on: Double-patty, Emmento</Text>
                                    <Text style={styles.productInfoText}>250.000 ₫ x 1</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.leadText}>Payment info</Text>
                            <View style={styles.paymentBoxTop}>
                                <Image source={require('../assets/images/momo.png')} />
                                <View style={styles.paymentTextBox}>
                                    <Text style={styles.paymentMethod}>Payment method</Text>
                                    <Text style={styles.paymentName}>Momo</Text>
                                </View>
                            </View>
                            <View style={styles.paymentBox}>
                                <View style={styles.paymentRow}>
                                    <Text style={styles.paymentText}>Price</Text>
                                    <Text style={styles.priceText}>319.000 ₫</Text>
                                </View>
                                <View style={styles.paymentRow}>
                                    <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                        <Text style={styles.paymentText}>Shipping fee</Text>
                                        <SvgInfo />
                                    </View>
                                    <Text style={styles.priceText}>15.000 ₫</Text>
                                </View>
                                <View style={styles.paymentRow}>
                                    <Text style={styles.paymentText}>Promotion</Text>
                                    <Text style={[styles.priceText, {color: '#00AB56'}]}>-50.000 ₫</Text>
                                </View>
                                <View style={styles.paymentRow}>
                                    <Text style={styles.paymentText}>Total</Text>
                                    <Text style={styles.priceText}>284.000 ₫</Text>
                                </View>
                            </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    contact: {
        marginTop: -30,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    contactText: {
        fontSize: 14,
        color: '#27272A',
        fontWeight: '700',
    },
    contactBtn: {
        backgroundColor: '#1A94FF',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 3,
    },
    contactBtnText: {
        color: '#fff',
        fontSize: 12,
    },
    generalInfo: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    leadText: {
        fontSize: 16,
        color: '#27272A',
        fontWeight: '700',
        marginBottom: 8,
    },
    generalInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    genarlInfoRowText: {
        fontSize: 14,
        color: '#27272A',
    },
    generalInfoRowNum: {
        fontSize: 14,
        color: '#27272A',
        fontWeight: '700',
    },
    shippingBox: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    shippingRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: 8,
    },
    shippingTextBox: {
        marginLeft: 8,
    },
    shippingLeadText: {
        fontSize: 14,
        color: '#28282B',
        marginBottom: 4,
    },
    shippingAddress: {
        fontSize: 14,
        color: '#28282B',
        fontWeight: '700',
    },
    shippingNik: {
        marginTop: 4,
        fontSize: 12,
        color: '#808089',
    },
    productBox: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    productRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: 8,
    },
    productTextBox: {
        marginLeft: 8,
        flex: 1,
    },
    productInfoText: {
        fontSize: 12,
        color: '#808089',
        marginBottom: 4,
    },
    productDisc: {
        width: '100%',
        fontSize: 12,
        color: '#808089',
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#eee',
    },
    paymentBoxTop: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        flexDirection: 'row',
    },
    paymentBox: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 70,
    },
    paymentTextBox: {
        marginLeft: 8,
    },
    paymentMethod: {
        fontSize: 14,
        color: '#28282B',
        marginBottom: 4,
    },
    paymentName: {
        fontSize: 14,
        color: '#28282B',
        fontWeight: '700',
    },
    paymentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    paymentText: {
        fontSize: 14,
        color: '#28282B',
        marginRight: 4,
    },
    priceText: {
        fontSize: 14,
        color: '#28282B',
        fontWeight: '700',
    },
    
})