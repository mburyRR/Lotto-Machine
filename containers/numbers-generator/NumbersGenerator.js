import React from 'react';
import { Text } from 'react-native';
import { withTheme, Button, Card } from 'react-native-elements';
import styled from 'styled-components';

import I18n from '../../i18n/i18n';
import GameList from '../../components/game-list/GameList';


const NumbersGeneratorCard = styled(Card).attrs({
  containerStyle: {
    marginTop: 20
  },
  titleStyle: {
    color: theme.color.default,
    textTransform: 'uppercase'
  }
})``;

const GeneratorDescription = styled(Text)`
  margin-bottom: 20px;
  text-align: center;
`;

const GenerationButton = styled(Button).attrs({
  buttonStyle: {
    backgroundColor: theme.background.primary,
    borderRadius: 0,
    margin: 5,
    marginTop: 15
  },
  textStyle: {
    color: theme.color.default
  }
})``;


/**
 * TODO:
 *  1. make checkbox with game selection for number generation
 */

const NumbersGenerator = ({ games }) => (
  <NumbersGeneratorCard
    title={I18n.t('GENERATOR.generationTitle')}
  >
    <GeneratorDescription>
      {I18n.t('GENERATOR.generationDesc')}
    </GeneratorDescription>
    <GameList games={games}/>
    <GenerationButton
      title={I18n.t('GENERATOR.generateButton')}
    />
  </NumbersGeneratorCard>
);

export default withTheme(NumbersGenerator);