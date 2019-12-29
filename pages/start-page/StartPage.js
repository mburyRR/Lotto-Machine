import React from 'react';
import { View, Text } from 'react-native';
import { withTheme, Button } from 'react-native-elements';
import styled from 'styled-components';

import I18n from '../../i18n/i18n';


const IntroPage = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background.primary};
`;

const IntroPageTitle = styled(Text)`
  width: 190px;
  font-weight: bold;
  text-align: center;
  font-size: 40px;
  font-family: 'San Francisco';
  margin-bottom: 60px;
  padding: 15px;
  border-width: 1px;
  border-color: #fff;
`;

const IntroPageButtonLabel = styled(Text)`
  margin-bottom: 10px;
  font-size: 18px;
`;

const IntroPageButton = styled(Button).attrs({
  buttonStyle: {
    width: 190,
    backgroundColor: theme.color.default
  }
})``;


const StartPage = ({ navigation }) => (
  <IntroPage>
    <IntroPageTitle>
      {I18n.t('START.title')}
    </IntroPageTitle>
    <IntroPageButtonLabel>
      {I18n.t('START.label')}
    </IntroPageButtonLabel>
    <IntroPageButton
      title={I18n.t('START.logIn')}
      onPress={() => navigation.navigate('Tabs')}
    />
  </IntroPage>
);

export default withTheme(StartPage);