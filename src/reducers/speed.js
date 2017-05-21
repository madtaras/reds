import { createReducer } from 'redux-act';
import {
  increaseSpeed,
  decreaseSpeed,
} from '../actions/';

const speed = createReducer({
  [increaseSpeed]: state => (state < 1200 ? state + 50 : state),
  [decreaseSpeed]: state => (state > 200 ? state - 50 : state),
}, 400);

export default speed;
