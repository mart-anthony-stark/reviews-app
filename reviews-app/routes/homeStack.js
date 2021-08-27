import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import About from '../screens/About'
import ReviewDetails from '../screens/ReviewDetails'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'GameZone',
    }
  },
  About: {
    screen: About
  },
  ReviewDetails: {
    screen: ReviewDetails
  },
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions:{
      headerTintColor:'#fff',
      headerStyle:{
        backgroundColor: 'orange',
        height: 50
      }
  }
})
export default createAppContainer(HomeStack)