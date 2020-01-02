import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Generator from '../../containers/tabs/generator/Generator';
import Results from '../../containers/tabs/results/Results';
import theme from '../../themes/theme';


const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: theme.color.default,
    height: 65
  },
  indicator: {
    backgroundColor: theme.color.primary,
    height: 7
  },
  label: {
    fontSize: 15,
    paddingTop: 6
  }
});

/**
 * createMaterialTopTabNavigator:
 * - allows to switch between different routes by tapping the route or swiping
 *   horizontally. Screen components for each route are mounted immediately.
 */
const TabBar = createMaterialTopTabNavigator(
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
      style: styles.tabBar,
      labelStyle: styles.label,
      indicatorStyle: styles.indicator
    }
  }
);

export default TabBar;