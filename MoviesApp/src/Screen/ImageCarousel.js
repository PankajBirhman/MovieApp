import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, ScrollView, Dimensions, Image, Text } from "react-native";


const IMAGES = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs32_TBn8QB_pG9TauPtAM1AT8J-P8AKctWw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBKJxpQySsg8XWSgg9kOjyvovaVXOdlO7IA&usqp=CAU',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDdvEFM4fW1YS8FR7bif0vTQhhPNHaXH4RA&usqp=CAU',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT21sLGRxFKzyf47hOYRgd4Tdby6kFWfpBqDA&usqp=CAU',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbwldMjF0KwbTVGofUiBHQIoc4q0Qw-hcOrw&usqp=CAU'
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ImageCarousel = () => {
    const [imgActive, setImgActive] = useState(0);

    const onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setImgActive(slide);
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >{
                        IMAGES.map((e, index) => <Image key={e} resizeMode='stretch' style={styles.wrap} source={{ uri: e }} />)
                    }

                </ScrollView>
                <View style={styles.wrapDot} >
                    {
                        IMAGES.map((e, index) =>
                            <Text
                                key={e}
                                style={imgActive == index ? styles.dotActive : styles.dot}
                            >
                                ●
                            </Text>
                        )
                    }


                </View>
            </View>

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.25,
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: 'grey',
        fontSize:30
    },
    dot: {
        margin: 3,
        color: 'white',
        fontSize:30
    }

})

export default ImageCarousel;
