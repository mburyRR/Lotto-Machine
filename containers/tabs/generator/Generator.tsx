import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getGameList, getUserStats } from '../../../store/reducer';
import { GeneratorProps } from '../../../common/types';
import I18n from '../../../i18n/i18n';
import Loader from '../../../components/loader/Loader';
import NumbersGenerator from './numbers-generator/NumbersGenerator';
import LastGenerated from './last-generated/LastGenerated';


const GeneratorPage = styled(View)`
  flex: 1;
`;

class Generator extends Component<GeneratorProps> {

  /**
   * navigationOptions:
   *  - static property for screen component which is either
   *    an object or a function that returns an object that
   *    contains various configuration options.
   */
  static navigationOptions = {
    title: I18n.t('TAB.generatorTab')
  };

  /**
   * TODO:
   * 1. GET list of available game types
   * 2. POST method to generate numbers
   * 3. UserName from Google Auth
   */
  componentDidMount() {
    this.props.getGameList();
    this.props.getUserStats('Johny', '', {limit: 4, sort: 'asc'});
  }

  render() {
    const {
      games,
      userStats,
      loadingGames,
      loadingStats
    } = this.props;

    if (loadingGames || loadingStats) return <Loader/>;

    console.log(games)

    return (
      <GeneratorPage>
        <ScrollView>
          {games && <NumbersGenerator games={games}/>}
          {userStats && <LastGenerated userStats={userStats}/>}
        </ScrollView>
      </GeneratorPage>
    );
  }
}

const mapStateToProps = ({
  games,
  userStats,
  loadingGames,
  loadingStats
}) => ({
  games,
  userStats,
  loadingGames,
  loadingStats
});

const mapDispatchToProps = {
  getGameList,
  getUserStats
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Generator);