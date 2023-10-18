import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { colors, parameters, title } from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import { Icon, Button, SocialIcon} from 'react-native-elements';
import Header from '../../components/Header';
import { useRef, useState } from 'react';

import Swiper from 'react-native-swiper';
import { color } from '@rneui/base';

export default function SignInWelcomeScreen({navigation}){
    return(
        <View style = {{flex:1}}>
            <View style = {{flex: 3, justifyContent: "flex-start", alignItems: "center", paddingTop: 20}}>
                <Text style = {{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>DISCOVER MECHANICS</Text>
                <Text style = {{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>IN YOUR AREA</Text>
            </View>

            <View style = {{flex:4, justifyContent:"center"}}>
                <Swiper autoplay = {true}>
                    <View style = {styles.slide1}>
                       <Image 
                            source = {{uri:"https://images.prothomalo.com/prothomalo-english%2Fimport%2Fmedia%2F2019%2F06%2F28%2Fa7193a55914f230e75a3e7457a4f0030-Female-car-mechanic-1.jpg?auto=format%2Ccompress&w=1200"}}
                            style = {{height: "100%", width: "100%"}}
                       />
                    </View>
                    <View style = {styles.slide2}>
                    <Image 
                            source = {{uri:"https://img1.wsimg.com/isteam/ip/36d03101-85d2-4a15-bf10-b9c43d3f73e1/807FB48E-2A6C-47F7-9F65-04E48E47DF91.jpeg"}}
                            style = {{height: "100%", width: "100%"}}
                       />
                    </View>
                    <View style = {styles.slide3}>
                    <Image 
                            source = {{uri:"https://www.crossroadshelpline.com/_next/static/media/4.d0708865.png"}}
                            style = {{height: "100%", width: "100%"}}
                       />
                    </View>
                </Swiper>
            </View>

            <View style = {{flex:4, justifyContent: "flex-end", marginBottom: 20}}>

                <View style = {{marginHorizontal: 20, marginTop: 30}}>
                    <Button 
                        title = "SIGN-IN"
                        buttonStyle = {parameters.styledButton}
                        titleStyle = {parameters.buttonTitle}
                        onPress={() => {
                            navigation.navigate("SignInScreen")
                        }}
                    />
                </View>

                <View style = {{marginHorizontal:20, marginTop: 30}}>
                <Button 
                    title = "Create an account"
                    buttonStyle = {styles.createButton}
                    titleStyle = {styles.createButtonTitle}
                />
            </View>

            </View>

        </View>
    )

}

const styles = StyleSheet.create({ 

    slide1:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9DD6EB"
    },
    slide2:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#97CAE5"
    },
    slide3:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#92BBD9"
    },

    createButton:{
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        paddingHorizontal: 20,
        height: 50,
        borderColor: colors.buttons
    },

    createButtonTitle:{
        color: colors.grey1,
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }
    
})