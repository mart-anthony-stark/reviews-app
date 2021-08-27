import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import About from '../screens/About'
import ReviewDetails from '../screens/ReviewDetails'

const screens = {
  Home: {
    screen: Home
  },
  About: {
    screen: About
  },
  ReviewDetails: {
    screen: ReviewDetails
  },
}

const HomeStack = createStackNavigator(screens)
export default createAppContainer(HomeStack)