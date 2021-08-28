import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import React from 'react'
import Header from '../shared/header'

const screens = {
  Home: {
    screen: Home,
    navigationOptions:({ navigation })=> {
      return{
        headerTitle: ()=>{
          return <Header navigation={navigation} title="Movie Reviews"/>
        },
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
    }
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default HomeStack;