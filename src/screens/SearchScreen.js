import React from 'react';

import {View, Text, StyleSheet, FlatList, ImageBackground} from "react-native";
import { Dimensions } from 'react-native';
import SearchComponent from '../components/SearchComponent';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

//set SCREEBWIDTH
const SCREEB_WIDTH = Dimensions.get('window').width;

export default function SearchScreen() {
    return(
        <View style = {{}}>
            <SearchComponent />

            {/* <View>
                <FlatList
                    style = {{marginBottom: 1}}
                    data = {filterData}
                    keyExtractor = {(item) => (
                        <TouchableWithoutFeedback>
                            <View>
                                <ImageBackground
                                    style = {styles.image}
                                    source = {{ uri: item.image}}
                                    >
                                    <View></View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                    />
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({

    // imageView : {
    //     borderRadius: 10,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: SCREEB_WIDTH * 0.4475,
    //     height: SCREEN_HEIGHT * 0.4475,
    //     marginLeft: SCREEB_WIDTH * 0.035,
    //     marginBottom: SCREEN_HEIGHT * 0.035,
    // },

    // image: {
    //     height: SCREEB_WIDTH*0.4475,
    //     width: SCREEN_HEIGHT*0.4475,
    //     borderRadius: 10,
    // },

    // listHeader: {
    //     fontSIze: 15,
    //     color: colors.grey3,
    //     paddingBottom: 10,
    //     marginLeft: 12
    // },

    // textView:{
    //     height: SCREEB_WIDTH*0.4475,
    //     width: SCREEN_HEIGHT*0.4475,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: 'rgba(52,52,52,0.3)',
    // },
}) 