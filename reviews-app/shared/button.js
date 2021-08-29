import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';

export default function Button({ title, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonTxt}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button:{
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: 'lightblue',
  },
  buttonTxt:{
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  }
})