import api from '../api';

import constant from '../constants/soConstants';

const getQuestions = page => (dispatch) => {
  api.so.getQuestions(page)
    .then((res) => {
      console.log('response', res);
      dispatch({
        type: constant.GET_QUESTION_LIST,
        list: res.data.items,
      });
    })
    .catch((err) => {
      console.log('error', err);
    });
};

export default {
  getQuestions,
};
