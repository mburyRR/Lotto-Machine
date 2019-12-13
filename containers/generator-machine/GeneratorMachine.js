import React, { Component } from 'react';
import { Text } from 'react-native';
import { withTheme, Button, Card, ListItem } from 'react-native-elements';

import I18n from '../../i18n/i18n';
import TextFilter from '../../utils/TextFilter';
import styles from './GeneratorMachine.styles.android';

/**
 * TODO:
 *  1. make checkbox with game selection for number generation
 */

class GeneratorMachine extends Component {
  render() {
    const { games } = this.props;

    return (
      <Card
        containerStyle={styles.cardGenerator}
        title={I18n.t('GENERATOR.generationTitle')}
        titleStyle={styles.title}
      >
        <Text style={styles.desc}>
          {I18n.t('GENERATOR.generationDesc')}
        </Text>
        {games.map(item => 
          <ListItem
            key={item}
            title={TextFilter(item, 'string')}
            titleStyle={styles.listItem}
            containerStyle={styles.list}
          />
        )}
        <Button
          title={I18n.t('GENERATOR.generateButton')}
          buttonStyle={styles.button}
          textStyle={styles.buttonLabel}
        />
      </Card>
    );
  }
}

export default withTheme(GeneratorMachine);