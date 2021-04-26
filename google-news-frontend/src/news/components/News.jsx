import React from 'react';

import './css/News.css';

export default function News({ article }) {
  return (
    <div className="news">
      <h2>{article.title}</h2>
      <div>{article.content}</div>
    </div>
  );
}
