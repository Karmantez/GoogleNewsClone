import { createReducer } from '../../store/redux-helper';

const ADD = 'news/ADD';
const REMOVE = 'news/REMOVE';
const EDIT = 'news/EDIT';

export const addNews = article => ({ type: ADD, article });
export const removeNews = article => ({ type: REMOVE, article });
export const editNews = article => ({ type: EDIT, article });

const INITIAL_STATE = { articles: [] };

const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.articles.push(action.article),
  [REMOVE]: (state, action) =>
    (state.articles = state.articles.filter(article => article.id !== action.article.id)),
  [EDIT]: (state, action) => {
    const index = state.articles.findIndex(article => article.id === action.article.id);
    if (index >= 0) {
      state.articles[index] = action.article;
    }
  },
});

export default reducer;
