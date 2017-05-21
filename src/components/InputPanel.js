import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { textChanged } from '../actions/';

const Panel = styled.View`
  height: 200;
`;

const TextInput = styled.TextInput`
  fontSize: 17;
  padding: 10;
`;

class InputPanel extends Component {
  render() {
    const {
      textChanged,
      rawText,
    } = this.props;
    return (
      <Panel>
        <TextInput
          multiline
          numberOfLines={4}
          onChangeText={text => textChanged(text)}
          text={rawText}
          placeholder={'Enter your text here'}
        />
      </Panel>
    );
  }
}

export default connect(
  state => ({
    rawText: state.rawText,
  }),
  { textChanged },
)(InputPanel);
