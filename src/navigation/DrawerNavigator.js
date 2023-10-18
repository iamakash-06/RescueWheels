import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import DrawerContent from '../components/DrawerContent';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator 
            screenOptions={{ headerShown: false }}
            drawerContent={props => <DrawerContent {...props} />}
            >
            <Drawer.Screen 
                name="RootClientTabs" 
                component={RootClientTabs} 
                
                options = {{
                    title: "Client",
                    drawerIcon: ({focused, size}) => (
                        <Icon
                            type = "material-community"
                            name = "home"
                            color = {focused ? "#7cc" : colors.grey2}
                            size = {size}
                        />
                    )
                }}
                />

            <Drawer.Screen 
                name="Business consoleScreen" 
                component={BusinessConsoleScreen} 
                
                options = {{
                    title: "Business Console",
                    drawerIcon: ({focused, size}) => (
                        <Icon
                            type = "material"
                            name = "business"
                            color = {focused ? "#7cc" : colors.grey2}
                            size = {size}
                        />
                    )
                }}
                />
        </Drawer.Navigator>
    );
}