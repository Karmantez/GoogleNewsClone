import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { cloneDeep } from 'lodash';

type RectOffset = {
  top: number;
  left: number;
};

type CardOptionState = {
  showOption: boolean;
  showMenu: boolean;
  rectOffset: RectOffset;
};

const initialState: CardOptionState = {
  showOption: false,
  showMenu: false,
  rectOffset: { top: 0, left: 0 },
};

const CHANGE_OPTION_STATE = 'cardOption/CHANGE_OPTION_STATE';
const CHANGE_MENU_STATE = 'cardOption/CHANGE_MENU_STATE';
const UPDATE_RECT = 'cardOption/UPDATE_RECT';
const RESET = 'cardOption/RESET';

export const activateOption = createAction(
  CHANGE_OPTION_STATE,
  (nextState: boolean) => nextState,
)();
export const activateMenu = createAction(CHANGE_MENU_STATE, (nextState: boolean) => nextState)();
export const updateRectOffset = createAction(UPDATE_RECT, (nextState: RectOffset) => nextState)();
export const reset = createAction(RESET)();

const actions = { activateOption, activateMenu, updateRectOffset, reset };
type ActionTypes = ActionType<typeof actions>;

const cardOptionReducer = createReducer<CardOptionState, ActionTypes>(initialState, {
  [CHANGE_OPTION_STATE]: (state, { payload }) => ({
    ...state,
    showOption: payload,
  }),
  [CHANGE_MENU_STATE]: (state, { payload }) => ({
    ...state,
    showMenu: payload,
  }),
  [UPDATE_RECT]: (state, { payload }) => ({
    ...state,
    rectOffset: cloneDeep(payload),
  }),
  [RESET]: () => initialState,
});

export default cardOptionReducer;
