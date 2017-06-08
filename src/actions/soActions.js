import api from '../api';

import constant from '../constants/soConstants';

const getQuestions = page => ({
  types: [
    constant.START_LOADING_QUESTIONS,
    constant.SUCCESS_LOADING_QUESTIONS,
    constant.FAIL_LOADING_QUESTIONS,
  ],
  promise: api.so.getQuestions(page),
});

export default {
  getQuestions,
};
