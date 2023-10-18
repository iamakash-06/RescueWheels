import React, {useState, useContext, useEffect} from 'react';
import {
    View,
    Text,
    Linking,
    Pressable,
    Alert,
    StyleSheet,
    Switch
} from 'react-native';

import {DrawerContentScrollView, DrawerItem, DrawerItemList, DrawItemList} from '@react-navigation/drawer';

import {Avatar, Button, Icon} from 'react-native-elements';

import {colors} from '../global/styles';
import { color } from '@rneui/base';

export default function DrawerContent(props) {
    return (
        <View style = {styles.container}>
            <DrawerContentScrollView {...props}>
            <View style = {{backgroundColor:colors.buttons}}>
                <View style = {{flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingVertical: 10}}>
                    <Avatar
                        rounded
                        avatarStyle={styles.avatar}
                        size = {75}
                        source = {{uri: "https://media.istockphoto.com/id/1025855432/photo/daylight-portrait-of-young-handsome-caucasian-man-isolated-on-grey-background-dressed-in.jpg?s=612x612&w=0&k=20&c=zvQW-kWUHtgY360LhcTi42yXqbtAzXEPU-jlSV3xAL8="}}
                    />

                    <View style = {{marginLeft: 10}}>
                        <Text style = {{fontWeight: 'bold', color: colors.pagebackground, fontSize: 18}}>John Mark</Text>
                        <Text style = {{color: colors.pagebackground, fontSize:14}}>john@gmail.com</Text>
                    </View>
                </View>

                <View style = {{flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 5}}>

                    <View style = {{flexDirection: 'row', marginTop: 0, marginHorizontal: 20}}>
                        <View style = {{marginLeft: 10, alignItems: "center", justifyContent:"center"}}>
                            <Text style = {{fontWeight:'bold', color:colors.cardbackground, fontSize: 18}}>1</Text>
                            <Text style = {{color:colors.cardbackground, fontSize: 14}}>My Favorites</Text>
                        </View>
                    </View>

                    <View style = {{flexDirection:'row', marginTop:0}}>
                        <View style = {{marginLeft: 10, alignItems: "center", justifyContent:"center"}}>
                            <Text style = {{fontWeight:'bold', color:colors.cardbackground, fontSize: 18}}>0</Text>
                            <Text style = {{fontSize: 18}}>My History</Text>
                        </View>
                    </View>

                </View>
            </View>

            <DrawerItemList {...props} />

            <DrawerItem 
                label= "Payment"
                icon = {({color, size}) => (
                    <Icon 
                        type = "material-community"
                        name = "credit-card-outline"
                        color = {color}
                        size={size}
                    />
                )}  
            />

            <DrawerItem 
                label= "Promotions"
                icon = {({color, size}) => (
                    <Icon 
                        type = "material-community"
                        name = "tag-heart"
                        color = {color}
                        size={size}
                    />
                )}  
            />

            <DrawerItem 
                label= "Settings"
                icon = {({color, size}) => (
                    <Icon 
                        type = "material-community"
                        name = "cog-outline"
                        color = {color}
                        size={size}
                    />
                )}  
            />

            <DrawerItem 
                label= "Help"
                icon = {({color, size}) => (
                    <Icon 
                        type = "material-community"
                        name = "lifebuoy"
                        color = {color}
                        size={size}
                    />
                )}  
            />

            <View style = {{borderTopWidth:1, borderTopColor: colors.grey5}}>
                <Text style = {styles.preferences}>Preferences</Text>
                <View style = {styles.switchText}>
                    <Text style = {styles.darkthemeText}>Dark Theme</Text>
                    <View style = {{paddingRight: 10}}>
                        <Switch
                            trackColor = {{false: "#767577", true: "#81b0ff"}}
                            thumbColor = "#f4f3f4"
                            ios_backgroundColor = "#3e3e3e"
                        />
                    </View>
                </View>
            </View>


            </DrawerContentScrollView>

            <DrawerItem 
                label= "Sign Out"
                icon = {({color, size}) => (
                    <Icon 
                        type = "material-community"
                        name = "logout-variant"
                        color = {color}
                        size={size}
                    />
                )}  
            />

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    avatar:{
        borderWidth:4,
        borderColor:colors.pagebackground,
    },

    preferences:{
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft: 20,
    },

    switchText:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingVertical: 15,
        paddingRight: 10
    },
    darkthemeText:{
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft: 0,
        fontWeight: 'bold',
    }
})