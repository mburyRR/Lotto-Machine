import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { withTheme, Card } from 'react-native-elements';
import styled from 'styled-components';

import I18n from '../../../i18n/i18n';


const ResultPage = styled(View)`
  background-color: ${({ theme }) => theme.background.default};
`;

const LastResults = styled(Card).attrs({
  containerStyle: {

  },
  titleStyle: {

  }
})``;

const UserResults = styled(Card).attrs({
  containerStyle: {

  },
  titleStyle: {
    
  }
})``;


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
      <ResultPage>
        <ScrollView>
          <LastResults
            title={I18n.t('RESULTS.resultsTitle')}
          >
            {/*
              TODO:
                1. Add current result info with data finder
            */}
          </LastResults>
          <UserResults
            title={I18n.t('RESULTS.userResultsTitle')}
          >
            {/*
              TODO:
                1. Add user last results with checked statuses
            */}
          </UserResults>
        </ScrollView>
      </ResultPage>
    );
  }
}

export default withTheme(Results);