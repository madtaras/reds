import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import styled from 'styled-components/native';
import StatusBarBackground from './StatusBarBackground';

const headerBackgroundColor = '#f6f6f6';

const ViewWrapper = styled.View`
  background: ${headerBackgroundColor};
  borderBottomWidth: 1;
  borderColor: #d6d6d6;
  borderStyle: solid;
  height: 60;
  justifyContent: center;
  alignItems: center;
`;

const TextWrapper = styled.Text`
  fontSize: 26;
  marginTop: -10;
`;

export default class Header extends Component {
  render() {
    return (
      <View>
        <StatusBarBackground background={headerBackgroundColor} />
        <ViewWrapper>
          <TextWrapper>Reds</TextWrapper>
        </ViewWrapper>
      </View>
    );
  }
}
