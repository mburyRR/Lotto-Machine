import React from 'react';
import { withTheme, ListItem } from 'react-native-elements';
import styled from 'styled-components';

import { UserStats, Theme } from '../../common/types';
import TextFilter from '../../utils/TextFilter';


const LastGeneratedListItem = styled(ListItem).attrs(
  ({theme}: Theme) => ({
    titleStyle: {
      fontSize: 13.5
    },
    rightTitleStyle: {
      fontSize: 12.5,
      color: theme.color.secondary,
      textTransform: 'capitalize'
    },
    subtitleStyle: {
      fontSize: 11.5
    }
  })
)``;


const LastGeneratedList: React.FC<UserStats> = ({
  userStats
}) => (
  <>
    {userStats.map((data, i) =>
      <LastGeneratedListItem
        key={i}
        title={TextFilter(data.numbers, 'array')}
        rightTitle={TextFilter(data.type, 'string')}
        subtitle={TextFilter(data.inserted_at, 'time')}
      />
    )}
  </>
)

export default withTheme(LastGeneratedList);