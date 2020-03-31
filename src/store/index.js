import { createStore, combineReducers } from "redux";
import * as actionTypes from "../store/action/actionTypes";

const initialStateTodos = {
  todos: []
};
const initialStateNotes = {
  notes: []
};

const todoReducer = (state = initialStateTodos, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
      };
    case actionTypes.DELETE_TODO:
      //dengan splice
      // let todos = [...state.todos]
      // todos.splice(action.payload.index,1)

      // return {
      //     ...state,
      //     todos: todos
      // }

      // dengan filter

      let newTodos = state.todos.filter(
        (element, index) => index !== action.payload
      );

      return {
        ...state,
        todos: newTodos
      };

    case actionTypes.EDIT_TODO:
      let todos = [...state.todos];
      let index = action.payload.index;
      let todo = action.payload.todo;

      todos[index] = todo;

      return {
        ...state,
        todos: todos
      };

    default:
      return state;
  }
};

const noteReducer = (state = initialStateNotes, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };

    case actionTypes.DELETE_NOTE:
      let newNotes = state.notes.filter(
        (note, index) => index !== action.payload
      );
      return {
        ...state,
        notes: newNotes
      };

    case actionTypes.EDIT_NOTE:
      let notes = [...state.notes];
      let index = action.payload.index;
      let note = action.payload.note;

      notes[index] = note;
      return {
        ...state,
        notes: notes
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todoReducer: todoReducer,
  noteReducer: noteReducer
});

const store = createStore(rootReducer);

export default store;
