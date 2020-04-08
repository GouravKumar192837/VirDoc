import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';
import Friends from './Friends';
import RemoveFriends from './RemoveFriends';
import Analysis from './Analysis';
import VideoCall from './components/Router';
import details_link_view from './details_link_view'

const RootStack = createStackNavigator({
  Home: { screen: Home },
  Symptoms: { screen: Friends },
  Remove_Symptoms :{screen : RemoveFriends},
  Analysis :{screen: Analysis},
  VideoCall :{screen: VideoCall},
  details_link_View: {screen: details_link_view},
});
const AppContainer = createAppContainer(RootStack);
export default AppContainer;
