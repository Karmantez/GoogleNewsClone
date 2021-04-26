import React from 'react';
import SideMenu from './SideMenu';
import NewsContainer from '../../news/container/NewsContainer';

// import css
import './css/MainSection.css';

export default function MainSection() {
  return (
    <div className="main-container">
      <SideMenu />
      <NewsContainer />
    </div>
  );
}
