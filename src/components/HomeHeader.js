import React from "react";

import {View, Text, StyleSheet} from "react-native";
import {Icon, withBadge} from "react-native-elements";

import { colors, parameters} from '../global/styles';

export default function HomeHeader({navigation}) {
    return(
        <View style = {styles.header}>
            <View style = {{alignItems:"center", marginLeft:15}}>
            <Icon
                type = "material-community"
                name = "menu"
                color = {colors.heaerText}
                size = {45}
                onPress = {() => {
                        navigation.toggleDrawer();
                }}
            />
            </View>
            <View style = {{alignItems:"center", marginRight:115}}>
                <Text style = {{color:colors.cardbackground, fontSize:23, fontWeight:'bold'}}>RescueWheels</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    header:{
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        justifyContent: "space-between",
    }
    
})
