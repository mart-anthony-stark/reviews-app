import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Card(props){
  return(
    <View style={styles.card}>
      <View style={styles.cardContent}>
        { props.children }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: {width: 8, height: 8},
    shadowColor: '#333',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 35
  },
  cardContent:{
  }
})