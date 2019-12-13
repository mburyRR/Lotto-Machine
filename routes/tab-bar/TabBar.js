import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { withTheme } from 'react-native-elements';

import Generator from '../../pages/main-page/generator/Generator';
import Results from '../../pages/main-page/results/Results';
import styles from './TabBar.styles.android';

/**
 * createMaterialTopTabNavigator:
 * - allows to switch between different routes by tapping the route or swiping
 *   horizontally. Screen components for each route are mounted immediately.
 */
const Tabs = createMaterialTopTabNavigator(
  {
    Profile: {
      screen: Generator
    },
    Results: {
      screen: Results
    }
  },
  {
    tabBarOptions: {
      contentContainerStyle: styles.tabBar,
      labelStyle: styles.label,
      indicatorStyle: styles.indicator,
      indicatorContainerStyle: styles.indicatorContainer
    }
  }
);

export default withTheme(Tabs);