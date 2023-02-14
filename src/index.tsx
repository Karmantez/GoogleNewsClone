import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './store';

import App from './App';

import 'normalize.css';

const store = configureStore({
  reducer: rootReducer,
});
const element: HTMLElement | null = document.getElementById('root');

if (element) {
  const root = createRoot(element);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
}
