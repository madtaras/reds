import { Selector } from 'redux-testkit';
import { calculateProgress } from '../text';

describe('numbers selectors', () => {
  it('should return correct percentage between 0 and 100', () => {
    const state = {
      text: {
        past: ['some', 'text', 'here', 'word'],
        current: 'word',
        future: ['some', 'text', 'here'],
      },
    };
    const result = (5 / 8) * 100;
    Selector(calculateProgress).expect(state).toReturn(result);
  });

  it('should return 0 if there aren\'t any past elements', () => {
    const state = {
      text: {
        past: [],
        current: 'word',
        future: ['some', 'text', 'here'],
      },
    };
    const result = 0;
    Selector(calculateProgress).expect(state).toReturn(result);
  });

  it('should return 100 if there aren\'t any future elements', () => {
    const state = {
      text: {
        past: ['some', 'text', 'here'],
        current: 'word',
        future: [],
      },
    };
    const result = 100;
    Selector(calculateProgress).expect(state).toReturn(result);
  });
});
