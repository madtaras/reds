import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
} from 'react-native';
import {
  NativeRouter,
  Route,
  Redirect,
} from 'react-router-native';
import StartScreen from './StartScreen';
import ReadingScreen from './ReadingScreen';

class App extends Component {
  render() {
    const { isReading } = this.props;

    return (
      <View>
        <NativeRouter>
          <View>
            <Route
              exact path="/"
              render={() => (
                isReading ? (
                  <Redirect to="/reading" />
                ) : (
                  <StartScreen />
                )
              )}
            />
            <Route
              path="/reading"
              render={() => (
                isReading ? (
                  <ReadingScreen />
                ) : (
                  <Redirect to="/" />
                )
              )}
            />
          </View>
        </NativeRouter>
      </View>
    );
  }
}

export default connect(
  state => ({
    isReading: state.isReading,
  }),
)(App);
