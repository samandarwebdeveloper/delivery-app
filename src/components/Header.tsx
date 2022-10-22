import { View, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native"
import { NavigationProp } from "@react-navigation/native";
import { SvgDots, SvgClose, SvgBack } from '../assets/Icons'


type Props = {
    title?: string;
    children?: JSX.Element | JSX.Element[];
    history?: JSX.Element;
    actionColor?: string;
    actionBgColor?: string;
    bgColor?: string;
    back?: boolean;
    navigation?: NavigationProp<any, any>;
};

const Header = ({title, children, history, actionColor, actionBgColor, bgColor, back, navigation}: Props) => {
    return (
        <View style={[styles.header, {backgroundColor: bgColor ? bgColor : 'transparent'}]}>
            <View style={styles.headerLeft}>
                {back && <TouchableOpacity onPress={() => navigation?.goBack()} style={[styles.back, {backgroundColor: actionBgColor || 'transparent'}]}><SvgBack /></TouchableOpacity>}
                {children}
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.actionBtns}>
                <TouchableOpacity style={styles.history} onPress={() => navigation?.navigate('OrderHistory')}>
                    {history}
                </TouchableOpacity>
                <View style={[styles.actionList, {backgroundColor: actionBgColor || 'rgba(0, 0, 0, 0.05)'}]}>
                    <Pressable style={styles.actionListItem}>
                        <SvgDots fill={actionColor}/>
                    </Pressable>
                    <Pressable style={[styles.actionListItem, {borderLeftWidth: 1, borderLeftColor: '#aaa'}]}>
                        <SvgClose fill={actionColor}/>
                    </Pressable>
                </View>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 16,
        paddingBottom: 10,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    back: {
        borderRadius: 50,
        paddingHorizontal: 12,
        paddingVertical: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: '#27272A',
        fontWeight: '700',
    },
    history: {
        marginRight: 10,
    },
    actionBtns: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto'
    },
    actionList: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderRadius: 20,
    },
    actionListItem: {
        paddingHorizontal: 5,
    }
})

export default Header;