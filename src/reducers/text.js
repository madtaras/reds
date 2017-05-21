import { createReducer } from 'redux-act';
import {
  textChanged,
  tick,
} from '../actions/';
import parser from '../helpers/parser/';

export const calculateProgress = (textState) => {
  if (!textState.past.length) return 0;
  if (!textState.future.length) return 100;

  return ((textState.past.length + 1) /
    (textState.future.length + textState.past.length + 1)) * 100;
};

const defaultState = {
  past: [],
  current: '',
  future: [],
};

const updateWord = (state) => {
  if (!state.future.length) return state;

  return {
    past: [...state.past, state.current],
    current: state.future[0],
    future: state.future.slice(1),
  };
};

const proccessRawText = (state, rawText) => {
  const parsedText = parser.advancedParser(rawText);

  return {
    past: [],
    current: parsedText[0],
    future: parsedText.slice(1),
  };
};

const text = createReducer({
  [textChanged]: proccessRawText,
  [tick]: updateWord,
}, defaultState);

export default text;
