import React from 'react';
import { withTheme, ListItem } from 'react-native-elements';

import TextFilter from '../../utils/TextFilter';
import styles from './LastGeneratedList.styles.android';


const LastGeneratedList = ({ userProfile }) => (
  userProfile.map((data, i) =>
    <ListItem
      key={i}
      title={TextFilter(data.numbers, 'array')}
      rightTitle={TextFilter(data.type, 'string')}
      subtitle={TextFilter(data.inserted_at, 'time')}
      titleStyle={styles.title}
      rightTitleStyle={styles.rightTitle}
      subtitleStyle={styles.subtitle}
    />
  )
)

export default withTheme(LastGeneratedList);