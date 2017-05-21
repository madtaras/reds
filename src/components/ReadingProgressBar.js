import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { calculateProgress } from '../reducers/text';

const PROGRESS_HEIGHT = 5;

const ProgressWrapper = styled.View`
  height: ${PROGRESS_HEIGHT};
  flexDirection: row;
  justifyContent: flex-start;
`;

const Progress = styled.View`
  height: ${PROGRESS_HEIGHT};
  backgroundColor: #d6d6d6;
  width: ${props => `${props.progress}%`};
`;

class ReadingProgressBar extends Component {
  render() {
    const { progress } = this.props;

    return (
      <ProgressWrapper>
        <Progress progress={progress} />
      </ProgressWrapper>
    );
  }
}

export default connect(
  state => ({
    progress: calculateProgress(state),
  }),
)(ReadingProgressBar);
