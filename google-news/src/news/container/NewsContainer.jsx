// react 관련
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components 관련
import ArticleFilter from '../components/ArticleFilter';
import NewsList from '../components/NewsList';

// redux state
import { initNews } from '../state';

// dummy data
import getArticles from '../../api/dummy';

// css
import './css/NewsContainer.css';

export default function NewsContainer() {
  const articles = useSelector(state => state.article.articles);
  const dispatch = useDispatch();

  useEffect(async () => {
    const result = await getArticles();

    result.articles.forEach((article, index) => {
      article.id = `article-${index}`;
    });
    dispatch(initNews(result.articles));
  }, []);

  console.log('NewsContainer Rendering...');

  return (
    <div className="news-container">
      <ArticleFilter />
      <NewsList articles={articles} />
    </div>
  );
}
