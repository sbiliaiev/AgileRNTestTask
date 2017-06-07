import { Map, List, fromJS } from 'immutable';

import constant from '../constants/soConstants';

const initialState = Map({
  list: List([]),
  page: 1,
});

export default function (state = initialState, action) {
  switch (action.type) {
    case constant.GET_QUESTION_LIST:
      return state
        .set('page', state.get('page') + 1)
        .set('list', state.get('list').concat(action.list));
        // .set('list', fromJS(action.list));
    default:
      return state;
  }
}
