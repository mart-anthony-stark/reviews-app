import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Modal,
} from 'react-native';
import globalStyles from '../styles/globalStyles';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm'

export default function Home({ navigation }) {
  const [openModal, setOpenModal] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Avengers: Endgame', rating: 5, body: 'lorem ipsum', key: '1' },
    {
      title: 'Captain America: Civil War',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Spider-man: Far From Home',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
    { title: 'Ironman 3', rating: 2, body: 'lorem ipsum', key: '4' },
  ]);

  const addReview = (review) => {
    setReviews([review, ...reviews]);
    setOpenModal(false);
  };

  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={globalStyles.bodyContainer}>
      <Modal visible={openModal} animationType="slide">
        <View>
          <MaterialIcons
            style={styles.icon}
            name="close"
            size={24}
            color="black"
            onPress={() => setOpenModal(false)}
          />
          <ReviewForm addReview={addReview} setOpenModal={setOpenModal} />
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        color="black"
        style={styles.icon}
        onPress={() => {
          setOpenModal(true);
        }}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ReviewDetails', item);
            }}>
            <Card>
              <Text>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 50,
    padding: 5,
    marginVertical: 10,
    color: "white"
  },
});
