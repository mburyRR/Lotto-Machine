import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { withTheme } from 'react-native-elements';
import { compose } from 'redux'
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getGameList, getUserProfile } from '../../../store/reducer';
import I18n from '../../../i18n/i18n';
import Loader from '../../../components/loader/Loader';
import NumbersGenerator from '../../../containers/numbers-generator/NumbersGenerator';
import LastGenerated from '../../../containers/last-generated/LastGenerated';



const GeneratorPage = styled(View)`
   flex: 1;
`;


class Generator extends Component {

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
    this.props.getUserProfile('Johny', '', {limit: 4, sort: 'asc'});
  }

  render() {
    const { games, userProfile, loadingGames, loadingProfile } = this.props;

    if (loadingGames || loadingProfile) return <Loader/>;

    return (
      <GeneratorPage>
        <ScrollView>
          {games
            ? <NumbersGenerator games={games}/>
            : null
          }
          {userProfile
            ? <LastGenerated userProfile={userProfile}/>
            : null
          }
        </ScrollView>
      </GeneratorPage>
    );
  }
}

const mapStateToProps = ({ games, userProfile, loadingGames, loadingProfile }) => ({
  games,
  userProfile,
  loadingGames,
  loadingProfile
});

const mapDispatchToProps = {
  getGameList,
  getUserProfile
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withTheme
)(Generator);