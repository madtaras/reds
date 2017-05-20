import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  View,
} from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import StartScreen from './StartScreen';
import ReadingScreen from './ReadingScreen';

// Set up store
import reducer from '../reducers/index';

const store = createStore(reducer);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <NativeRouter>
            <View>
              <Route exact path="/" component={StartScreen} />
              <Route path="/reading" component={ReadingScreen} />
            </View>
          </NativeRouter>
        </View>
      </Provider>
    );
  }
}
