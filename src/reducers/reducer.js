import { fromJS } from 'immutable';

const initialState = fromJS({
  user: {},
  publicGists: {},
  error: false,
});

export function reducer(state = initialState, action) {

  switch (action.type) {

    default:
      return state;
  }
}
