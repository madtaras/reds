import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import {
  textChanged,
  textSelected,
} from '../actions/';

const Panel = styled.View`
  height: 167;
`;

const TextInput = styled.TextInput`
  fontSize: 17;
  padding: 10;
`;

class InputPanel extends Component {
  onSelectionChange(event, textSelected) {
    const selection = event.nativeEvent.selection;
    if (!this.text) return;
    const text = this.text.slice(selection.start, selection.end);
    if (!text) return;

    textSelected(text);
  }

  onTextChange(text, textChanged) {
    if (!text) return;

    this.text = text;
    textChanged(text);
  }

  render() {
    const {
      textChanged,
      textSelected,
      rawText,
    } = this.props;
    return (
      <Panel>
        <TextInput
          multiline
          numberOfLines={4}
          onChangeText={event => this.onTextChange(event, textChanged)}
          onSelectionChange={text => this.onSelectionChange(text, textSelected)}
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
  {
    textChanged,
    textSelected,
  },
)(InputPanel);
