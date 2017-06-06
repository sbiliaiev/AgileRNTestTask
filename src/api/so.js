import axios from 'axios';

const getQuestions = page =>
  axios.get(`https://api.stackexchange.com/2.2/questions?pagesize=10&order=desc&sort=activity&tagged=react-native&site=stackoverflow&page=${page}`);
export default {

};
