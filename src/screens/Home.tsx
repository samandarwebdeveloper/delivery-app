import { StyleSheet, View, SafeAreaView, Image, Text, Pressable, ScrollView } from 'react-native';
import { NavigationProp } from "@react-navigation/native";

import Header from '../components/Header';
import Carousel from '../components/Carousel'
import Servises from '../components/Servises'
import Booking from '../components/Booking'
import PromotionList from '../components/Promotion'


interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const images = [
    {
        image: require('../assets/images/carusel1.png'),
    },
    {
        image: require('../assets/images/carusel2.png'),
    },
    {
        image: require('../assets/images/carusel1.png'),
    },
    {
        image: require('../assets/images/carusel2.png'),
    },
]

const products = [
    {
        title: 'Discount all Excelsa 20% in all stores',
        image: require('../assets/images/product1.png'),
        data: '20/04/20',
        until: '06/09/2020'
    },
    {
        title: 'Discount all Excelsa 20% in all stores',
        image: require('../assets/images/product2.png'),
        data: '20/04/20',
        until: '06/09/2020'
    },
    {
        title: 'Discount all Excelsa 20% in all stores',
        image: require('../assets/images/product3.png'),
        data: '20/04/20',
        until: '06/09/2020'
    },
    {
        title: 'Discount all Excelsa 20% in all stores',
        image: require('../assets/images/product4.png'),
        data: '20/04/20',
        until: '06/09/2020'
    },
    {
        title: 'Discount all Excelsa 20% in all stores',
        image: require('../assets/images/product4.png'),
        data: '20/04/20',
        until: '06/09/2020'
    },
    {
        title: 'Discount all Excelsa 20% in all stores',
        image: require('../assets/images/product3.png'),
        data: '20/04/20',
        until: '06/09/2020'
    },
]

export default function Home({ navigation }: RouterProps) {
  return (
      <SafeAreaView style={styles.container}>
        <Header>
            <View style={styles.userInfo}>
             <Image source={require('../assets/images/avatar.png')} />
                <View>
                    <Text style={styles.welcomeText}>Welcome to</Text>
                    <Text style={styles.storeName}>Sample Restaurant</Text>
                </View>
            </View>
        </Header>
        <ScrollView
            showsVerticalScrollIndicator={false}>
            <View>
                <Carousel data={images}/>
            </View>
            <View style={styles.homeBody}>
                <Servises />
                <Booking button={true} />
                <PromotionList data={products}/>
            </View>
        </ScrollView>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F9',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 12,
    color: '#27272A',
  },
  storeName: {
    fontSize: 21,
    fontWeight: '700',
    color: '#27272A',
  },
  homeBody: {
    paddingHorizontal: 12,
  },

});