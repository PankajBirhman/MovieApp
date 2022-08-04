import React from "react";
import { createNavdrawerigator } from "@react-navigation/drawer";
import  Liked  from "../Screen/Liked";
import FavouriteMovies from "../Screen/Favrouite";
import Dashboard from "../Screen/Dashboard";
import NavTabs from "../Navigation/TabNav";
import { Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Drawer = createNavdrawerigator();

const Navdrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Dashboard" >
            <Drawer.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    drawerIcon: () => (
                        <Image style={styles.imgIcon} source={{ uri: 'https://img.icons8.com/office/344/home--v1.png' }}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Liked Movie"
                component={Liked}
                options={{
                    drawerIcon: () => (
                        <Image style={styles.imgIcon} source={{ uri: 'https://img.icons8.com/color/344/facebook-like--v1.png' }}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Favourite Movie"
                component={FavouriteMovies}
                options={{
                    drawerIcon: () => (
                        <Image style={styles.imgIcon} source={{ uri: 'https://img.icons8.com/external-flat-icons-pause-08/344/external-favourite-winter-flat-icons-pause-08.png' }}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    imgIcon: {
        height: 20,
        width: 20
    }
})

export default Navdrawer