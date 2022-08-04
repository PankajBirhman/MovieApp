import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ImageCarousel from "../Screen/ImageCarousel";
import NavTabs from "../Navigation/TabNav";


class Dashboard extends React.Component {

    render() {
        return (
            <>
                <View style={styles.ImggeCarousel} >
                    <ImageCarousel />
                </View>
                <NavTabs />
            </>
        )
    }
}

const styles = StyleSheet.create({
    ImggeCarousel: {
        height: 100,
        
    },
   
})

export default Dashboard; 