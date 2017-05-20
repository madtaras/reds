import React, { Component } from 'react';
import styled from 'styled-components/native';

const Panel = styled.View`
  height: 200;
`;

const TextInput = styled.TextInput`
  fontSize: 17;
  padding: 10;
`;

export default class InputPanel extends Component {
  render() {
    return (
      <Panel>
        <TextInput
          multiline
          numberOfLines={4}
          onChangeText={text => console.log(text)}
          placeholder={'Enter your text here'}
        />
      </Panel>
    );
  }
}
