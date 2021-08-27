import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import globalStyles from '../styles/globalStyles'

export default function ReviewDetails({navigation}){
  const pressHandler = ()=>{
    navigation.goBack()
  }
  return(
    <View style={globalStyles.bodyContainer}>
      <Text>Title: {navigation.getParam('title')}</Text>
      <Text>Rating: {navigation.getParam('rating')}</Text>
      <Text>Body: {navigation.getParam('body')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
})