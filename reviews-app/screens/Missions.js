import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import globalStyles from '../styles/globalStyles'

export default function Missions({navigation}){

  const pressHandler = (navigate) => {
    navigation.navigate(navigate)
  }

  return(
    <View style={globalStyles.bodyContainer}>
      <Text style={globalStyles.text}></Text>
      <Button 
        onPress={()=> pressHandler('ReviewDetails')}
        title="Review Details"
      />
      <Button 
        onPress={()=> pressHandler('About')}
        title="About"
      />
    </View>
  )
}

const styles = StyleSheet.create({
})