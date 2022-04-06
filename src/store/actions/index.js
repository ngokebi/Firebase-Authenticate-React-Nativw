// import {ALL_ARTICLES} from '../../types';
import axios from 'axios';
const URL = `https://jsonplaceholder.typicode.com`;

// axios({
//     method: 'get',
//     url: `${URL}/posts`,
//   }).then((response) => {
//     console.log(response.data);
//   });

export function getArticles() {
  const request = axios.get(`${URL}/posts`).then(response => response.data);
  return {
    type: 'ALL_ARTICLES',
    payload: request,
  };
}

