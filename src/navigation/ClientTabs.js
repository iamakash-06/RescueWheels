import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../global/styles';
import { Icon } from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyAccountScreen from '../screens/MyAccountsScreen';

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
  return (
    <ClientTabs.Navigator
      tabBarOptions={{
        activeTintColor: colors.buttons,
      }}
    >
      <ClientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="home"
              type="font-awesome"
              color={color}
              size={size}
            />
          ),
          headerShown: false, // This line hides the header for HomeScreen
        }}
      />

      <ClientTabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="search"
              type="material"
              color={color}
              size={size}
            />
          ),
          headerShown: false, // This line hides the header for SearchScreen
        }}
      />

      <ClientTabs.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="view-list"
              type="material"
              color={color}
              size={size}
            />
          ),
          headerShown: false, // This line hides the header for MyOrdersScreen
        }}
      />

      <ClientTabs.Screen
        name="MyAccount"
        component={MyAccountScreen}
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="person"
              type="material"
              color={color}
              size={size}
            />
          ),
          headerShown: false, // This line hides the header for MyAccountScreen
        }}
      />
    </ClientTabs.Navigator>
  );
}
