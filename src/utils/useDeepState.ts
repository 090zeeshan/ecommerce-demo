import {isEqual} from 'lodash';
import {useState} from 'react';

/**
 * This state hook does the deep comparison of new and old state
 * and updates the state only when the content of the new state object is different from that of old state.
 */
export function useDeepState<S>(initialState: S): [S, (newState: S) => void] {
  const [state, _setState] = useState(initialState);

  const setState = (newState: S) => {
    if (!isEqual(state, newState)) {
      _setState(newState);
    }
  };

  return [state, setState];
}
