import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export default function ReviewDetails({navigation}){
  const pressHandler = ()=>{
    navigation.goBack()
  }
  return(
    <View>
      <Text>ReviewDetails</Text>
      <Button 
        onPress={pressHandler}
        title="Go Back"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  
})