import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';
import Friends from './Friends';
import RemoveFriends from './RemoveFriends';
import Analysis from './Analysis';
import VideoCall from './VideoCall';

const RootStack = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends },
  RemoveFriends :{screen : RemoveFriends},
  Analysis :{screen: Analysis},
  VideoCall :{screen: VideoCall},

});
const AppContainer = createAppContainer(RootStack);
export default AppContainer;
