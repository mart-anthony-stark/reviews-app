import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import globalStyles from '../styles/globalStyles'

export default function Header({navigation, title}){

  const handleNav = ()=>{
    navigation.openDrawer()
  }

  return(
    <View style={styles.header}>
      <MaterialIcons name="menu-open" size={24} color="black" onPress={handleNav}/>
      <Text style={globalStyles.titleText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})