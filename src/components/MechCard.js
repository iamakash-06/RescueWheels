import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors, parameters} from '../global/styles';

export default function MechCard({
    onPressMechCard,
    name,
    ServiceAvailable,
    discountAvailable,
    discountPercent,
    numberOfReview,
    address,
    farAway,
    rating,
    images,
    screenWidth
}) {

    return (
        <TouchableOpacity>
            <View style = {{...styles.cardView,width:screenWidth}}>
            <Image 
                source = {{uri:images}}
                style = {{...styles.image, width:screenWidth}}
            />

            </View>

            <View>
                <View>
                    <Text style = {styles.restaurantName}>{name}</Text>
                </View>

                <View style = {{flexDirection:"row", flex:1}}>
                    <View style = {styles.distance}>
                    <Icon 

                        name= "place"
                        type = "material"
                        color = {colors.grey2}
                        size = {18}
                        iconStyle = {{marginTop:3, paddingHorizontal: 2}}
                    />
                    <Text style = {styles.Min}>{farAway}</Text>
                    </View>
                    <View style = {{flex:9, flexDirection:"row"}}>
                        <Text style = {styles.address}>{address}</Text>
                    </View>
                </View>
            </View>

            <View style = {styles.review}>
                <Text style = {styles.average}>{rating}</Text>
                <Text style = {styles.rating}>{numberOfReview} reviews</Text>
            </View>


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    cardView:{
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:colors.grey4,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
    },

    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height: 150,
    },

    restaurantName:{
        fontSize:17,
        fontWeight:"bold",
        color:colors.grey1,
        marginTop:1,
        paddingHorizontal:10,
    },

    distance:{
        flex:4,
        flexDirection:"row",
        borderRightColor:colors.grey4,
        paddingHorizontal:5,
        borderRightWidth:1
    },

    Min:{
        fontSize: 12,
        fontWeight:"bold",
        paddingTop:5,
        color:colors.grey3
    },

    address:{
        fontSize: 12,
        paddingTop:5,
        color:colors.grey2,
        paddingHorizontal:10
    },

    review:{
        position: "absolute",
        top:0,
        right:10,
        backgroundColor:'rgba(52,52,52,0.3)',
        padding:2,
        alignItems:"center",
        justifyContent:"center",
        borderTopRightRadius:5,
        borderBottomLeftRadius:12,
    },

    average:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        marginTop: -3
    },

    rating:{
        color:"white",
        fontSize:12,
        marginTop: -3
    }
})