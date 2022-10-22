import { View, Text, FlatList, Image, Pressable, StyleSheet } from "react-native";

type Props = {
    data?: any[]
}

export default function PromotionList ({data}: Props) {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>Promotion campaign</Text>
            {data && 
                <FlatList
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    contentContainerStyle={{flexDirection: 'column', maxWidth: '100%'}}
                    numColumns={2}
                    style={styles.flatlist}
                    data={data}
                    renderItem={({ item }) => (
                        <Pressable style={styles.item}>
                            <Image style={styles.itemImg} source={item.image}/>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Text style={styles.itemDate}>{item.data} - {item.until}</Text>
                        </Pressable>
                )}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        paddingVertical: 16,
    },
    text: {
        fontSize: 16,
        fontWeight: '700',
        color: '#27272A'
    },
    flatlist: {
        paddingVertical: 12,
        
    },
    item: {
        width: '48%',
        marginBottom: 16,

    },
    itemImg: {
        width: '100%',
        borderRadius: 8,
        marginBottom: 8,
    },
    itemTitle: {
        fontSize: 14,
        color: '#27272A',
        marginBottom: 2,
    },
    itemDate: {
        fontSize: 10,
        color: '#808089',
    }
})