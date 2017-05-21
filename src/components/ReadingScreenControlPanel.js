import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  pause,
  increaseSpeed,
  decreaseSpeed,
} from '../actions/';

const PanelWrapper = styled.View`
  height: 120;
  backgroundColor: #f6f6f6;
`;

const WpmWrapper = styled.View`
  height: 50;
  alignItems: center;
  justifyContent: center;
`;

const WpmText = styled.Text`
  fontSize: 14;
`;

const ButtonsWrapper = styled.View`
  flexDirection: row;
  justifyContent: space-around;
  alignItems: center;
`;

const Button = styled.TouchableHighlight`
  height: 70;
  width: 70;
  alignItems: center;
  justifyContent: center;
`;

const ButtonIcon = styled(Icon)`
  height: 40;
  width: 40;
  fontSize: 30;
`;

class ControlPanel extends Component {
  render() {
    const {
      speed,
      pause,
      increaseSpeed,
      decreaseSpeed,
    } = this.props;
    return (
      <PanelWrapper>
        <WpmWrapper>
          <WpmText>
            {speed} wpm
          </WpmText>
        </WpmWrapper>
        <ButtonsWrapper>
          <Button onPress={decreaseSpeed} underlayColor={'transparent'}>
            <ButtonIcon name="remove" />
          </Button>
          <Button onPress={pause}>
            <ButtonIcon name="pause" />
          </Button>
          <Button onPress={increaseSpeed} underlayColor={'transparent'}>
            <ButtonIcon name="add" />
          </Button>
        </ButtonsWrapper>
      </PanelWrapper>
    );
  }
}

export default connect(
  state => ({
    speed: state.speed,
  }),
  {
    pause,
    decreaseSpeed,
    increaseSpeed,
  },
)(ControlPanel);
