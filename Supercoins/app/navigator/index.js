import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { screenNames } from '../utils/constant';
import Splash from '../screens/Splash';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const MainNavigator = createStackNavigator({
   Splash: {
    screen: Splash,
    key: screenNames.SPLASH_SCREEN,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  HomeScreen: {
    screen: HomeScreen,
    key: screenNames.HOME_SCREEN,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  DetailScreen: {
    screen: DetailScreen,
    key: screenNames.DETAIL_SCREEN,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
},
{
  initialRouteParams: screenNames.SPLASH_SCREEN,
  headerMode: 'none',
});

const RootNavigator = createAppContainer(MainNavigator);

export default RootNavigator;

