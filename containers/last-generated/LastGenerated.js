import React from 'react';
import { withTheme, Card } from 'react-native-elements';
import styled from 'styled-components';

import I18n from '../../i18n/i18n';
import LastGeneratedList from '../../components/last-generated-list/LastGeneratedList';


const LastGeneratedCard = styled(Card).attrs({
  containerStyle: {
    marginTop: 20,
    marginBottom: 20
  },
  titleStyle: {
    color: theme.color.default,
    textTransform: 'uppercase'
  }
})``;


const LastGenerated = ({ userProfile }) =>
  <LastGeneratedCard
    title={I18n.t('GENERATOR.lastGeneratedTitle')}
  >
    <LastGeneratedList userProfile={userProfile}/>
  </LastGeneratedCard>
 
export default withTheme(LastGenerated);