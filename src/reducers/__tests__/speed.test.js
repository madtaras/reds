import { Reducer } from 'redux-testkit';
import speed from '../speed';
import {
  increaseSpeed,
  decreaseSpeed,
} from '../../actions/';

describe('speed reducer', () => {
  it('should have initial state', () => {
    expect(speed()).toEqual(400);
  });

  it('should handle increaseSpeed action on initial state', () => {
    Reducer(speed).expect(increaseSpeed()).toReturnState(450);
  });

  it('should handle decreaseSpeed action on existing state', () => {
    Reducer(speed).expect(decreaseSpeed()).toReturnState(350);
  });

  it('shouldn\'t handle decreaseSpeed action when the speed is minimal', () => {
    Reducer(speed).withState(200).expect(decreaseSpeed()).toReturnState(200);
  });

  it('shouldn\'t handle increaseSpeed action when the speed is maximal', () => {
    Reducer(speed).withState(1200).expect(increaseSpeed()).toReturnState(1200);
  });
});
