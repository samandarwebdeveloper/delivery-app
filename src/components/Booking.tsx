import * as React from 'react'
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import { SvgCalendar } from '../assets/Icons'

type Props = {
    button?: boolean;
};

export default function Booking ({button}: Props) {
    return (
        <View style={styles.bookingBox}>
                <View style={styles.bookingTop}>
                    <View>
                        <Text style={styles.bookingLead}>Online reservation</Text>
                        <Text style={styles.bookingText}>Table booking</Text>
                    </View>
                    <Image source={require('../assets/images/booking.png')} />
                </View>
                {button && 
                    <View style={styles.bookingBottom}>
                        <Pressable style={styles.bookingBottomBtn}>
                            <SvgCalendar />
                            <Text style={[styles.bookingBottomText, {marginLeft: 5}]}>Reserve a table</Text>
                        </Pressable>
                        <Pressable style={styles.bookingBottomBtn}>
                            <Text style={styles.bookingBottomText}>My reservations</Text>
                        </Pressable>
                    </View>
                }
        </View>
    )
}


const styles = StyleSheet.create({
    bookingBox: {
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 18,
        marginBottom: 8,
      },
      bookingTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
      },
      bookingLead: {
        fontSize: 16,
        color: '#27272A',
        fontWeight: '500',
      },
      bookingText: {
        fontSize: 12,
        color: '#808089',
      },
      bookingBottom: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      bookingBottomBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#1A94FF',
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 20,
        marginRight: 8,
      },
      bookingBottomText: {
        color: '#1A94FF'
      }
})