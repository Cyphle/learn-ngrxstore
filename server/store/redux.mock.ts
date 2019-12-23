import { MockAction } from './action-types.mock';
import { store } from './store.mock';
import { reducer } from './reducer.mock';

const select = (selector: Function): any => {
  return store.read(selector);
};

const dispatch = (action: MockAction): void => {
  store.write(reducer, action);
};

export const mockStore = (() => ({
  select,
  dispatch
}))();
