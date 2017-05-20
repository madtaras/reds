import React, { Component } from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  borderTopWidth: 3;
  borderBottomWidth: 3;
  borderStyle: solid;
  borderColor: #212121;
`;

const FocusDashes = styled.View`
  height: 6;
  width: 3;
  backgroundColor: #212121;
  marginLeft: 33%;
`;

const WordWrapper = styled.View`
  marginLeft: 33%;
`;

const Word = styled.Text`
  fontSize: 36;
  marginLeft: -30;
  marginTop: 5;
  marginBottom: 5;
`;

export default class SpritzBox extends Component {
  render() {
    return (
      <Wrapper>
        <FocusDashes />
        <WordWrapper>
          <Word>hello</Word>
        </WordWrapper>
        <FocusDashes />
      </Wrapper>
    );
  }
}
