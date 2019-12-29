import React from 'react';
import { withTheme, ListItem } from 'react-native-elements';
import styled from 'styled-components';

import TextFilter from '../../utils/TextFilter';


const Game = styled(ListItem).attrs({
  containerStyle: {

  },
  titleStyle: {
    textTransform: 'capitalize'
  }
})``;


const GameList = ({ games }) => (
  games.map(item => 
    <Game
      key={item}
      title={TextFilter(item, 'string')}
    />
  )
);

export default withTheme(GameList);