import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { colors, parameters, title } from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import { Icon, Button, SocialIcon} from 'react-native-elements';
import Header from '../../components/Header';
import { useRef, useState } from 'react';
import { Alert } from 'react-native';

export default function SignInScreen({navigation}){

    const [TextInput2Password, setTextInput2Password] = useState(false);
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
      };

    return(
        <View style = {styles.container}>
            <View style = {{marginLeft: 20, marginTop: 10}}>
                <Text style = {title}>Sign-In</Text>
            </View>
            <View style = {{alignItems: "center", marginTop: 10}}> 
                <Text style = {styles.text1}>Please Enter the Email and Password</Text>
                <Text style = {styles.text1}>Registered with your account</Text>
            </View>
            
            <View style = {{marginTop: 20}}>
                <View>
                    <TextInput 
                        style = {styles.TextInput1}
                        placeholder = "Email"
                        ref = {textInput1}
                    />
                </View>

                <View style = {styles.TextInput2}>

                <Animatable.View animation = {TextInput2Password?"":"fadeInLeft"} duration = {400}>
                    <Icon 
                        name = "lock"
                        iconStyle={{color: colors.grey3}}
                        type = "material"
                        style={{}}
                    />
                </Animatable.View>
                <TextInput
                        style = {{width: "80%"}}
                        placeholder = "Password"
                        secureTextEntry={!isPasswordVisible}
                        ref = {textInput2}
                        onFocus={() => {
                            setTextInput2Password(false)
                        }}

                        onBlur={() => {
                            setTextInput2Password(true)
                        }}
                    />
                <Animatable.View animation = {TextInput2Password?"":"fadeInLeft"} duration = {400}>
                    <Icon 
                            name = "visibility-off"
                            iconStyle={{color: colors.grey3}}
                            type = "material"
                            style = {{marginRight: 10}}
                            onPress={togglePasswordVisibility}
                        />
                </Animatable.View>
                </View>
            </View>

            <View style = {{marginHorizontal: 20, marginTop: 30}}>
                <Button 
                    title = "SIGN-IN"
                    buttonStyle = {parameters.styledButton}
                    titleStyle = {parameters.buttonTitle}
                    onPress={() => {

                        if (isPasswordVisible) {
                        navigation.navigate("DrawerNavigator")
                        }else {
      Alert.alert("Login Failed", "Invalid username or password");
    }
                    }}
                />
            </View>

            <View style = {{alignItems: "center", marginTop: 10}}>
                <Text style = {{...styles.text1, textDecorationLine: 'underline'}}> Forgot Password ?</Text>
            </View>

            <View style = {{alignItems: "center", marginTop: 20, marginBottom: 20}}>
                <Text style = {{fontSize: 20, fontWeight: "bold"}}>OR</Text>
            </View>

            <View style = {{marginHorizontal: 10, marginTop: 10}}>
                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                    style = {styles.SocialIcon}
                    onPress = {() => {
                        console.log("Facebook")
                    }}
                />
            </View>

            <View style = {{marginHorizontal: 10, marginTop: 10}}>
                <SocialIcon
                        title='Sign In With Google'
                        button
                        type='google'
                        style = {styles.SocialIcon}
                        onPress = {() => {
                            console.log("Google")
                        }}
                    />
            </View>

            <View style = {{marginTop: 25, marginLeft: 20}}>
                <Text style = {{...styles.text1,}}> New on RescueWheels ?</Text>
            </View>

            <View style = {{alignItems: "flex-end", marginHorizontal:20}}>
                <Button 
                    title = "Create an account"
                    buttonStyle = {styles.createButton}
                    titleStyle = {styles.createButtonTitle}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    text1:{
        color: colors.grey3,
        fontSize: 16,
    },

    TextInput1:{
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15,
        paddingBottom: 10,
        paddingTop: 10
    },

    TextInput2:{
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 15,
        paddingBottom: 10,
        paddingTop: 10
    },

    SocialIcon:{
        borderRadius: 12,
        height: 50
    },

    createButton:{
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        paddingHorizontal: 20,
        height: 50
    },

    createButtonTitle:{
        color: "#ff8c52",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }
    
})