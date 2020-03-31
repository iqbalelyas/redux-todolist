import * as actionTypes from "./actionTypes";

export const addNote = note => ({
  type: actionTypes.ADD_NOTE,
  payload: note
});

export const editNote = payload => ({
  type: actionTypes.EDIT_NOTE,
  payload: payload
});

export const deleteNote = index => ({
  type: actionTypes.DELETE_NOTE,
  payload: index
});
