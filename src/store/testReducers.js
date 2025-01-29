import { localApi } from "../localApi/localApi";

const SET_TEXT = "UPDATE_NEW_TEXT";
const UPDATE_NEW_TEXT = "UPDATE_NEW_TEXT";
const UPDATE_NEW_STROKA = "UPDATE_NEW_STROKA";
const ADD_STROKA = "ADD_STROKA";

let initialState = {
  text: "Текст из initialState",
  stroks: [
    { text: "1 строчка", color: "red" },
    { text: "2 строчка", color: "black" },
    { text: "3 строчка", color: "black" },
    { text: "4 строчка", color: "black" },
    { text: "5 строчка", color: "black" },
  ],
  newText: "newTExt",
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

    case ADD_STROKA:
      let newStroka = {
        id: state.posts.length + 1,
        text: action.newText,
      };
      return {
        ...state,
        stroks: [...state.stroks, newStroka],
      };
    case UPDATE_NEW_STROKA:
      return {
        ...state,
        newText: action.text,
      };
    default:
      return state;
  }
};

/////////////////////////////////
export const setText = (text) => ({
  type: SET_TEXT,
  text,
});

export const updateNewTextd = (text) => ({
  type: UPDATE_NEW_TEXT,
  text,
});
///////////////////////////////////////
export const addStroka = (text) => ({
  type: ADD_STROKA,
  text,
});

export const updateNewStroka = (text) => ({
  type: UPDATE_NEW_STROKA,
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
