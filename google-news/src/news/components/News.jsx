import React from 'react';

import './css/News.css';

export default function News({ article }) {
  return (
    <div className="news">
      <div>
        <img
          className="news-image"
          src=""
          data-image-src={article.urlToImage}
          aria-hidden
          alt="article image"
        />
      </div>

      <div>
        <div className="news-title">{article.title}</div>
        <div className="news-content">{article.content}</div>
      </div>
    </div>
  );
}
