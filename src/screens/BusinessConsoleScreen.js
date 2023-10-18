import React, {useState} from "react";
import {View, Text, StyleSheet, Touchable, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions} from "react-native";
import {Icon} from "react-native-elements";

export default function BusinessConsoleScreen({navigation}) {
    return (
        <View style = {styles.container}>
            <Text>Welcome to Business Console</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})