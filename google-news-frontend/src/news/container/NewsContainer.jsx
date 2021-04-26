import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getSamsungNews } from '../../api';
import getArticles from '../../api/dummy';
import store from '../../store';

import ArticleFilter from '../components/ArticleFilter';

import Category from '../components/Category';
import { addNews } from '../state';

import './css/NewsContainer.css';

export default function NewsContainer() {
  const articles = useSelector(state => state.article.articles);
  const dispatch = useDispatch();

  const onAdd = () => {
    const article = {
      id: Math.random(),
      source: {
        id: 'engadget',
        name: 'Engadget',
      },
      author: 'https://www.engadget.com/about/editors/valentina-palladino',
      title: "Samsung's new Galaxy Chromebook 2 is already $100 off",
      description: "Save $100 on Samsung's new Galaxy Chromebook 2 laptop at Samsung and Best Buy.",
      url: 'https://www.engadget.com/samsung-galaxy-chromebook-2-sale-best-buy-134037712.html',
      urlToImage:
        'https://s.yimg.com/os/creatr-uploaded-images/2021-04/ab871810-96d5-11eb-b5fe-41c2db4984ea',
      publishedAt: '2021-04-06T13:40:37Z',
      content:
        "Samsung's updated Galaxy Chromebook 2 came out just last month and it brought more practicality and affordability to what was previously a luxurious, expensive Chrome OS device. The laptop normally s… [+2068 chars]",
    };
    dispatch(addNews(article));
  };
  // useEffect(async () => {
  //   const result = await getArticles();
  //   console.log(result);
  // }, []);

  console.log('NewsContainer Rendering...');

  return (
    <div className="news-container">
      <button onClick={onAdd}>기사추가</button>
      <ArticleFilter />
      <Category articles={articles} />
    </div>
  );
}
