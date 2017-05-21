import { createReducer } from 'redux-act';
import {
  start,
  pause,
} from '../actions/';

const isReading = createReducer({
  [start]: () => true,
  [pause]: () => false,
}, false);

export default isReading;
