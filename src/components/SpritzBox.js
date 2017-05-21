import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import parser from '../helpers/parser/';

const Wrapper = styled.View`
  borderTopWidth: 3;
  borderBottomWidth: 3;
  borderStyle: solid;
  borderColor: #212121;
  marginBottom: 60;
  marginTop: 60;
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
  marginLeft: ${props => props.marginLeft};
  marginTop: 5;
  marginBottom: 5;
`;

class SpritzBox extends PureComponent {
  highlight(word) {
    const pivotPoint = parser.calcPivotPoint(word);

    return (
      <Text>
        {word.slice(0, pivotPoint)}
        <Text style={{ color: 'red' }}>{word[pivotPoint]}</Text>
        {word.slice(pivotPoint + 1)}
      </Text>
    );
  }

  calcMarginLeft(word) {
    return parser.calcPivotPoint(word) * (-20);
  }

  render() {
    const { currentWord } = this.props;

    return (
      <Wrapper>
        <FocusDashes />
        <WordWrapper>
          <Word marginLeft={this.calcMarginLeft(currentWord.toString())}>
            {this.highlight(currentWord.toString())}
          </Word>
        </WordWrapper>
        <FocusDashes />
      </Wrapper>
    );
  }
}

export default connect(
  state => ({
    currentWord: state.text.current,
  }),
)(SpritzBox);
