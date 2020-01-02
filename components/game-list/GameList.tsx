import React from 'react';
import { withTheme, ListItem } from 'react-native-elements';
import styled from 'styled-components';

import { Games } from '../../common/types';
import TextFilter from '../../utils/TextFilter';


const SimpleGame = styled(ListItem).attrs({
  containerStyle: {

  },
  titleStyle: {
    textTransform: 'capitalize'
  }
})``;


const GameList: React.FC<Games> = ({
  games
}) => (
  <>
    {games.map(item => 
      <SimpleGame
        key={item}
        title={TextFilter(item, 'string')}
      />
    )}
  </>
);

export default withTheme(GameList);