import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, FlatList } from 'react-native'
import globalStyles from '../styles/globalStyles'
import Card from '../shared/card'
import { FontAwesome } from '@expo/vector-icons';

export default function ReviewDetails({navigation}){
  const [rating, setRating] = useState(navigation.getParam('rating'))
 
  return(
    <View style={globalStyles.bodyContainer}>
      <Card>
        <Text>Title: {navigation.getParam('title')}</Text>
        <Text>Body: {navigation.getParam('body')}</Text>
        <View style={styles.rating}>
          <Text>Movie Rating: </Text>
          <View style={styles.stars}>
          {(()=>{
            let star = []
            for(let i=1; i<=rating; i++){
              star.push(<FontAwesome name="star" size={20} color="gold" />)
            }
            return star
          })()}
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  stars:{
    flexDirection: 'row'
  },
  rating: {
    marginTop: 5,
    borderTopWidth: 1,
    borderTopColor: 'black',
    flexDirection:'row'
  }
})