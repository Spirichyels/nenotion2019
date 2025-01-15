import { localApi } from "../localApi/localApi";

const SET_TEXT = "UPDATE_NEW_TEXT";
const UPDATE_NEW_TEXT = "UPDATE_NEW_TEXT";

let initialState = {
  text: "Я текст меня можно вводить 2",
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

// export const updateNewText = (text) => ({
//   type: UPDATE_NEW_TEXT,
//   text,
// });

export const getText = () => async (dispatch) => {
  let response = await localApi.getAllText();

  dispatch(setText(response));
};

export const updateNewText = () => async (dispatch) => {
  let response = await localApi.updateAllText(dispatch);

  if (response == 0) dispatch(setText(dispatch));
};

export default testReducers;
