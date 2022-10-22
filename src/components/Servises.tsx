import { View, Image, Text, Pressable, StyleSheet } from "react-native"

export default function Servises() {
    return (
        <View style={styles.servises}>
                <Pressable style={styles.servisesItem}>
                    <Image source={require('../assets/images/servise1.png')} />
                    <Text style={styles.servisesItemLed}>Store pickup</Text>
                    <Text style={styles.servisesItemText}>Best quality</Text>
                </Pressable>
                <View style={styles.verticleLine}></View>
                <Pressable style={styles.servisesItem}>
                    <Image source={require('../assets/images/servise2.png')} />
                    <Text style={styles.servisesItemLed}>Delivery</Text>
                    <Text style={styles.servisesItemText}>Always on time</Text>
                </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    servises: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 16,
        marginBottom: 12,
    },
    verticleLine: {
        height: '50%',
        width: 1,
        backgroundColor: '#eee',
    },
    servisesItem: {
        alignItems: 'center',
        width: '50%'
    },
    servisesItemLed: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: '500',
        color: '#27272A'
    },
    servisesItemText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#27272A'
    },
})