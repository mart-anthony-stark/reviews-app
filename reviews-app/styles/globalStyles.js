import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container:{
    flex:1,
    paddingTop: Constants.statusBarHeight,
  },
  bodyContainer:{
    paddingHorizontal: 20,
    height: "100%"
  },
  text:{
    fontSize: 10
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
})