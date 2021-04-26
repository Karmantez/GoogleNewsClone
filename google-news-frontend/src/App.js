import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/components/Header';
import MainSection from './common/components/MainSection';

// redux store
import store from './store';

// import css
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <>
        <Header />
        <MainSection />
      </>
    </Provider>
  );
}

export default App;
