import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { colors, parameters } from '../global/styles';
import { Icon } from 'react-native-elements';

export default function Header({title, type}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          type="material-community"
          name={type}
          color={colors.heaerText}
          size={28}
          onPress={() => {
            // Handle arrow icon press here
          }}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.buttons,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: parameters.headerHeight,
    marginTop: parameters.statusBarHeight, // Add marginTop to push the header below the status bar
    marginLeft: 20,
  },
  headerText: {
    color: colors.heaerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10, // Add some spacing between the arrow icon and text
  },
});
