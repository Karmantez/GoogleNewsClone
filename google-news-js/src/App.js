// components
import Search from './components/Search.js';
import News from './components/News.js';

// api
import { getNews, getDummyNews } from './api/index.js';

export default function App($app) {
  console.log('App rendering...', $app);

  this.state = {
    isLoading: false,
    keyword: '',
    news: [],
  };

  const search = new Search({
    $app,
    initialState: this.state,
    onSearch: async keyword => {
      console.log('onSearch: ', keyword);

      const { status, totalResult, articles } = await getDummyNews({ query: keyword });

      if (status) {
        this.state = {
          ...this.state,
          news: articles,
        };
        news.setState(this.state);
      } else {
        console.log('server error');
      }
    },
  });
  const news = new News({ $app, initialState: this.state });

  this.setState = async (query = undefined) => {
    const res = await getNews();
    // console.log(res);

    const { status, totalResult, articles } = await getDummyNews({ query });

    if (status) {
      this.state = {
        ...this.state,
        news: articles,
      };
      news.setState(this.state);
    } else {
      console.log('server error');
    }
  };
  this.setState();
}
