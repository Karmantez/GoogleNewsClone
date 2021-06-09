import axios from 'axios';
import setInterceptors from './interceptor';

const instance = setInterceptors(
  axios.create({
    baseURL: 'https://newsapi.org/v2',
  }),
);

const getSamsungNews = () => {
  return instance.get('/everything', {
    params: {
      q: 'samsung',
    },
  });
};

const test2 = () => {
  console.log(process.env.REACT_NEWS_API_KEY);
};

export { getSamsungNews, test2 };
