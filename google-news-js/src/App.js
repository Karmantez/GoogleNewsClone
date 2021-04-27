// components
import Search from './components/Search.js';
import News from './components/News.js';

// api
import { getDummyNews } from './api/index.js';

export default function App($app) {
  console.log('App rendering...', $app);

  this.state = {
    isLoading: false,
    news: [],
  };

  const search = new Search({ $app, initialState: this.state });
  const news = new News({ $app, initialState: this.state });

  this.setState = async (query = undefined) => {
    const { status, totalResult, articles } = await getDummyNews(query);

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
