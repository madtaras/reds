import React, { Component } from 'react';
import { connect } from 'react-redux';
import { textChanged } from '../actions/';
import styled from 'styled-components/native';

const Panel = styled.View`
  height: 200;
`;

const TextInput = styled.TextInput`
  fontSize: 17;
  padding: 10;
`;

class InputPanel extends Component {
  render() {
    const { textChanged } = this.props;
    return (
      <Panel>
        <TextInput
          multiline
          numberOfLines={4}
          onChangeText={text => textChanged(text)}
          placeholder={'Enter your text here'}
        />
      </Panel>
    );
  }
}

export default connect(
  null,
  { textChanged },
)(InputPanel);
