import React from 'react';
import { withTheme, Card } from 'react-native-elements';

import I18n from '../../i18n/i18n';
import LastGeneratedList from '../../components/last-generated-list/LastGeneratedList';
import styles from './LastGenerated.styles.android';


const LastGenerated = ({ userProfile }) =>
  <Card
    containerStyle={styles.cardHistorical}
    title={I18n.t('GENERATOR.lastGeneratedTitle')}
    titleStyle={styles.title}
  >
    <LastGeneratedList userProfile={userProfile}/>
  </Card>
 
export default withTheme(LastGenerated);