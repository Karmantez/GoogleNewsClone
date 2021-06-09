import React from 'react';
import News from './News';

export default function NewsList({ articles }) {
  console.log(articles);
  return (
    <div>
      <h1>헤드라인</h1>
      {articles.map(article => (
        <News key={article.id} article={article} />
      ))}
    </div>
  );
}
