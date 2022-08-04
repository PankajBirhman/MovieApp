import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../Screen/Dashboard";

import Navdrawer from "./Drawer";

const Stack = createStackNavigator();

const NavStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false  }} initialRouteName="Drawer">
            <Stack.Screen
                name="Dashboard"
                component={Dashboard} />
            <Stack.Screen
                name="Drawer"
                component={Navdrawer}
            />
        </Stack.Navigator >
    )
}


export default NavStack;