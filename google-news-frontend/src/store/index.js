import { createStore, combineReducers } from 'redux';

// import news reducer
import NewsReducer from '../news/state';

/**
 * 여러개의 reducer들을 하나로 합쳐준다.
 */
const reducer = combineReducers({
  article: NewsReducer,
});

/**
 * store를 생성한다.
 */
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
export default store;
