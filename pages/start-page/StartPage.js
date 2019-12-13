import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withTheme, Button } from 'react-native-elements';

import I18n from '../../i18n/i18n';
import styles from './StartPage.styles.android';

class StartPage extends Component {

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.background}>
        <Text style={styles.appTitle}>
          {I18n.t('START.title')}
        </Text>
        <Text style={styles.label}>
          {I18n.t('START.label')}
        </Text>
        <Button
          title={I18n.t('START.logIn')}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('Tabs')}
        />
      </View>
    );
  }
}

export default withTheme(StartPage);