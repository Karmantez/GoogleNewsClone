import produce from 'immer';

const createReducer = (initialState, handlerMap) => {
  return (state = initialState, action) => {
    return produce(state, draft => {
      const handler = handlerMap[action.type];

      if (handler) {
        handler(draft, action);
      }
    });
  };
};

const createSetValueAction = type => {
  return (key, value) => ({ type, key, value });
};

const setValueReducer = (state, action) => {
  state[action.key] = action.value;
};

export { createReducer, createSetValueAction, setValueReducer };
