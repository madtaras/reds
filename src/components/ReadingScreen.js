import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
} from 'react-native';
import Header from './Header';
import SpritzBox from './SpritzBox';
import ReadingProgressBar from './ReadingProgressBar';
import ReadingScreenControlPanel from './ReadingScreenControlPanel';
import DismissKeyboardView from './DismissKeyboardView';

class ReadingScreen extends Component {
  render() {
    return (
      <DismissKeyboardView>
        <View>
          <Header />
          <SpritzBox />
          <ReadingProgressBar progress={20} />
          <ReadingScreenControlPanel />
        </View>
      </DismissKeyboardView>
    );
  }
}

export default connect()(ReadingScreen);
