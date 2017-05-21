import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  View,
} from 'react-native';
import Header from './Header';
import InputPanel from './InputPanel';
import StartScreenControlPanel from './StartScreenControlPanel';
import DismissKeyboardView from './DismissKeyboardView';

class StartScreen extends PureComponent {
  render() {
    return (
      <DismissKeyboardView>
        <View>
          <Header />
          <InputPanel />
          <StartScreenControlPanel />
        </View>
      </DismissKeyboardView>
    );
  }
}

export default connect()(StartScreen);
