import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import TabBar from './tab-bar/TabBar';
import StartPage from '../containers/start-page/StartPage';

/**
 * createStackNavigator:
 *  - provides a way for app to transition between screens
 *    where each new screen is placed on top of a stack.
 */
const Stack = createStackNavigator({
    Start: {
      screen: StartPage
    },
    Tabs: {
      screen: TabBar
    }
});

/**
 * createAppContainer:
 *  - container responsible for managing app state and linking top-level
 *    navigator to the app environment. On Android, the app container uses
 *    the Linking API to handle the back button. The container can also be
 *    configured to persist navigation state. 
 */
const Routes = createAppContainer(Stack);

export default Routes;