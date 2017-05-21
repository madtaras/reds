import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

const Button = styled.View`
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
    const { speed } = this.props;
    return (
      <PanelWrapper>
        <WpmWrapper>
          <WpmText>
            {speed} wpm
          </WpmText>
        </WpmWrapper>
        <ButtonsWrapper>
          <Button>
            <ButtonIcon name="remove" />
          </Button>
          <Link to="/reading">
            <Button>
              <ButtonIcon name="play-arrow" />
            </Button>
          </Link>
          <Button>
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
)(ControlPanel);
