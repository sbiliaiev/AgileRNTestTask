import { Map, List, fromJS } from 'immutable';

import constant from '../constants/soConstants';

const initialState = Map({
  list: List([]),
  page: 1,
  status: '',
});

export default function (state = initialState, action) {
  switch (action.type) {
    case constant.START_LOADING_QUESTIONS:
      return state
        .set('status', 'loading');
    case constant.SUCCESS_LOADING_QUESTIONS:
      return state
        .set('status', 'success')
        .set('page', state.get('page') + 1)
        .set('list', state.get('list').concat(action.result.data.items));

    default:
      return state;
  }
}
