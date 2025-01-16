import { localApi } from "../localApi/localApi";

const SET_TEXT = "UPDATE_NEW_TEXT";
const UPDATE_NEW_TEXT = "UPDATE_NEW_TEXT";

let initialState = {
  text: "Текст из initialState",
};

const testReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: action.text,
      };

    case UPDATE_NEW_TEXT:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};

export const setText = (text) => ({
  type: SET_TEXT,
  text,
});

export const updateNewTextd = (text) => ({
  type: UPDATE_NEW_TEXT,
  text,
});

export const getText = () => async (dispatch) => {
  //let response = await localApi.getAllText();
  //console.log(localApi.getAllText());
  dispatch(setText(localApi.getAllText()));
};

export const updateNewText = (text) => async (dispatch) => {
  //debugger;
  //localApi.updateAllText(text);
  let response = await localApi.updateAllText(text);

  return dispatch(setText(text));
};

export default testReducers;
