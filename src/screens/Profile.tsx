import { Image, ImageBackground, Text, View, SafeAreaView, StyleSheet, Dimensions, Pressable } from "react-native";
import { SvgRightArrow, SvgSupport } from "../assets/Icons";
import Header from "../components/Header";

const { width } = Dimensions.get('window');

export default function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                style={styles.headerBackground}
                source={require('../assets/images/cover-img.png')}>
                <Header actionColor="#fff" actionBgColor="rgba(0, 0, 0, 0.2)"/>
            </ImageBackground>
            <View style={styles.userAvatar}>
                <Image source={require('../assets/images/Plate.png')}/>
                <Text style={styles.userAvatarName}>User name</Text>
            </View>
            <View style={styles.userInfoBox}>
                <ImageBackground 
                    style={styles.userCard} 
                    imageStyle={{ borderRadius: 8}} 
                    source={require('../assets/images/user-card.png')}>
                    <Text style={styles.hello}>Hello</Text>
                    <Text style={styles.hello}>Username</Text>
                    <View style={styles.userActivities}>
                        <Text style={styles.joinDate}>Join date: 20/04/2020</Text>
                        <Text style={styles.points}>420 points</Text>
                    </View>
                </ImageBackground>
                <View style={styles.barcode}>
                    <Image source={require('../assets/images/Barcode.png')} />
                </View>
                <Pressable style={styles.supportBox}>
                    <View style={styles.supportBoxLeft}>
                        <SvgSupport />
                        <View style={styles.supportTextBox}>
                            <Text style={styles.supportText}>Support</Text>
                            <Text style={styles.supportTitle}>Call or chat with us</Text>
                        </View>
                    </View>
                    <SvgRightArrow />
                </Pressable>
            </View>
            <View style={styles.appInfo}>
                <Text style={styles.appTerms}>Terms and Conditions</Text>
                <Text style={styles.appVersion}>version: 1.0.0</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F9',
    },
    headerBackground: {
        height: width / 3.4,
        
    },
    userAvatar: {
        marginTop: -30,
        alignItems: 'center',
    },
    userAvatarName: {
        fontSize: 18,
        color: '#27272A',
        marginTop: 8,
        fontWeight: '700',
    },
    userInfoBox: {
        paddingHorizontal: 10,
        paddingVertical: 16,
    },
    userCard: {
        padding: 24,
        marginBottom: 12,
    },
    hello: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
    },
    userActivities: {
        marginTop: 54,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    joinDate: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '400',
    },
    points: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '700',
    },
    barcode: {
        backgroundColor: '#fff',
        paddingVertical: 16,
        borderRadius: 8,
        marginBottom: 12,
    },
    supportBox: {
        backgroundColor: '#fff',
        borderRadius: 8,
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    supportBoxLeft: {
        flexDirection: 'row',
    },
    supportTextBox: {
        marginLeft: 8,
    },
    supportText: {
        fontSize: 14,
        color: '#28282B',
        fontWeight: '400',
        marginBottom: 4,
    },
    supportTitle: {
        fontSize: 12,
        color: '#808089',
        fontWeight: '400',
    },
    appInfo: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    appTerms: {
        fontSize: 12,
        color: '#1A94FF',
        marginBottom: 16,
        fontWeight: '500',
        textDecorationLine: 'underline'
    },
    appVersion: {
        fontSize: 10,
        color: '#808089',
        marginBottom: 12,
        fontWeight: '400',
    }
})