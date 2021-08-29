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
  },
  input:{
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 5
  },
  errorText:{
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 5
  }
})