import { View, Image, Text, StyleSheet } from "react-native";


export default function NotFoundStore() {
    return (
        <View style={styles.content}>
            <Image source={require('../assets/images/NotFoundStore.png')} />
            <Text style={styles.text}>Sorry, we nearly found it!</Text>
            <Text style={styles.title}>Please try again, better luck next time</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: '#27272A',
        marginBottom: 2,
        fontWeight: '700',
    },
    title: {
        fontSize: 14,
        color: '#27272A',
    }
})