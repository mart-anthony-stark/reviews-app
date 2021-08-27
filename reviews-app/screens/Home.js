import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import globalStyles from '../styles/globalStyles'

export default function Home({navigation}){

  const pressHandler = (route) => {
    navigation.navigate(route)
  }

  return(
    <View>
      <Text style={globalStyles.text}></Text>
      <View style={styles.btn}>
        <Button 
          onPress={()=> pressHandler('ReviewDetails')}
          title="Review Details"
        />
      </View>
      <View>
      <Button 
        onPress={()=> pressHandler('About')}
        title="About"
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btn:{
    marginBottom: 20,
  }
})