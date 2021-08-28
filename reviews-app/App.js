import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import globalStyles from './styles/globalStyles'
import Constants from 'expo-constants';
import Navigator from './routes/drawer'


export default function App() {
  return (
    <View style={globalStyles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
