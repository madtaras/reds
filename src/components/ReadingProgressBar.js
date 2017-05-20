import React, { Component } from 'react';
import styled from 'styled-components/native';

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

export default class ReadingProgressBar extends Component {
  render() {
    const { progress } = this.props;

    return (
      <ProgressWrapper>
        <Progress progress={progress} />
      </ProgressWrapper>
    );
  }
}
