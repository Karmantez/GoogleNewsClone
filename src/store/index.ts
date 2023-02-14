import { combineReducers } from 'redux';

import cardOption from './cardOption';

const rootReducer = combineReducers({ cardOption });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
