import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { withTheme, Card } from 'react-native-elements';

import I18n from '../../../i18n/i18n';
import styles from './Results.styles.android';


class Results extends Component {

  /**
   * navigationOptions:
   *  - static property for screen component which is either
   *    an object or a function that returns an object that
   *    contains various configuration options.
   */
  static navigationOptions = {
    title: I18n.t('TAB.resultsTab')
  };

  render() {
    return (
      <View style={styles.view}>
        <ScrollView>
          <Card
            containerStyle={styles.cardGenerator}
            title={I18n.t('RESULTS.resultsTitle')}
            titleStyle={styles.title}
          >
            {/*
              TODO:
                1. Add current result info with data finder
            */}
          </Card>
          <Card
            containerStyle={styles.cardHistorical}
            title={I18n.t('RESULTS.userResultsTitle')}
            titleStyle={styles.title}
          >
            {/*
              TODO:
                1. Add user last results with checked statuses
            */}
          </Card>
        </ScrollView>
      </View>
    );
  }
}

export default compose(
  withTheme
)(Results);