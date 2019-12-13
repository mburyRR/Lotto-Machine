import React from 'react';
import { View, Text } from 'react-native';
import { withTheme } from 'react-native-elements';
import { Bars } from 'react-native-loader';

import styles from './Loader.styles.android';

const Loader = () => (
    <View style={styles.background}>
        <Bars
            size={19}
            color={theme.color.primary}
        />
    </View>
);

export default withTheme(Loader);