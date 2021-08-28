import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import globalStyles from '../styles/globalStyles'
import Card from '../shared/card'

export default function ReviewDetails({navigation}){
  const pressHandler = ()=>{
    navigation.goBack()
  }
  return(
    <View style={globalStyles.bodyContainer}>
      <Card>
        <Text>Title: {navigation.getParam('title')}</Text>
        <Text>Body: {navigation.getParam('body')}</Text>
        <Text>Rating: {navigation.getParam('rating')}</Text>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  
})