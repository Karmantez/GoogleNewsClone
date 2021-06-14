import React, { useEffect } from 'react';
import News from './News';

import LazyLoading from './js/LazyLoading';

export default function NewsList({ articles }) {
  useEffect(() => {
    LazyLoading();
  }, [articles]);
  console.log(articles);

  return (
    <div>
      <h1>뉴스 리스트</h1>
      {articles.map(article => (
        <News key={article.id} article={article} />
      ))}
    </div>
  );
}
