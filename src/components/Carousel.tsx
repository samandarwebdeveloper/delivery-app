import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { View, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Carousel({data}: any) {
    return (
        <SwiperFlatList
            data={data}
            style={{
                marginTop: 20,
            }}
            snapToOffsets={[...Array(data.length)].map(
                (x, i) => i * (width * 0.8 - 40) + 40
            )}
            paginationStyleItem={{
                width: 16,
                height: 2,
                backgroundColor: '#f2f2f2',
                marginHorizontal: 2
            }}
            paginationStyleItemActive={{
                width: 24,
                backgroundColor: '#1A94FF',
            }}
            showPagination
            scrollEventThrottle={16}
            decelerationRate="fast"
            renderItem={({ item }) => (
                <View style={{width: width * 0.8 - 20, height: width / 2.6, marginHorizontal: 10}}>
                    <Image source={item.image} style={{width: '100%', height: 110, borderRadius: 8}} />
                </View>
        )}
        />
    )
}