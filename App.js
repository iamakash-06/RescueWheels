import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import Header from './src/components/Header';
import { colors } from './src/global/styles';
import SignInScreen from './src/screens/authScreens/SignInScreen';
import SignInWelcomeScreen from './src/screens/authScreens/SignInWelcomeScreen';
import RootNavigator from './src/navigation/RootNavigator';



export default function App() {
  return (
  <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.statusbar}
        translucent={false}
      />

      <RootNavigator/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
