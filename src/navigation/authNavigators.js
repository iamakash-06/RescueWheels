import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import RootClientTabs from './ClientTabs';
import GarageMapScreen from '../screens/GarageMapScreen';
import DrawerNavigator from './DrawerNavigator';

const Auth = createStackNavigator();

export default function AuthNavigators() {
    return (
        <Auth.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Auth.Screen 
                name="SignInWelcomeScreen" 
                component={SignInWelcomeScreen} 
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid,
                }}
            />

            <Auth.Screen name="SignInScreen" 
                component={SignInScreen} 
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid,
                }}
            />

            <Auth.Screen name="DrawerNavigator" 
                component={DrawerNavigator} 
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid,
                }}
            />

            <Auth.Screen name="GarageMapScreen"
                component={GarageMapScreen} 
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid,
                }}
            />
        </Auth.Navigator>
    )
}