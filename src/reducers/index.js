import { combineReducers } from 'redux';

import isReading from './isReading';
import speed from './speed';
import text from './text';

const reducer = combineReducers({
  isReading,
  speed,
  text,
});
export default reducer;
