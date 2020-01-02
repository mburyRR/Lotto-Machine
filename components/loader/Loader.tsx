import React from 'react';
import { View } from 'react-native';
import { withTheme } from 'react-native-elements';
import { Bars } from 'react-native-loader';
import styled from 'styled-components';

import { Theme } from '../../common/types';


const LoaderElement = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #000;
`;

const Animation = styled(Bars).attrs(
    ({theme}: Theme) => ({
    color: theme.color.primary,
    size: 19
    })
)``;


const Loader = () => (
    <LoaderElement>
        <Animation/>
    </LoaderElement>
);

export default withTheme(Loader);