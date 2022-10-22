import * as React from "react"
import { View, Text, StyleSheet, FlatList, SafeAreaView, TextInput, TouchableOpacity  } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import Header from "../components/Header";
import { SvgStoreDashed, SvgMagnifier, SvgXClose } from '../assets/Icons'
import NotFoundStore from "../components/NotFoundStore";

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const stories = [
    {
        id: 1,
        name: "SB Van Hanh Mall",
        address: "11 Su Van Hanh, D.10, HCM city",
    },
    {
        id: 2,
        name: "SB CMT8",
        address: "24 bis Cach Mang Thang 8, D.3,...",
    },
    {
        id: 3,
        name: "SB Han Thuyen",
        address: "11-13 Han Thuyen, D.1, HCM city",
    },
    {
        id: 4,
        name: "SB Leman",
        address: "117 Nguyen Dinh Chieu, D.3, HC...",
    },
    {
        id: 5,
        name: "SB Ibis",
        address: "2 Hong Ha st, D.Tan Binh, HCM...",
    },
    {
        id: 6,
        name: "SB Golden Mansion",
        address: "119 Pho Quang, Phu Nhuan, HCM...",
    },
    {
        id: 7,
        name: "SB New World",
        address: "76 Le Lai D.1, HCM city",
    },
    {
        id: 8,
        name: "SB Nguyen Van Troi",
        address: "66 Nguyen Van Troi, D.Phu Nhua...",
    }
]


export default function Store({ navigation }: RouterProps) {
    const [search, setSearch] = React.useState('')
    const [data, setData] = React.useState<{id: number; name: string, address: string}[]>([])
    
    React.useEffect(() => {
        if(search === '') {
            return setData(stories)
        }
        setData([...stories.filter(store => store.name.toLowerCase().includes(search.toLowerCase()))])
    }, [search])

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Stores" bgColor="#fff"/>
            <View style={styles.searchBox}>
                <SvgMagnifier style={styles.searchIcon} />
                <TextInput style={styles.input}
                value={search}
                onChangeText={setSearch}
                clearButtonMode="always"
                    placeholder="Search store" />
                    {search && <TouchableOpacity style={styles.clear} onPress={() => setSearch('')}>
                        <SvgXClose />
                    </TouchableOpacity>
                    }
            </View>
            {data.length > 0 ? <FlatList 
                data={data}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                style={styles.list}
                renderItem={({item}) => {
                        return <TouchableOpacity onPress={() => navigation.navigate("ShowStore")} style={styles.item}>
                            <SvgStoreDashed />
                            <View style={styles.itemTextBox}>
                                <Text style={styles.title}>{item.name}</Text>
                                <Text style={styles.address}>{item.address}</Text>
                            </View>
                        </TouchableOpacity>
                    
                }}
            />
            : <NotFoundStore />}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F9',
    },
    searchBox: {
        backgroundColor: '#fff',
        paddingBottom: 10,
    },
    searchIcon: {
        position: 'absolute',
        top: 10,
        left: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        paddingLeft: 35,
        marginHorizontal: 10,
        borderColor: '#DDDDE3',
        borderRadius: 4,
        color: '#000'
    },
    clear: {
        position: 'absolute',
        top: 14,
        right: 20,
    },
    list: {
        width: '100%',
        paddingHorizontal: 10,
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginVertical: 6,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 5,
    },
    itemTextBox: {
        marginLeft: 8,
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    itemText: {
        flex: 1,
    },
    title: {
        fontSize: 13,
        fontWeight: '700',
        marginBottom: 8,
        color: '#253536',
    },
    address: {
        
    },
});