import React, {useState} from "react";
import {View, Text, StyleSheet, Touchable, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions} from "react-native";
import {Icon} from "react-native-elements";
import Countdown from "react-native-countdown-component";
import HomeHeader from "../components/HomeHeader";
import { colors, parameters} from "../global/styles";
import { filterData, mechanicsData, popmechanicsData } from "../global/Data";
import MechCard from "../components/MechCard";




const SCREEB_WIDTH = Dimensions.get("window").width;

export default function HomeScreen({navigation}) {

    const [onRoad, setonRoad] = useState(true);
    const [indexCheck, setindexCheck] = useState("0");

    return(
        <View style = {styles.container}>
            <HomeHeader navigation = {navigation}/>
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={true}
            >
                <View style = {{backgroundColor:colors.cardbackground, paddingBottom: 5}}>
                    <View style = {{marginTop:10, flexDirection:'row', justifyContent:"space-evenly", }}>
                        <TouchableOpacity
                            onPress = {() => {
                                setonRoad(true)
                            }}
                        >
                            <View style = {{...styles.onRoadButton, backgroundColor:onRoad?colors.buttons:colors.grey5}}>
                                <Text>On-Road</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress = {() => {
                                setonRoad(false)
                                
                            }}
                        >
                            <View style = {{...styles.onRoadButton, backgroundColor:onRoad?colors.grey5:colors.buttons}}>
                                <Text>Garage</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style = {styles.filterView}>
                    <View style = {styles.addressView}>
                        <View style = {{flexDirection:"row", alignItems:"center", paddingLeft: 10}}>
                            <Icon
                                type = "material-community"
                                name = "map-marker"
                                color = {colors.grey1}
                                size={26}
                            />

                            <Text style={{marginLeft:5}}>4th East Cross Road</Text>
                        </View>

                        <View style = {styles.clockView}>
                            <Icon
                                type = "material-community"
                                name = "clock-time-four"
                                color = {colors.grey1}
                                size={26}
                            />

                            <Text style={{marginLeft:5}}>Now</Text>
                        </View>
                    </View>
                    <View>
                        <Icon
                            type = "material-community"
                            name = "tune"
                            color = {colors.grey1}
                            size={26}
                        />
                    </View>
                </View>
                
                <View style = {styles.headerTextView}>
                    <Text style = {styles.headerText}>Categories</Text>
                </View>

                <View>
                    <FlatList 
                        horizontal = {true}
                        showsHorizontalScrollIndicator = {false}
                        data = {filterData}
                        keyExtractor={(item) => item.id}
                        extraData={indexCheck}
                        renderItem={({item, index}) => (
                            <Pressable
                                onPress={() => {setindexCheck(item.id)}}
                            >
                                <View style = {indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                                    <Image 
                                        style = {{height: 60, width: 60, borderRadius: 30}}
                                        source = {item.image}
                                    />

                                    <View>
                                        <Text style = {indexCheck === item.id ? {...styles.smallCardTextSelected}: {...styles.smallCardText}}>{item.name}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        )}
                    />
                </View>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>
                        {indexCheck
                        ? `${filterData.find((item) => item.id === indexCheck)?.name} Specialists`
                        : 'Mechanics Near You'}
                    </Text>
                </View>


                <View>
                    <View style = {{flexDirection: 'row'}}>
                        <Text style = {{marginLeft: 15, fontSize:16, marginTop: 10, marginRight: 5}}>Options Changing in</Text>
                        <Countdown
                            until = {3600}
                            size = {14}
                            digitStyle = {{backgroundColor: colors.lightgreen}}
                            digitTxtStyle = {{color: colors.cardbackground}}
                            timeToShow={['M', 'S']}
                            timeLabels={{m: 'Min', s: 'Sec'}}
                        />
                    </View>
                    <FlatList
                        style = {{marginTop: 10, marginBottom: 10}}
                        horizontal = {true}
                        data = {mechanicsData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                            <View>
                                <MechCard 
                                    screenWidth={SCREEB_WIDTH * 0.8}
                                    images = {item.image}
                                    name = {item.name}
                                    farAway = {item.distance}
                                    address = {item.location}
                                    rating = {item.rating}
                                    numberOfReview = {item.reviews}
                                />
                            </View>
                        )}

                        />
                </View>

                {onRoad && (
  <View style={styles.headerTextView}>
    <Text style={styles.headerText}>Mechanics Near You</Text>
  </View>
)}

                <View style = {{width: SCREEB_WIDTH, paddingTop:10}}>
                    {   onRoad &&
                        popmechanicsData.map(item => (
                            <View key = {item.id} style = {{paddingBottom:20}}>
                            <MechCard
                                screenWidth={SCREEB_WIDTH * 0.95}
                                    images = {item.image}
                                    name = {item.name}
                                    farAway = {item.distance}
                                    address = {item.location}
                                    rating = {item.rating}
                                    numberOfReview = {item.reviews}
                                    />
                            </View>
                        )
                        )
                    }
                    
                </View>

                

            </ScrollView>

            { onRoad &&

            <View style = {styles.floatButton}>
                    <TouchableOpacity
                        onPress = {() => {
                            navigation.navigate("GarageMapScreen")
                        }}
                    >

                            <Icon
                                name = "place"
                                type = "material"
                                size = {32}
                                color = {colors.buttons}
                            />

                            <Text style = {{color:colors.grey2}}>Map</Text>

                    </TouchableOpacity>
                </View> 
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    onRoadButton:{
        paddingHorizontal: 20,
        borderRadius: 15, 
        paddingVertical: 5
    },

    onRoadText:{
        marginLeft: 5,
        fontSize: 16
    },

    filterView:{
        flexDirection: "row", 
        alignItems:"center", 
        justifyContent:"space-evenly",
        marginHorizontal: 10, 
        marginVertical: 10
    },

    clockView:{
        flexDirection:"row", 
        alignItems:"center", 
        marginLeft:20, 
        backgroundColor: colors.cardbackground,
        borderRadius: 15,
        paddingHorizontal: 5,
        marginRight: 20
    },

    addressView:{
        flexDirection:"row", 
        backgroundColor:colors.grey5, 
        borderRadius: 15, 
        paddingVertical: 5,
        justifyContent: "space-between",
        paddingHorizontal: 20
    },

    headerText:{
        color: colors.grey1,
        fontSize: 24,
        fontWeight: "bold",
        paddingLeft: 10,
    },

    headerTextView:{
        backgroundColor: colors.grey5,
        paddingVertical: 3

    },

    smallCard:{
        borderRadius: 30,
        backgroundColor: colors.grey5,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: 80,
        margin:10,
        height:100
    },

    smallCardSelected:{
        borderRadius: 30,
        backgroundColor: colors.buttons,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: 80,
        margin:10,
        height:100
    },

    smallCardTextSelected :{
        fontWeight: "bold",
        fontSize: 10,
    },

    smallCardText :{
        fontSize: 10,
    },

    floatButton:{
        positions:'absolute',
        bottom:10,
        left:345,
        backgroundColor:'white',
        elevation:10,
        width:60,
        height:60,
        borderRadius:30,
        alignItems:'center',
    }

    
})
