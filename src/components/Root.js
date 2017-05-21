import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  View,
} from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import StartScreen from './StartScreen';
import ReadingScreen from './ReadingScreen';
import { tick } from '../actions/';

// Set up store
import reducer from '../reducers/index';

const store = createStore(reducer);

// Set up interval for changing words on a screen
let interval = null;
let speed = 400;
store.subscribe(() => {
  if (store.getState().isReading && interval === null) {
    interval = setInterval(() => {
      store.dispatch(tick());
    }, 60000 / store.getState().speed);
  } else if (speed !== store.getState().speed && store.getState().isReading && interval !== null) {
    clearInterval(interval);
    speed = store.getState().speed;
    interval = setInterval(() => {
      store.dispatch(tick());
    }, 60000 / store.getState().speed);
  } else if (!store.getState().isReading && interval !== null) {
    clearInterval(interval);
    interval = null;
  }
});

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
