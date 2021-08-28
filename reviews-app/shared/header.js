import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import globalStyles from '../styles/globalStyles';

export default function Header({ navigation, title }) {
  const handleNav = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        style={styles.icon}
        name="menu-open"
        size={24}
        color="black"
        onPress={handleNav}
      />
      <Image source={require('../assets/bg.png')} style={styles.headerImg} />
      <Text style={globalStyles.titleText}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  headerImg: {
    width: 26,
    height: 26,
    borderRadius: 26 / 2,
  },
  icon: {
    position: 'absolute',
    left: 8,
  },
});
