import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import globalStyles from '../styles/globalStyles'
import Card from '../shared/card'

export default function Home({navigation}){
  const [reviews, setReviews] = useState([
    {title:'Avengers: Endgame',rating:5,body:'lorem ipsum',key:'1'},
    {title:'Captain America: Civil War',rating:4,body:'lorem ipsum',key:'2'},
    {title:'Spider-man: Far From Home',rating:3,body:'lorem ipsum',key:'3'},
    {title:'Ironman 3',rating:2,body:'lorem ipsum',key:'4'},
  ])

  return(
    <View style={globalStyles.bodyContainer}>
      <FlatList
      data={reviews}
      renderItem={({item})=> (
        <TouchableOpacity onPress={()=>{ navigation.navigate('ReviewDetails', item) }}>
          <Card><Text>{item.title}</Text></Card>
        </TouchableOpacity>
      )} />
    </View>
  )
}

const styles = StyleSheet.create({
  btn:{
    marginBottom: 20,
  }
})