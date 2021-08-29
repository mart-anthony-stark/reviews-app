import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import globalStyles from '../styles/globalStyles';
import FlatButton from '../shared/button'

export default function ReviewForm({ addReview, setOpenModal }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [rating, setRating] = useState('');
  const [errorMsgs, setErrorMsgs] = useState({})

  const handleSubmit = () => {
    if(title.length < 3) errorMsgs.title = "Title must atleast 3 characters long"
    else errorMsgs.title = ""

    if(body.length < 8) errorMsgs.body = "Body must atleast 8 characters long"
    else errorMsgs.body = ""

    if(parseInt(rating) < 1 || parseInt(rating) > 5) errorMsgs.rating = "Invalid Rating"
    else errorMsgs.rating = ""

      addReview({title, body, rating})
      setTitle("")
      setBody("")
      setRating("")
      setOpenModal(false)
  }
 
  return (
    <View>
      <TextInput
        placeholder="Title"
        placeholderTextColor="black"
        onChangeText={(val) => setTitle(val)}
        style={globalStyles.input}
        value={title}
      />
      <Text style={globalStyles.errorText}>{errorMsgs.title}</Text>
      <TextInput
        placeholder="Body"
        placeholderTextColor="black"
        onChangeText={(val) => setBody(val)}
        style={globalStyles.input}
        value={body}
      />
      <Text style={globalStyles.errorText}>{errorMsgs.body}</Text>
      <TextInput
        placeholder="Rating"
        placeholderTextColor="black"
        onChangeText={(val) => setRating(val)}
        style={globalStyles.input}
        keyboardType='numeric'
        value={rating}
      />
      <Text style={globalStyles.errorText}>{errorMsgs.rating}</Text>

      <FlatButton title='submit' onPress={handleSubmit}/>
    </View>
  );
}
